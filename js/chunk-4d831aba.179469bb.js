(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d831aba"],{"15fd":function(t,e,n){"use strict";var a=n("b718"),r=n.n(a);r.a},2346:function(t,e,n){"use strict";var a=n("e0be"),r=n.n(a);r.a},"522b":function(t,e,n){},"56bb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{staticClass:"filters-yabo",attrs:{"justify-space-between":"","align-center":""}},[n("layout",{staticClass:"date",attrs:{"justify-space-between":"","align-center":""}},[n("el-date-picker",{staticClass:"start-date",attrs:{type:t.dateType,placeholder:t.$t("开始时间")},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),n("div",{staticClass:"line"}),n("el-date-picker",{staticClass:"end-date",attrs:{type:t.dateType,placeholder:t.$t("截止时间")},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1),t.statusData?n("layout",{staticClass:"status",attrs:{"justify-space-between":"","align-center":""}},[n("el-select",{attrs:{placeholder:t.$t("请选择")},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},t._l(t.statusData,(function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1):t._e(),t._t("input"),n("layout",{staticClass:"button",attrs:{"justify-space-between":"","align-center":""}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.loading},on:{click:t.onClick}},[t._v(" "+t._s(t.buttonText)+" ")])],1)],2)},r=[],s=(n("0d03"),n("a9e3"),n("a618")),i=n("fc4c"),l=n("5dea"),o={name:"RecordFilter",props:{statusData:{type:Object,default:function(){return null}},loading:{type:Boolean,default:function(){return!1}},init:{type:Boolean,default:function(){return!0}},dateType:{type:String,default:"date"},start:{type:String,default:""},end:{type:String,default:""},interval:{type:Number,default:0},buttonText:{type:String,default:window.$t("查询")}},data:function(){var t=new Date,e=this.dateType,n=this.interval,a=this.start,r=this.end,o="",u="";return"month"===e?("none"!==a&&(o=Object(s["a"])(t,n||6)),"none"!==r&&(u=Object(s["a"])(t,0))):"week"===e?("none"!==a&&(o=Object(i["a"])(t,n||10)),"none"!==r&&(u=Object(i["a"])(t,0))):("none"!==a&&(o=Object(l["a"])(t,n||7)),"none"!==r&&(u=Object(l["a"])(t,0))),{startTime:o,endTime:u,status:"0"}},created:function(){var t=this;this.$on("doSearch",(function(){t.onClick()})),this.init&&this.onClick()},methods:{onClick:function(){var t=this.startTime,e=this.endTime,n=this.status;this.$emit("search",{startTime:t,endTime:e,status:n})}}},u=o,c=(n("f83e"),n("2877")),p=Object(c["a"])(u,a,r,!1,null,"23a10e4c",null);e["a"]=p.exports},"5bff":function(t,e,n){},"5dea":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("fe1f"),r=n("f7f1");function s(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e);return Object(r["a"])(t,-n)}},"6dad":function(t,e,n){"use strict";var a=n("522b"),r=n.n(a);r.a},a618:function(t,e,n){"use strict";var a=n("fe1f"),r=n("fd3a");function s(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object(r["a"])(t),n=e.getFullYear(),a=e.getMonth(),s=new Date(0);return s.setFullYear(n,a+1,0),s.setHours(0,0,0,0),s.getDate()}function i(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(r["a"])(t),i=Object(a["a"])(e),l=n.getMonth()+i,o=new Date(0);o.setFullYear(n.getFullYear(),l,1),o.setHours(0,0,0,0);var u=s(o);return n.setMonth(l,Math.min(u,n.getDate())),n}function l(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e);return i(t,-n)}n.d(e,"a",(function(){return l}))},b718:function(t,e,n){},bb99:function(t,e,n){"use strict";n.r(e);var a,r,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agent-report users",attrs:{id:"user-yabo"}},[n("div",{staticClass:"block"},[n("RecordFilter",{ref:"filter",attrs:{loading:t.onSearching,init:!1,start:"none",end:"none"},on:{search:t.setSearchParams}},[n("layout",{staticClass:"slot-input",attrs:{slot:"input","justify-space-between":"","align-center":""},slot:"input"},[n("el-input",{attrs:{placeholder:t.$t("会员账号")},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1)],1)],1),n("div",{staticClass:"block",staticStyle:{"margin-top":"12px",padding:"20px 18px"}},[n("RecordTable",{attrs:{"table-columns":t.tableColumns,"table-data":t.tableData,loading:t.onSearching}}),t.pagination.last_page>1?n("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-size":t.pagination.size,"current-page":t.pagination.page,total:t.pagination.total},on:{"update:currentPage":function(e){return t.$set(t.pagination,"page",e)},"update:current-page":function(e){return t.$set(t.pagination,"page",e)},"current-change":t.onPageChange}}):t._e()],1)])},i=[],l=(n("4de4"),n("4160"),n("a15b"),n("d81d"),n("b0c0"),n("ac1f"),n("1276"),n("159b"),n("56bb")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticClass:"recordtable ",attrs:{data:t.tableData,stripe:""}},[t._l(t.tableColumns,(function(e,a){return n("table-column-plus",t._b({key:a},"table-column-plus",e,!1))})),n("EmptyData",{attrs:{slot:"empty",icon:t.emptyIcon,text:t.emptyText},slot:"empty"})],2)},u=[],c=(n("c975"),n("caad"),n("a9e3"),n("ecdf")),p=n.n(c),f={slots:function(t,e){var n=this,a=function(){return n.renderCell?n.renderCell(t,e):""};return t("div",{class:"cell"},[a(t,e)])}},d={extends:p.a,props:{prop:{type:[String,Number]},cellType:{type:String,validator:function(t){var e=["text","input","slots"].includes(t);return!e&&console.error("columnPlus组件不适配 ".concat(t," 类型")),e}},renderCell:{type:Function}},created:function(){f[this.cellType]&&(this.columnConfig.renderCell=f[this.cellType].bind(this))}},g=d,h=n("2877"),b=Object(h["a"])(g,a,r,!1,null,null,null),m=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{staticClass:"empty-data 123123",attrs:{"justify-center":"","align-center":"",column:""}},[n("layout",{attrs:{"grow-0":""}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.icon,expression:"icon"}]})]),n("p",[t._v(t._s(t.text))])],1)},v=[],w={name:"EmptyData",props:{icon:{type:String,default:function(){return n("a1ae")}},text:{type:String,default:function(){return this.$t("没有任何记录")}}}},_=w,T=(n("6dad"),Object(h["a"])(_,y,v,!1,null,"73aa7795",null)),j=T.exports,C={name:"RecordTable",components:{TableColumnPlus:m,EmptyData:j},props:{tableData:{type:Array,default:function(){return[]}},tableColumns:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return""}},loading:{type:Boolean,default:function(){return!1}},emptyIcon:{type:String,default:function(){return""}},emptyText:{type:String,default:function(){return this.$t("暂无数据")}}},data:function(){return{}},methods:{getwidth:function(t){return-1!==["created_at","trade_no"].indexOf(t)?210:""},computeRow:function(t,e){return"rate"===t?100*e+"%":e}}},$=C,S=(n("2346"),Object(h["a"])($,o,u,!1,null,"ee3f1f8c",null)),O=S.exports,D=n("bbbc"),x={name:"AgentUsers",components:{RecordFilter:l["a"],RecordTable:O},data:function(){var t=this,e=(this.$createElement,this.$options.filters.currency);return{username:"",vipLevelMaps:{},onSearching:!1,searchParams:{},pagination:{page:1,total:1,size:20,last_page:1},tableData:[],tableColumns:[{prop:"username",label:this.$t("message.vipAccount"),cellType:"slots",renderCell:function(t,e){var n=e.row.username;return t("el-tooltip",{class:"item",attrs:{effect:"dark",content:n,placement:"bottom"}},[t("span",{style:"cursor:pointer;"},[n])])}},{prop:"levelName",label:this.$t("message.level")},{prop:"status",label:this.$t("message.status"),width:60,cellType:"slots",renderCell:function(e,n){var a=n.row.status;return e("span",[1===a?t.$t("message.normal"):2===a?t.$t("message.freeze"):t.$t("message.unknown")])}},{prop:"recharge",label:this.$t("message.deposit"),cellType:"slots",renderCell:function(t,n){var a=n.row.user_wallet_static.deposit_money;return t("span",[e(a,"")])}},{prop:"withdraw",label:this.$t("message.drawings"),cellType:"slots",renderCell:function(t,n){var a=n.row.user_wallet_static.draw_money;return t("span",[e(a,"")])}},{prop:"valid_bet",label:this.$t("message.validBets"),cellType:"slots",renderCell:function(t,n){var a=n.row.user_wallet_static.valid_bet;return t("span",[e(a,"")])}},{prop:"payout",label:this.$t("message.paicai"),cellType:"slots",renderCell:function(t,n){var a=n.row.user_wallet_static.payout;return t("span",[e(a,"")])}},{prop:"bonus",label:this.$t("message.hongli"),cellType:"slots",renderCell:function(t,n){var a=n.row.user_wallet_static.benefit_money;return t("span",[e(a,"")])}},{prop:"gross_profit",label:this.$t("message.chunli"),cellType:"slots",renderCell:function(t,n){var a=n.row.user_wallet_static.gross_profit;return t("span",[e(a,"")])}},{prop:"created_at",label:this.$t("message.registerTime"),width:110,cellType:"slots",renderCell:function(t,e){var n=e.row.created_at;return n=n&&n.split(" ").join("\n")||"",t("span",{style:"white-space: pre"},[n])}},{prop:"first_recharge_time",label:this.$t("message.firstSaveTime"),width:110,cellType:"slots",renderCell:function(t,e){var n=e.row.first_recharge_time;return n=n&&n.split(" ").join("\n")||"",t("span",{style:"white-space: pre"},[n])}}]}},mounted:function(){this.getVipData()},methods:{getVipData:function(){var t=this;Object(D["m"])().then((function(e){var n={};e.forEach((function(t){n[t.level]=t})),t.vipLevelMaps=n,t.$refs.filter.$emit("doSearch")}))},doSearch:function(){var t=this,e=this.searchParams,n=e.startTime,a=e.endTime,r=this.username,s=this.vipLevelMaps,i={username:r,page:this.pagination.page,size:this.pagination.size,start_date:n,end_date:a};this.onSearching=!0,Object(D["n"])(i).then((function(e){t.tableData=e.data.map((function(t){var e=s[t.level];return t.levelName=e&&e.name||"",t})),t.pagination.total=e.total,t.pagination.last_page=e.last_page,t.onSearching=!1})).catch((function(){t.onSearching=!1}))},onPageChange:function(t){this.pagination.page=t,this.doSearch()},setSearchParams:function(t){this.pagination.page=1,this.searchParams=t,this.doSearch()}}},k=x,E=(n("15fd"),Object(h["a"])(k,s,i,!1,null,"56278610",null));e["default"]=E.exports},e0be:function(t,e,n){},f7f1:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("fe1f"),r=n("fd3a");function s(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(r["a"])(t),s=Object(a["a"])(e);return n.setDate(n.getDate()+s),n}},f83e:function(t,e,n){"use strict";var a=n("5bff"),r=n.n(a);r.a},fc4c:function(t,e,n){"use strict";var a=n("fe1f"),r=n("f7f1");function s(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e),s=7*n;return Object(r["a"])(t,s)}function i(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e);return s(t,-n)}n.d(e,"a",(function(){return i}))},fd3a:function(t,e,n){"use strict";function a(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}n.d(e,"a",(function(){return a}))},fe1f:function(t,e,n){"use strict";function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return a}))}}]);