(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5546ac"],{"0cad":function(t,e,a){},"1e98":function(t,e,a){},"23bc":function(t,e,a){},"36bf":function(t,e,a){"use strict";var n=a("b71b"),o=a.n(n);o.a},"4b76":function(t,e,a){"use strict";var n=a("0cad"),o=a.n(n);o.a},"95c9":function(t,e,a){var n={"./3K@2x.png":"ae75","./AG@2x.png":"1cce","./AGFS@2x.png":"8c62","./ALLBET@2x.png":"1672","./AS@2x.png":"5475","./AVIA@2x.png":"22e9","./BBIN@2x.png":"8d9a","./BETSOFT@2x.png":"fee7","./BP@2x.png":"ba59","./CQ9@2x.png":"ff91","./CQ@2x.png":"de4b","./EBET@2x.png":"e580","./EG@2x.png":"5950","./ESB@2x.png":"2cff","./EVO@2x.png":"db3c","./FCLOTTO@2x.png":"d130","./GD@2x.png":"abf8","./GG@2x.png":"45b5","./GO@2x.png":"75f2","./HAB@2x.png":"9468","./IBC@2x.png":"458f","./IG@2x.png":"abaa","./IMES@2x.png":"2c9f","./IMG@2x.png":"da97","./IMSB@2x.png":"82f7","./ISG@2x.png":"49d4","./ISW@2x.png":"a430","./JS@2x.png":"366e","./KY@2x.png":"cf42","./LG@2x.png":"2618","./LOTTO@2x.png":"3c97","./LY@2x.png":"62c4","./MG@2x.png":"67e6","./MT@2x.png":"fa09","./MW@2x.png":"3239","./NT@2x.png":"0e7c","./OG@2x.png":"29d4","./ONEG@2x.png":"6335","./PG@2x.png":"0c0b","./PNG@2x.png":"8c5a","./PP@2x.png":"601a","./PT@2x.png":"6063","./RT@2x.png":"facc","./SALON@2x.png":"cbf9","./SG@2x.png":"b94c","./SHABA@2x.png":"f8af","./SPG@2x.png":"e109","./SUNBET@2x.png":"b8a1","./SW@2x.png":"374a","./TF@2x.png":"3fee","./TTG@2x.png":"7353","./VG@2x.png":"a2d4","./VR@2x.png":"c215","./WQ@2x.png":"dd1e","./Z88@2x.png":"ccb7"};function o(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}o.keys=function(){return Object.keys(n)},o.resolve=r,t.exports=o,o.id="95c9"},b0b3:function(t,e,a){"use strict";var n=a("1e98"),o=a.n(n);o.a},b71b:function(t,e,a){},d0db:function(t,e,a){"use strict";var n=a("23bc"),o=a.n(n);o.a},e6e3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"multiple-section",attrs:{id:"multiple"}},[a("div",{staticClass:"section"},[a("div",{staticClass:"main-top"},[a("h2",[t._v(t._s(t.$route.meta.title))])]),a("div",{staticClass:"main-body"},[a("layout",{directives:[{name:"show",rawName:"v-show",value:1===t.wallet.open_mode,expression:"wallet.open_mode === 1"}],staticClass:"transfer-action",attrs:{"justify-space-between":"","align-center":""}},[a("layout",{attrs:{"justify-start":"","align-center":"","grow-0":""}},[a("el-tooltip",{attrs:{content:"开启后，进入游戏时系统会自动将主账户余额充进游戏平台",effect:"dark","popper-class":"toolX-tooltip",placement:"bottom"}},[a("i",{staticClass:"el-icon-question"})]),a("span",[t._v("自动免转钱包")]),a("el-switch",{attrs:{"active-value":1,"inactive-value":2},on:{change:t.autoTransferAction},model:{value:t.isAuto,callback:function(e){t.isAuto=e},expression:"isAuto"}})],1)],1),2===t.isAuto?a("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{staticClass:"account",attrs:{prop:"",label:t.$t("message.accountSelect")}},[a("layout",{staticClass:"multiple",attrs:{"justify-space-between":"","align-center":""}},[a("el-cascader",{staticClass:"tall",attrs:{placeholder:"主账户",props:t.optionProps,options:t.platforms},on:{change:t.onFromChange},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}}),t.arrowStatus?a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$imgs["financial/exchange@2x"],expression:"$imgs['financial/exchange@2x']"}],staticClass:"pointer",on:{click:t.exchange}}):a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$imgs["financial/exchange@2x"],expression:"$imgs['financial/exchange@2x']"}],staticClass:"pointer translate",on:{click:t.exchange}}),a("el-cascader",{staticClass:"tall",attrs:{placeholder:"主账户",props:t.optionProps,options:t.platforms},on:{change:t.onToChange},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1)],1),a("el-form-item",{staticClass:"amount",attrs:{prop:"money"}},[a("el-input",{staticClass:"amount tall",attrs:{type:"number",placeholder:t.$t("message.transferAmount")},on:{change:t.onMoneyChange},model:{value:t.form.money,callback:function(e){t.$set(t.form,"money",e)},expression:"form.money"}},[a("span",{attrs:{slot:"prefix"},slot:"prefix"},[t._v("¥")])])],1),a("el-form-item",[a("el-button",{staticClass:"submit",attrs:{type:"primary",loading:t.submitLoading},on:{click:t.onSubmit}},[t._v(" "+t._s(t.$t("message.transferConfirm"))+" ")])],1)],1):t._e()],1)]),a("div",{staticClass:"section"},[a("div",{staticClass:"main-body platforms"},[a("h2",[t._v(" "+t._s(t.$t("message.gameLobby"))+" "),a("el-tooltip",{attrs:{content:"不同游戏类型标识共享钱包时游戏余额共享",effect:"dark","popper-class":"toolX-tooltip",placement:"bottom"}},[a("i",{staticClass:"el-icon-question"})])],1),a("layout",{staticClass:"actions",attrs:{"justify-space-between":"","align-center":"","grow-0":""}},[a("el-button",{attrs:{loading:t.balanceLoading},on:{click:t.refresh}},[t._v(" 刷新余额 ")]),a("el-button",{attrs:{type:"primary",loading:t.reclaimLoading},on:{click:t.reclaim}},[t._v(" 一键回收余额 ")])],1),a("layout",[a("PlatformBalance",{attrs:{lists:t.gameCatesPlatforms,loading:t.balanceLoading},on:{refresh:t.refresh}})],1)],1)])])},o=[],r=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("fb6a"),a("e439"),a("dbb4"),a("b64b"),a("acd8"),a("159b"),a("2fa7")),s=a("2f62"),i=a("93dd"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("layout",{staticClass:"cells",attrs:{wrap:""}},[t._l(t.lists,(function(e){return a("PlatformBalanceItem",{key:e.game_cate_id,attrs:{platform:e,loading:t.loading},on:{refresh:t.refresh,show:t.showPlatform}})})),a("el-dialog",{staticClass:"transfer-dialog",attrs:{title:t.platform.game_cate_name,visible:t.dialogVisible,"append-to-body":!0,width:"520px"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("layout",{staticClass:"dialog-lists",attrs:{wrap:"","justify-space-between":""}},t._l(t.platform.platform_list,(function(e){return a("layout",{key:e.game_platform_id,class:{common:1===e.is_hot},attrs:{"align-center":"","grow-0":""}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.iconImg(e),expression:"iconImg(item)"}]}),a("p",[a("label",[t._v(t._s(e.game_platform_name))]),t._v(" "+t._s(t._f("currency")(t.wallet[""+e.money_code]||0,""))+" ")]),t.walletObj[e.money_code]&&t.walletObj[e.money_code].length>1?a("el-tooltip",{attrs:{content:"("+t.walletObj[e.money_code].join(" + ")+")余额共享",effect:"dark","popper-class":"platform-balance-tooltip",placement:"bottom"}},[a("span",{class:["wallet-tag","tag-"+t.walletArr.indexOf(e.money_code)]},[t._v("共享")])]):t._e()],1)})),1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"})],1)],2)},c=[],f=(a("c975"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"platform-balance-item",on:{click:function(e){return e.stopPropagation(),t.onClick(e)}}},[a("layout",{attrs:{"align-center":""}},[a("svg-icon",{attrs:{link:t.configs[t.platform.game_cate_id],size:20}}),a("h2",[t._v(t._s(t.platform.game_cate_name))])],1),a("layout",{attrs:{"justify-space-between":"","align-center":""}},[a("p",[t._v(t._s(t._f("currency")(t.cateAmount,"")))]),a("i",{staticClass:"el-icon-refresh refreshpoint",class:{loading:t.loading},on:{click:function(e){return e.stopPropagation(),t.refresh(e)}}})])],1)}),m=[];a("d81d");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={name:"PlatformBalanceItem",props:{loading:{type:Boolean,default:function(){return!1}},platform:{type:Object,default:function(){return{}}}},data:function(){var t={1:"casino",2:"slots",3:"fishing",4:"sports",5:"lottery",7:"chess",8:"esports"};return{configs:t}},computed:u({},Object(s["e"])("user",["wallet"]),{sum:function(){var t=this.wallet,e=this.platform.platform_list,a=0;return e.map((function(e){a+=parseFloat(t["".concat(e.game_platform_code,"_money")]||0)})),a},cateAmount:function(){var t=this.wallet,e=this.platform.game_cate_id;return t["cate_".concat(e,"_money")]||0}}),methods:{refresh:function(){this.$emit("refresh")},onClick:function(){this.$emit("show",this.platform)}}},d=g,b=(a("b0b3"),a("2877")),h=Object(b["a"])(d,f,m,!1,null,"4487d74a",null),y=h.exports;function _(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function v(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?_(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var x={name:"PlatformBalance",components:{PlatformBalanceItem:y},props:{lists:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:function(){return!1}}},data:function(){return{dialogVisible:!1,platform:{},walletObj:{},walletArr:[]}},computed:v({},Object(s["e"])("user",["wallet"])),created:function(){this.initWalletData()},methods:{initWalletData:function(){var t=this.lists,e={},a=[];for(var n in t.forEach((function(t){t.platform_list.forEach((function(t){var a=t.money_code;-1===["gm_ag_money","gm_bbin_money"].indexOf(a)&&(a in e?e[a].push(t.game_platform_name):e[a]=[t.game_platform_name])}))})),this.walletObj=e,e)e.hasOwnProperty(n)&&e[n].length>1&&a.push(n);this.walletArr=a},refresh:function(){this.$emit("refresh")},showPlatform:function(t){this.platform=t,this.dialogVisible=!0},iconImg:function(t){var e=t.game_platform_name;return console.log(e),a("95c9")("./".concat(e.toUpperCase(),"@2x.png"))}}},O=x,w=(a("36bf"),Object(b["a"])(O,l,c,!1,null,"46575c40",null)),P=w.exports;function j(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?j(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var S={name:"Transfer",components:{PlatformBalance:P},data:function(){return{form:{money:"",from:0,to:0},from:[0],to:[0],isAuto:1,arrowStatus:!0,platforms:[{game_platform_name:"主账户",game_platform_id:0}],optionProps:{value:"game_platform_id",label:"game_platform_name",children:"platform_list",expandTrigger:"hover"},rules:{money:{required:!0,message:"转账金额不能为空",trigger:"blur"}},balanceLoading:!1,reclaimLoading:!1,submitLoading:!1}},computed:C({},Object(s["e"])("game",["gameCatesPlatforms","allPlatforms"]),{},Object(s["e"])("user",["wallet"])),created:function(){this.isAuto=this.wallet.is_auto_trans,this.getPlatforms()},destroyed:function(){this.getWallet()},methods:C({},Object(s["b"])("game",["getAllGameCatesPlatforms","getAllPlatforms"]),{},Object(s["b"])("user",["getWallet"]),{getPlatforms:function(){var t=this;this.gameCatesPlatforms&&this.gameCatesPlatforms.length?this.formatPlatform(this.gameCatesPlatforms):this.getAllGameCatesPlatforms().then((function(e){t.formatPlatform(e)}))},formatPlatform:function(t){t.forEach((function(t){t.game_platform_name=t.game_cate_name,t.game_platform_id=t.game_cate_id})),this.platforms=this.platforms.concat(t)},autoTransferAction:function(t){Object(i["e"])({is_auto_trans:t})},exchange:function(){this.arrowStatus=!this.arrowStatus,this.arrowStatus?(this.onFromChange(this.from),this.onToChange(this.to)):(this.onFromChange(this.to),this.onToChange(this.from))},onSubmit:function(){var t=this,e=this.form,a=e.from,n=e.to;return a||0===a?0!==a&&0!==n?this.$message.warning("游戏平台间不能进行转账"):!n&&0!==n||a===n?this.$message.warning("请选择转入游戏账户类型"):void this.$refs.form.validate((function(e){if(e){t.submitLoading=!0;var a=t.form,n=a.money,o=a.from,r=a.to,s={money:n,from_platform_id:o,to_platform_id:r};Object(i["z"])(s).then((function(e){t.submitLoading=!1,t.$message.success("转账成功"),t.form.money="",t.from=[0],t.to=[0],t.$store.dispatch("user/getWallet")})).catch((function(){t.submitLoading=!1}))}})):this.$message.warning("请选择转出游戏账户类型")},onFromChange:function(t){var e=t.slice(-1);this.form.from=e[0]},onToChange:function(t){var e=t.slice(-1);this.form.to=e[0]},onMoneyChange:function(t){this.form.money=Math.floor(parseFloat(t))},refresh:function(){var t=this;this.balanceLoading=!0,this.getWallet().then((function(e){t.balanceLoading=!1})).catch((function(){t.balanceLoading=!1}))},reclaim:function(){var t=this;this.reclaimLoading=!0,Object(i["f"])().then((function(e){t.$message.success("收回余额成功"),t.reclaimLoading=!1,t.getWallet(),t.$store.dispatch("user/getUserInfo")})).catch((function(){t.reclaimLoading=!1}))}})},A=S,k=(a("d0db"),a("4b76"),Object(b["a"])(A,n,o,!1,null,"6304d9ed",null));e["default"]=k.exports}}]);