"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7517],{72657:function(e,n,t){t.d(n,{K:function(){return o}});var l=t(36164);t(3546);var s=t(12624),r=t(74248),a=t(31458),i=t(81565);function o(e){let{className:n,container:t,offset:o,...d}=e,c=(0,s.e)(o||0,t);return(0,l.jsxs)(a.z,{variant:"outline",size:"icon",className:(0,r.cn)("absolute right-4 top-1 z-10 bg-background transition-opacity duration-300 sm:right-8 md:top-2",c?"opacity-0":"opacity-100",n),onClick:()=>{t?t.scrollTo({top:t.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},...d,children:[(0,l.jsx)(i.IconArrowDown,{}),(0,l.jsx)("span",{className:"sr-only",children:"Scroll to bottom"})]})}},36613:function(e,n,t){t.d(n,{e:function(){return U},p:function(){return W}});var l=t(36164),s=t(3546),r=t(78613),a=t(24449),i=t(16784),o=t(63484),d=t(74248),c=t(15696),u=t(90379),m=t(63795),v=t(31458),x=t(81565),f=t(72657),h=t(45391),p=t(34021),g=t(21454),j=t(3765),b=t(84942),N=t(29),y=t(24685),w=t(74630),C=t(16234),k=t(23455),E=t(82394);let S=s.createContext({}),I=b.xp,R=s.forwardRef((e,n)=>(0,l.jsx)(b.tW,{...e,ref:n}));R.displayName="SearchableSelectAnchor";let _=s.forwardRef((e,n)=>{let{getInputProps:t}=s.useContext(S),{onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,...c}=e;return(0,l.jsx)(k.Z,{...t((0,C.Z)({onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,ref:n},w.Z)),...c})});_.displayName="SearchableSelectTextarea";let z=s.forwardRef((e,n)=>{let{getInputProps:t}=s.useContext(S),{onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,...c}=e;return(0,l.jsx)(E.I,{...t((0,C.Z)({onKeyDown:r,onChange:a,onInput:i,onBlur:o,onClick:d,ref:n},w.Z)),...c})});z.displayName="SearchableSelectInput";let Z=s.forwardRef((e,n)=>{let{children:t,style:r,popupMatchAnchorWidth:a,...i}=e,{getMenuProps:o,anchorRef:d}=s.useContext(S),c=s.useRef(void 0);return s.useLayoutEffect(()=>{if(a){let e=d.current;if(e){let n=e.getBoundingClientRect();c.current=n.width}}},[]),(0,l.jsx)(b.i9,{children:(0,l.jsx)(b.yk,{align:"start",onOpenAutoFocus:e=>e.preventDefault(),style:{width:c.current,...r},...o({ref:n},{suppressRefError:!0}),...i,children:t})})});Z.displayName="SearchableSelectContent";let L=s.forwardRef((e,n)=>{let{item:t,index:r,className:a,children:i,disabled:o,...c}=e,{highlightedIndex:u,selectedItem:m,getItemProps:v}=s.useContext(S),x=u===r,f=m===t;return(0,l.jsx)(I,{asChild:!0,children:(0,l.jsx)("div",{className:(0,d.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",x&&"bg-accent text-accent-foreground",f&&"font-bold",o&&"pointer-events-none opacity-50",a),...v({item:t,index:r,onMouseLeave:e=>e.preventDefault(),onMouseOut:e=>e.preventDefault()}),...c,children:"function"==typeof i?i({highlighted:x,selected:f}):i})},t.id)});function M(e){let{options:n,onSelect:t,children:r,open:a,onOpenChange:i,stayOpenOnInputClick:o}=e,d=s.useRef(null),c=s.useCallback((e,n)=>{let{type:t,changes:l}=n;switch(t){case y.Kb.stateChangeTypes.MenuMouseLeave:return{...l,highlightedIndex:e.highlightedIndex};case y.Kb.stateChangeTypes.InputClick:let s=!!o||l.isOpen;return{...l,isOpen:s};default:return l}},[o]),u=(0,y.Kb)({items:null!=n?n:[],defaultIsOpen:a,onSelectedItemChange(e){let{selectedItem:n}=e;n&&(null==t||t(n),null==i||i(!1))},onIsOpenChange:e=>{let{isOpen:n}=e;null==i||i(!!n)},stateReducer:c}),{setHighlightedIndex:m,highlightedIndex:v}=u,x=(0,w.Z)(a)?u.isOpen:u.isOpen&&a;s.useEffect(()=>{x&&(null==n?void 0:n.length)&&-1===v&&m(0)},[x,n]);let f=s.useMemo(()=>({...u,open:x,anchorRef:d}),[u,x,d]);return(0,l.jsx)(S.Provider,{value:f,children:(0,l.jsx)(b.J2,{open:x,children:"function"==typeof r?r(f):r})})}L.displayName="SearchableSelectOption";let F=s.forwardRef(function(e,n){let{onSubmit:t,input:r,setInput:a,isLoading:i}=e,{formRef:o,onKeyDown:c}=function(){let e=(0,s.useRef)(null);return{formRef:e,onKeyDown:n=>{if("Enter"===n.key&&!n.shiftKey&&!n.nativeEvent.isComposing){var t;null===(t=e.current)||void 0===t||t.requestSubmit(),n.preventDefault()}}}}(),[u,m]=s.useState(null),[f,y]=s.useState(!1),w=s.useRef(null),C=s.useRef(),k=s.useRef(),[E,S]=s.useState([]),[I,z]=s.useState({}),{data:F}=(0,g.ZP)(u,j.Z,{revalidateOnFocus:!1,dedupingInterval:0,errorRetryCount:0});s.useEffect(()=>{var e;let n=null!==(e=null==F?void 0:F.hits)&&void 0!==e?e:[];S(n),y(!!(null==n?void 0:n.length))},[null==F?void 0:F.hits]),s.useImperativeHandle(n,()=>({focus:()=>{var e;null===(e=w.current)||void 0===e||e.focus()}})),s.useEffect(()=>{r&&w.current&&w.current!==document.activeElement&&w.current.focus()},[r]),s.useLayoutEffect(()=>{var e,n,t;(null===(e=k.current)||void 0===e?void 0:e.length)&&(null===(t=w.current)||void 0===t||null===(n=t.setSelectionRange)||void 0===n||n.call(t,k.current[0],k.current[1]),k.current=void 0)}),s.useMemo(()=>(0,h.Z)(e=>{var n,t,l,s;let r=null!==(l=null===(n=e.target)||void 0===n?void 0:n.value)&&void 0!==l?l:"",a=null!==(s=null===(t=e.target)||void 0===t?void 0:t.selectionEnd)&&void 0!==s?s:0,i=D(r,a),o=null==i?void 0:i[1];if(o){let e=encodeURIComponent("name:".concat(o," AND kind:function")),n="/v1beta/search?q=".concat(e);m(n)}else S([]),y(!1)},200),[]);let T=async e=>{if(e.preventDefault(),!(null==r?void 0:r.trim())||i)return;let n=r;Object.keys(I).forEach(e=>{var t,l,s;let r=I[e];(null==r?void 0:r.doc)&&(n=n.replaceAll(e,"\n```".concat(null!==(l=null===(t=r.doc)||void 0===t?void 0:t.language)&&void 0!==l?l:"","\n").concat(null!==(s=r.doc.body)&&void 0!==s?s:"","\n","```","\n")))}),a(""),await t(n)},A=(e,n)=>{"Enter"===e.key&&n?e.preventDefault():n&&["ArrowRight","ArrowLeft","Home","End"].includes(e.key)?(S([]),y(!1)):(n||(e.preventDownshiftDefault=!0),c(e))};return(0,l.jsx)("form",{onSubmit:T,ref:o,children:(0,l.jsx)(M,{options:E,onSelect:e=>{var n,t,l;let s=null!==(n=C.current)&&void 0!==n?n:0,i=D(r,s);if(i){z({...I,["@".concat(null===(t=e.doc)||void 0===t?void 0:t.name)]:e});let n="@".concat(null==e?void 0:null===(l=e.doc)||void 0===l?void 0:l.name," "),o=r.substring(0,s).replace(new RegExp(i[0]),""),d=o.length+n.length;k.current=[d,d],a(o+n+r.slice(s))}S([]),y(!1)},open:f,onOpenChange:e=>{e&&(null==E?void 0:E.length)?y(e):(y(!1),S([]))},children:e=>{var n,t,s,o;let{open:c,highlightedIndex:u}=e,m=null==E?void 0:E[u];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(R,{children:(0,l.jsxs)("div",{className:"relative flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:border sm:px-12",children:[(0,l.jsx)("span",{className:(0,d.cn)((0,v.d)({size:"sm",variant:"ghost"}),"absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 hover:bg-background sm:left-4"),children:(0,l.jsx)(x.IconEdit,{})}),(0,l.jsx)(_,{tabIndex:0,rows:1,placeholder:"Ask a question.",spellCheck:!1,className:"min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none",value:r,ref:w,onChange:e=>{(0,p.Z)(e,"target.value")?(C.current=e.target.selectionEnd,a(e.target.value)):C.current=void 0},onKeyDown:e=>A(e,c)}),(0,l.jsx)("div",{className:"absolute right-0 top-4 sm:right-4",children:(0,l.jsxs)(N.u,{children:[(0,l.jsx)(N.aJ,{asChild:!0,children:(0,l.jsxs)(v.z,{type:"submit",size:"icon",disabled:i||""===r,children:[(0,l.jsx)(x.IconArrowElbow,{}),(0,l.jsx)("span",{className:"sr-only",children:"Send message"})]})}),(0,l.jsx)(N._v,{children:"Send message"})]})})]})}),(0,l.jsx)(Z,{align:"start",side:"top",onOpenAutoFocus:e=>e.preventDefault(),className:"w-[60vw] md:w-[430px]",children:(0,l.jsxs)(b.J2,{open:c&&!!m,children:[(0,l.jsx)(b.tW,{asChild:!0,children:(0,l.jsx)("div",{className:"max-h-[300px] overflow-y-scroll",children:c&&!!(null==E?void 0:E.length)&&E.map((e,n)=>{var t,s,r;return(0,l.jsx)(L,{item:e,index:n,children:(0,l.jsxs)("div",{className:"flex w-full items-center justify-between gap-8 overflow-x-hidden",children:[(0,l.jsxs)("div",{className:"flex items-center gap-1",children:[(0,l.jsx)(O,{kind:null==e?void 0:null===(t=e.doc)||void 0===t?void 0:t.kind}),(0,l.jsxs)("div",{className:"max-w-[200px] truncate",children:[null==e?void 0:null===(s=e.doc)||void 0===s?void 0:s.name,"(...)"]})]}),(0,l.jsx)("div",{className:"flex-1 truncate text-right text-sm text-muted-foreground",children:null==e?void 0:null===(r=e.doc)||void 0===r?void 0:r.body})]})},null==e?void 0:e.id)})})}),(0,l.jsx)(b.yk,{asChild:!0,align:"start",side:"right",alignOffset:-4,onOpenAutoFocus:e=>e.preventDefault(),onKeyDownCapture:e=>e.preventDefault(),className:"rounded-none",collisionPadding:{bottom:120},children:(0,l.jsxs)("div",{className:"flex max-h-[70vh] w-[20vw] flex-col overflow-y-auto px-2 md:w-[240px] lg:w-[340px]",children:[(0,l.jsxs)("div",{className:"mb-2",children:[(null==m?void 0:null===(n=m.doc)||void 0===n?void 0:n.kind)?"(".concat(null==m?void 0:null===(t=m.doc)||void 0===t?void 0:t.kind,") "):"",null==m?void 0:null===(s=m.doc)||void 0===s?void 0:s.name]}),(0,l.jsx)("div",{className:"flex-1 whitespace-pre-wrap break-all text-muted-foreground",children:null==m?void 0:null===(o=m.doc)||void 0===o?void 0:o.body})]})})]})})]})}})})});function D(e,n){let t=e.substring(0,n),l=/@(\w+)$/.exec(t);return l}function O(e){let{kind:n,...t}=e;return(0,l.jsx)(x.IconSymbolFunction,{...t})}function T(e){let{href:n,children:t}=e;return(0,l.jsxs)("a",{href:n,target:"_blank",className:"inline-flex flex-1 justify-center gap-1 leading-4 hover:underline",children:[(0,l.jsx)("span",{children:t}),(0,l.jsx)("svg",{"aria-hidden":"true",height:"7",viewBox:"0 0 6 6",width:"7",className:"opacity-70",children:(0,l.jsx)("path",{d:"M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z",fill:"currentColor"})})]})}function A(e){let{className:n,...t}=e;return(0,l.jsxs)("p",{className:(0,d.cn)("px-2 text-center text-xs leading-normal text-muted-foreground",n),...t,children:[(0,l.jsx)(T,{href:"https://tabby.tabbyml.com",children:"Tabby"}),", an opensource, self-hosted AI coding assistant ."]})}let H=s.forwardRef(function(e,n){let{stop:t,reload:r,input:a,setInput:i,className:o,onSubmit:d,chatMaxWidthClass:c}=e,u=s.useRef(null),{container:h,onClearMessages:p,qaPairs:g,isLoading:j,relevantContext:b,removeRelevantContext:N}=s.useContext(W);return s.useImperativeHandle(n,()=>({focus:()=>{var e;null===(e=u.current)||void 0===e||e.focus()}}),[]),(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)(f.K,{container:h}),(0,l.jsxs)("div",{className:"mx-auto md:px-4 ".concat(c),children:[(0,l.jsxs)("div",{className:"flex h-10 items-center justify-center gap-2",children:[j?(0,l.jsxs)(v.z,{variant:"outline",onClick:()=>t(),className:"bg-background",children:[(0,l.jsx)(x.IconStop,{className:"mr-2"}),"Stop generating"]}):(null==g?void 0:g.length)>0&&(0,l.jsxs)(v.z,{variant:"outline",onClick:()=>r(),className:"bg-background",children:[(0,l.jsx)(x.IconRefresh,{className:"mr-2"}),"Regenerate response"]}),(null==g?void 0:g.length)>0&&(0,l.jsxs)(v.z,{variant:"outline",onClick:p,className:"bg-background lg:hidden",children:[(0,l.jsx)(x.IconTrash,{className:"mr-2"}),"Clear"]})]}),(0,l.jsxs)("div",{className:"border-t bg-background px-4 py-2 shadow-lg sm:space-y-4 sm:rounded-t-xl sm:border md:py-4",children:[b.length>0&&(0,l.jsx)("div",{className:"flex flex-wrap gap-2",children:b.map((e,n)=>{let[t]=e.filepath.split("/").slice(-1),s=e.range.start===e.range.end?"".concat(e.range.start):"".concat(e.range.start,"-").concat(e.range.end);return(0,l.jsxs)(m.C,{variant:"outline",className:"inline-flex items-center gap-0.5 rounded text-sm font-semibold",children:[(0,l.jsx)("span",{className:"text-foreground",children:"".concat(t,": ").concat(s)}),(0,l.jsx)(x.IconRemove,{className:"cursor-pointer text-muted-foreground transition-all hover:text-red-300",onClick:N.bind(null,n)})]},e.filepath+n)})}),(0,l.jsx)(F,{ref:u,onSubmit:d,input:a,setInput:i,isLoading:j}),(0,l.jsx)(A,{className:"hidden sm:block"})]})]})]})});var q=t(76297),P=t(12624);function J(e){let{trackVisibility:n}=e,{container:t}=s.useContext(W),r=(0,P.e)(100,t),{ref:a,entry:i,inView:o}=(0,q.YD)({trackVisibility:n,delay:100,rootMargin:"0px 0px -150px 0px",root:t});return s.useEffect(()=>{r&&n&&!o&&(null==i||i.target.scrollIntoView({block:"start"}))},[o,i,r,n]),(0,l.jsx)("div",{ref:a,className:"h-px w-full"})}let Y=[{heading:"Convert list of string to numbers",message:"How to convert a list of string to numbers in python"},{heading:"How to parse email address",message:"How to parse email address with regex"}];function K(e){let{setInput:n,chatMaxWidthClass:t,welcomeMessage:s}=e;return(0,l.jsx)("div",{className:"mx-auto px-4 ".concat(t),children:(0,l.jsxs)("div",{className:"rounded-lg border bg-background p-8",children:[(0,l.jsx)("h1",{className:"mb-2 text-lg font-semibold",children:s||"Welcome"}),(0,l.jsx)("p",{className:"leading-normal text-muted-foreground",children:"You can start a conversation here or try the following examples:"}),(0,l.jsx)("div",{className:"mt-4 flex flex-col items-start space-y-2",children:Y.map((e,t)=>(0,l.jsxs)(v.z,{variant:"link",className:"h-auto p-0 text-base",onClick:()=>n(e.message),children:[(0,l.jsx)(x.IconArrowRight,{className:"mr-2 text-muted-foreground"}),(0,l.jsx)("p",{className:"text-left",children:e.heading})]},t))})]})})}var V=t(80054);let W=s.createContext({}),U=s.forwardRef(function(e,n){let{className:t,chatId:m,initialMessages:v,headers:x,api:f="/v1beta/answer",onLoaded:h,onThreadUpdates:p,onNavigateToContext:g,container:j,fetcher:b,docQuery:N,generateRelevantQuestions:y,collectRelevantCodeUsingUserMessage:w,maxWidth:C,welcomeMessage:k,promptFormClassname:E,onCopyContent:S,client:I,onSubmitMessage:R,onApplyInEditor:_}=e,[z,Z]=s.useState(!1),L=s.useRef(!1),[M,F]=s.useState(null!=v?v:[]),[D,O]=s.useState(""),[T,A]=s.useState([]),q=s.useRef(null),{triggerRequest:P,isLoading:Y,error:U,answer:B,stop:$}=function(e){let{api:n="/v1beta/answer",onError:t,headers:l,fetcher:r}=e,[a,i]=s.useState(!1),[o,d]=s.useState(),[u,m]=s.useState(),v=s.useRef(null),x=e=>{if("event"===e.type&&"data"in e){let n=JSON.parse(e.data);n&&d(e=>f(e,n))}},f=(e,n)=>{var t,l;return e?{...e,answer_delta:"".concat(null!==(t=null==e?void 0:e.answer_delta)&&void 0!==t?t:"").concat(null!==(l=null==n?void 0:n.answer_delta)&&void 0!==l?l:""),relevant_documents:(null==n?void 0:n.relevant_documents)||e.relevant_documents,relevant_questions:(null==n?void 0:n.relevant_questions)||e.relevant_questions}:n},h=async e=>{try{i(!0),m(void 0),d(void 0);let t=new AbortController;v.current=t;let a=null!=r?r:window.fetch,o=await a(n,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",...l},signal:null==t?void 0:t.signal}).catch(e=>{throw e});if(!(null==o?void 0:o.ok))throw Error(String(o.status));if(null==o.body)throw Error("The response body is empty");let u=o.body.pipeThrough(new TextDecoderStream).pipeThrough(new c.m).getReader();for(;;){var s;let{done:e,value:n}=await u.read();if(e||(null===(s=t.signal)||void 0===s?void 0:s.aborted))break;x(n)}}catch(e){if((null==e?void 0:e.name)==="AbortError")return v.current=null,null;t&&e instanceof Error&&t(e),m(e)}finally{i(!1)}};return{isLoading:a,answer:o,error:u,setError:m,triggerRequest:h,stop:()=>{v.current&&(v.current.abort(),v.current=null)}}}({api:f,headers:x,fetcher:b}),G=async e=>{$();let n=M.filter(n=>n.user.id!==e);F(n)},Q=async e=>{let n=(0,r.Z)(M,n=>n.user.id===e);if(n>-1){var t;let e=M[n],l=[...M.slice(0,n),{...e,assistant:{...e.assistant,id:(null===(t=e.assistant)||void 0===t?void 0:t.id)||(0,d.x0)(),message:"",error:void 0}}];return F(l),P(en(l))}},X=async()=>{if(!(null==M?void 0:M.length))return;let e=M[M.length-1].user.id;return Q(e)};s.useEffect(()=>{if(!Y||!(null==M?void 0:M.length)||!B)return;let e=M[M.length-1];F(n=>{var t;let l=n[n.length-1].assistant,s={...l,id:(null==l?void 0:l.id)||(0,d.x0)(),message:null!==(t=B.answer_delta)&&void 0!==t?t:"",error:void 0,relevant_code:null==B?void 0:B.relevant_code};return[...n.slice(0,n.length-1),{...e,assistant:s}]})},[B,Y]);let ee=(0,a.S)(()=>{j?j.scrollTo({top:j.scrollHeight,behavior:"smooth"}):window.scrollTo({top:document.body.offsetHeight,behavior:"smooth"})},100);s.useLayoutEffect(()=>{Y&&ee.run()},[Y]),s.useEffect(()=>{U&&(null==M?void 0:M.length)&&F(e=>{var n,t,l;let s=e[e.length-1];return[...e.slice(0,e.length-1),{...s,assistant:{...s.assistant,id:(null===(n=s.assistant)||void 0===n?void 0:n.id)||(0,d.x0)(),message:null!==(l=null===(t=s.assistant)||void 0===t?void 0:t.message)&&void 0!==l?l:"",error:(null==U?void 0:U.message)==="401"?"Unauthorized":"Fail to fetch"}}]})},[U]);let en=e=>{var n,t,l;let s=e[e.length-1].user,r=(null==s?void 0:s.selectContext)||(null==s?void 0:s.activeContext),a=r?{content:null!==(t=r.content)&&void 0!==t?t:"",filepath:r.filepath,language:r.filepath&&(0,o.U$)(r.filepath)[0]||"text",git_url:null!==(l=null==r?void 0:r.git_url)&&void 0!==l?l:""}:void 0,i=null==s?void 0:null===(n=s.relevantContext)||void 0===n?void 0:n.map(e=>({filepath:e.filepath,content:e.content}));return{messages:(function(e){if(!(null==e?void 0:e.length))return[];let n=[],t=e.length;for(let l=0;l<e.length;l++){let s=e[l],{user:r,assistant:a}=s;r&&n.push(function(e,n){let{includeTransformedSelectContext:t}=n,{message:l,id:s}=e;return{id:s,role:"user",content:t?l+function(e){var n;if(!e||!e.content)return"";let{content:t,filepath:l}=e,s=null===(n=(0,o.U$)(l))||void 0===n?void 0:n[0];return"\n```".concat(null!=s?s:"","\n").concat(null!=t?t:"","\n","```","\n")}(e.selectContext):l}}(r,{includeTransformedSelectContext:t>1&&l!==t-1})),a&&n.push({role:"assistant",id:a.id,content:a.message})}return n})(e).slice(0,-1),code_query:a,code_snippets:i,doc_query:!!N,generate_relevant_questions:!!y,collect_relevant_code_using_user_message:!!w}},et=(0,i.d)(async e=>{var n;if(Y)return;let t={...e,id:null!==(n=e.id)&&void 0!==n?n:(0,d.x0)()},l=[...M,{user:t,assistant:{id:(0,d.x0)(),message:"",error:void 0}}];return F(l),P(en(l))}),el=async e=>{var n;return null===(n=et.current)||void 0===n?void 0:n.call(et,e)},es=async e=>{R?R(e,T):el({message:e,relevantContext:T}),A([])},er=(0,i.d)(e=>{A(T.concat([e]))}),ea=e=>{var n;null===(n=er.current)||void 0===n||n.call(er,e)};s.useEffect(()=>{L.current&&p(M)},[M]),s.useImperativeHandle(n,()=>({sendUserChat:el,stop:$,isLoading:Y,addRelevantContext:ea,focus:()=>{var e;return null===(e=q.current)||void 0===e?void 0:e.focus()}}),[]),s.useEffect(()=>{L.current||(L.current=!0,null==h||h(),Z(!0))},[]);let ei=C?"max-w-".concat(C):"max-w-2xl";return z?(0,l.jsx)(W.Provider,{value:{isLoading:Y,qaPairs:M,onNavigateToContext:g,handleMessageAction:(e,n)=>{switch(n){case"delete":G(e);break;case"regenerate":Q(e)}},onClearMessages:()=>{$(),F([])},container:j,onCopyContent:S,client:I,onApplyInEditor:_,relevantContext:T,removeRelevantContext:e=>{let n=[...T];n.splice(e,1),A(n)}},children:(0,l.jsx)("div",{className:"flex justify-center overflow-x-hidden",children:(0,l.jsxs)("div",{className:"w-full px-4 ".concat(ei),children:[(0,l.jsxs)("div",{className:(0,d.cn)("pb-[200px] pt-4 md:pt-10",t),children:[(null==M?void 0:M.length)?(0,l.jsx)(V.w,{messages:M,chatMaxWidthClass:ei}):(0,l.jsx)(K,{setInput:O,chatMaxWidthClass:ei,welcomeMessage:k}),(0,l.jsx)(J,{trackVisibility:Y})]}),(0,l.jsx)(H,{onSubmit:es,className:(0,d.cn)("fixed inset-x-0 bottom-0",E),id:m,stop:()=>{$()},reload:X,input:D,setInput:O,chatMaxWidthClass:ei,ref:q})]})})}):(0,l.jsx)(u.cg,{className:"".concat(ei," mx-auto pt-4 md:pt-10")})})},80054:function(e,n,t){t.d(n,{q:function(){return P},w:function(){return z}});var l=t(36164),s=t(3546),r=t(42891),a=t.n(r),i=t(23342),o=t(1853),d=t(74630),c=t(64148),u=t(93668),m=t(98454),v=t(63484),x=t(74248),f=t(90958),h=t(29),p=t(73033),g=t(48537),j=t(43739),b=t(14079);let N=j.fC,y=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,l.jsx)(j.ck,{ref:n,className:(0,x.cn)("border-b",t),...s})});y.displayName="AccordionItem";let w=s.forwardRef((e,n)=>{let{className:t,children:s,...r}=e;return(0,l.jsxs)(j.xz,{ref:n,className:(0,x.cn)("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",t),...r,children:[s,(0,l.jsx)(b.Z,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})});w.displayName=j.xz.displayName;let C=s.forwardRef((e,n)=>{let{className:t,children:s,...r}=e;return(0,l.jsx)(j.VY,{ref:n,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:(0,l.jsx)("div",{className:(0,x.cn)("pb-4 pt-0",t),children:s})})});C.displayName=j.VY.displayName;var k=t(31458),E=t(81565),S=t(11208),I=t(3448),R=t(52569),_=t(36613);function z(e){let{messages:n,chatMaxWidthClass:t}=e,{isLoading:r}=s.useContext(_.p);return(0,l.jsx)("div",{className:"relative mx-auto px-4 ".concat(t),children:null==n?void 0:n.map((e,t)=>{let a=t===n.length-1;return(0,l.jsxs)(s.Fragment,{children:[(0,l.jsx)(Z,{isLoading:!!a&&r,message:e}),!a&&(0,l.jsx)(S.Z,{className:"my-4 md:my-8"})]},e.user.id)})})}function Z(e){let{message:n,isLoading:t}=e,{user:s,assistant:r}=n;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(L,{message:s}),!!r&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(S.Z,{className:"my-4 md:my-8"}),(0,l.jsx)(F,{message:r,userMessage:s,isLoading:t,userMessageId:s.id})]})]})}function L(e){var n,t,r,a;let{message:i}=e,[{data:o}]=(0,m.P)(),c=i.selectContext,{onNavigateToContext:u,client:f}=s.useContext(_.p),h=s.useMemo(()=>{var e,n;if(!(null==c?void 0:c.content))return"";let t=(null==c?void 0:c.filepath)&&null!==(e=(0,v.U$)(null==c?void 0:c.filepath)[0])&&void 0!==e?e:"";return"\n```".concat(t,"\n").concat(null!==(n=null==c?void 0:c.content)&&void 0!==n?n:"","\n","```","\n")},[c]),p=null;if(h&&i.selectContext){let{range:e,filepath:n}=i.selectContext;p={filepath:n,isMultiLine:!(0,d.Z)(null==e?void 0:e.start)&&!(0,d.Z)(null==e?void 0:e.end)&&e.start<e.end}}return(0,l.jsxs)("div",{className:(0,x.cn)("group relative mb-4 flex flex-col items-start gap-y-2 md:-ml-4 md:flex-row"),...e,children:[(0,l.jsxs)("div",{className:(0,x.cn)("flex w-full items-center justify-between md:w-auto",{"hidden md:flex":!(null==o?void 0:o.me.name)}),children:[(0,l.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,l.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,l.jsx)(R.Y,{className:"h-6 w-6 md:h-8 md:w-8",fallback:(0,l.jsx)("div",{className:"flex h-6 w-6 items-center justify-center md:h-8 md:w-8",children:(0,l.jsx)(E.IconUser,{className:"h-6 w-6"})})})}),(0,l.jsx)("p",{className:"block text-xs font-bold md:hidden",children:null==o?void 0:o.me.name})]}),(0,l.jsx)("div",{className:"block opacity-0 transition-opacity group-hover:opacity-100 md:hidden",children:(0,l.jsx)(M,{...e})})]}),(0,l.jsxs)("div",{className:"group relative flex w-full justify-between gap-x-2",children:[(0,l.jsxs)("div",{className:"flex-1 space-y-2 overflow-hidden px-1 md:ml-4",children:[(0,l.jsx)(O,{message:i.message}),!!h&&(0,l.jsx)(O,{message:h}),(0,l.jsx)("div",{className:"hidden md:block",children:(0,l.jsx)(M,{...e})}),p&&i.selectContext&&(0,l.jsxs)("div",{className:"flex cursor-pointer items-center gap-1 overflow-x-auto text-xs text-muted-foreground hover:underline",onClick:()=>null==u?void 0:u(i.selectContext,{openInEditor:"vscode"===f}),children:[(0,l.jsx)(E.IconFile,{className:"h-3 w-3"}),(0,l.jsxs)("p",{className:"flex-1 truncate pr-1",children:[(0,l.jsx)("span",{children:p.filepath}),(null===(t=i.selectContext)||void 0===t?void 0:null===(n=t.range)||void 0===n?void 0:n.start)&&(0,l.jsxs)("span",{children:[":",null===(r=i.selectContext)||void 0===r?void 0:r.range.start]}),p.isMultiLine&&(0,l.jsxs)("span",{children:["-",null===(a=i.selectContext)||void 0===a?void 0:a.range.end]})]})]})]}),!(null==o?void 0:o.me.name)&&(0,l.jsx)("div",{className:"editor-bg absolute right-0 top-0 -mt-0.5 block opacity-0 transition-opacity group-hover:opacity-100 md:hidden",children:(0,l.jsx)(M,{...e})})]})]})}function M(e){let{message:n}=e,{handleMessageAction:t}=s.useContext(_.p);return(0,l.jsx)(q,{children:(0,l.jsxs)(k.z,{variant:"ghost",size:"icon",onClick:e=>null==t?void 0:t(n.id,"delete"),children:[(0,l.jsx)(E.IconTrash,{}),(0,l.jsx)("span",{className:"sr-only",children:"Delete message"})]})})}function F(e){let{message:n,userMessage:t,isLoading:r,userMessageId:a,...i}=e,{onNavigateToContext:d,client:c}=s.useContext(_.p),u=s.useMemo(()=>{var e,t;return null!==(t=null==n?void 0:null===(e=n.relevant_code)||void 0===e?void 0:e.map(e=>{var n,t;let l=null!==(t=null===(n=e.doc)||void 0===n?void 0:n.start_line)&&void 0!==t?t:0,s=e.doc.body.split("\n").length;return{kind:"file",range:{start:l,end:l+s-1},filepath:e.doc.filepath,content:e.doc.body,git_url:e.doc.git_url}}))&&void 0!==t?t:[]},[null==n?void 0:n.relevant_code]),m=s.useMemo(()=>{var e;return(0,o.Z)([t.activeContext,...null!==(e=null==t?void 0:t.relevantContext)&&void 0!==e?e:[]])},[t.activeContext,t.relevantContext]);return(0,l.jsxs)("div",{className:(0,x.cn)("group relative mb-4 flex flex-col items-start gap-y-2 md:-ml-4 md:flex-row"),...i,children:[(0,l.jsxs)("div",{className:"flex w-full items-center justify-between md:w-auto",children:[(0,l.jsxs)("div",{className:"flex items-center gap-x-2",children:[(0,l.jsx)("div",{className:"shrink-0 select-none rounded-full border bg-background shadow",children:(0,l.jsx)(H,{className:"h-6 w-6 md:h-8 md:w-8"})}),(0,l.jsx)("p",{className:"block text-xs font-bold md:hidden",children:"Tabby"})]}),(0,l.jsx)("div",{className:"block opacity-0 transition-opacity group-hover:opacity-100 md:hidden",children:(0,l.jsx)(D,{message:n,userMessageId:a})})]}),(0,l.jsxs)("div",{className:"w-full flex-1 space-y-2 overflow-hidden px-1 md:ml-4",children:[(0,l.jsx)(P,{contexts:u,userContexts:m,onContextClick:(e,n)=>{null==d||d(e,{openInEditor:"vscode"===c&&n})},isExternalLink:!!c}),!r||(null==n?void 0:n.message)?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(O,{message:n.message}),!!n.error&&(0,l.jsx)(T,{error:n.error})]}):(0,l.jsx)(A,{}),(0,l.jsx)("div",{className:"hidden md:block",children:(0,l.jsx)(D,{message:n,userMessageId:a})})]})]})}function D(e){let{handleMessageAction:n,isLoading:t,onCopyContent:r}=s.useContext(_.p),{message:a,userMessageId:i}=e;return(0,l.jsxs)(q,{children:[!t&&(0,l.jsxs)(k.z,{variant:"ghost",size:"icon",onClick:e=>n(i,"regenerate"),children:[(0,l.jsx)(E.IconRefresh,{}),(0,l.jsx)("span",{className:"sr-only",children:"Regenerate message"})]}),(0,l.jsx)(g.q,{value:a.message,onCopyContent:r})]})}function O(e){let{message:n}=e,{onCopyContent:t,onApplyInEditor:r}=s.useContext(_.p);return(0,l.jsx)(p.s,{className:"prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[c.Z,u.Z],components:{p(e){let{children:n}=e;return(0,l.jsx)("p",{className:"mb-2 last:mb-0",children:n})},code(e){var n;let{node:s,inline:a,className:i,children:o,...d}=e;if(o.length){if("▍"==o[0])return(0,l.jsx)("span",{className:"mt-1 animate-pulse cursor-default",children:"▍"});o[0]=o[0].replace("`▍`","▍")}let c=/language-(\w+)/.exec(i||""),u=function(e){let n={};if(!e)return n;let t=e.split(" ");return t.forEach(e=>{let[t,l]=e.split("=");n[t]=l}),n}(null===(n=s.data)||void 0===n?void 0:n.meta),m=(null==u?void 0:u.is_reference)==="1";return m?null:a?(0,l.jsx)("code",{className:i,...d,children:o}):(0,l.jsx)(f.dn,{language:c&&c[1]||"",value:String(o).replace(/\n$/,""),onCopyContent:t,onApplyInEditor:r,...d},Math.random())}},children:n})}function T(e){let{error:n="Fail to fetch"}=e,t=s.useMemo(()=>"```\n"+JSON.stringify({error:!0,message:n},null,2)+"\n```",[n]);return(0,l.jsx)(p.s,{className:"prose break-words text-sm dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0",remarkPlugins:[c.Z,u.Z],components:{code(e){let{node:n,inline:t,className:s,children:r,...a}=e;return(0,l.jsx)("div",{...a,className:(0,x.cn)(s,"bg-zinc-950 p-2"),children:r})}},children:t})}function A(){return(0,l.jsxs)("div",{className:"space-y-2 py-2 md:px-1 md:py-0",children:[(0,l.jsx)(I.O,{className:"h-3 w-full"}),(0,l.jsx)(I.O,{className:"h-3 w-full"})]})}function H(e){let{className:n}=e;return(0,l.jsx)(a(),{style:{backgroundColor:"#E8E2D2"},className:(0,x.cn)("rounded-full p-0.5",n),src:i.Z,alt:"tabby"})}function q(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,x.cn)("flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-[5rem] md:-top-2 md:opacity-0",n),...t})}let P=(0,s.forwardRef)((e,n)=>{let{contexts:t,userContexts:s,className:r,onContextClick:a,defaultOpen:i,enableTooltip:o,onTooltipClick:d,isExternalLink:c,highlightIndex:u}=e,m=((null==s?void 0:s.length)||0)+t.length;return 0===m?null:(0,l.jsx)(N,{type:"single",collapsible:!0,className:(0,x.cn)("bg-transparent text-foreground",r),defaultValue:i?"references":void 0,ref:n,children:(0,l.jsxs)(y,{value:"references",className:"my-0 border-0",children:[(0,l.jsx)(w,{className:"my-0 py-2 font-semibold",children:(0,l.jsx)("span",{className:"mr-2",children:"Read ".concat(m," file").concat(m>1?"s":"")})}),(0,l.jsxs)(C,{className:"space-y-2",children:[null==s?void 0:s.map((e,n)=>(0,l.jsx)(J,{context:e,onContextClick:e=>null==a?void 0:a(e,!0)},"user-".concat(n))),t.map((e,n)=>(0,l.jsx)(J,{context:e,onContextClick:e=>null==a?void 0:a(e,!1),enableTooltip:o,onTooltipClick:d,isExternalLink:c,isHighlighted:u===n},"assistant-".concat(n)))]})]})})});function J(e){var n,t,r,a,i,o,c;let{context:u,clickable:m=!0,onContextClick:v,enableTooltip:f,onTooltipClick:p,isExternalLink:g,isHighlighted:j}=e,[b,N]=(0,s.useState)(!1),y=!(0,d.Z)(null===(n=u.range)||void 0===n?void 0:n.start)&&!(0,d.Z)(null===(t=u.range)||void 0===t?void 0:t.end)&&u.range.start<u.range.end,w=u.filepath.split("/"),C=w[w.length-1],k=w.slice(0,w.length-1).join("/"),S=null==u?void 0:null===(r=u.extra)||void 0===r?void 0:r.scores;return(0,l.jsxs)(h.u,{open:b,onOpenChange:e=>{f&&S&&N(e)},delayDuration:0,children:[(0,l.jsx)(h.aJ,{asChild:!0,children:(0,l.jsx)("div",{className:(0,x.cn)("rounded-md border p-2",{"cursor-pointer hover:bg-accent":m,"cursor-default pointer-events-auto":!m,"bg-accent transition-all":j}),onClick:e=>m&&(null==v?void 0:v(u)),children:(0,l.jsxs)("div",{className:"flex items-center gap-1 overflow-hidden",children:[(0,l.jsx)(E.IconFile,{className:"shrink-0"}),(0,l.jsxs)("div",{className:"flex-1 truncate",title:u.filepath,children:[(0,l.jsx)("span",{children:C}),(null===(a=u.range)||void 0===a?void 0:a.start)&&(0,l.jsxs)("span",{className:"text-muted-foreground",children:[":",u.range.start]}),y&&(0,l.jsxs)("span",{className:"text-muted-foreground",children:["-",u.range.end]}),(0,l.jsx)("span",{className:"ml-2 text-xs text-muted-foreground",children:k})]}),g&&(0,l.jsx)(E.IconExternalLink,{className:"shrink-0 text-muted-foreground"})]})})}),(0,l.jsx)(h._v,{align:"start",onClick:p,className:"cursor-pointer p-2",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"mb-2 font-semibold",children:"Scores"}),(0,l.jsxs)("div",{className:"space-y-1",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("span",{className:"w-20",children:"rrf:"}),null!==(i=null==S?void 0:S.rrf)&&void 0!==i?i:"-"]}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("span",{className:"w-20",children:"bm25:"}),null!==(o=null==S?void 0:S.bm25)&&void 0!==o?o:"-"]}),(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("span",{className:"w-20",children:"embedding:"}),null!==(c=null==S?void 0:S.embedding)&&void 0!==c?c:"-"]})]})]})})]})}P.displayName="CodeReferences"},73033:function(e,n,t){t.d(n,{s:function(){return r}});var l=t(3546),s=t(52991);let r=(0,l.memo)(s.D,(e,n)=>e.children===n.children&&e.className===n.className)},63795:function(e,n,t){t.d(n,{C:function(){return i}});var l=t(36164);t(3546);var s=t(14375),r=t(74248);let a=(0,s.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",successful:"border-transparent bg-successful text-successful-foreground hover:bg-successful/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:n,variant:t,...s}=e;return(0,l.jsx)("div",{className:(0,r.cn)(a({variant:t}),n),...s})}},90958:function(e,n,t){t.d(n,{dn:function(){return u}});var l=t(36164),s=t(3546),r=t(73162),a=t(83008),i=t(28312),o=t(31458),d=t(81565),c=t(29);let u=(0,s.memo)(e=>{let{language:n,value:t,onCopyContent:s,onApplyInEditor:u}=e,{isCopied:m,copyToClipboard:v}=(0,i.m)({timeout:2e3,onCopyContent:s});return(0,l.jsxs)("div",{className:"codeblock relative w-full bg-zinc-950 font-sans",children:[(0,l.jsxs)("div",{className:"flex w-full items-center justify-between bg-zinc-800 px-6 py-2 pr-4 text-zinc-100",children:[(0,l.jsx)("span",{className:"text-xs lowercase",children:n}),(0,l.jsxs)("div",{className:"flex items-center space-x-1",children:[u&&(0,l.jsxs)(c.u,{children:[(0,l.jsx)(c.aJ,{asChild:!0,children:(0,l.jsxs)(o.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:u.bind(null,t),children:[(0,l.jsx)(d.IconApplyInEditor,{}),(0,l.jsx)("span",{className:"sr-only",children:"Apply in Editor"})]})}),(0,l.jsx)(c._v,{children:(0,l.jsx)("p",{className:"m-0",children:"Apply in Editor"})})]}),(0,l.jsxs)(c.u,{children:[(0,l.jsx)(c.aJ,{asChild:!0,children:(0,l.jsxs)(o.z,{variant:"ghost",size:"icon",className:"text-xs hover:bg-[#3C382F] hover:text-[#F4F4F5] focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:ring-offset-0",onClick:()=>{m||v(t)},children:[m?(0,l.jsx)(d.IconCheck,{}):(0,l.jsx)(d.IconCopy,{}),(0,l.jsx)("span",{className:"sr-only",children:"Copy"})]})}),(0,l.jsx)(c._v,{children:(0,l.jsx)("p",{className:"m-0",children:"Copy"})})]})]})]}),(0,l.jsx)(r.Z,{language:"toml"===n?"bash":n,style:a.RY,PreTag:"div",showLineNumbers:!0,customStyle:{margin:0,width:"100%",background:"transparent",padding:"1.5rem 1rem"},codeTagProps:{style:{fontSize:"0.9rem",fontFamily:"var(--font-mono)"}},children:t})]})});u.displayName="CodeBlock"},52569:function(e,n,t){t.d(n,{Y:function(){return j},n:function(){return b}});var l=t(36164),s=t(3546),r=t(87782),a=t(21454),i=t(36327),o=t(98454),d=t(3765),c=t(74248),u=t(66612);let m=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,l.jsx)(u.fC,{ref:n,className:(0,c.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...s})});m.displayName=u.fC.displayName;let v=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,l.jsx)(u.Ee,{ref:n,className:(0,c.cn)("aspect-square h-full w-full",t),...s})});v.displayName=u.Ee.displayName;let x=s.forwardRef((e,n)=>{let{className:t,...s}=e;return(0,l.jsx)(u.NY,{ref:n,className:(0,c.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...s})});x.displayName=u.NY.displayName;var f=t(3448),h=t(30410).lW;let p="not_found",g=!0;function j(e){var n,t,a,u;let{className:j,fallback:b}=e,[{data:N}]=(0,o.P)(),y=null==N?void 0:N.me.id,w=y&&"/avatar/".concat(N.me.id)||null,{data:C,isLoading:k,error:E}=(0,i.Z)(w,e=>{if(g)return(0,d.Z)(e,{responseFormatter:async e=>{let n=await e.blob(),t=h.from(await n.arrayBuffer());return"data:image/png;base64,".concat(t.toString("base64"))},errorHandler:e=>{if(404===e.status)throw Error(p)}})}),S=s.useMemo(()=>{var e;if(null==N?void 0:null===(e=N.me)||void 0===e?void 0:e.email)return(0,r.B)(N.me.email)},[null==N?void 0:null===(n=N.me)||void 0===n?void 0:n.email]);return k?(0,l.jsx)(f.O,{className:(0,c.cn)("h-16 w-16 rounded-full",j)}):((null==E?void 0:E.message)===p&&(g=!1),C||S||!b)?!C&&S?(0,l.jsx)(r.Z,{className:(0,c.cn)("h-16 w-16",j),...S}):(0,l.jsxs)(m,{className:(0,c.cn)("h-16 w-16",j),children:[(0,l.jsx)(v,{src:C,alt:null==N?void 0:null===(t=N.me)||void 0===t?void 0:t.email,className:"object-cover"}),(0,l.jsx)(x,{children:null==N?void 0:null===(u=N.me)||void 0===u?void 0:null===(a=u.email)||void 0===a?void 0:a.substring(0,2)})]}):b}let b=e=>{g=!0,(0,a.JG)("/avatar/".concat(e))}},12624:function(e,n,t){t.d(n,{e:function(){return r}});var l=t(3546),s=t(62940);function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,[t,r]=l.useState(!1);return l.useEffect(()=>{if(n)return;let t=(0,s.Z)(()=>{r(window.innerHeight+window.scrollY>=document.body.offsetHeight-e)},100,{leading:!0});return window.addEventListener("scroll",t,{passive:!0}),window.addEventListener("resize",t,{passive:!0}),t(),()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",t)}},[e,n]),l.useEffect(()=>{if(!n)return;let t=(0,s.Z)(()=>{let{scrollTop:t,clientHeight:l,scrollHeight:s}=n;r(t+l>=s-e)},100,{leading:!0});return n.addEventListener("scroll",t,{passive:!0}),n.addEventListener("resize",t,{passive:!0}),t(),()=>{n.removeEventListener("scroll",t),n.removeEventListener("resize",t)}},[e,n]),t}}}]);