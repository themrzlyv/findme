(this.webpackJsonpfindme=this.webpackJsonpfindme||[]).push([[4],{210:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var a=n(3),i=n.n(a),r=n(20),c=n(81),l=n(5),o=n(87),s=n(18),u=n(147),d=n(207),j=n(149),m=n(212),f=n(144),b=n(77),g=n(90),h=n(19),O=n(206),p=n(215),v=n(140),x=n(178),C=n.n(x),S=n(10),y=function(e){var t=e.label,n=e.handleAddTag,r=e.variant,c=e.sx,l=i.a.useState([]),o=Object(s.a)(l,2),u=o[0],d=o[1],j=i.a.useState(""),f=Object(s.a)(j,2),b=f[0],g=f[1];return Object(a.useEffect)((function(){n(u)}),[u]),Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(m.a,{variant:r,sx:c,value:b,onKeyDown:function(e){if(!(u.length>=5)&&""!==b&&!(b.length>9))return 32===e.keyCode?(d((function(e){return[].concat(Object(h.a)(e),[b])})),g("")):void 0},onChange:function(e){if(!(e.target.value.length>9))return u.length>=5?g(""):void g(e.target.value)},label:t,InputProps:{startAdornment:(null===u||void 0===u?void 0:u.length)>0&&Object(S.jsx)(v.a,{sx:{display:"flex"},children:u.map((function(e,t){return Object(S.jsx)(O.a,{direction:"row",gap:1,marginBottom:1,marginRight:1,children:Object(S.jsx)(p.a,{label:e,onDelete:function(){return function(e){var t=u.filter((function(t){return t!==e}));g(""),d(t)}(e)},icon:Object(S.jsx)(C.a,{fontSize:"small"})})},t)}))})}})})},R=n(211),E=n(218),T=n(213),F=n(209),w=function(e){var t=e.id,n=e.sx,a=e.labelSx,i=e.label,r=e.labelId,c=e.variant,l=e.data,o=e.value,s=e.name,u=e.required,d=e.handleChange;return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(E.a,{variant:c,sx:n,children:[i&&Object(S.jsx)(T.a,{sx:a,id:r,children:i}),Object(S.jsx)(F.a,{labelId:r,id:t,value:o,label:i,name:s,onChange:d,required:u,children:l.map((function(e){return Object(S.jsx)(R.a,{value:e.name,children:e.name},e.id)}))})]})})},_=n(221),P=n(219),A=n(220),B=n(179),D=n.n(B),I=function(e){var t=e.progress,n=e.fileName,a=e.handleRemoveFile;return Object(S.jsxs)(v.a,{component:"div",display:"flex",flexDirection:"column",sx:{minWidth:"10em",marginX:"2em",marginBottom:"0.6em"},children:[Object(S.jsxs)(v.a,{component:"div",display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(S.jsx)(j.a,{variant:"caption",children:n}),Object(S.jsx)(P.a,{size:"small",onClick:function(){return a(n)},children:Object(S.jsx)(D.a,{fontSize:"small"})})]}),Object(S.jsx)(A.a,{variant:"determinate",value:t})]})},k=i.a.memo(I),U=function(e){var t=e.id,n=e.wrapperStyle,a=e.handleFileChange,i=e.variant,r=e.multiple,c=e.progress,l=e.fileName,o=e.loading,s=e.acceptOnlyFormats,u=e.handleRemoveFile;return Object(S.jsxs)(v.a,{component:"div",display:"flex",alignItems:"center",style:n,children:[Object(S.jsxs)("label",{htmlFor:t,children:[Object(S.jsx)("input",{style:{display:"none"},accept:null===s||void 0===s?void 0:s.join(", "),id:t,multiple:r,type:"file",onChange:a}),Object(S.jsx)(f.a,{variant:i,component:"span",disabled:o||Boolean(l),children:o?Object(S.jsx)(_.a,{size:20}):"Upload"})]}),c||l?Object(S.jsx)(k,{progress:c,handleRemoveFile:u,fileName:l}):null]})},N=i.a.memo(U),X=n(79),q=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),c=Object(s.a)(r,2),l=c[0],o=c[1],u=Object(a.useState)(!1),d=Object(s.a)(u,2),j=d[0],m=d[1],f=Object(a.useState)(""),b=Object(s.a)(f,2),g=b[0],h=b[1],O=Object(a.useState)(0),p=Object(s.a)(O,2),v=p[0],x=p[1];return{onFileChange:function(e){x(0),m(!0),h(""),o(e.name),function(e){return new Promise((function(t,n){X.a.ref().child("images/".concat(e.name)).put(e).then((function(e){e.ref.getDownloadURL().then((function(n){t({url:n,percent:e.bytesTransferred/e.totalBytes*100})}))})).catch((function(e){return n(e)}))}))}(e).then((function(e){var t=e.url,n=e.percent;i(t),x(n),m(!1),h("")})).catch((function(e){h(e),x(0),m(!1)}))},fileUrl:n,progress:v,error:g,loading:j,fileName:l,removeFile:function(e){m(!0),function(e){return new Promise((function(t,n){X.a.ref().child("images/".concat(e)).delete().then((function(e){t(e)})).catch((function(e){return n(e)}))}))}(e).then((function(){i(""),o(""),x(0),m(!1),h("")})).catch((function(e){h(e),m(!1)}))}}},z={CREATE_POST_SUCCESS:"CREATE_POST_SUCCESS"},W={CREATE_POST_ERROR:"CREATE_POST_ERROR"},J=[{id:"1",name:"Web Development"},{id:"2",name:"Mobile Development"},{id:"3",name:"Full Stack"},{id:"4",name:"Frontend Development"},{id:"5",name:"Backend Development"}],K=function(){var e=i.a.useState({title:"",tags:[],category:"",content:"",image:""}),t=Object(s.a)(e,2),n=t[0],r=t[1],c=q(),h=c.onFileChange,O=c.fileName,p=c.fileUrl,v=c.progress,x=c.loading,C=c.removeFile,R=function(e){r((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},E=i.a.useCallback((function(e){return r((function(t){return Object(o.a)(Object(o.a)({},t),{},{tags:e})}))}),[]);return Object(a.useEffect)((function(){r((function(e){return Object(o.a)(Object(o.a)({},e),{},{image:p})}))}),[p]),Object(S.jsx)(u.a,{children:Object(S.jsxs)(d.a,{component:"div",display:"flex",flexDirection:"column",py:3,children:[Object(S.jsx)(d.a,{component:"div",display:"flex",marginY:5,sx:{width:"50%",marginX:"auto"},children:Object(S.jsx)(j.a,{variant:"h5",fontWeight:"bold",children:"Create a new post"})}),Object(S.jsx)(m.a,{label:"Title",type:"text",name:"title",variant:"standard",onChange:R,sx:{marginBottom:"1em",marginX:"auto"},required:!0}),Object(S.jsx)(y,{label:"Add tags",variant:"standard",handleAddTag:E,sx:{marginBottom:"1em",marginX:"auto"}}),Object(S.jsx)(w,{data:J,value:n.category,label:"Category",labelId:"category",handleChange:function(e){return r((function(t){return Object(o.a)(Object(o.a)({},t),{},{category:e.target.value})}))},variant:"standard",required:!0,sx:{width:"50%",marginBottom:"1em",marginX:"auto"}}),Object(S.jsx)(m.a,{label:"Content",type:"text",name:"content",variant:"standard",onChange:R,sx:{marginBottom:"1rem",marginX:"auto"},required:!0}),Object(S.jsx)(N,{id:"createpost",variant:"outlined",progress:v,loading:x,fileName:O,wrapperStyle:{width:"50%",margin:"1em auto"},acceptOnlyFormats:[".png",".jpg",".jpeg"],handleRemoveFile:C,handleFileChange:function(e){var t;if(e.target.files&&e.target.files.length>0)return h(null===(t=e.target.files)||void 0===t?void 0:t[0])}}),Object(S.jsx)(f.a,{sx:{width:"50%",margin:"1em auto"},variant:"outlined",onClick:function(){if(!n.title||!n.content||!n.category||!n.tags.length||!n.image)return b.c.error("Please fill all the fields",{toastId:W.CREATE_POST_ERROR});Object(g.a)(n).then((function(e){return e&&b.c.success("Post saved successfully",{toastId:z.CREATE_POST_SUCCESS})})).catch((function(e){return b.c.error(e.message,{toastId:W.CREATE_POST_ERROR})}))},children:"Save"})]})})},L=function(){return Object(S.jsx)(r.c,{children:Object(S.jsx)(r.a,{path:c.a.createPost,element:Object(S.jsx)(K,{})})})}}}]);
//# sourceMappingURL=4.a712bb30.chunk.js.map