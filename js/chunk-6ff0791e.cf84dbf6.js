(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ff0791e"],{"319e":function(e,t,n){},"3a67":function(e,t,n){"use strict";var a=n("552c"),r=n.n(a);r.a},"3e81":function(e,t,n){},"41eb":function(e,t,n){"use strict";var a=n("d3ee"),r=n.n(a);r.a},"4f52":function(e,t,n){"use strict";var a=n("3e81"),r=n.n(a);r.a},"552c":function(e,t,n){},"6d830":function(e,t,n){var a={"./ABC.png":"85d0","./BCCB.png":"17d6","./BOC.png":"fb3f","./BOCOM.png":"89e2","./BOS.png":"0d98","./CCB.png":"02ae","./CEB.png":"1167","./CGB.png":"31a0","./CIB.png":"7f52","./CMB.png":"6fe6","./CMBC.png":"ad20","./Default.png":"b9e4","./ECITIC.png":"49df","./HXB.png":"35ee","./HZCBC.png":"edc5","./ICBC.png":"ebab","./NBCBC.png":"0e2a","./PAB.png":"f9e0","./PSBC.png":"5280","./SPDB.png":"269c","./bg-bank-card.png":"118e"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="6d830"},"6f20":function(e,t,n){},"6f27":function(e,t,n){"use strict";var a=n("319e"),r=n.n(a);r.a},9195:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bankcard",attrs:{id:"bankcard"}},[n("BankcardAdd"),e.myBankcards.length?n("BankcardList",{staticClass:"bankcard-list",attrs:{lists:e.myBankcards,"add-btn-hidden":!0,type:"card"}}):e._e()],1)},r=[],s=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),c=n("2f62"),i=n("5a28"),o=n("c0e2");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"Bankcard",components:{BankcardList:i["a"],BankcardAdd:o["a"]},data:function(){return{max:4}},computed:u({},Object(c["e"])("agent",["userInfo"]),{myBankcards:function(){return this.userInfo&&this.userInfo.agent_bank||[]}}),created:function(){console.log(this.userInfo)},methods:u({},Object(c["b"])("agent",["setBankcardAddVisible"]),{bankcardAdd:function(){this.setBankcardAddVisible(!0)}})},f=d,b=(n("41eb"),n("2877")),m=Object(b["a"])(f,a,r,!1,null,"ffcccc8c",null);t["default"]=m.exports},"9d0e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bank-item",on:{click:e.onSelected}},[n("BankIcon",{attrs:{"bank-code":e.bank.icon_code}}),n("span",[e._v(e._s(e.bank.name))]),n("i",{staticClass:"el-icon-check"})],1)},r=[],s=n("b2f1"),c={name:"BankItem",components:{BankIcon:s["a"]},props:["bank"],data:function(){return{}},methods:{onSelected:function(){this.$emit("select",this.bank)}}},i=c,o=(n("6f27"),n("2877")),l=Object(o["a"])(i,a,r,!1,null,"743da6b6",null);t["a"]=l.exports},b2f1:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-image",{attrs:{src:n("6d830")("./"+e.code+".png")}})},r=[],s=(n("c975"),["ABC","BCCB","BOC","BOCOM","BOS","CCB","CEB","CGB","CIB","CMB","CMBC","ECITIC","HXB","HZCBC","ICBC","NBCBC","PAB","PSBC","SPDB"]),c={name:"BankIcon",props:{bankCode:{default:"ABC",type:String}},computed:{code:function(){var e=this.bankCode;return-1!==s.indexOf(e)?e:"Default"}}},i=c,o=(n("4f52"),n("2877")),l=Object(o["a"])(i,a,r,!1,null,"385e0867",null);t["a"]=l.exports},c0e2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bankcardAdd"},[n("el-form",{ref:"form",attrs:{"label-position":"top",model:e.form,rules:e.rules,"hide-required-asterisk":""}},[n("h2",[e._v("绑定新卡")]),n("div",{staticClass:"main-body"},[n("el-form-item",{staticClass:"max-width",attrs:{label:e.$t("message.chooseBank"),prop:"bank"}},[n("el-select",{attrs:{placeholder:e.$t("message.chooseBank")},model:{value:e.form.bank,callback:function(t){e.$set(e.form,"bank",t)},expression:"form.bank"}},e._l(e.bankList,(function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id,disabled:t.disabled}},[n("BankItem",{class:{selected:e.form.bank===t.id},attrs:{bank:t}})],1)})),1)],1),n("el-form-item",{staticClass:"max-width",attrs:{label:e.$t("message.bankAccount"),prop:"card"}},[n("el-input",{attrs:{maxlength:"20",placeholder:e.$t("message.plaseInputBankAccount")},model:{value:e.form.card,callback:function(t){e.$set(e.form,"card",t)},expression:"form.card"}})],1),n("el-form-item",{staticClass:"max-width",attrs:{label:e.$t("message.cardholderName"),prop:"name"}},[n("el-input",{attrs:{maxlength:"30",disabled:e.userInfo&&e.userInfo.realname&&void 0!==e.userInfo.realname,placeholder:e.$t("message.inputCardholderNameDesc")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{staticClass:"max-width",attrs:{label:e.$t("message.bankBranch"),prop:"bankBranch"}},[n("layout",{staticClass:"multiple",attrs:{"justify-space-between":""}},[n("el-select",{staticClass:"province",attrs:{placeholder:e.$t("message.chooseProvince")},model:{value:e.form.bankBranch.province,callback:function(t){e.$set(e.form.bankBranch,"province",t)},expression:"form.bankBranch.province"}},e._l(e.provinceList,(function(e){return n("el-option",{key:e.code,attrs:{value:e.name,label:e.name}})})),1),n("el-select",{staticClass:"city",attrs:{placeholder:e.$t("message.chooseCity")},model:{value:e.form.bankBranch.city,callback:function(t){e.$set(e.form.bankBranch,"city",t)},expression:"form.bankBranch.city"}},e._l(e.cityList,(function(e){return n("el-option",{key:e.code,attrs:{value:e.name,label:e.name}})})),1)],1),n("layout",[n("el-input",{staticClass:"name",attrs:{maxlength:"100",placeholder:e.$t("message.bankBranchPlaceholder")},model:{value:e.form.bankBranch.name,callback:function(t){e.$set(e.form.bankBranch,"name",t)},expression:"form.bankBranch.name"}})],1)],1)],1),n("el-form-item",{staticClass:"buttons"},[n("el-button",{staticClass:"submit",attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.onSubmit}},[e._v(" "+e._s(e.$t("message.confirmSubmit"))+" ")])],1),n("div",{staticClass:"form-text"},[n("p",[e._v("温馨提示：您最多可绑定4张银行卡，如需修改绑定信息请联系在线客服")]),n("p",[e._v(" 每个会员最多可绑定4张银行卡，每张银行卡必须保持真实姓名一致，以及必须是真实独立有效的银行卡，每张银行卡只能绑定一次。"),n("br"),e._v(" 如果会员绑定的银行卡和本人真实银行卡不符，那么造成的资金损失我们一律不负责。 ")])])],1)],1)},r=[],s=(n("a4d3"),n("4de4"),n("7db0"),n("4160"),n("b0c0"),n("e439"),n("dbb4"),n("b64b"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("96cf"),n("2fa7")),c=n("2f62"),i=n("bbbc"),o=n("9d0e");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"BankcardAdd",components:{BankItem:o["a"]},data:function(){return{visible:!1,bankList:[],provinceList:[],form:{name:"",card:"",bank:"",bankBranch:{province:"",city:"",name:""}},submitLoading:!1,rules:{card:[{required:!0,message:this.$t("message.plaseInputBankAccount"),trigger:"blur"},{trigger:"blur",type:"number",validator:function(e,t,n){var a=/^(\d{16,19})$/g;a.test(t)||(console.log("hello"),n(new Error("银行卡号格式不正确！"))),n()}}],bankBranch:[{type:"object",fields:{province:{required:!0,message:this.$t("message.chooseProvince")},city:{required:!0,message:this.$t("message.chooseCity")},name:{required:!0,message:this.$t("message.bankBranchPlaceholder"),trigger:"blur change"}}}],bank:[{required:!0,type:"number",message:this.$t("message.chooseBank"),trigger:"blur"}]}}},computed:u({},Object(c["e"])("agent",["userInfo","bankcardAddVisible"]),{cityList:function(){var e=this,t=this.provinceList.find((function(t){return t.name===e.form.bankBranch.province}));return t&&1===t.city.length?t.city[0].area:t?t.city:[]}}),watch:{bankcardAddVisible:function(e){console.log("bankcardAddVisible",e),this.visible=e}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.visible=this.bankcardAddVisible,this.form.name=this.userInfo.realname,this.userInfo.realname||(this.rules.realname=[{required:!0,message:this.$t("message.inputCardholderNameDesc"),trigger:"blur"},{trigger:"blur",validator:function(e,t,n){var a=/^([\u4e00-\u9fa5]{2,12})$/g;a.test(t)||n(new Error("请输入正确的姓名！")),n()}}]),e.next=5,regeneratorRuntime.awrap(Promise.all([this.loadCityList(),this.getAllBankList()]));case 5:case"end":return e.stop()}}),null,this)},methods:u({},Object(c["b"])("agent",["setBankcardAddVisible","getUserInfo"]),{getAllBankList:function(){var e=this;Object(i["f"])().then((function(t){e.bankList=t}))},loadCityList:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(n("a0da"));case 2:e=t.sent,this.provinceList=e;case 4:case"end":return t.stop()}}),null,this)},onSubmit:function(){var e,t=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e=this.userInfo.realname||this.form.name,n.next=4,regeneratorRuntime.awrap(this.$refs.form.validate());case 4:this.submitLoading=!0,Object(i["a"])({bank_id:this.form.bank,card_no:this.form.card,name:e,bank_of_deposit:this.form.bankBranch.province+this.form.bankBranch.city+this.form.bankBranch.name}).then((function(e){t.$refs.form.resetFields(),t.bankBranch={city:"",province:"",name:""},t.submitLoading=!1,t.$message({message:t.$t("message.addSuccess"),type:"success"}),t.$store.dispatch("agent/getUserInfo",!0),t.setBankcardAddVisible(!1)})).catch((function(){t.submitLoading=!1})),n.next=10;break;case 8:n.prev=8,n.t0=n["catch"](0);case 10:case"end":return n.stop()}}),null,this,[[0,8]])},handleClose:function(e){this.setBankcardAddVisible(!1),e&&"function"===typeof e&&e()}})},f=d,b=(n("ed21"),n("3a67"),n("2877")),m=Object(b["a"])(f,a,r,!1,null,"2c2a59fb",null);t["a"]=m.exports},d3ee:function(e,t,n){},ed21:function(e,t,n){"use strict";var a=n("6f20"),r=n.n(a);r.a}}]);