(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Help","chunk-3a0852b4"],{"0626":function(t,i,s){"use strict";var e=s("b3c5"),a=s.n(e);a.a},"22a92":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"question"},[s("div",{staticClass:"main-body"},[s("h3",{staticClass:"weigth"},[t._v(t._s(t.detail.title))]),s("div",{staticClass:"main-content",domProps:{innerHTML:t._s(t.content)}})])])},a=[],n=(s("99af"),s("d81d"),s("b0c0"),s("365c")),c={name:"Question",data:function(){return{navList:[],content:"",detail:{}}},watch:{$route:{handler:function(t,i){this.$route.query.id?(this.tit=this.$route.query.name,this.getDetail(this.$route.query.id)):this.navList&&this.navList.length?this.$router.push("".concat(this.$route.path,"?name=").concat(this.navList[0].title,"&id=").concat(this.navList[0].id)):this.getAqlist()},deep:!0}},created:function(){this.tit=this.$route.query.name,this.$route.query.id?this.getDetail(this.$route.query.id):this.navList&&this.navList.length?this.$router.push("".concat(this.$route.path,"?name=").concat(this.navList[0].title,"&id=").concat(this.navList[0].id)):this.getAqlist()},methods:{getAqlist:function(){var t=this;Object(n["b"])().then((function(i){i&&i.list&&i.list.map((function(i){t.navList.push(i)})),!t.$route.query.id&&t.navList&&t.navList.length&&t.$router.push("".concat(t.$route.path,"?name=").concat(t.navList[0].title,"&id=").concat(t.navList[0].id))}))},getDetail:function(t){var i=this,s=this.$Loading();Object(n["a"])({id:t}).then((function(t){i.content=t.content,i.detail=t,s.close()}))}}},o=c,r=(s("ffac"),s("2877")),l=Object(r["a"])(o,e,a,!1,null,"2c834ac8",null);i["default"]=l.exports},"3e7b":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"security"},[e("div",{staticClass:"main-body"},[e("h3",{staticClass:"weigth"},[t._v("安全保障")]),e("div",[e("div",{staticClass:"top"},[e("div",[e("h3",[t._v(t._s(t.$constant.title)+"持有菲律宾（PAGCOR）合法博彩执照。")]),e("p",[t._v(" 该执照由菲律宾娱乐及博彩公司（PAGCOR）所核发和监管，以便提供网上投注服务。菲律宾娱乐及博彩公司（PAGCOR）是菲律宾共和国总统办公室100%由政府拥有和控制的公司，菲律宾娱乐及博彩公司（PAGCOR）是一家拥有合法经营权的公司。 ")])]),e("img",{attrs:{src:s("38d6"),alt:""}})]),e("layout",{staticClass:"govs",attrs:{"justify-center":"","align-center":""}},[e("div",{staticClass:"gov"},["10042"===t.$projectName?e("img",{attrs:{src:t.$imgs["help/mga2"],alt:""}}):e("img",{attrs:{src:s("3abe"),alt:""}})]),e("div",{staticClass:"gov"},["10042"===t.$projectName?e("img",{attrs:{src:t.$imgs["help/bvi2"],alt:""}}):e("img",{attrs:{src:s("09fd"),alt:""}})]),e("div",{staticClass:"gov"},["10042"===t.$projectName?e("img",{attrs:{src:t.$imgs["help/cc"],alt:""}}):e("img",{attrs:{src:s("7260"),alt:""}})]),e("div",{staticClass:"gov"},["10042"===t.$projectName?e("img",{attrs:{src:t.$imgs["help/pa2"],alt:""}}):e("img",{attrs:{src:s("c1f5"),alt:""}})])])],1)])])},a=[],n=s("7f87"),c={name:"Question",data:function(){return{detail:{}}},created:function(){var t=this;Object(n["c"])({code:"user_secrets"}).then((function(i){t.detail=i}))}},o=c,r=(s("bad7"),s("2877")),l=Object(r["a"])(o,e,a,!1,null,"4f549d3f",null);i["default"]=l.exports},6242:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"gameHankbook"},[s("div",{staticClass:"main-body"},[s("h3",{staticClass:"weigth"},[t._v(" "+t._s(t.tit)+" ")]),t.navList[t.cIdx]&&t.navList[t.cIdx].list.length?[s("div",{directives:[{name:"show",rawName:"v-show",value:t.nowIndex>0,expression:"nowIndex > 0"}],staticClass:"left",on:{click:t.left}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.nowIndex<t.navList[t.cIdx].list.length-6,expression:"nowIndex < navList[cIdx].list.length - 6"}],staticClass:"right",on:{click:t.right}},[s("i",{staticClass:"el-icon-arrow-right"})])]:t._e(),s("div",{staticClass:"scroll-container"},[s("ul",{style:{left:-155*t.nowIndex+"px"}},[t.navList[t.cIdx]?t._l(t.navList[t.cIdx].list,(function(i,e){return s("li",{key:e,class:{acitveIdx:t.sIdx==e},on:{click:function(s){return t.getGameDetail(i,e)}}},[t._v(" "+t._s(i.title)+" ")])})):t._e()],2)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.detail&&t.detail.content,expression:"detail && detail.content"}],staticClass:"main-content",domProps:{innerHTML:t._s(t.detail.content)}})],2)])},a=[],n=(s("99af"),s("b0c0"),s("365c")),c={name:"Question",data:function(){return{navList:[],cIdx:0,sIdx:0,detail:{},nowIndex:0,tit:""}},watch:{$route:{handler:function(t,i){this.$route.query.id&&(this.cIdx=this.$route.query.id,this.tit=this.$route.query.name,this.getGameDetail(this.navList[this.$route.query.id].list[0],0))},deep:!0}},created:function(){var t=this;this.tit=this.$route.query.name,this.cIdx=this.$route.query.id,Object(n["m"])().then((function(i){t.navList=i,t.$route.query.id?t.getGameDetail(t.navList[t.$route.query.id].list[0],0):t.$router.push("".concat(t.$route.path,"?name=").concat(t.navList[0].game_cate_name,"&id=0"))}))},methods:{getIndex:function(t){this.cIdx=t,this.nowIndex=0,this.getGameDetail(this.navList[t].list[0],0)},getGameDetail:function(t,i){var s=this,e=this.$Loading();this.sIdx=i,Object(n["n"])({id:t.id}).then((function(t){s.detail=t,e.close()}))},left:function(){this.nowIndex>0&&this.nowIndex--},right:function(){this.navList[this.cIdx]&&this.nowIndex<this.navList[this.cIdx].list.length-6&&this.nowIndex++}}},o=c,r=(s("0626"),s("2877")),l=Object(r["a"])(o,e,a,!1,null,"7263da3c",null);i["default"]=l.exports},"96d9":function(t,i,s){},b3c5:function(t,i,s){},bad7:function(t,i,s){"use strict";var e=s("96d9"),a=s.n(e);a.a},fd52:function(t,i,s){},ffac:function(t,i,s){"use strict";var e=s("fd52"),a=s.n(e);a.a}}]);