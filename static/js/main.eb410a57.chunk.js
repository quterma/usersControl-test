(this["webpackJsonpusers-control"]=this["webpackJsonpusers-control"]||[]).push([[0],{16:function(e,t,n){e.exports={inputWrapper:"CustomForms_inputWrapper__2E2Le",inputError:"CustomForms_inputError__14q4s",textError:"CustomForms_textError__1RncZ",label:"CustomForms_label__2RpXB",caption:"CustomForms_caption__2WqK9",input:"CustomForms_input__2Awzc",container:"CustomForms_container__238ab"}},198:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),c=n(35),o=n.n(c),i=n(75),u=n.n(i),d=n(76),l=n.n(d),m=n(2),j=n(4),b=n(39);function p(){var e=new Date;return String(e.getDate()).padStart(2,"0")+"/"+String(e.getMonth()+1).padStart(2,"0")+"/"+e.getFullYear()}var O=Object(b.b)({name:"usersControl",initialState:{users:{"user-1":{login:"first@gmail.com",email:"first@gmail.com",password:"123456",phone:"79103225566",firstName:"\u0418\u0432\u0430\u043d",secondName:"\u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",lastName:"\u0418\u0432\u0430\u043d\u043e\u0432",status:"clients",created:"05.12.2020",updated:"10.12.2020"},"user-2":{login:"second@gmail.com",email:"second@gmail.com",password:"qwerty",phone:"79205575564",firstName:"John",secondName:"",lastName:"Smith",status:"partners",created:"01.12.2020",updated:""},"user-3":{login:"third@gmail.com",email:"third@gmail.com",password:"123qwe",phone:"79008885522",firstName:"\u0414\u043e\u043d\u0430\u043b\u044c\u0434",secondName:"\u0414\u0436\u043e\u043d",lastName:"\u0422\u0440\u0430\u043c\u043f",status:"admins",created:"01.12.2020",updated:"05.12.2020"}},filter:{status:null,search:null},mainMode:{mode:"usersList",id:null}},reducers:{createUser:function(e){var t="_"+Math.random().toString(36).substr(2,9),n=p();e.users[t]={login:"",email:"",password:"",phone:"",firstName:"",secondName:"",lastName:"",status:"",created:n,updated:""},e.mainMode={mode:"userForm",id:t}},updateUser:function(e,t){var n=e.mainMode.id,a=p();e.users[n]=Object(j.a)(Object(j.a)(Object(j.a)({},e.users[n]),t.payload),{},{updated:a})},deleteUser:function(e){var t=e.mainMode.id;delete e.users[t]},setFilter:function(e,t){e.filter=Object(j.a)(Object(j.a)({},e.filter),t.payload)},setMainMode:function(e,t){e.mainMode=Object(j.a)(Object(j.a)({},e.mainMode),t.payload)}}}),f=O.actions,x=f.createUser,_=f.updateUser,h=f.deleteUser,g=f.setFilter,N=f.setMainMode,v=function(e){return e.usersControl.users},S=function(e){return e.usersControl.filter},C=function(e){return e.usersControl.mainMode},y=O.reducer,k=n(15),w=n(50),M=n.n(w),q=n(25),F=n.n(q),L=function(e){var t=e.onHandleClick,n=e.icon,r=e.caption,s=e.disabled,c=e.big;return Object(a.jsxs)("button",{title:r,className:"".concat(F.a.container," ").concat(s&&F.a.disabled),onClick:t,children:[n&&Object(a.jsx)("i",{className:"".concat(F.a.icon," ").concat(n," ").concat(c&&F.a.big)}),r&&r]})},U=function(){var e=Object(m.b)(),t=Object(r.useState)(""),n=Object(k.a)(t,2),s=n[0],c=n[1],o=function(){e(g({search:s,status:null})),c("")};return Object(a.jsxs)("div",{className:M.a.container,children:[Object(a.jsx)("input",{role:"searchbox",placeholder:"Search user...","aria-label":"User Search",className:M.a.input,value:s,onChange:function(e){return c(e.currentTarget.value)},onKeyDown:function(e){"Enter"===e.key&&o(),27===e.keyCode&&c("")}}),Object(a.jsx)(L,{onHandleClick:o,icon:"fas fa-search"})]})},P=n(26),T=n.n(P),E=function(){var e=Object(m.b)(),t=Object(m.c)(S).status,n=function(t){var n=t.currentTarget.title;e(g({status:n,search:null}))};return Object(a.jsxs)("div",{className:T.a.container,children:[Object(a.jsx)(L,{caption:"all",onHandleClick:n,disabled:"all"===t}),Object(a.jsx)("div",{className:T.a.divider}),Object(a.jsx)(L,{caption:"clients",onHandleClick:n,disabled:"clients"===t}),Object(a.jsx)("div",{className:T.a.divider}),Object(a.jsx)(L,{caption:"admins",onHandleClick:n,disabled:"admins"===t}),Object(a.jsx)("div",{className:T.a.divider}),Object(a.jsx)(L,{caption:"partners",onHandleClick:n,disabled:"partners"===t})]})},H=function(e){var t=e.mainMode,n=Object(m.b)(),r=Object(m.c)(v);return Object(a.jsxs)("header",{className:l.a.container,children:["usersList"===t.mode&&Object(a.jsx)(U,{}),"usersList"===t.mode&&Object(a.jsx)(E,{}),"usersList"===t.mode&&Object(a.jsx)(L,{icon:"fas fa-plus-square",onHandleClick:function(){n(x())},big:!0}),"userPage"===t.mode&&Object(a.jsx)(L,{icon:"fas fa-pen-square",onHandleClick:function(){n(N({mode:"userForm"}))},big:!0}),"userPage"===t.mode&&Object(a.jsx)(L,{icon:"fas fa-minus-square",onHandleClick:function(){n(N({mode:"usersList"})),n(h())},big:!0}),"usersList"!==t.mode&&Object(a.jsx)(L,{icon:"fas fa-window-close",onHandleClick:function(){r[t.id].login||n(h()),n(N({mode:"usersList"}))},big:!0})]})},R=n(78),J=n.n(R),B=n(23),W=n(79),A=n.n(W),K=function(e){var t=e.id,n=e.firstName,r=e.secondName,s=e.lastName,c=Object(m.b)();return Object(a.jsxs)("div",{className:A.a.container,onDoubleClick:function(){c(N({mode:"userPage",id:t}))},children:[n," ",r," ",s]})},D=function(e){var t=function(e,t){var n,a;return t.search?(n=t.search,Object.keys(e).reduce((function(t,a){return Object.values(e[a]).map((function(e){return String(e).toLowerCase()})).includes(n)?Object(j.a)(Object(j.a)({},t),{},Object(B.a)({},a,e[a])):t}),{})):"all"===t.status?e:t.status?(a=t.status,Object.keys(e).reduce((function(t,n){return e[n].status===a?Object(j.a)(Object(j.a)({},t),{},Object(B.a)({},n,e[n])):t}),{})):[]}(e.users,Object(m.c)(S));return Object.keys(t).map((function(e){var n=t[e],r=n.firstName,s=n.secondName,c=n.lastName;return Object(a.jsx)(K,{id:e,firstName:r,secondName:s,lastName:c},e)}))},V=n(80),X=n.n(V),I=n(40),Z=n.n(I),z=function(e){var t=e.propertyKey,n=e.propertyValue;return Object(a.jsxs)("div",{className:Z.a.container,children:[Object(a.jsxs)("div",{className:Z.a.left,children:[t,":"]}),Object(a.jsx)("div",{className:Z.a.right,children:n})]})},Q=function(e){var t=e.user,n=Object.keys(t).map((function(e,n){var r=t[e],s=String(n)+e;return Object(a.jsx)(z,{propertyKey:e,propertyValue:r},s)}));return Object(a.jsx)("div",{className:X.a.container,children:n})},Y=n(51),G=n.n(Y),$=n(5),ee=n(10),te=n(87),ne=n(16),ae=n.n(ne),re=function(e){return Object(a.jsx)("div",{className:ae.a.textError,children:e.children})},se=function(e){var t=e.field,n=e.form,r=n.touched,s=n.errors,c=Object(te.a)(e,["field","form"]);return Object(a.jsx)("div",{className:ae.a.inputWrapper,children:Object(a.jsxs)("label",{className:ae.a.label,children:[Object(a.jsx)("div",{className:ae.a.caption,children:t.name+": "}),Object(a.jsx)("input",Object(j.a)(Object(j.a)(Object(j.a)({},t),c),{},{className:"".concat(ae.a.input," ").concat(r[t.name]&&s[t.name]&&ae.a.inputError)}))]})})},ce=function(e){var t=e.user,n=Object(m.b)(),r=ee.b().shape({login:ee.c().min(5,"Too Short!").max(25,"Too Long!").required("Required!"),email:ee.c().email().required("Required!"),password:ee.c().min(8,"Too Short!").max(20,"Too Long!").matches(/[A-Za-z0-9]/,"Password can only contain numbers, symbols and Latin letters.").required("Required!"),phone:ee.a().required("Required!"),firstName:ee.c().min(2,"Too Short!").max(16,"Too Long!").required("Required!"),secondName:ee.c().min(2,"Too Short!").max(16,"Too Long!"),lastName:ee.c().min(2,"Too Short!").max(16,"Too Long!").required("Required!")});return Object(a.jsx)("div",{className:G.a.container,children:Object(a.jsx)($.d,{initialValues:t,onSubmit:function(e){n(_(e)),n(N({mode:"userPage"}))},validationSchema:r,children:Object(a.jsxs)($.c,{children:[Object(a.jsx)($.b,{name:"login",placeholder:"login...",component:se}),Object(a.jsx)($.a,{name:"login",component:re}),Object(a.jsx)($.b,{name:"email",placeholder:"email...",component:se}),Object(a.jsx)($.a,{name:"email",component:re}),Object(a.jsx)($.b,{name:"password",placeholder:"password...",component:se}),Object(a.jsx)($.a,{name:"password",component:re}),Object(a.jsx)($.b,{name:"phone",placeholder:"phone number...",component:se}),Object(a.jsx)($.a,{name:"phone",component:re}),Object(a.jsx)($.b,{name:"firstName",placeholder:"first name...",component:se}),Object(a.jsx)($.a,{name:"firstName",component:re}),Object(a.jsx)($.b,{name:"secondName",placeholder:"second name...",component:se}),Object(a.jsx)($.a,{name:"secondName",component:re}),Object(a.jsx)($.b,{name:"lastName",placeholder:"last name...",component:se}),Object(a.jsx)($.a,{name:"lastName",component:re}),Object(a.jsx)("button",{className:G.a.button,type:"submit",children:"Submit"})]})})})},oe=function(e){var t=e.mainMode,n=Object(m.c)(v),r=t.id&&t.id;return Object(a.jsxs)("main",{className:J.a.container,children:["usersList"===t.mode&&Object(a.jsx)(D,{users:n}),"userPage"===t.mode&&Object(a.jsx)(Q,{user:n[r]}),"userForm"===t.mode&&Object(a.jsx)(ce,{user:n[r]})]})};var ie=function(){var e=Object(m.c)(C);return Object(a.jsxs)("div",{className:u.a.container,children:[Object(a.jsx)(H,{mainMode:e}),Object(a.jsx)(oe,{mainMode:e})]})},ue=n(86),de=n.n(ue),le=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),me=Object(b.a)({reducer:{usersControl:y},preloadedState:le});me.subscribe(de()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){}}(me.getState())})),1e3),o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(m.a,{store:me,children:Object(a.jsx)(ie,{})})}),document.getElementById("root"))},25:function(e,t,n){e.exports={container:"Button_container__3rPBe",icon:"Button_icon__2EmnW",big:"Button_big__1f4FU",disabled:"Button_disabled__16v6Z"}},26:function(e,t,n){e.exports={container:"RadioPanel_container__2Jvw1",divider:"RadioPanel_divider__3_hwd"}},40:function(e,t,n){e.exports={container:"UserPageField_container__32MVv",left:"UserPageField_left__36dOk",right:"UserPageField_right__1gkL-"}},50:function(e,t,n){e.exports={container:"Search_container__t0vR-",input:"Search_input__1JXJW"}},51:function(e,t,n){e.exports={container:"UserForm_container__3x_6e",button:"UserForm_button__2q1vu"}},75:function(e,t,n){e.exports={root:"App_root__No8bM",container:"App_container__2-TSx"}},76:function(e,t,n){e.exports={container:"Header_container__QEbm9"}},78:function(e,t,n){e.exports={container:"Main_container__1CXpa"}},79:function(e,t,n){e.exports={container:"UserString_container__E073A"}},80:function(e,t,n){e.exports={container:"UserPage_container__2K0X5"}}},[[198,1,2]]]);
//# sourceMappingURL=main.eb410a57.chunk.js.map