"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3240],{75561:function(n,e,t){t.d(e,{B:function(){return i}});var r=t(18500);let s={"\n  query ListUserEvents(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n  ) {\n    userEvents(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      start: $start\n      end: $end\n      users: $users\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          kind\n          payload\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.UQ,"\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n":r.eI,"\n  mutation UpdateUserName($id: ID!, $name: String!) {\n    updateUserName(id: $id, name: $name)\n  }\n":r.DQ,"\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n":r.oZ,"\n  mutation updateEmailSetting($input: EmailSettingInput!) {\n    updateEmailSetting(input: $input)\n  }\n":r.gl,"\n  mutation deleteEmailSetting {\n    deleteEmailSetting\n  }\n":r.wZ,"\n  mutation SendTestEmail($to: String!) {\n    sendTestEmail(to: $to)\n  }\n":r.nI,"\n  query emailSetting {\n    emailSetting {\n      smtpUsername\n      smtpServer\n      fromAddress\n      encryption\n      authMethod\n      smtpPort\n    }\n  }\n":r.k6,"\n  mutation UpdateIntegration($input: UpdateIntegrationInput!) {\n    updateIntegration(input: $input)\n  }\n":r.fc,"\n  mutation DeleteIntegration($id: ID!, $kind: IntegrationKind!) {\n    deleteIntegration(id: $id, kind: $kind)\n  }\n":r.AU,"\n  mutation UpdateIntegratedRepositoryActive($id: ID!, $active: Boolean!) {\n    updateIntegratedRepositoryActive(id: $id, active: $active)\n  }\n":r.o7,"\n  mutation CreateIntegration($input: CreateIntegrationInput!) {\n    createIntegration(input: $input)\n  }\n":r.fY,"\n  mutation grantSourceIdReadAccess($sourceId: String!, $userGroupId: ID!) {\n    grantSourceIdReadAccess(sourceId: $sourceId, userGroupId: $userGroupId)\n  }\n":r.Yr,"\n  mutation revokeSourceIdReadAccess($sourceId: String!, $userGroupId: ID!) {\n    revokeSourceIdReadAccess(sourceId: $sourceId, userGroupId: $userGroupId)\n  }\n":r.z,"\n  mutation CreateCustomDocument($input: CreateCustomDocumentInput!) {\n    createCustomDocument(input: $input)\n  }\n":r.Gf,"\n  query CustomWebDocuments(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    customWebDocuments(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          url\n          name\n          id\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.wx,"\n  mutation DeleteCustomDocument($id: ID!) {\n    deleteCustomDocument(id: $id)\n  }\n":r.c3,"\n  query PresetWebDocuments(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $isActive: Boolean\n  ) {\n    presetWebDocuments(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      isActive: $isActive\n    ) {\n      edges {\n        node {\n          id\n          name\n          isActive\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.z1,"\n  mutation SetPresetDocumentActive($input: SetPresetDocumentActiveInput!) {\n    setPresetDocumentActive(input: $input)\n  }\n":r.h_,"\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n":r.TS,"\n  mutation createGitRepository($name: String!, $gitUrl: String!) {\n    createGitRepository(name: $name, gitUrl: $gitUrl)\n  }\n":r.ad,"\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n":r.uk,"\n  mutation updateOauthCredential($input: UpdateOAuthCredentialInput!) {\n    updateOauthCredential(input: $input)\n  }\n":r.m,"\n  mutation deleteOauthCredential($provider: OAuthProvider!) {\n    deleteOauthCredential(provider: $provider)\n  }\n":r.ZH,"\n  query OAuthCallbackUrl($provider: OAuthProvider!) {\n    oauthCallbackUrl(provider: $provider)\n  }\n":r.L$,"\n  query OAuthCredential($provider: OAuthProvider!) {\n    oauthCredential(provider: $provider) {\n      provider\n      clientId\n      createdAt\n      updatedAt\n    }\n  }\n":r.Fd,"\n  mutation updateNetworkSettingMutation($input: NetworkSettingInput!) {\n    updateNetworkSetting(input: $input)\n  }\n":r.rN,"\n  mutation updateSecuritySetting($input: SecuritySettingInput!) {\n    updateSecuritySetting(input: $input)\n  }\n":r.Nl,"\n  query SecuritySetting {\n    securitySetting {\n      allowedRegisterDomainList\n      disableClientSideTelemetry\n    }\n  }\n":r.rU,"\n  mutation UploadLicense($license: String!) {\n    uploadLicense(license: $license)\n  }\n":r.Yo,"\n  mutation ResetLicense {\n    resetLicense\n  }\n":r.d0,"\n  mutation CreateInvitation($email: String!) {\n    createInvitation(email: $email)\n  }\n":r.ib,"\n  mutation DeleteInvitation($id: ID!) {\n    deleteInvitation(id: $id)\n  }\n":r.YM,"\n  mutation updateUserRole($id: ID!, $isAdmin: Boolean!) {\n    updateUserRole(id: $id, isAdmin: $isAdmin)\n  }\n":r.XF,"\n  mutation UpdateUserActive($id: ID!, $active: Boolean!) {\n    updateUserActive(id: $id, active: $active)\n  }\n":r.dv,"\n  mutation generateResetPasswordUrl($userId: ID!) {\n    generateResetPasswordUrl(userId: $userId)\n  }\n":r.nh,"\n  mutation createUserGroup($input: CreateUserGroupInput!) {\n    createUserGroup(input: $input)\n  }\n":r.e8,"\n  mutation DeleteUserGroupMembership($userGroupId: ID!, $userId: ID!) {\n    deleteUserGroupMembership(userGroupId: $userGroupId, userId: $userId)\n  }\n":r.zD,"\n  mutation UpsertUserGroupMembership($input: UpsertUserGroupMembershipInput!) {\n    upsertUserGroupMembership(input: $input)\n  }\n":r.uI,"\n  mutation DeleteUserGroup($id: ID!) {\n    deleteUserGroup(id: $id)\n  }\n":r.hQ,"\n  query GetRegistrationToken {\n    registrationToken\n  }\n":r.bh,"\n  mutation ResetRegistrationToken {\n    resetRegistrationToken\n  }\n":r.wW,"\n  query GetDiskUsageStats {\n    diskUsageStats {\n      events {\n        filepath\n        sizeKb\n      }\n      indexedRepositories {\n        filepath\n        sizeKb\n      }\n      database {\n        filepath\n        sizeKb\n      }\n      models {\n        filepath\n        sizeKb\n      }\n    }\n  }\n":r.xX,"\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n":r.qq,"\n  mutation passwordReset($input: PasswordResetInput!) {\n    passwordReset(input: $input)\n  }\n":r.vK,"\n  mutation requestPasswordResetEmail($input: RequestPasswordResetEmailInput!) {\n    requestPasswordResetEmail(input: $input)\n  }\n":r.i8,"\n  mutation requestInvitationEmail($input: RequestInvitationInput!) {\n    requestInvitationEmail(input: $input) {\n      email\n      code\n    }\n  }\n":r.S_,"\n  mutation tokenAuth($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.UO,"\n  mutation register(\n    $name: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      name: $name\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.YR,"\n  query RepositoryGrep($id: ID!, $kind: RepositoryKind!, $query: String!) {\n    repositoryGrep(kind: $kind, id: $id, query: $query) {\n      files {\n        path\n        lines {\n          line {\n            text\n            base64\n          }\n          byteOffset\n          lineNumber\n          subMatches {\n            bytesStart\n            bytesEnd\n          }\n        }\n      }\n      elapsedMs\n    }\n  }\n":r.lq,"\n  query ListThreadMessages(\n    $threadId: ID!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threadMessages(\n      threadId: $threadId\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          threadId\n          role\n          content\n          attachment {\n            code {\n              gitUrl\n              filepath\n              language\n              content\n              startLine\n            }\n            clientCode {\n              filepath\n              content\n              startLine\n            }\n            doc {\n              title\n              link\n              content\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.f7,"\n  mutation SetThreadPersisted($threadId: ID!) {\n    setThreadPersisted(threadId: $threadId)\n  }\n":r.qu,"\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n":r.eZ,"\n  query MeQuery {\n    me {\n      id\n      authToken\n      email\n      isAdmin\n      isOwner\n      isPasswordSet\n      name\n    }\n  }\n":r.fk,"\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n":r.m2,"\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n":r.a,"\n  subscription CreateThreadAndRun($input: CreateThreadAndRunInput!) {\n    createThreadAndRun(input: $input) {\n      __typename\n      ... on ThreadCreated {\n        id\n      }\n      ... on ThreadUserMessageCreated {\n        id\n      }\n      ... on ThreadAssistantMessageCreated {\n        id\n      }\n      ... on ThreadRelevantQuestions {\n        questions\n      }\n      ... on ThreadAssistantMessageAttachmentsCode {\n        hits {\n          code {\n            gitUrl\n            filepath\n            language\n            content\n            startLine\n          }\n          scores {\n            rrf\n            bm25\n            embedding\n          }\n        }\n      }\n      ... on ThreadAssistantMessageAttachmentsDoc {\n        hits {\n          doc {\n            title\n            link\n            content\n          }\n          score\n        }\n      }\n      ... on ThreadAssistantMessageContentDelta {\n        delta\n      }\n      ... on ThreadAssistantMessageCompleted {\n        id\n      }\n    }\n  }\n":r.VL,"\n  subscription CreateThreadRun($input: CreateThreadRunInput!) {\n    createThreadRun(input: $input) {\n      __typename\n      ... on ThreadCreated {\n        id\n      }\n      ... on ThreadUserMessageCreated {\n        id\n      }\n      ... on ThreadAssistantMessageCreated {\n        id\n      }\n      ... on ThreadRelevantQuestions {\n        questions\n      }\n      ... on ThreadAssistantMessageAttachmentsCode {\n        hits {\n          code {\n            gitUrl\n            filepath\n            language\n            content\n            startLine\n          }\n          scores {\n            rrf\n            bm25\n            embedding\n          }\n        }\n      }\n      ... on ThreadAssistantMessageAttachmentsDoc {\n        hits {\n          doc {\n            title\n            link\n            content\n          }\n          score\n        }\n      }\n      ... on ThreadAssistantMessageContentDelta {\n        delta\n      }\n      ... on ThreadAssistantMessageCompleted {\n        id\n      }\n    }\n  }\n":r.uM,"\n  mutation DeleteThreadMessagePair(\n    $threadId: ID!\n    $userMessageId: ID!\n    $assistantMessageId: ID!\n  ) {\n    deleteThreadMessagePair(\n      threadId: $threadId\n      userMessageId: $userMessageId\n      assistantMessageId: $assistantMessageId\n    )\n  }\n":r.ou,"\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n":r.FR,"\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n":r.Il,"\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.Xx,"\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.Mi,"\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.$S,"\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n":r.np,"\n  query ListJobs {\n    jobs\n  }\n":r.Ax,"\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.by,"\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n":r.Wd,"\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n":r.Sm,"\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.KZ,"\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":r.qt,"\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n":r.HC,"\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n":r.BH,"\n  query ContextInfo {\n    contextInfo {\n      sources {\n        sourceKind\n        sourceId\n        sourceName\n      }\n    }\n  }\n":r.w4,"\n  query UserGroups {\n    userGroups {\n      id\n      name\n      createdAt\n      updatedAt\n      members {\n        user {\n          id\n          email\n          name\n          createdAt\n        }\n        isGroupAdmin\n        createdAt\n        updatedAt\n      }\n    }\n  }\n":r.hx,"\n  query sourceIdAccessPolicies($sourceId: String!) {\n    sourceIdAccessPolicies(sourceId: $sourceId) {\n      sourceId\n      read {\n        id\n        name\n      }\n    }\n  }\n":r.NL};function i(n){var e;return null!==(e=s[n])&&void 0!==e?e:{}}},43240:function(n,e,t){t.d(e,{BX:function(){return r.B}});var r=t(75561)}}]);