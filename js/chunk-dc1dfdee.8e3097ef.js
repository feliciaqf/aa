(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc1dfdee"],{"12eb":function(t,e,a){},"3ca3":function(t,e,a){"use strict";var s=a("6547").charAt,n=a("69f3"),i=a("7dd0"),r="String Iterator",o=n.set,l=n.getterFor(r);i(String,"String",(function(t){o(this,{type:r,string:String(t),index:0})}),(function(){var t,e=l(this),a=e.string,n=e.index;return n>=a.length?{value:void 0,done:!0}:(t=s(a,n),e.index+=t.length,{value:t,done:!1})}))},"45fc":function(t,e,a){"use strict";var s=a("23e7"),n=a("b727").some,i=a("b301");s({target:"Array",proto:!0,forced:i("some")},{some:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"5fd0":function(t,e,a){},6161:function(t,e,a){"use strict";var s=a("c7fe"),n=a.n(s);n.a},"63ea":function(t,e,a){"use strict";var s=a("6aa5"),n=a.n(s);n.a},"6aa5":function(t,e,a){},"6d830":function(t,e,a){var s={"./ABC.png":"85d0","./BCCB.png":"17d6","./BOC.png":"fb3f","./BOCOM.png":"89e2","./BOS.png":"0d98","./CCB.png":"02ae","./CEB.png":"1167","./CGB.png":"31a0","./CIB.png":"7f52","./CMB.png":"6fe6","./CMBC.png":"ad20","./Default.png":"b9e4","./ECITIC.png":"49df","./HXB.png":"35ee","./HZCBC.png":"edc5","./ICBC.png":"ebab","./NBCBC.png":"0e2a","./PAB.png":"f9e0","./PSBC.png":"5280","./SPDB.png":"269c","./bg-bank-card.png":"118e"};function n(t){var e=i(t);return a(e)}function i(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="6d830"},"70d2":function(t,e,a){"use strict";var s=a("d502"),n=a.n(s);n.a},"97e2":function(t,e,a){"use strict";var s=a("12eb"),n=a.n(s);n.a},b235:function(t,e,a){},c7fe:function(t,e,a){},d43e:function(t,e,a){"use strict";var s=a("b235"),n=a.n(s);n.a},d502:function(t,e,a){},f5f6:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"withdraw"},[a("div",{staticClass:"main-top"},[a("h2",[t._v(t._s(t.$t(t.$route.meta.title)))])]),a("div",{staticClass:"main-body"},[a("ul",{staticClass:"form-ul"},[a("li",[a("h2",[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.$t("Left Center 提示文字"),placement:"left"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v(t._s(t.$t("手续费：取款时根据取款金额收取的银行手续费")))]),a("p",[t._v(t._s(t.$t("行政费：领取红利产生未达标的流水按照比例扣除的费用")))]),a("p",[t._v(" "+t._s(t.$t("扣除优惠：领取红利之后未达标流水要求时申请取款需要扣除的红利金额"))+" ")]),a("p",[t._v(t._s(t.$t("最后可取：扣除手续费、行政费和优惠之后可以取款的总金额")))])]),a("i",{staticClass:"el-icon-question"}),t._v(" "+t._s(t.$t("相关费用说明"))+" ")])],1),a("layout",{staticClass:"charge",attrs:{"justify-space-between":""}},[a("div",[a("strong",[t._v(t._s(t._f("currency")(t.costManage[0],"¥")))]),a("span",[t._v(t._s(t.$t("手续费")))])]),a("div",[a("strong",[t._v(t._s(t._f("currency")(t.costManage[1],"¥")))]),a("span",[t._v(t._s(t.$t("行政费")))])]),a("div",[a("strong",[t._v(t._s(t._f("currency")(t.costManage[2],"¥")))]),a("span",[t._v(t._s(t.$t("扣除优惠")))])]),a("div",[a("strong",[t._v(t._s(t._f("currency")(t.costManage[3],"¥")))]),a("span",[t._v(t._s(t.$t("最后可取")))])])])],1),a("li",[a("el-input",{staticClass:"amount tall",attrs:{placeholder:""+t.$t("最低取款金额")+t.min_money+t.$t("元")},model:{value:t.form.withdraw_money,callback:function(e){t.$set(t.form,"withdraw_money",e)},expression:"form.withdraw_money"}},[a("span",{attrs:{slot:"prefix"},slot:"prefix"},[t._v("¥")])])],1),a("li",[a("h2",[t._v(t._s(t.$t("取款卡")))]),a("BankcardList",{staticClass:"max-width",attrs:{lists:t.bankList,bankcard:t.bankcard},on:{onSelect:t.selectBankcard,add:t.bankcardAdd}})],1),a("li",[a("h2",[t._v(t._s(t.$t("message.fundPassword")))]),a("PasswordInput",{model:{value:t.form.pay_password,callback:function(e){t.$set(t.form,"pay_password",e)},expression:"form.pay_password"}})],1),a("li",{on:{click:function(e){return t.fogetPassword()}}},[a("a",[t._v(t._s(t.$t("忘记资金密码？")))])]),a("li",[t.DetectionSave?a("layout",[a("svg-icon",{staticClass:"satalayout",attrs:{link:"safe-layout"}}),a("i",{staticClass:"el-icon-loading"}),a("span",{staticClass:"saveing"},[t._v(t._s(t.$t("安全检测中...")))])],1):a("layout",[a("svg-icon",{staticClass:"safe",attrs:{link:"safe"}}),a("span",[t._v(t._s(t.$t("安全设置检测成功！无需短信校验")))])],1)],1),a("li",[a("el-button",{staticClass:"submit",attrs:{type:"primary",disabled:!t.allowSubmit,loading:t.submiting},on:{click:t.onSubmit}},[t._v(" "+t._s(t.$t("message.confirmSubmit"))+" ")])],1)])]),a("el-dialog",{staticClass:"ucenter-dialog noheader",attrs:{visible:t.dialogPhoneBindTipVisible,width:"500px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.onDialogPhoneBindTipClose},on:{"update:visible":function(e){t.dialogPhoneBindTipVisible=e}}},[a("layout",{staticClass:"dialog-body warning",attrs:{wrap:"","justify-center":""}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"el-icon-warning"})]),a("h2",[t._v(t._s(t.$t("安全提示")))]),a("p",[t._v(t._s(t.$t("尊敬的会员为了您的资金安全，建议您先绑定手机号")))])]),a("layout",{staticClass:"dialog-footer",attrs:{slot:"footer",wrap:"","justify-center":""},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.phoneBind}},[t._v(" "+t._s(t.$t("立即绑定"))+" ")]),a("el-button",{on:{click:t.cancelPhoneBind}},[t._v(" "+t._s(t.$t("暂不绑定"))+" ")])],1)],1),a("el-dialog",{staticClass:"ucenter-dialog",attrs:{visible:t.dialognotallVisible,width:"500px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.cancelFundall},on:{"update:visible":function(e){t.dialognotallVisible=e}}},[a("layout",{staticClass:"dialog-body warning",attrs:{wrap:"","justify-center":""}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"el-icon-warning"})]),a("h2",[t._v(t._s(t.$t("安全提示")))]),a("p",[t._v(t._s(t.$t("您未绑定手机号、邮箱、密保问题请在个人资料页面绑定")))])]),a("layout",{staticClass:"dialog-footer",attrs:{slot:"footer",wrap:"","justify-center":""},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.setPhonePassword}},[t._v(" "+t._s(t.$t("立即设置"))+" ")]),a("el-button",{on:{click:t.cancelFundall}},[t._v(" "+t._s(t.$t("暂不设置"))+" ")])],1)],1),a("el-dialog",{staticClass:"ucenter-dialog",attrs:{visible:t.dialogFundPasswordVisible,width:"500px","close-on-click-modal":!1,"close-on-press-escape":!1,"before-close":t.onDialogFundPasswordClose},on:{"update:visible":function(e){t.dialogFundPasswordVisible=e}}},[a("layout",{staticClass:"dialog-body warning",attrs:{wrap:"","justify-center":""}},[a("div",{staticClass:"icon"},[a("i",{staticClass:"el-icon-warning"})]),a("h2",[t._v(t._s(t.$t("安全提示")))]),a("p",[t._v(t._s(t.$t("您没有设置资金密码，为了保障资金安全请设置资金密码")))])]),a("layout",{staticClass:"dialog-footer narrow",attrs:{slot:"footer",wrap:"","justify-center":""},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:t.setFundPassword}},[t._v(" "+t._s(t.$t("立即设置"))+" ")]),a("el-button",{on:{click:t.cancelFundPassword}},[t._v(" "+t._s(t.$t("暂不设置"))+" ")])],1)],1),a("el-dialog",{staticClass:"ucenter-dialog",attrs:{visible:t.dialogFlowVisible,title:t.$t("流水稽核"),width:"800px",center:"","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.dialogFlowVisible=e}}},[a("RecordTable",{attrs:{"table-columns":t.flowTableColumns,"table-data":t.flowTableData,height:250,"empty-icon":t.$imgs["empty-icon/empty@2x"],"empty-text":t.$t("暂无流水记录")}}),a("Transfer",{on:{changeVisible:t.changeVisible}}),t.flowTextError?a("h3",{staticStyle:{"text-align":"center","margin-top":"20px","line-height":"30px","font-size":"16px"}},[t._v(" "+t._s(t.flowTextError)+", "),a("span",{staticStyle:{color:"$--color-primary"}},[t._v(t._s(t.$t("强制提款将扣除一定行政费用！")))])]):t._e()],1)],1)},n=[],i=(a("a4d3"),a("4de4"),a("4160"),a("45fc"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("e587")),r=a("2fa7"),o=a("2f62"),l=a("5785"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"transfer"}},[s("el-form",{directives:[{name:"show",rawName:"v-show",value:t.wallet.all_platform_money>10&&1!==t.wallet.is_auto_trans,expression:"wallet.all_platform_money > 10 && wallet.is_auto_trans !== 1"}],ref:"form",staticClass:"form",attrs:{model:t.form,rules:t.rules}},[s("el-form-item",{staticClass:"account",attrs:{prop:""}},[s("layout",{staticClass:"multiple",attrs:{"justify-space-between":"","align-center":""}},[s("p",{staticClass:"title out"},[t._v(" "+t._s(t.$t("转出钱包"))+" ")]),s("p",{staticClass:"title in"},[t._v(" "+t._s(t.$t("转入钱包"))+" ")])]),s("layout",{staticClass:"multiple",attrs:{"justify-space-between":"","align-center":""}},[s("el-cascader",{staticClass:"tall",attrs:{placeholder:t.$t("主账户"),props:t.optionProps,options:t.platforms},on:{change:t.onFromChange},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t.arrowStatus?s("img",{staticClass:"pointer",attrs:{src:a("1627")},on:{click:t.exchange}}):s("img",{staticClass:"pointer translate",attrs:{src:a("1627")},on:{click:t.exchange}}),s("el-cascader",{staticClass:"tall",attrs:{placeholder:t.$t("主账户"),props:t.optionProps,options:t.platforms},on:{change:t.onToChange},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)],1),s("p",{staticClass:"title"},[t._v(" "+t._s(t.$t("转入金额"))+" ")]),s("el-form-item",{staticClass:"amount",attrs:{prop:"money"}},[s("el-input",{staticClass:"amount tall",attrs:{type:"number",placeholder:t.$t("message.transferAmount")},on:{change:t.onMoneyChange},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}},[s("span",{attrs:{slot:"prefix"},slot:"prefix"},[t._v("¥")]),s("span",{attrs:{slot:"append"},on:{click:t.setAll},slot:"append"},[t._v(t._s(t.$t("全部")))])])],1)],1),s("layout",{staticStyle:{"margin-top":"38px"},attrs:{"justify-center":"","justify-space-between":""}},[t.wallet.all_platform_money<10?[s("el-button",{staticStyle:{width:"270px"},attrs:{type:"primary"},on:{click:function(e){return t.$emit("changeVisible",!1)}}},[t._v(" "+t._s(t.$t("继续取款"))+" ")]),s("el-button",{staticStyle:{width:"270px"},attrs:{type:"gray"},on:{click:function(e){return t.$router.push({name:"Dashboard"})}}},[t._v(" "+t._s(t.$t("暂不取款"))+" ")])]:[s("el-button",{staticStyle:{width:"270px"},attrs:{type:"gray",loading:t.submitLoading},on:{click:t.onSubmit}},[t._v(" "+t._s(t.$t("确定转账"))+" ")]),s("el-button",{staticStyle:{width:"270px"},attrs:{type:"primary"},on:{click:function(e){return t.$emit("changeVisible",!1)}}},[t._v(" "+t._s(t.$t("继续取款"))+" ")])]],2)],1)},d=[],m=(a("99af"),a("d81d"),a("fb6a"),a("acd8"),a("93dd"));function u(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?u(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):u(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var h={name:"Transfer",data:function(){return{optionProps:{value:"game_platform_id",label:"game_platform_name",children:"platform_list",expandTrigger:"hover"},form:{money:"",from:1,to:0},from:[1],to:[0],platforms:[{game_platform_name:"主账户",game_platform_id:0}],allMoney:0,maxMoneyId:0,rules:{money:{required:!0,message:this.$t("转账金额不能为空"),trigger:"blur"}},submitLoading:!1,arrowStatus:!0}},computed:f({},Object(o["e"])("game",["gameCatesPlatforms","allPlatforms"]),{},Object(o["e"])("user",["wallet","token"])),created:function(){this.getPlatforms(),this.platforms[0].game_platform_name="".concat(this.platforms[0].game_platform_name,"(").concat(this.wallet.money,")")},methods:f({},Object(o["b"])("game",["getAllGameCatesPlatforms","getAllPlatforms"]),{},Object(o["b"])("user",["getWallet"]),{getPlatforms:function(){var t=this;this.gameCatesPlatforms&&this.gameCatesPlatforms.length?this.formatPlatform(this.gameCatesPlatforms):this.getAllGameCatesPlatforms().then((function(e){t.formatPlatform(e)}))},formatPlatform:function(t){var e=this,a=JSON.parse(JSON.stringify(t)),s=0,n="";a.forEach((function(t){t.game_platform_name="".concat(t.game_cate_name,"(").concat(e.wallet["cate_".concat(t.game_cate_id,"_money")],")"),t.game_platform_id=t.game_cate_id,t.platform_list.forEach((function(a){a.game_platform_name="".concat(a.game_platform_name,"(").concat(e.wallet[a.money_code],")"),e.wallet[a.money_code]>s&&(e.maxMoneyId=a.game_platform_id,s=e.wallet[a.money_code],n=t.game_cate_id)}))})),this.platforms=this.platforms.concat(a),this.from=[n,this.maxMoneyId],this.form.from=this.maxMoneyId,this.allMoney=s},exchange:function(){this.arrowStatus=!this.arrowStatus,this.arrowStatus?(this.onFromChange(this.from),this.onToChange(this.to)):(this.onFromChange(this.to),this.onToChange(this.from))},onSubmit:function(){var t=this,e=this.form,a=e.from,s=e.to;return a||0===a?0!==a&&0!==s?this.$message.warning(this.$t("游戏平台间不能进行转账")):!s&&0!==s||a===s?this.$message.warning(this.$t("请选择转入游戏账户类型")):void this.$refs.form.validate((function(e){if(e){t.submitLoading=!0;var a=t.form,s=a.money,n=a.from,i=a.to,r={money:s,from_platform_id:n,to_platform_id:i};Object(m["y"])(r).then((function(e){t.submitLoading=!1,t.$message.success(t.$t("转账成功")),t.form.money="",t.from=[0],t.to=[0],t.$store.dispatch("user/getWallet"),t.$emit("changeVisible",!1)})).catch((function(){t.submitLoading=!1}))}})):this.$message.warning(this.$t("请选择转出游戏账户类型"))},onFromChange:function(t){var e=this;console.log(t,this.gameCatesPlatforms),t[0]?this.gameCatesPlatforms.map((function(a){a.game_cate_id===t[0]&&a.platform_list.map((function(a){a.game_platform_id===t[1]&&(e.allMoney=e.wallet[a.money_code])}))})):this.allMoney=this.wallet.money;var a=t.slice(-1);console.log(a),this.form.from=a[0]},onToChange:function(t){var e=t.slice(-1);this.form.to=e[0]},onMoneyChange:function(t){this.form.money=Math.floor(parseFloat(t))},setAll:function(){this.form.money=this.allMoney}})},p=h,b=(a("97e2"),a("2877")),g=Object(b["a"])(p,c,d,!1,null,"ade36faa",null),v=g.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"list-cells"},[t._l(t.lists,(function(e,s){return a("div",{key:s,staticClass:"cell",class:[t.type,t.bankcard&&t.bankcard.id===e.id?"selected":""],on:{click:function(a){return t.onSelect(e)}}},[t.type&&"card"===t.type?[a("div",{staticClass:"cell-head"},[a("BankIcon",{attrs:{"bank-code":e.icon_code}}),t._v(" "+t._s(e.bank_name)+" ")],1),a("div",{staticClass:"cell-body"},[t._v(" "+t._s("**** **** **** "+e.card_no.slice(-4))+" ")]),a("div",{staticClass:"cell-foot"},[t._v(" "+t._s("**"+e.name.slice(-1))+" ")])]:[a("div",{staticClass:"cell-head"},[a("BankIcon",{attrs:{"bank-code":e.icon_code}})],1),a("div",{staticClass:"cell-body"},[t._v(" "+t._s(e.bank_name)+" ")]),a("div",{staticClass:"cell-foot"},[t._v(" "+t._s(t.$t("尾号 "))+t._s(e.card_no&&e.card_no.slice(-4))+" ")])]],2)})),t.showAddBtn?a("div",{staticClass:"cell add",class:[t.type],on:{click:t.addBankcard}},[a("layout",{staticClass:"cell-body",attrs:{"justify-center":"","align-center":""}},[a("i",{staticClass:"el-icon-plus"}),a("span",[t._v(t._s(t.$t("添加银行卡")))])])],1):t._e()],2),t.$route.path.includes("agent")?a("BankcardAddAgent"):a("BankcardAdd")],1)},y=[],w=a("b2f1"),k=a("f6ee"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"agent-dialog"},[a("el-dialog",{attrs:{visible:t.visible,"before-close":t.handleClose,width:"600px",title:t.$t("message.bindNewCard"),"custom-class":"add-bankcard"},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"form",attrs:{"label-position":"top",model:t.form,rules:t.rules,"hide-required-asterisk":""}},[a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.cardholderName"),prop:"name"}},[a("el-input",{attrs:{maxlength:"30",disabled:t.userInfo.realname&&void 0!==t.userInfo.realname,placeholder:t.$t("message.inputCardholderNameDesc")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.bankAccount"),prop:"card"}},[a("el-input",{attrs:{maxlength:"20",placeholder:t.$t("message.plaseInputBankAccount")},model:{value:t.form.card,callback:function(e){t.$set(t.form,"card",e)},expression:"form.card"}})],1),a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.chooseBank"),prop:"bank"}},[a("el-select",{attrs:{placeholder:t.$t("message.chooseBank")},model:{value:t.form.bank,callback:function(e){t.$set(t.form,"bank",e)},expression:"form.bank"}},t._l(t.bankList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id,disabled:e.disabled}},[a("BankItem",{class:{selected:t.form.bank===e.id},attrs:{bank:e}})],1)})),1)],1),a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.bankBranch"),prop:"bankBranch"}},[a("layout",{staticClass:"multiple",attrs:{"justify-space-between":""}},[a("el-select",{staticClass:"province",attrs:{placeholder:t.$t("message.chooseProvince")},model:{value:t.form.bankBranch.province,callback:function(e){t.$set(t.form.bankBranch,"province",e)},expression:"form.bankBranch.province"}},t._l(t.provinceList,(function(t){return a("el-option",{key:t.code,attrs:{value:t.name,label:t.name}})})),1),a("el-select",{staticClass:"city",attrs:{placeholder:t.$t("message.chooseCity")},model:{value:t.form.bankBranch.city,callback:function(e){t.$set(t.form.bankBranch,"city",e)},expression:"form.bankBranch.city"}},t._l(t.cityList,(function(t){return a("el-option",{key:t.code,attrs:{value:t.name,label:t.name}})})),1)],1),a("layout",[a("el-input",{staticClass:"name",attrs:{maxlength:"100",placeholder:t.$t("message.bankBranchPlaceholder")},model:{value:t.form.bankBranch.name,callback:function(e){t.$set(t.form.bankBranch,"name","string"===typeof e?e.trim():e)},expression:"form.bankBranch.name"}})],1)],1),a("el-form-item",{staticClass:"buttons"},[a("el-button",{staticClass:"submit",attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.onSubmit}},[t._v(" "+t._s(t.$t("message.confirmSubmit"))+" ")])],1),a("div",{staticClass:"form-text"},[a("p",[t._v(t._s(t.$t("温馨提示：您最多可绑定4张银行卡，如需修改绑定信息请联系在线客服")))])])],1)],1)],1)},C=[],O=(a("7db0"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("96cf"),a("bbbc")),B=a("9d0e");function P(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function j(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?P(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x={name:"BankcardAdd",components:{BankItem:B["a"]},data:function(){var t=this;return{visible:!1,bankList:[],provinceList:[],form:{name:"",card:"",bank:"",bankBranch:{province:"",city:"",name:""}},submitLoading:!1,rules:{card:[{required:!0,message:this.$t("message.plaseInputBankAccount"),trigger:"blur"},{trigger:"blur",type:"number",validator:function(e,a,s){var n=/^(\d{16,19})$/g;n.test(a)||(console.log("hello"),s(new Error(t.$t("银行卡号格式不正确！")))),s()}}],bankBranch:[{type:"object",fields:{province:{required:!0,message:this.$t("message.chooseProvince")},city:{required:!0,message:this.$t("message.chooseCity")},name:{required:!0,message:this.$t("message.bankBranchPlaceholder"),trigger:"blur change"}}}],bank:[{required:!0,type:"number",message:this.$t("message.chooseBank"),trigger:"blur"}]}}},computed:j({},Object(o["e"])("agent",["userInfo"]),{},Object(o["e"])("global",["bankcardAddVisible"]),{cityList:function(){var t=this,e=this.provinceList.find((function(e){return e.name===t.form.bankBranch.province}));return e&&1===e.city.length?e.city[0].area:e?e.city:[]}}),watch:{bankcardAddVisible:function(t){console.log("bankcardAddVisible",t),this.visible=t,this.form.name=this.userInfo.realname||""}},created:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.userInfo),this.visible=this.bankcardAddVisible,this.form.name=this.userInfo.realname,this.userInfo.realname||(this.rules.realname=[{required:!0,message:this.$t("message.inputCardholderNameDesc"),trigger:"blur"},{trigger:"blur",validator:function(e,a,s){var n=/^([\u4e00-\u9fa5]{2,12})$/g;n.test(a)||s(new Error(t.$t("请输入正确的姓名！"))),s()}}]),e.next=6,regeneratorRuntime.awrap(Promise.all([this.loadCityList(),this.getAllBankList()]));case 6:case"end":return e.stop()}}),null,this)},methods:j({},Object(o["b"])("agent",["getUserInfo"]),{},Object(o["b"])("global",["setBankcardAddVisible"]),{getAllBankList:function(){var t=this;Object(O["f"])().then((function(e){t.bankList=e}))},loadCityList:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(a("a0da"));case 2:t=e.sent,this.provinceList=t;case 4:case"end":return e.stop()}}),null,this)},onSubmit:function(){var t,e=this;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=this.userInfo.realname||this.form.name,a.next=4,regeneratorRuntime.awrap(this.$refs.form.validate());case 4:this.submitLoading=!0,Object(O["a"])({bank_id:this.form.bank,card_no:this.form.card,name:t,bank_of_deposit:this.form.bankBranch.province+"-"+this.form.bankBranch.city+"-"+this.form.bankBranch.name}).then((function(t){e.$refs.form.resetFields(),e.bankBranch={city:"",province:"",name:""},e.submitLoading=!1,e.$message({message:e.$t("message.addSuccess"),type:"success"}),e.$store.dispatch("agent/getUserInfo",!0),e.setBankcardAddVisible(!1)})).catch((function(){e.submitLoading=!1})),a.next=10;break;case 8:a.prev=8,a.t0=a["catch"](0);case 10:case"end":return a.stop()}}),null,this,[[0,8]])},handleClose:function(t){this.setBankcardAddVisible(!1),t&&"function"===typeof t&&t()}})},S=x,I=(a("f69a"),Object(b["a"])(S,$,C,!1,null,"e9fc3ffc",null)),L=I.exports;function V(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function A(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?V(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):V(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={name:"BankcardList",components:{BankIcon:w["a"],BankcardAdd:k["a"],BankcardAddAgent:L},props:["bankcard","lists","type","addBtnHidden"],data:function(){return{max:4}},computed:{showAddBtn:function(){return!this.addBtnHidden&&this.lists.length<this.max}},created:function(){console.log("lists",this.lists)},methods:A({},Object(o["b"])("global",["setBankcardAddVisible"]),{onSelect:function(t){this.$emit("onSelect",t)},addBankcard:function(){this.$emit("add")}})},T=D,E=(a("6161"),Object(b["a"])(T,_,y,!1,null,"4083f5c1",null)),F=E.exports,M=a("874b");function q(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function N(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?q(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):q(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var R={name:"Withdraw",components:{RecordTable:l["a"],BankcardList:F,PasswordInput:M["a"],Transfer:v},data:function(){this.$createElement;var t=this.$options.filters.currency;return{min_money:100,bankcard:null,allowSubmit:!1,form:{withdraw_money:"",user_bank_id:"",pay_password:""},costManage:[0,0,0,0],withdrawlimitinfo:{draw_limit_amount:0,deduction_money:0},flowTextError:"",flowTableData:[],flowTableColumns:[{prop:"created_at",width:200,label:this.$t("存款时间")},{prop:"money",label:this.$t("存款/红利金额"),cellType:"slots",renderCell:function(e,a){var s=t(a.row.money,"¥");return e("span",[s])}},{prop:"finish_flow_require",label:this.$t("已达到流水"),cellType:"slots",renderCell:function(e,a){var s=t(a.row.finish_flow_require,"¥");return e("span",[s])}},{prop:"unfinish_flow_require",label:this.$t("需完成流水"),cellType:"slots",renderCell:function(e,a){var s=t(a.row.unfinish_flow_require,"¥");return e("span",[s])}}],dialogFlowVisible:!1,dialogPhoneBindTipVisible:!1,dialogFundPasswordVisible:!1,dialognotallVisible:!1,submiting:!1,DetectionSave:!0}},computed:N({},Object(o["e"])("user",["userInfo","isLogin"]),{},Object(o["e"])("global",["siteInfo"]),{bankList:function(){var t=this.userInfo;return t.user_bank}}),watch:{"form.withdraw_money":function(t){this.watchform(),this.computeCostManage(t)},"form.user_bank_id":function(){this.watchform()},"form.pay_password":function(){this.watchform()}},created:function(){var t=this;setTimeout((function(){t.DetectionSave=!1}),3e3);var e=this.userInfo,a=this.bankList;2!==e.is_valid_mobile?this.dialogPhoneBindTipVisible=!0:2!==e.is_pay_password?this.dialogFundPasswordVisible=!0:this.checkWithdrawStatus(),this.bankcard=a&&a.length&&a[0]||[],this.selectBankcard(this.bankcard),this.getWithdrawlimitinfo()},methods:N({},Object(o["b"])("global",["setBankcardAddVisible"]),{bankcardAdd:function(){this.setBankcardAddVisible(!0)},checkWithdrawStatus:function(){var t=this;Object(m["h"])().then((function(e){t.wallet.all_platform_money>10&&1!==t.wallet.is_auto_trans&&(t.dialogFlowVisible=!0)}),(function(e){t.flowTextError=e,t.rechargeflow()}))},rechargeflow:function(){var t=this;Object(m["x"])().then((function(e){t.flowTableData=e.data,t.dialogFlowVisible=!0}))},getWithdrawlimitinfo:function(){var t=this;Object(m["E"])().then((function(e){t.withdrawlimitinfo=e}))},computeCostManage:function(t){var e=this.withdrawlimitinfo,a=this.siteInfo,s=a.cost_manage,n=s.administrative_rate,i=s.withdraw_fees,r=[0,0,0,0];if(t){var o=0;i.some((function(e,a,s){return o=e.withdraw_fee,t<=e.withdraw_fee_max})),r[0]=o}e.draw_limit_amount&&(r[1]=Math.min(e.draw_limit_amount,t)*n),r[2]=e.deduction_money,r[3]=Math.max(t-r[0]-r[1]-r[2],0),this.costManage=r},onSubmit:function(){var t=this,e=this.form,a=this.bankcard,s=Object(i["a"])(this.costManage,4),n=s[0],r=s[1],o=s[2],l=s[3];if(!e.withdraw_money)return this.$message.error(this.$t("请输入取款金额")),!1;if(e.withdraw_money<100)return this.$message.error(this.$t("message.minimumWithdrawalOf100Yuan")),!1;if(!a||!a.id)return this.$message.error(this.$t("message.withdrawCard")),!1;if(!this.form.pay_password)return this.$message.error(this.$t("请输入资金密码")),!1;e.user_bank_id=a.id,this.submiting=!0;var c=Object.assign({money:l,service_charge:n,administrative_charge:r,discounts:o},this.form);Object(m["D"])(c).then((function(e){t.$message.success(t.$t("提交成功")),t.submiting=!1,t.form={withdraw_money:"",pay_password:""},t.$store.dispatch("user/getWallet")})).catch((function(e){t.submiting=!1}))},selectBankcard:function(t){this.form.user_bank_id=t.id,this.bankcard=t},setPhonePassword:function(){this.$router.push({name:"Profile"})},cancelPhonePassword:function(){this.dialogPhonePasswordVisible=!1},phoneBind:function(){this.dialogPhoneBindTipVisible=!1,this.$bindPhoneNoOrEmail.open({data:{type:"phone"}})},cancelPhoneBind:function(){this.dialogPhoneBindTipVisible=!1,2!==this.userInfo.is_pay_password?this.dialogFundPasswordVisible=!0:this.checkWithdrawStatus()},onDialogPhoneBindTipClose:function(t){this.dialogPhoneBindTipVisible=!1},setFundPassword:function(){this.$moneyPassword.open(),this.dialogFundPasswordVisible=!1},cancelFundPassword:function(){this.dialogFundPasswordVisible=!1,this.checkWithdrawStatus(),this.$router.push({name:"Dashboard"})},cancelFundall:function(){this.dialognotallVisible=!1},onDialogFundPasswordClose:function(t){this.dialogFundPasswordVisible=!1},watchform:function(){this.form.withdraw_money&&this.form.user_bank_id&&this.form.pay_password&&6==this.form.pay_password.length?this.allowSubmit=!0:this.allowSubmit=!1},fogetPassword:function(){var t=this;2!==this.userInfo.is_valid_mobile&&2!==this.userInfo.is_valid_email&&2!==this.userInfo.is_pass_answer?this.dialognotallVisible=!0:this.$validateIdentity.open(this.$t("message.nextStep"),{callback:function(){t.$forgetmoneyPassword.open()}})},changeVisible:function(t){this.dialogFlowVisible=t}})},W=R,U=(a("d43e"),a("70d2"),Object(b["a"])(W,s,n,!1,null,"4e28ed78",null));e["default"]=U.exports},f69a:function(t,e,a){"use strict";var s=a("5fd0"),n=a.n(s);n.a},f6ee:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"agent-dialog"},[a("el-dialog",{attrs:{visible:t.visible,"before-close":t.handleClose,width:"600px",title:t.$t("message.bindNewCard"),"custom-class":"add-bankcard"},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"form",attrs:{"label-position":"top",model:t.form,rules:t.rules,"hide-required-asterisk":""}},[a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.cardholderName"),prop:"name"}},[a("el-input",{attrs:{maxlength:"30",disabled:t.userInfo.realname&&void 0!==t.userInfo.realname,placeholder:t.$t("message.inputCardholderNameDesc")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.bankAccount"),prop:"card"}},[a("el-input",{attrs:{maxlength:"20",placeholder:t.$t("message.plaseInputBankAccount")},model:{value:t.form.card,callback:function(e){t.$set(t.form,"card",e)},expression:"form.card"}})],1),a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.chooseBank"),prop:"bank"}},[a("el-select",{attrs:{placeholder:t.$t("message.chooseBank")},model:{value:t.form.bank,callback:function(e){t.$set(t.form,"bank",e)},expression:"form.bank"}},t._l(t.bankList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id,disabled:e.disabled}},[a("BankItem",{class:{selected:t.form.bank===e.id},attrs:{bank:e}})],1)})),1)],1),a("el-form-item",{staticClass:"max-width",attrs:{label:t.$t("message.bankBranch"),prop:"bankBranch"}},[a("layout",{staticClass:"multiple",attrs:{"justify-space-between":""}},[a("el-select",{staticClass:"province",attrs:{placeholder:t.$t("message.chooseProvince")},model:{value:t.form.bankBranch.province,callback:function(e){t.$set(t.form.bankBranch,"province",e)},expression:"form.bankBranch.province"}},t._l(t.provinceList,(function(t){return a("el-option",{key:t.code,attrs:{value:t.name,label:t.name}})})),1),a("el-select",{staticClass:"city",attrs:{placeholder:t.$t("message.chooseCity")},model:{value:t.form.bankBranch.city,callback:function(e){t.$set(t.form.bankBranch,"city",e)},expression:"form.bankBranch.city"}},t._l(t.cityList,(function(t){return a("el-option",{key:t.code,attrs:{value:t.name,label:t.name}})})),1)],1),a("layout",[a("el-input",{staticClass:"name",attrs:{maxlength:"100",placeholder:t.$t("message.bankBranchPlaceholder")},model:{value:t.form.bankBranch.name,callback:function(e){t.$set(t.form.bankBranch,"name","string"===typeof e?e.trim():e)},expression:"form.bankBranch.name"}})],1)],1),a("el-form-item",{staticClass:"buttons"},[a("el-button",{staticClass:"submit",attrs:{loading:t.submitLoading,type:"primary"},on:{click:t.onSubmit}},[t._v(" "+t._s(t.$t("message.confirmSubmit"))+" ")])],1),a("div",{staticClass:"form-text"},[a("p",[t._v(t._s(t.$t("温馨提示：您最多可绑定4张银行卡，如需修改绑定信息请联系在线客服")))])])],1)],1)],1)},n=[],i=(a("a4d3"),a("4de4"),a("7db0"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("96cf"),a("2fa7")),r=a("2f62"),o=a("93dd"),l=a("9d0e");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(a,!0).forEach((function(e){Object(i["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var m={name:"BankcardAdd",components:{BankItem:l["a"]},data:function(){var t=this;return{visible:!1,bankList:[],provinceList:[],form:{name:"",card:"",bank:"",bankBranch:{province:"",city:"",name:""}},submitLoading:!1,rules:{card:[{required:!0,message:this.$t("message.plaseInputBankAccount"),trigger:"blur"},{trigger:"blur",type:"number",validator:function(e,a,s){var n=/^(\d{16,19})$/g;n.test(a)||(console.log("hello"),s(new Error(t.$t("银行卡号格式不正确！")))),s()}}],bankBranch:[{type:"object",fields:{province:{required:!0,message:this.$t("message.chooseProvince")},city:{required:!0,message:this.$t("message.chooseCity")},name:{required:!0,message:this.$t("message.bankBranchPlaceholder"),trigger:"blur change"}}}],bank:[{required:!0,type:"number",message:this.$t("message.chooseBank"),trigger:"blur"}]}}},computed:d({},Object(r["e"])("user",["userInfo"]),{},Object(r["e"])("global",["bankcardAddVisible"]),{cityList:function(){var t=this,e=this.provinceList.find((function(e){return e.name===t.form.bankBranch.province}));return e&&1===e.city.length?e.city[0].area:e?e.city:[]}}),watch:{bankcardAddVisible:function(t){console.log("bankcardAddVisible",t),this.visible=t,this.form.name=this.userInfo.realname||""}},created:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(this.userInfo),this.visible=this.bankcardAddVisible,this.form.name=this.userInfo.realname,this.userInfo.realname||(this.rules.realname=[{required:!0,message:this.$t("message.inputCardholderNameDesc"),trigger:"blur"},{trigger:"blur",validator:function(e,a,s){var n=/^([\u4e00-\u9fa5]{2,12})$/g;n.test(a)||s(new Error(t.$t("请输入正确的姓名！"))),s()}}]),e.next=6,regeneratorRuntime.awrap(Promise.all([this.loadCityList(),this.getAllBankList()]));case 6:case"end":return e.stop()}}),null,this)},methods:d({},Object(r["b"])("user",["getUserInfo"]),{},Object(r["b"])("agent",["getUserInfo"]),{},Object(r["b"])("global",["setBankcardAddVisible"]),{getAllBankList:function(){var t=this;Object(o["b"])().then((function(e){t.bankList=e}))},loadCityList:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(a("a0da"));case 2:t=e.sent,this.provinceList=t;case 4:case"end":return e.stop()}}),null,this)},onSubmit:function(){var t,e=this;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,t=this.userInfo.realname||this.form.name,a.next=4,regeneratorRuntime.awrap(this.$refs.form.validate());case 4:this.submitLoading=!0,Object(o["a"])({bank_id:this.form.bank,card_no:this.form.card,name:t,bank_of_deposit:this.form.bankBranch.province+"-"+this.form.bankBranch.city+"-"+this.form.bankBranch.name}).then((function(t){e.$refs.form.resetFields(),e.bankBranch={city:"",province:"",name:""},e.submitLoading=!1,e.$message({message:e.$t("message.addSuccess"),type:"success"}),e.$store.dispatch("user/getUserInfo",!0),e.setBankcardAddVisible(!1)})).catch((function(){e.submitLoading=!1})),a.next=10;break;case 8:a.prev=8,a.t0=a["catch"](0);case 10:case"end":return a.stop()}}),null,this,[[0,8]])},handleClose:function(t){this.setBankcardAddVisible(!1),t&&"function"===typeof t&&t()}})},u=m,f=(a("63ea"),a("2877")),h=Object(f["a"])(u,s,n,!1,null,"0d620efc",null);e["a"]=h.exports}}]);