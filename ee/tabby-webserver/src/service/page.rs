use std::sync::Arc;

use async_trait::async_trait;
use juniper::ID;
use tabby_db::DbConn;
use tabby_schema::{
    auth::AuthenticationService,
    page::{Page, PageService},
    thread::ThreadService,
    AsID, AsRowid, CoreError, Result,
};

use super::{answer::AnswerService, graphql_pagination_to_filter};

struct PageServiceImpl {
    db: DbConn,
    auth: Arc<dyn AuthenticationService>,
    thread: Arc<dyn ThreadService>,
    answer: Option<Arc<AnswerService>>,
}

pub fn create(
    db: DbConn,
    auth: Arc<dyn AuthenticationService>,
    thread: Arc<dyn ThreadService>,
    answer: Option<Arc<AnswerService>>,
) -> impl PageService {
    PageServiceImpl {
        db,
        thread,
        auth,
        answer,
    }
}

#[async_trait]
impl PageService for PageServiceImpl {
    async fn convert_thread_to_page(&self, author_id: &ID, thread_id: &ID) -> Result<ID> {
        let _thread = self
            .thread
            .get(thread_id)
            .await?
            .ok_or_else(|| CoreError::NotFound("Thread not found"))?;
        let page_id = self.db.create_page(author_id.as_rowid()?).await?;

        let messages = self
            .thread
            .list_thread_messages(thread_id, None, None, None, None)
            .await?;

        for (i, qa) in messages.chunks(2).enumerate() {
            if let [question, answer] = qa {
                let question = question.content.clone();
                let answer = answer.content.clone();
                self.db
                    .create_page_section(page_id, i as i64, &question, &answer)
                    .await?;
            }
        }

        self.generate_page_title(&page_id.as_id()).await?;
        self.generate_page_summary(&page_id.as_id()).await?;

        Ok(page_id.as_id())
    }

    //TODO: generate page title and summary
    async fn generate_page_title(&self, id: &ID) -> Result<String> {
        self.db
            .update_page_title(id.as_rowid()?, "Title")
            .await?;
        Ok("Title".into())
    }
    async fn generate_page_summary(&self, id: &ID) -> Result<String> {
        self.db
            .update_page_summary(id.as_rowid()?, "Summary")
            .await?;
        Ok("Summary".into())
    }

    async fn delete(&self, id: &ID) -> Result<()> {
        self.db.delete_page(id.as_rowid()?).await?;
        Ok(())
    }

    async fn list(
        &self,
        ids: Option<&[ID]>,
        after: Option<String>,
        before: Option<String>,
        first: Option<usize>,
        last: Option<usize>,
    ) -> Result<Vec<Page>> {
        let (limit, skip_id, backwards) = graphql_pagination_to_filter(after, before, first, last)?;

        let ids = ids.map(|x| {
            x.iter()
                .filter_map(|x| x.as_rowid().ok())
                .collect::<Vec<_>>()
        });
        let pages = self
            .db
            .list_pages(ids.as_deref(), limit, skip_id, backwards)
            .await?;

        Ok(pages.into_iter().map(Into::into).collect())
    }
}
