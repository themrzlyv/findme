(this.webpackJsonpfindme=this.webpackJsonpfindme||[]).push([[1],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a}));var r=n(60),i=n(89),c=function(e){return new Promise((function(t,n){i.b.collection("posts").add(e).then((function(e){return e.get()})).then((function(e){return t(e.exists)})).catch((function(e){return n(e)}))}))},o=function(){return new Promise((function(e,t){i.b.collection("posts").get().then((function(e){return e.docs})).then((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})}))})).then((function(t){return e(t)})).catch((function(e){return t(e)}))}))},a=function(e){return new Promise((function(t,n){i.b.collection("posts").doc(e).get().then((function(e){return e.exists?e.data():null})).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(77),i=Object(r.a)((function(e){return e}),(function(e){return e.posts}))},161:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),c=n(41),o=n.n(c),a=n(63),s=n(50),l=n(243),u=n(107),d=(n(155),n(26)),j=n(91),h=n(231),f=n(209),b=n(6),p=function(){return Object(b.jsx)(f.a,{component:"div",display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",children:Object(b.jsx)(h.a,{})})},x=n(227),m=n(18),O=n(224),g=n(233),v=n(221),w=n(215),y=n(234),k=n(226),S=n(216),C=n(235),P=n(38),F=n(217),W=n(236),z=n(237),A=n(228),E=n(229),I=n(179),L=n(230),B=n(101),D=n(127),T=n.n(D),M=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),n=t[0],i=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O.a,{open:n,onClose:function(){return i(!1)},sx:{width:"240px"},children:Object(b.jsxs)(g.a,{sx:{width:"240px"},children:[Object(b.jsx)(v.a,{onClick:function(){return i(!1)},children:Object(b.jsx)(w.a,{children:Object(b.jsx)(y.a,{color:"inherit",underline:"none",fontSize:"1em",fontFamily:"sans-serif",letterSpacing:"0.2px",component:s.b,to:"/findme/post/create",children:Object(b.jsx)(k.a,{variant:"contained",children:"Create post"})})})}),Object(b.jsx)(S.a,{}),Object(b.jsx)(v.a,{onClick:function(){return i(!1)},children:Object(b.jsx)(w.a,{children:Object(b.jsx)(y.a,{color:"inherit",underline:"none",fontSize:"1em",fontFamily:"sans-serif",letterSpacing:"0.2px",component:s.b,to:"/findme/contact",children:"Contact"})})}),Object(b.jsx)(S.a,{}),Object(b.jsx)(v.a,{onClick:function(){return i(!1)},children:Object(b.jsx)(w.a,{children:Object(b.jsx)(y.a,{color:"inherit",underline:"none",fontSize:"1em",fontFamily:"sans-serif",letterSpacing:"0.2px",component:s.b,to:"/findme/faq",children:"Faq"})})}),Object(b.jsx)(S.a,{})]})}),Object(b.jsx)(C.a,{onClick:function(){return i(!n)},children:Object(b.jsx)(T.a,{})})]})},U=function(){var e=i.a.useState(null),t=Object(m.a)(e,2),n=(t[0],t[1]),r=i.a.useState(null),c=Object(m.a)(r,2),o=c[0],a=c[1],l=Object(P.a)(),u=Object(F.a)(l.breakpoints.down("md")),d=function(){n(null)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(W.a,{elevation:1,color:"default",children:Object(b.jsx)(x.a,{container:!0,maxWidth:"lg",marginX:"auto",children:Object(b.jsx)(x.a,{item:!0,xs:12,children:Object(b.jsx)(z.a,{children:Object(b.jsxs)(f.a,{component:"div",display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",children:[Object(b.jsx)(y.a,{color:"inherit",underline:"none",fontFamily:"sans-serif",fontWeight:"bold",fontSize:"h6",letterSpacing:"0.5px",component:s.b,to:"/findme",children:Object(b.jsx)(A.a,{sx:{bgcolor:"black",borderRadius:"4px",width:"max-content",paddingX:"0.8em"},children:"FindMe"})}),u?Object(b.jsx)(M,{}):Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(f.a,{component:"div",display:"flex",alignItems:"center",justifyContent:"space-between",sx:{width:"12em"},children:[Object(b.jsx)(y.a,{color:"inherit",underline:"none",fontSize:"1em",fontFamily:"sans-serif",letterSpacing:"0.2px",component:s.b,to:"/findme/post/create",children:Object(b.jsx)(k.a,{variant:"contained",children:"Create post"})}),Object(b.jsxs)(f.a,{sx:{flexGrow:0},children:[Object(b.jsx)(E.a,{title:"Open settings",children:Object(b.jsx)(C.a,{onClick:function(e){a(e.currentTarget)},sx:{p:0},children:Object(b.jsx)(A.a,{alt:"Remy Sharp",src:"/static/images/avatar/2.jpg"})})}),Object(b.jsx)(I.a,{sx:{mt:"45px"},id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(o),onClose:function(){a(null)},children:["Profile","Account","Dashboard","Logout"].map((function(e){return Object(b.jsx)(L.a,{onClick:d,children:Object(b.jsx)(B.a,{textAlign:"center",children:e})},e)}))})]})]})})]})})})})})})},R=n(220),N=Object(R.a)((function(e){return{section:{height:"75px"}}})),q=function(e){var t=e.children,n=N();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(U,{}),Object(b.jsx)("div",{className:n.section}),Object(b.jsx)(x.a,{container:!0,maxWidth:"lg",mx:"auto",children:Object(b.jsx)(x.a,{item:!0,xs:12,children:t})})]})},G=n(232),H=n(118),J=n(90),X=n(123),Y=n(238),K=n(239),$=n(240),_=n(241),Q=function(e){var t=e.post;return Object(b.jsxs)(Y.a,{sx:{width:"20em",maxWidth:"22em",marginBottom:"1em"},children:[Object(b.jsx)(K.a,{component:"img",alt:"green iguana",height:"140",image:t.image}),Object(b.jsxs)($.a,{children:[Object(b.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"div",children:t.title}),Object(b.jsx)(B.a,{variant:"body2",color:"text.secondary",children:t.content.substring(0,75)})]}),Object(b.jsxs)(_.a,{children:[Object(b.jsx)(k.a,{size:"small",children:"Like"}),Object(b.jsx)(y.a,{component:k.a,size:"small",href:"findme/post/".concat(t.id),underline:"none",target:"_blank",children:"Read More"})]})]})},V=i.a.memo(Q),Z=function(){var e=Object(a.c)(X.a).posts;return Object(b.jsx)(f.a,{component:"div",display:"flex",justifyContent:"space-around",flexWrap:"wrap",sx:{width:"100%"},children:e.map((function(e){return Object(b.jsx)(V,{post:e},e.id)}))})},ee=function(){var e=Object(a.b)();return Object(r.useEffect)((function(){Object(H.c)().then((function(t){return e(Object(J.c)(t))}))}),[e]),Object(b.jsx)(f.a,{component:"div",display:"flex",padding:2,children:Object(b.jsx)(Z,{})})},te=function(){return Object(b.jsx)(f.a,{component:"div",display:"flex",justifyContent:"center",marginY:3,children:Object(b.jsx)(B.a,{variant:"subtitle1",fontWeight:"bold",children:"Search, find and share development skills"})})},ne=function(){return Object(b.jsx)(G.a,{elevation:2,children:Object(b.jsxs)(f.a,{component:"div",display:"flex",flexDirection:"column",justifyContent:"center",children:[Object(b.jsx)(te,{}),Object(b.jsx)(ee,{})]})})},re=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,313))})),ie=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5),n.e(6)]).then(n.bind(null,314))})),ce=function(){return Object(b.jsx)(q,{children:Object(b.jsx)(r.Suspense,{fallback:Object(b.jsx)(p,{}),children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{element:Object(b.jsx)(ne,{}),path:j.a.home}),Object(b.jsx)(d.a,{element:Object(b.jsx)(ie,{}),path:j.a.auth}),Object(b.jsx)(d.a,{element:Object(b.jsx)(re,{}),path:j.a.post})]})})})},oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,311)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),i(e),c(e),o(e)}))},le=n(76),ue=n(43),de=Object(ue.b)({posts:J.b}),je=Object(le.a)({reducer:de,devTools:!1}),he=n(129),fe=n(58),be=Object(he.a)({palette:{primary:{main:fe.a[800],light:fe.a[400],dark:fe.a[900]}},components:{MuiTextField:{styleOverrides:{root:{width:"50%"}}}},mixins:{toolbar:{height:"64px"}}}),pe=n(2),xe=n(5),me=n(13),Oe=n(14),ge=function(e){Object(me.a)(n,e);var t=Object(Oe.a)(n);function n(){var e;Object(pe.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={hasError:!1},e}return Object(xe.a)(n,[{key:"componentDidCatch",value:function(e,t){console.error("Uncaught error:",e,t)}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Sorry.. there was an error"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(r.Component),ve=ge;o.a.render(Object(b.jsx)(s.a,{children:Object(b.jsx)(a.a,{store:je,children:Object(b.jsxs)(l.a,{theme:be,children:[Object(b.jsx)(ve,{children:Object(b.jsx)(ce,{})}),Object(b.jsx)(u.b,{theme:"colored",position:"bottom-right",autoClose:2e3,transition:u.a,hideProgressBar:!0,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0})]})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/findme",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/findme","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ae(t,e)}))}}(),se()},89:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(70);n(163),n(162),n(159);r.a.initializeApp({apiKey:"AIzaSyAIMaPjRkt4OGl0YorPyBnFiMH446bUU5I",authDomain:"findme-web-app.firebaseapp.com",projectId:"findme-web-app",storageBucket:"findme-web-app.appspot.com",messagingSenderId:"873728734687",appId:"1:873728734687:web:4e0cff13f3a17a7386406a"});r.a.auth();var i=r.a.firestore(),c=r.a.storage();r.a},90:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return d}));var r=n(76),i={posts:[],post:null,isLoading:!1,error:null},c=Object(r.b)({name:"Post",initialState:i,reducers:{getAllPosts:function(e,t){e.posts=t.payload},getPost:function(e,t){e.post=t.payload},clearPost:function(e){e.post=i.post},setLoading:function(e,t){e.isLoading=t.payload},setError:function(e,t){e.error=t.payload}}}),o=c.actions,a=o.getAllPosts,s=o.getPost,l=o.clearPost,u=o.setLoading,d=o.setError;t.b=c.reducer},91:function(e,t,n){"use strict";var r=n(60),i={login:"/login",registration:"/registration"},c={createPost:"/create",postDetail:"/:id"},o=Object(r.a)(Object(r.a)({home:"/findme",auth:"/findme/auth/*",post:"/findme/post/*"},c),i);t.a=o}},[[161,2,3]]]);
//# sourceMappingURL=main.2ec38e53.chunk.js.map