(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ChannelCasino"],{"0895":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"channel-real"}},[a("div",{staticClass:"w1200 games"},[a("div",{staticClass:"game-main"},[a("ul",{staticClass:"game-list type2"},e._l(e.gameList,(function(t,n){return a("li",{key:n,class:{"is-disabled":!t.roadmap&&e.$getGameStatus(t,"真人"),ag:0===n},on:{click:function(a){!t.roadmap&&e.$playGame(t,"真人")}}},[a("div",{staticClass:"game-info"},[a("p",{staticClass:"title"},[a("span",[e._v(e._s(t.title))])]),a("p",{staticClass:"desc",domProps:{innerHTML:e._s(t.game_platform_mark)}}),a("div",{staticClass:"game-actions"},[a("el-button",{attrs:{type:"primary"}},[e._v(" 立即游戏 ")])],1)]),a("div",{staticClass:"game-pic"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.thumb,expression:"item.thumb"}]}),a("div",{staticClass:"loading-mask"})]),e.$getGameStatus(t,"真人")?a("div",{staticClass:"maintain-mask"},[a("p",[e._v(e._s(e.$t("维护中")))])]):e._e()])})),0)])])])},r=[],i=(a("a4d3"),a("4de4"),a("4160"),a("c975"),a("a15b"),a("0d03"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("159b"),a("96cf"),a("2fa7")),s=a("2f62"),m=a("6dfa"),c=a("e5bf"),o=a("89cb");function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(a,!0).forEach((function(t){Object(i["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={data:function(){return{gameList:[{default_game_id:1,game_platform_id:1,game_platform_name:"AG",game_platform_mark:[this.$t("亚洲市场占有率第一领导品牌"),this.$t("message.channelHomeNote2")].join("<br/>"),name:"AG",title:"AG",thumb:this.$imgs["channel/real/ag"],desc:[this.$t("message.channelHomeNote1"),this.$t("message.channelHomeNote2")],hoverPic:this.$imgs["channel/home/hover03"]},{default_game_id:2100,game_platform_id:20,game_platform_name:"OG",game_platform_mark:this.$t("message.channelRealNote3"),name:"OG",title:"OG",thumb:this.$imgs["channel/real/og"],hoverPic:this.$imgs["channel/home/hover01"]},{default_game_id:14,game_platform_id:4,game_platform_name:"ALLBET",game_platform_mark:this.$t("message.channelRealNote4"),name:"ALLBET",thumb:this.$imgs["channel/real/allbet"],title:"ALLBET"},{default_game_id:3158,game_platform_id:105,game_platform_name:"EBET",game_platform_mark:this.$t("贴近亚洲文化市场"),name:"Ebet",thumb:this.$imgs["channel/real/ebet"],title:"eBET"},{default_game_id:15,game_platform_id:3,game_platform_name:"BBIN",game_platform_mark:this.$t("message.channelRealNote2"),name:"BBIN",title:"BBIN",thumb:this.$imgs["channel/real/bbin"]}],navList:[],thenList:[],platList:[],typeObj:{},banner:[]}},computed:u({},Object(s["c"])("user",["token"]),{},Object(s["c"])("game",["gameCatesPlatforms"])),watch:{gameCatesPlatforms:{handler:function(e){var t;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(e.filter((function(e){return"真人"===e.game_cate_name}))[0].game_cate_id);case 2:return t=a.sent,a.next=5,regeneratorRuntime.awrap(Object(m["l"])({game_cate_id:t}));case 5:this.banner=a.sent;case 6:case"end":return a.stop()}}),null,this)},deep:!0}},created:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}))},methods:{goRank:function(){this.$router.push("/rank/money")},newtoplist:function(){var e,t=this;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,regeneratorRuntime.awrap(Object(c["j"])());case 2:e=a.sent,e.forEach((function(e){e.list.forEach((function(e){t.platList.forEach((function(t){e.game_cate_id==t.game_cate_id&&t.platform_list.forEach((function(t){e.platform_id==t.game_platform_id&&(e.default_game_id=t.default_game_id,e.game_platform_id=t.game_platform_id)}))}))}))})),this.navList=e;case 5:case"end":return a.stop()}}),null,this)},allplatform:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(Object(c["d"])());case 2:e=t.sent,this.thenList=e;case 4:case"end":return t.stop()}}),null,this)},getAllGameCatesPlatforms:function(){var e;return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(Object(o["c"])());case 2:e=t.sent,this.platList=e,this.newtoplist();case 5:case"end":return t.stop()}}),null,this)}},filters:{moneyFilter:function(e){if(e){var t=[],a=0;e=(e||0).toString().split("");for(var n=e.length-1;n>=0;n--)a++,t.unshift(e[n]),a%3||0==n||t.unshift(",");t=t.join("")}if(t)return-1==t.indexOf(".")?t+".00":t},gameFilter:function(e,t){for(var a in t)if(e==a)return t[a]}}},g=f,h=(a("ebd5"),a("2877")),p=Object(h["a"])(g,n,r,!1,null,"6fd84759",null);t["default"]=p.exports},"4c5e":function(e,t,a){},ebd5:function(e,t,a){"use strict";var n=a("4c5e"),r=a.n(n);r.a}}]);