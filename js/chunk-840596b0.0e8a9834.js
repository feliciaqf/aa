(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-840596b0"],{"56bb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{staticClass:"filters-yabo",attrs:{"justify-space-between":"","align-center":""}},[n("layout",{staticClass:"date",attrs:{"justify-space-between":"","align-center":""}},[n("el-date-picker",{staticClass:"start-date",attrs:{type:t.dateType,placeholder:t.$t("开始时间")},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),n("div",{staticClass:"line"}),n("el-date-picker",{staticClass:"end-date",attrs:{type:t.dateType,placeholder:t.$t("截止时间")},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1),t.statusData?n("layout",{staticClass:"status",attrs:{"justify-space-between":"","align-center":""}},[n("el-select",{attrs:{placeholder:t.$t("请选择")},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},t._l(t.statusData,(function(t,e){return n("el-option",{key:e,attrs:{label:t,value:e}})})),1)],1):t._e(),t._t("input"),n("layout",{staticClass:"button",attrs:{"justify-space-between":"","align-center":""}},[n("el-button",{attrs:{type:"primary",icon:"el-icon-search",loading:t.loading},on:{click:t.onClick}},[t._v(" "+t._s(t.buttonText)+" ")])],1)],2)},r=[],s=(n("0d03"),n("a9e3"),n("a618")),i=n("fc4c"),o=n("5dea"),l={name:"RecordFilter",props:{statusData:{type:Object,default:function(){return null}},loading:{type:Boolean,default:function(){return!1}},init:{type:Boolean,default:function(){return!0}},dateType:{type:String,default:"date"},start:{type:String,default:""},end:{type:String,default:""},interval:{type:Number,default:0},buttonText:{type:String,default:window.$t("查询")}},data:function(){var t=new Date,e=this.dateType,n=this.interval,a=this.start,r=this.end,l="",c="";return"month"===e?("none"!==a&&(l=Object(s["a"])(t,n||6)),"none"!==r&&(c=Object(s["a"])(t,0))):"week"===e?("none"!==a&&(l=Object(i["a"])(t,n||10)),"none"!==r&&(c=Object(i["a"])(t,0))):("none"!==a&&(l=Object(o["a"])(t,n||7)),"none"!==r&&(c=Object(o["a"])(t,0))),{startTime:l,endTime:c,status:"0"}},created:function(){var t=this;this.$on("doSearch",(function(){t.onClick()})),this.init&&this.onClick()},methods:{onClick:function(){var t=this.startTime,e=this.endTime,n=this.status;this.$emit("search",{startTime:t,endTime:e,status:n})}}},c=l,u=(n("f83e"),n("2877")),p=Object(u["a"])(c,a,r,!1,null,"23a10e4c",null);e["a"]=p.exports},"575d":function(t,e,n){},"5bff":function(t,e,n){},"5dea":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("fe1f"),r=n("f7f1");function s(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e);return Object(r["a"])(t,-n)}},"5f86":function(t,e,n){},7704:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"agent-report profit",attrs:{id:"profit-yabo"}},[n("layout",{staticClass:"statistics"},[t._l(t.tableColumns,(function(e){return[e.prop in t.statistics?n("layout",{key:e.prop,staticClass:"block hover",attrs:{column:""}},[n("label",[t._v(t._s(e.label))]),"valid_member_cnt"!==e.prop?n("h3",[t._v(" "+t._s(t._f("currency")(t.statistics[e.prop],""))+" ")]):n("h3",[t._v(" "+t._s(t.statistics[e.prop])+" ")])]):t._e()]}))],2),n("div",{staticClass:"block"},[n("RecordFilter",{attrs:{loading:t.onSearching,init:!0},on:{search:t.setSearchParams}})],1),n("div",{staticClass:"block",staticStyle:{"padding-top":"0"}},[n("RecordTable",{attrs:{"table-columns":t.tableColumns,"table-data":t.tableData,loading:t.onSearching}}),n("el-pagination",{attrs:{"hide-on-single-page":!0,background:"",layout:"prev, pager, next","page-size":t.pagination.size,"current-page":t.pagination.page,total:t.pagination.total},on:{"update:currentPage":function(e){return t.$set(t.pagination,"page",e)},"update:current-page":function(e){return t.$set(t.pagination,"page",e)},"current-change":t.onPageChange}})],1)],1)},r=[],s=n("56bb"),i=n("e048"),o=n("bbbc"),l={name:"AgentProfit",components:{RecordFilter:s["a"],RecordTable:i["a"]},data:function(){this.$createElement;var t=this.$options.filters.currency;return{statistics:{valid_member_cnt:0,recharge:0,withdraw:0,valid_invest:0,payout:0,bonus:0,money_gross_profit:0},onSearching:!1,searchParams:{},pagination:{page:1,total:1,size:15,total_page:1},tableData:[],tableColumns:[{prop:"date",label:this.$t("message.time")},{prop:"valid_member_cnt",label:this.$t("message.quorum")},{prop:"recharge",label:this.$t("message.deposit"),cellType:"slots",renderCell:function(e,n){var a=t(n.row.recharge,"");return e("span",[a])}},{prop:"withdraw",label:this.$t("message.drawings"),cellType:"slots",renderCell:function(e,n){var a=t(n.row.withdraw,"");return e("span",[a])}},{prop:"valid_invest",label:this.$t("message.validBets"),cellType:"slots",renderCell:function(e,n){var a=t(n.row.valid_invest,"");return e("span",[a])}},{prop:"payout",label:this.$t("message.paicai"),cellType:"slots",renderCell:function(e,n){var a=t(n.row.payout,"");return e("span",[a])}},{prop:"bonus",label:this.$t("message.hongli"),cellType:"slots",renderCell:function(e,n){var a=t(n.row.bonus,"");return e("span",[a])}},{prop:"money_gross_profit",label:this.$t("message.chunli"),cellType:"slots",renderCell:function(e,n){var a=t(n.row.money_gross_profit,"");return e("span",[a])}}]}},created:function(){},methods:{doSearch:function(){var t=this,e=this.searchParams,n=e.startTime,a=e.endTime,r={page:this.pagination.page,size:this.pagination.size,start_date:n,end_date:a};this.onSearching=!0,Object(o["e"])(r).then((function(e){t.tableData=e.list,t.statistics=e.count,t.pagination=e.pager,t.onSearching=!1})).catch((function(){t.onSearching=!1}))},onPageChange:function(t){this.pagination.page=t,this.doSearch()},setSearchParams:function(t){this.pagination.page=1,this.searchParams=t,this.doSearch()}}},c=l,u=(n("b040"),n("2877")),p=Object(u["a"])(c,a,r,!1,null,"3ebd3b25",null);e["default"]=p.exports},a618:function(t,e,n){"use strict";var a=n("fe1f"),r=n("fd3a");function s(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object(r["a"])(t),n=e.getFullYear(),a=e.getMonth(),s=new Date(0);return s.setFullYear(n,a+1,0),s.setHours(0,0,0,0),s.getDate()}function i(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(r["a"])(t),i=Object(a["a"])(e),o=n.getMonth()+i,l=new Date(0);l.setFullYear(n.getFullYear(),o,1),l.setHours(0,0,0,0);var c=s(l);return n.setMonth(o,Math.min(c,n.getDate())),n}function o(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e);return i(t,-n)}n.d(e,"a",(function(){return o}))},b040:function(t,e,n){"use strict";var a=n("d861"),r=n.n(a);r.a},cdbb:function(t,e,n){"use strict";var a=n("575d"),r=n.n(a);r.a},d861:function(t,e,n){},e048:function(t,e,n){"use strict";var a,r,s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticClass:"recordtable ",staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:""}},[t._l(t.tableColumns,(function(e,a){return n("table-column-plus",t._b({key:a},"table-column-plus",e,!1))})),n("EmptyData",{attrs:{slot:"empty",icon:t.emptyIcon,text:t.emptyText},slot:"empty"})],2)},i=[],o=(n("c975"),n("caad"),n("a9e3"),n("ecdf")),l=n.n(o),c={slots:function(t,e){var n=this,a=function(){return n.renderCell?n.renderCell(t,e):""};return t("div",{class:"cell"},[a(t,e)])}},u={extends:l.a,props:{prop:{type:[String,Number]},cellType:{type:String,validator:function(t){var e=["text","input","slots"].includes(t);return!e&&console.error("columnPlus组件不适配 ".concat(t," 类型")),e}},renderCell:{type:Function}},created:function(){c[this.cellType]&&(this.columnConfig.renderCell=c[this.cellType].bind(this))}},p=u,f=n("2877"),d=Object(f["a"])(p,a,r,!1,null,null,null),g=d.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("layout",{staticClass:"empty-data 123123",attrs:{"justify-center":"","align-center":"",column:""}},[n("layout",{attrs:{"grow-0":""}},[["10042"].includes(t.$projectName)?n("img",{attrs:{src:t.$imgs["recordtrans/empty5"],alt:""}}):t._e(),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.icon,expression:"icon"}]})]),n("p",[t._v(t._s(t.text))])],1)},h=[],m={name:"EmptyData",props:{icon:{type:String,default:function(){return n("a1ae")}},text:{type:String,default:function(){return this.$t("没有任何记录")}}}},y=m,v=(n("f2bf"),Object(f["a"])(y,b,h,!1,null,"5ff17617",null)),w=v.exports,_={name:"RecordTable",components:{TableColumnPlus:g,EmptyData:w},props:{tableData:{type:Array,default:function(){return[]}},tableColumns:{type:Array,default:function(){return[]}},type:{type:String,default:function(){return""}},loading:{type:Boolean,default:function(){return!1}},emptyIcon:{type:String,default:function(){return""}},emptyText:{type:String,default:function(){return this.$t("暂无数据")}}},data:function(){return{}},methods:{getwidth:function(t){return-1!==["created_at","trade_no"].indexOf(t)?210:""},computeRow:function(t,e){return"rate"===t?100*e+"%":e}}},T=_,C=(n("cdbb"),Object(f["a"])(T,s,i,!1,null,"559c43fc",null));e["a"]=C.exports},f2bf:function(t,e,n){"use strict";var a=n("5f86"),r=n.n(a);r.a},f7f1:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var a=n("fe1f"),r=n("fd3a");function s(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(r["a"])(t),s=Object(a["a"])(e);return n.setDate(n.getDate()+s),n}},f83e:function(t,e,n){"use strict";var a=n("5bff"),r=n.n(a);r.a},fc4c:function(t,e,n){"use strict";var a=n("fe1f"),r=n("f7f1");function s(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e),s=7*n;return Object(r["a"])(t,s)}function i(t,e){if(arguments.length<2)throw new TypeError("2 arguments required, but only "+arguments.length+" present");var n=Object(a["a"])(e);return s(t,-n)}n.d(e,"a",(function(){return i}))},fd3a:function(t,e,n){"use strict";function a(t){if(arguments.length<1)throw new TypeError("1 argument required, but only "+arguments.length+" present");var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"===typeof t||"[object Number]"===e?new Date(t):("string"!==typeof t&&"[object String]"!==e||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}n.d(e,"a",(function(){return a}))},fe1f:function(t,e,n){"use strict";function a(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}n.d(e,"a",(function(){return a}))}}]);