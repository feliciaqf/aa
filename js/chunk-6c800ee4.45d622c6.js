(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c800ee4"],{3338:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"block agent-profile-yabo"},[r("h2",[e._v(e._s(e.$t("message.vipOpen")))]),r("el-form",{ref:"form",attrs:{"label-position":"top",rules:e.rules,model:e.form}},[r("el-form-item",{attrs:{prop:"username",label:e.$t("agent.createAccount.username")}},[r("el-input",{attrs:{type:"text",placeholder:e.$t("agent.createAccount.usernamePlaceholder")},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{prop:"password",label:e.$t("agent.createAccount.password")}},[r("el-input",{attrs:{type:"password",placeholder:e.$t("agent.createAccount.passwordPlaceholder")},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{prop:"repassword",label:e.$t("agent.createAccount.repassword")}},[r("el-input",{attrs:{type:"password",placeholder:e.$t("message.repasswordPlaceholder")},model:{value:e.form.repassword,callback:function(t){e.$set(e.form,"repassword",t)},expression:"form.repassword"}})],1),r("el-form-item",{attrs:{label:""}},[r("el-button",{staticClass:"submit",attrs:{type:"primary",loading:e.submitLoading},on:{click:e.onSubmit}},[e._v(" "+e._s(e.$t("agent.createAccount.button"))+" ")])],1)],1)],1)},s=[],n=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("4d63"),r("ac1f"),r("25f0"),r("159b"),r("96cf"),r("2fa7")),o=r("bbbc"),c=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={name:"AgentcreateAc",data:function(){var e=this;return{submitLoading:!1,visible:!1,form:{username:"",password:"",repassword:""},rules:{username:[{trigger:"blur",validator:function(t,r,a){""===r?a(new Error(e.$t("agent.createAccount.usernamePlaceholder"))):new RegExp(/^[A-Za-z0-9]{6,12}$/).test(r)?a():a(new Error(e.$t("message.formatAccount")))}}],password:[{trigger:"blur",validator:function(t,r,a){""===r?a(new Error(e.$t("agent.createAccount.passwordPlaceholder"))):new RegExp(/^[A-Za-z0-9]{6,12}$/).test(r)?a():a(new Error(e.$t("message.formatPassword")))}}],repassword:[{trigger:"blur",validator:function(t,r,a){""===r?a(new Error(e.$t("message.repasswordPlaceholder"))):r!==e.form.password?a(new Error(e.$t("message.formatConfirmPassword"))):a()}}]}}},computed:u({},Object(c["e"])("agent",["userInfo","createAccountVisible"])),watch:{createAccountVisible:function(e){this.visible=e}},created:function(){this.visible=this.createAccountVisible},mounted:function(){},methods:u({},Object(c["b"])("agent",["setCreateAccountVisible","getUserInfo"]),{onSubmit:function(){var e=this;this.$refs["form"].validate((function(t){return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:if(!t){r.next=14;break}return r.prev=1,e.submitLoading=!0,r.next=5,regeneratorRuntime.awrap(Object(o["b"])(e.form));case 5:e.$message.success(e.$t("agent.createAccount.success")),e.setCreateAccountVisible(!1),r.next=11;break;case 9:r.prev=9,r.t0=r["catch"](1);case 11:return r.prev=11,e.submitLoading=!1,r.finish(11);case 14:case"end":return r.stop()}}),null,null,[[1,9,11,14]])}))},handleClose:function(e){this.setCreateAccountVisible(!1),e&&"function"===typeof e&&e()}})},p=l,f=(r("a572"),r("5727"),r("2877")),m=Object(f["a"])(p,a,s,!1,null,"3688b347",null);t["default"]=m.exports},5727:function(e,t,r){"use strict";var a=r("f576"),s=r.n(a);s.a},a572:function(e,t,r){"use strict";var a=r("d304"),s=r.n(a);s.a},d304:function(e,t,r){},f576:function(e,t,r){}}]);