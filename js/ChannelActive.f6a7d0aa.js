(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ChannelActive"],{"149f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"appDownload"},[a("div",{staticClass:"page-nav"},[a("div",{staticClass:"item active"},[e._v(e._s(e.$t("message.mobilebet")))])]),a("div",{staticClass:"appDownload-block"},[a("div",{staticClass:"appDownload-info"},[a("div",{staticClass:"qrcode"},[a("img",{attrs:{id:"er_code",src:e.er_pic,alt:""}}),a("img",{staticClass:"qrlogo",attrs:{src:e.$imgs["common/qrlogo"],alt:""}})]),a("p",[a("span",[e._v("凯王APP")]),a("span",{staticStyle:{color:"#666"}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.$imgs["appdownload/ios"],expression:"$imgs['appdownload/ios']"}],attrs:{alt:""}}),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.$imgs["appdownload/android"],expression:"$imgs['appdownload/android']"}],attrs:{alt:""}})])])])])])},s=[],i=(a("a4d3"),a("4de4"),a("4160"),a("a15b"),a("e439"),a("dbb4"),a("b64b"),a("ac1f"),a("1276"),a("159b"),a("2fa7")),r=a("2f62"),o=a("d055"),l=a.n(o);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={errorCorrectionLevel:"H",type:"image/jpeg",rendererOpts:{quality:.3}},d={name:"AppDownload",data:function(){return{er_pic:"",ios_update_text:"",android_update_text:""}},computed:u({},Object(r["e"])("global",["siteInfo"])),watch:{siteInfo:{handler:function(){this.ios_update_text=this.siteInfo.ios_update_text.split("\n").join("<br>"),this.android_update_text=this.siteInfo.android_update_text.split("\n").join("<br>")},deep:!0}},mounted:function(){var e=this;l.a.toDataURL(this.$constant.downAppUrl,m,(function(t,a){if(t)throw t;e.er_pic=a}))}},g=d,p=(a("a1f7"),a("2877")),f=Object(p["a"])(g,n,s,!1,null,"1d1a1d09",null);t["default"]=f.exports},"190c":function(e,t,a){},4981:function(e,t,a){e.exports={agent_nav_title:"#000000",agent_chart_color:"#C56F48"}},"5e59":function(e,t,a){},7047:function(e,t,a){"use strict";var n=a("190c"),s=a.n(n);s.a},"7b76":function(e,t,a){"use strict";var n=a("5e59"),s=a.n(n);s.a},"88af":function(e,t,a){},8966:function(e,t,a){"use strict";var n=a("88af"),s=a.n(n);s.a},"8c1a":function(e,t,a){"use strict";var n=a("9acd"),s=a.n(n);s.a},9316:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-dialog"},[a("el-dialog",{attrs:{visible:e.visible,"before-close":e.handleClose,width:"500px"},on:{"update:visible":function(t){e.visible=t}}},[a("el-tabs",{model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("el-tab-pane",{attrs:{label:e.$t("agent.loginTitle"),name:"account"}},[a("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{placeholder:e.$t("agent.form.usernamePlaceholder")},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{prop:"password",type:"password",placeholder:e.$t("agent.form.passwordPlaceholder")},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",[a("el-button",{staticClass:"submit",attrs:{type:"primary",loading:e.submitLoginLoading},on:{click:e.doLogin}},[e._v(" "+e._s(e.$t("agent.loginBtn"))+" ")])],1)],1)],1),a("el-tab-pane",{attrs:{label:e.$t("agent.registerTitle"),name:"register"}},[a("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.rules}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{placeholder:e.$t("agent.form.usernamePlaceholder")},model:{value:e.registerForm.username,callback:function(t){e.$set(e.registerForm,"username",t)},expression:"registerForm.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:e.$t("agent.form.passwordPlaceholder")},model:{value:e.registerForm.password,callback:function(t){e.$set(e.registerForm,"password",t)},expression:"registerForm.password"}})],1),a("el-form-item",{attrs:{prop:"wechat"}},[a("el-input",{attrs:{placeholder:e.$t("agent.form.wechatPlaceholder")},model:{value:e.registerForm.wechat,callback:function(t){e.$set(e.registerForm,"wechat",t)},expression:"registerForm.wechat"}})],1),a("el-form-item",{attrs:{prop:"skype"}},[a("el-input",{attrs:{placeholder:e.$t("请输入Skype账号")},model:{value:e.registerForm.skype,callback:function(t){e.$set(e.registerForm,"skype",t)},expression:"registerForm.skype"}})],1),a("el-form-item",{staticClass:"phone",attrs:{prop:"mobile"}},[a("svg-icon",{staticClass:"phone",attrs:{link:"phone"}}),a("span",{staticClass:"plus"},[e._v("+")]),a("div",{staticClass:"line"}),a("el-input",{staticClass:"input-with-select",attrs:{type:"number",placeholder:e.$t("agent.form.phonePlaceholder"),oninput:"if(value.length>11)value=value.slice(0,11)"},model:{value:e.registerForm.mobile,callback:function(t){e.$set(e.registerForm,"mobile",t)},expression:"registerForm.mobile"}},[a("el-select",{attrs:{slot:"prepend",placeholder:e.$t("请选择")},slot:"prepend",model:{value:e.registerForm.phone_area_code,callback:function(t){e.$set(e.registerForm,"phone_area_code",t)},expression:"registerForm.phone_area_code"}},e._l(e.phoneCodes,(function(t,n){return a("el-option",{key:n,attrs:{value:t.split("-")[2]}},[a("span",{staticStyle:{float:"left"}},[e._v(e._s(e.$i18n_&&"en"==e.$i18n_.locale?t.split("-")[0]:t.split("-")[1]))]),a("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.split("-")[2]))])])})),1)],1)],1),a("el-form-item",[a("el-button",{staticClass:"submit",attrs:{type:"primary",loading:e.submitRegisterLoading},on:{click:e.doRegister}},[e._v(" "+e._s(e.$t("agent.registerBtn"))+" ")])],1)],1)],1)],1)],1)],1)},s=[],i=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("159b"),a("96cf"),a("2fa7")),r=a("2f62"),o=a("365c"),l=a("bbbc");function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(a,!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var m={name:"LoginModal",data:function(){var e=this;return{visible:!1,active:"account",phoneCodes:[],phoneCode:86,form:{username:"",password:""},registerForm:{username:"",password:"",wechat:"",skype:"",phone_area_code:86,mobile:null,smsCode:null},submitLoginLoading:!1,submitRegisterLoading:!1,rules:{username:[{trigger:"blur",validator:function(t,a,n){""===a?n(new Error(e.$t("message.accountPlaceholder"))):n()}}],password:[{trigger:"blur",validator:function(t,a,n){console.log(t),""===a?n(new Error(e.$t("message.passwordPlaceholder"))):new RegExp(/^[A-Za-z0-9]{6,12}$/).test(a)?n():n(new Error(e.$t("message.formatPassword")))}}],wechat:[{trigger:"blur",validator:function(t,a,n){a?n():n(new Error(e.$t("agent.form.wechatPlaceholder")))}}],skype:[],mobile:[{trigger:"blur",validator:function(t,a,n){""===a?n(new Error(e.$t("message.telPlaceholder"))):new RegExp(/^[0-9]{5,16}$/).test(a)?n():n(new Error(e.$t("message.formatTel2")))}}]}}},computed:u({},Object(r["e"])("agent",["loginVisible"])),watch:{loginVisible:function(e){this.visible=e}},created:function(){this.phoneArea(),this.visible=this.loginVisible},methods:u({},Object(r["b"])("agent",["login","setLoginVisible","getUserInfo"]),{phoneArea:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(Object(o["v"])());case 2:e=t.sent,this.phoneCodes=e;case 4:case"end":return t.stop()}}),null,this)},doLogin:function(){var e=this;this.$refs["form"].validate((function(t){var a,n,s;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:t&&(e.submitLoginLoading=!0,a=e.form,n=a.username,s=a.password,e.login({username:n,password:s}).then((function(){e.getUserInfo(),e.submitLoginLoading=!1,e.$router.push({name:"AgentDashboard",query:{login:void 0}}),e.setLoginVisible(!1)})).catch((function(){e.submitLoginLoading=!1})));case 1:case"end":return i.stop()}}))}))},doRegister:function(){var e=this;this.$refs["registerForm"].validate((function(t){return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:if(!t){a.next=21;break}return a.prev=1,e.submitRegisterLoading=!0,Object.assign(e.registerForm,{repassword:e.registerForm.password,domain:window.location.host,id:window.sessionStorage.getItem("agentCode")}),a.next=6,regeneratorRuntime.awrap(Object(l["p"])(e.registerForm));case 6:return e.$message.success(e.$t("message.signupSuccess")),e.submitRegisterLoading=!1,a.next=10,regeneratorRuntime.awrap(e.login({username:e.registerForm.username,password:e.registerForm.password}));case 10:return a.next=12,regeneratorRuntime.awrap(e.getUserInfo());case 12:e.setLoginVisible(!1),e.$router.push({name:"AgentDashboard"}),a.next=18;break;case 16:a.prev=16,a.t0=a["catch"](1);case 18:return a.prev=18,e.submitRegisterLoading=!1,a.finish(18);case 21:case"end":return a.stop()}}),null,null,[[1,16,18,21]])}))},handleCountdownEnd:function(e){this.counting=!1},handleClose:function(e){console.log(111),this.setLoginVisible(!1),e&&"function"===typeof e&&e()}})},d=m,g=(a("7b76"),a("2877")),p=Object(g["a"])(d,n,s,!1,null,"7f464f6e",null);t["a"]=p.exports},"9acd":function(e,t,a){},"9b71":function(e,t,a){},a1f7:function(e,t,a){"use strict";var n=a("b591"),s=a.n(n);s.a},b591:function(e,t,a){},d19f:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"agent"},[a("h2",{staticClass:"channel-title"},[a("span",[e._v(e._s(e.$t("message.joinAgentTit")))])]),a("div",{staticClass:"agent-main"},[a("div",{staticClass:"agent-top"},[a("div",[a("h3",[e._v("合作加盟")]),a("p",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.$imgs["agent/landing/Combined"],expression:"this.$imgs['agent/landing/Combined']"}],attrs:{alt:""}}),a("span",[e._v("400-842-3711")])])]),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.$imgs["agent/landing/bet_jiameng"],expression:"this.$imgs['agent/landing/bet_jiameng']"}],attrs:{alt:""}}),a("div",[a("h3",[e._v("共享财程")]),a("p",[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.$imgs["agent/landing/email"],expression:"this.$imgs['agent/landing/email']"}],attrs:{alt:""}}),a("span",[e._v("400-842-3711")])])])]),a("layout",{staticClass:"agent-list",attrs:{"align-center":"","justify-center":"","grow-shrink-0":""}},[a("layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.$imgs["agent/landing/bet_daiyan"],expression:"this.$imgs['agent/landing/bet_daiyan']"}],attrs:{alt:""}}),a("p",[e._v("阿扎尔倾情代言"),a("br"),e._v("世界巨星放心之选")])]),a("layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.$imgs["agent/landing/bet_yongjin"],expression:"this.$imgs['agent/landing/bet_yongjin']"}],attrs:{alt:""}}),a("p",[e._v("佣金周结"),a("br"),e._v("快速到账")])]),a("layout",{attrs:{"align-center":"",column:"","justify-center":""}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.$imgs["agent/landing/bet_hezuo"],expression:"this.$imgs['agent/landing/bet_hezuo']"}],attrs:{alt:""}}),a("p",[e._v("战略合作伙伴"),a("br"),e._v("实力领先 共襄盛举")])])],1),a("layout",{staticClass:"agrnt-commission"},[a("div",{staticClass:"agrnt-nav-content"},[a("div",{staticClass:"agent-nav-title"},[a("span"),e._v("佣金计划"),a("span")]),a("layout",{staticClass:"commission-list"},[a("table",[a("thead",[a("tr",[a("th",[e._v("级别")]),a("th",[e._v("公司本月盈利")]),a("th",[e._v("活跃玩家数量最低要求")]),a("th",[e._v("佣金百分之比")])])]),a("tbody",e._l(e.commissionData,(function(t,n){return a("tr",{key:n},[a("td",[e._v(e._s(t.lev))]),a("td",[e._v(e._s(t.yl))]),a("td",[e._v(e._s(t.hys))]),a("td",[e._v(e._s(t.yjb))])])})),0)])]),a("div",{staticClass:"tip"},[e._v(" 每月10号之前完成推广代理佣金结算，推广代理可在每月10号后，申请提取佣金。佣金将在三个工作日内自动转入取款账户。 ")])],1)]),a("div",{},[a("el-button",{attrs:{type:"gray"},on:{click:function(t){e.compDia=!0}}},[e._v("合作协议")]),e.isLogin?e._e():a("el-button",{staticClass:"add",attrs:{type:"gray"},on:{click:e.join}},[e._v(" 加入我们 ")])],1)],1),a("LoginModal"),a("div",{staticClass:"landing-desc"},[a("el-dialog",{attrs:{title:"合作协议",visible:e.compDia,width:"600px"},on:{"update:visible":function(t){e.compDia=t}}},[a("div",{staticClass:"comp-prop"},[a("h3",[e._v("一、注册规约")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.registerationCodeDetail1"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.registerationCodeDetail2"))+" ")]),a("h3",[e._v("二、权责条款")]),a("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("message.termsOfPowerAndResponsibilityTitle1"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termsOfPowerAndResponsibilityTitle1Detail1"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termsOfPowerAndResponsibilityTitle1Detail2"))+" ")]),a("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("message.termsOfPowerAndResponsibilityTitle2"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termsOfPowerAndResponsibilityTitle2Detail1"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termsOfPowerAndResponsibilityTitle2Detail2"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termsOfPowerAndResponsibilityTitle2Detail3"))+" ")]),a("h3",[e._v("三、协议期限和终止")]),a("div",{staticClass:"text"},[e._v(" 合作协议从合作伙伴申请成功后开始执行。合作伙伴在任何时间均可终止此合约，但必须以书面形式提前7日内通知对方有关合约的终止，合作伙伴可将通知以电邮形式寄致："+e._s(e.siteInfo.email)+" 如合作伙伴违反合作协议，"+e._s(e.$constant.title)+"有权在没有通知的情况下终止合约。 ")]),a("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle2"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle2Detail"))+" ")]),a("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle3"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle3Detail"))+" ")]),a("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle4"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle4Detail"))+" ")]),a("div",{staticClass:"title"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle5"))+" ")]),a("div",{staticClass:"text"},[e._v(" "+e._s(e.$t("message.termOfAgreementTitle5Detail"))+" ")])])])],1)],1)},s=[],i=(a("a4d3"),a("4de4"),a("4160"),a("d81d"),a("fb6a"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("96cf"),a("2fa7")),r=a("2b0e"),o=a("7ba4"),l=a.n(o),c=a("2f62"),u=a("93dd"),m=a("bbbc"),d=a("9316"),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart"},[a("ve-line",{attrs:{data:e.chartData,settings:e.chartOptions,extend:e.chartExtend,height:"260px"}})],1)},p=[],f=a("c3da"),v=a.n(f),b=a("4981"),h={name:"UserStat",components:{VeLine:v.a},data:function(){return{chartData:{columns:["label","value"],rows:[{label:"A",value:5},{label:"B",value:20},{label:"C",value:15},{label:"D",value:25},{label:"E",value:5}]},chartOptions:{responsive:!0,maintainAspectRatio:!1},chartExtend:{color:b.agent_chart_color,legend:{show:!1,textStyle:{color:"#ccc"}},tooltip:{show:!1},yAxis:{axisLine:{lineStyle:{color:"#353435"}},splitLine:{lineStyle:{color:"#353435"}},axisLabel:{formatter:function(e){return""},showMaxLabel:!0,fontSize:14,fontFamily:'"Din Alternate", Quicksand, "PingFang SC"',color:"#666"}},xAxis:{axisLine:{lineStyle:{color:"#353435"}},splitLine:{lineStyle:{color:"#353435"}},z:10,axisLabel:{formatter:function(e){return e.slice(-5)},showMaxLabel:!0,fontSize:14,fontFamily:'"Din Alternate", Quicksand, "PingFang SC"',color:"#ccc"}}}}},created:function(){},methods:{}},y=h,_=(a("7047"),a("2877")),w=Object(_["a"])(y,g,p,!1,null,"690e6935",null),x=w.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart"},[a("ve-histogram",{attrs:{data:e.chartData,settings:e.chartOptions,extend:e.chartExtend,width:"260px",height:"260px"}})],1)},$=[],C=a("d768"),j=a.n(C),A=a("4981"),P={name:"UserProfit",components:{VeHistogram:j.a},data:function(){return{chartData:{columns:["label","value"],rows:[{label:"A",value:15},{label:"B",value:25},{label:"C",value:20},{label:"D",value:5},{label:"E",value:20}]},chartOptions:{responsive:!0,maintainAspectRatio:!1},chartExtend:{color:A.agent_chart_color,legend:{show:!1,textStyle:{color:"#ccc"}},tooltip:{show:!1},yAxis:{axisLine:{lineStyle:{color:"#353435"}},splitLine:{lineStyle:{color:"#353435"}},axisLabel:{formatter:function(e){return""},showMaxLabel:!0,fontSize:14,fontFamily:'"Din Alternate", Quicksand, "PingFang SC"',color:"#666"}},xAxis:{axisLine:{lineStyle:{color:"#353435"}},splitLine:{lineStyle:{color:"#353435"}},z:10,axisLabel:{formatter:function(e){return e.slice(-5)},showMaxLabel:!0,fontSize:14,fontFamily:'"Din Alternate", Quicksand, "PingFang SC"',color:"#ccc"}}}}},created:function(){},methods:{}},L=P,D=(a("fe90"),Object(_["a"])(L,O,$,!1,null,"399d92dd",null)),k=D.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart"},e._l(e.lists,(function(t,n){return a("layout",{key:n,attrs:{"align-center":""}},[a("label",[e._v(e._s(t.label))]),a("el-progress",{attrs:{percentage:t.value,color:e.customColor,"stroke-width":5}})],1)})),1)},E=[],F={name:"UserReport",data:function(){return{customColor:"$--color-primary",lists:[{label:"A",value:55},{label:"B",value:45},{label:"C",value:15},{label:"D",value:60},{label:"E",value:80}]}},created:function(){},methods:{}},R=F,z=(a("8c1a"),Object(_["a"])(R,S,E,!1,null,"10ac1064",null)),T=z.exports;function H(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?H(a,!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):H(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}r["default"].use(l.a);var q={name:"AgentLanding",components:{UserStat:x,UserProfit:k,UserReport:T,LoginModal:d["a"]},data:function(){return{showlist:!1,visibles:{stat:!1,profit:!1,report:!1},excellentArr:[],tipsArr:[{title:"高能返佣"},{title:"最优质的品质"},{title:"丰富的游戏支持"}],commissionData:[{lev:"1",yl:"1-50,000",hys:"3",yjb:"30.00%"},{lev:"2",yl:"50,001-200,000",hys:"10",yjb:"35.00%"},{lev:"3",yl:"200,001-600,000",hys:"30",yjb:"40.00%"},{lev:"4",yl:"600,001-1,000,000",hys:"60",yjb:"45.00%"},{lev:"5",yl:"1,000,001以上",hys:"100",yjb:"50.00%"}],stepArr:[{title:"第一步",step:"提交申请",content:"填写代理申请表，一旦申请成功，您将成为最有吸引力的合作计划的一份子。"},{title:"第二步",step:"资格审核",content:"提交申请后留下联系方式，等待我们的代理专员审核，审核通过后马上联系您成为我们的合作伙伴。"},{title:"第三步",step:"立即推广",content:"除了运用您本身的资源以外，我们也提供多样化的物料，市场渠道以及推广方式给你进行推广，与您一起开拓市场，让您如虎添翼。"},{title:"第四步",step:"立即盈利",content:"您的佣金来自每一位您带来的会员，会员越多，投注越多，盈利越多！心动不如行动，马上加入吧！"}],hezuoArr:[{name:"Skype:198681681@qq.com"},{name:"Telegram:@wanqudaili"},{name:"WhatsApp:13218765428"},{name:"QQ:198681681"},{name:"微信:AAwanqu"},{name:"手机号：1231232332"}],yewuArr:[{name:"AA集团",tip:"aceadvanture.com"},{name:"{{$constant.title}}",tip:"wanqu.bet"},{name:"AA贵宾厅",tip:"aagbt.com"},{name:"AA游艇会",tip:"aagbt.com"},{name:"AA电投",tip:"aadiantou.com"},{name:"AA俱乐部",tip:"aavipjlb.com"}],chartData:[],chartSettings:[],staticPage:{},compDia:!1,phoneNum:null}},computed:I({},Object(c["e"])("agent",["userInfo","token"]),{},Object(c["e"])("global",["siteInfo"]),{},Object(c["c"])(["isLogin"])),watch:{$router:function(e){}},mounted:function(){},created:function(){var e=this;console.log(111),console.log(this.siteInfo),this.siteInfo.business_cooperation.map((function(t,a){"WhatsApp"===t.name&&(e.phoneNum=t.contact)}))},methods:I({},Object(c["b"])("agent",["setLoginVisible"]),{excellentagent:function(){var e,t,a;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(Object(u["k"])());case 2:for(e=n.sent,t=0,a=e.length;t<a;t+=5)this.excellentArr.push(e.slice(t,t+5));case 4:case"end":return n.stop()}}),null,this)},getScrollTop:function(){var e=0;return document.documentElement&&document.documentElement.scrollTop?e=document.documentElement.scrollTop:document.body&&(e=document.body.scrollTop),e},getClientHeight:function(){var e=0;return e=document.body.clientHeight&&document.documentElement.clientHeight?document.body.clientHeight<document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight:document.body.clientHeight>document.documentElement.clientHeight?document.body.clientHeight:document.documentElement.clientHeight,e},handleScroll:function(){this.getScrollTop()+this.getClientHeight()>1500&&(this.showlist=!0)},getAgentProtocol:function(){var e=this;Object(m["l"])({code:"agent_agreement"}).then((function(t){e.staticPage=t}))},checkLogin:function(e){var t=e.query.login;t&&this.$router.push({name:"AgentLogin"})},join:function(){this.userInfo&&this.token?this.$router.push({name:"AgentDashboard"}):this.$router.push({name:"AgentLogin"})},inView:function(e){this.visibles[e]=!0}})},U=q,V=(a("8966"),Object(_["a"])(U,n,s,!1,null,"6c768776",null));t["default"]=V.exports},fe90:function(e,t,a){"use strict";var n=a("9b71"),s=a.n(n);s.a}}]);