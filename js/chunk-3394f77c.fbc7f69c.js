(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3394f77c"],{"412d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"channel-home"}},[t.bannerList.length?s("div",{staticClass:"main-banner"},[s("swiper",{attrs:{options:t.opts}},t._l(t.bannerList,(function(e,a){return s("swiper-slide",{key:e.id,attrs:{name:String(a)}},[s("div",{staticClass:"swiper-lazy-preloader"}),s("img",{staticClass:"swiper-lazy",attrs:{"data-src":e.pic},on:{click:function(s){return t.onClick(e)}}})])})),1),s("div",{staticClass:"pagination-box"},[s("h1",[t._v(t._s(t.$t("最新推荐")))]),s("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),s("div",{staticClass:"app-download"},[s("div",{staticClass:"app-qrcode"},[s("img",{attrs:{src:t.er_pic,alt:"",width:"100%",height:"100%"}}),s("img",{staticClass:"qrlogo",attrs:{src:t.$imgs["common/qrlogo"],alt:"",height:"24"}})]),s("div",{staticClass:"app-desc"},[s("div",{staticClass:"app-desc-top"},[t._v(t._s(t.$t("永发手机APP")))]),s("div",{staticClass:"app-desc-bottom"},[t._v(t._s(t.$t("随时随地 想玩就玩")))])])])])],1):t._e(),s("div",{staticClass:"main"},[s("div",{staticClass:"ag-game"},t._l(t.agGameList,(function(e){return s("div",{key:e.default_game_id,staticClass:"game-item",class:{"is-disabled":t.$getGameStatus(e,"真人")}},[s("h3",{staticClass:"game-title"},[t._v(t._s(e.title))]),s("div",{staticClass:"game-desc"},[t._v(t._s(e.game_platform_mark))]),s("el-button",{staticClass:"game-btn",attrs:{type:"primary"},on:{click:function(s){return t.$playGame(e,"真人")}}},[t._v(" "+t._s(t.$t("进入游戏"))+" ")]),s("img",{staticClass:"game-pic",attrs:{src:t.$imgs[e.thumb]}})],1)})),0),s("div",{staticClass:"electronic-game"},[s("div",{staticClass:"item-first"},[s("img",{attrs:{src:t.$imgs["home/electron/index"],alt:""}}),s("div",{staticClass:"game-desc"},[s("div",{staticClass:"game-title"},[t._v(t._s(t.$t("电子游戏平台")))]),s("router-link",{attrs:{to:"/electron"}},[t._v(t._s(t.$t("查看更多"))+">")])],1)]),t._l(t.electronicList,(function(e){return s("router-link",{key:e,staticClass:"game-item",attrs:{to:"/electron?electronType="+e.toLowerCase()}},[s("img",{attrs:{src:t.$imgs["home/electron/"+e.toLowerCase()]}}),s("div",{staticClass:"game-desc"},[t._v(t._s(e)+t._s(t.$t("电子")))])])}))],2)]),s("div",{staticClass:"history"},[s("div",{staticClass:"h_years"},[s("p",{staticClass:"t"},[t._v("永发风采")]),s("div",{staticClass:"scrollable",attrs:{id:"year_nav_wrap"}},[s("div",{staticClass:"viewport"},[s("div",{staticClass:"overview"},[s("ul",{attrs:{id:"year_nav"}},t._l(t.sliders,(function(e,a){return s("li",{key:a,class:t.currentSlide===a&&"actived",on:{click:function(e){t.currentSlide=a}}},[s("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.time))])])})),0)])])])]),s("div",{attrs:{id:"slideshow"}},t._l(t.sliders,(function(e,a){return s("div",{directives:[{name:"show",rawName:"v-show",value:t.currentSlide===a,expression:"currentSlide === i"}],key:a,staticClass:"years_cont"},[s("div",{staticClass:"years_item"},[s("div",{staticClass:"pics"},[s("img",{attrs:{src:t.$imgs[e.thumb]}})]),s("div",{staticClass:"details"},[s("p",{staticClass:"tit"},[t._v(t._s(e.title))]),s("p",{staticClass:"content"},[t._v(" "+t._s(e.desc)+" ")]),s("router-link",{staticClass:"link",attrs:{to:e.path,target:"_blank"}},[t._v("查看详情")]),s("a",{staticClass:"ylfc",attrs:{href:"/sponsor",target:"_blank"}})],1)])])})),0)])])},i=[],r=(s("a4d3"),s("4de4"),s("4160"),s("c975"),s("a15b"),s("d81d"),s("0d03"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("ac1f"),s("25f0"),s("5319"),s("1276"),s("2ca0"),s("9911"),s("159b"),s("96cf"),s("2fa7")),n=s("2f62"),c=s("6dfa"),o=s("d055"),l=s.n(o),d=(s("455b"),s("7212"));function p(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function m(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?p(s,!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):p(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={components:{swiper:d["swiper"],swiperSlide:d["swiperSlide"]},filters:{moneyFilter:function(t){if(t){var e=[],s=0;t=(t||0).toString().split("");for(var a=t.length-1;a>=0;a--)s++,e.unshift(t[a]),s%3||0===a||e.unshift(",");e=e.join("")}if(e)return-1===e.indexOf(".")?e+".00":e},gameFilter:function(t,e){for(var s in e)if(t===s)return e[s]},timeFilter:function(t){return t.split("-").join(".")}},data:function(){var t=this;return{opts:{autoplay:{delay:5e3,stopOnLastSlide:!1,disableOnInteraction:!1},loop:!0,lazy:!0,pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(e,s){var a=t.bannerList.map((function(t){return t.title}));return'<div class="'+s+'">'+a[e]+"</div>"}}},agGameList:[{default_game_id:1,game_platform_id:1,game_platform_name:"AG",game_platform_mark:this.$t("亚洲市场占有率第一领导品牌百家乐、炸金花、骰宝等多款游戏"),name:"AG",title:"AG真人平台",thumb:"home/ag/ag"},{default_game_id:15,game_platform_id:3,game_platform_name:"BBIN",game_platform_mark:this.$t("message.channelRealNote2"),name:"BBIN",title:"BBIN真人",thumb:"home/ag/bbin"}],electronicList:["PT","MG","CQ9","PP","BetSoft"],bannerList:[],actlist:[],currentSlide:1,sliders:[{time:"2018年",title:"永发签约传奇球星 拉瓦内利",desc:"永发国际签约尤文图斯传奇球星法布里奇奥.拉瓦内利，进驻永发，鼎力站台，为您送上意甲专业赛前解说，为斑马军团助威！",thumb:"home/sliders/h_pic2",path:"/sponsor/good-player"},{time:"2016年10月",title:"永发国际独家赞助索伯F1赛车日本站",desc:"速度、激情、博！永发独家赞助索伯F1赛车日本站，10月9日圆满落幕！索伯车队上演速度与激情，呈现精彩的世界顶级赛事！",thumb:"home/sliders/h_pic1",path:"/sponsor/racing-intro"}],er_pic:""}},computed:m({},Object(n["c"])("user",["token"])),created:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:this.indexbanner();case 1:case"end":return t.stop()}}),null,this)},mounted:function(){var t=this,e={errorCorrectionLevel:"H",type:"image/jpeg",margin:2,rendererOpts:{quality:.3}},s=location.host.replace("www.",""),a="https://m.".concat(s,"/downApp");l.a.toDataURL(a,e,(function(e,s){if(e)throw e;t.er_pic=s}))},methods:{indexbanner:function(){var t;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(Object(c["l"])());case 2:t=e.sent,this.bannerList=t;case 4:case"end":return e.stop()}}),null,this)},onClick:function(t){var e=t.link;e&&(e.startsWith("http")||e.startsWith("//")?window.open(e,"homeBanner"):this.$router.push({path:e}))}}},v=u,g=(s("dbe8"),s("2877")),f=Object(g["a"])(v,a,i,!1,null,"62e38450",null);e["default"]=f.exports},"455b":function(t,e,s){},9671:function(t,e,s){},dbe8:function(t,e,s){"use strict";var a=s("9671"),i=s.n(a);i.a}}]);