(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dragonBoat"],{"064c":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"dragonBoat"}},[i("div",{staticClass:"main"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("3d8f"),expression:"require('./assets/top_01.png')"}],attrs:{alt:""}}),i("img",{staticStyle:{position:"relative","z-index":"1"},attrs:{src:s("e8fe"),alt:""}})]),t._l(6,(function(t){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("070b")("./body-bg_0"+t+".jpg"),expression:"require(`./assets/body-bg_0${item}.jpg`)"}],key:t,staticClass:"bg",attrs:{alt:""}})})),i("div",{staticClass:"top"},[i("img",{attrs:{src:s("6f58"),alt:""},on:{click:t.goDeposit}}),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("9223"),expression:"require('./assets/chongya.png')"}],attrs:{alt:""}}),i("div",[t._l(t.rank,(function(e){return i("span",{key:e,staticClass:"num"},[t._v(t._s(e))])})),i("span",{staticClass:"num"},[t._v(t._s(t.$t("米")))])],2),i("p",[t._v(t._s(t.$t("*每500流水即可前进1米")))])]),i("div",{staticClass:"ship"},[t._l(6,(function(t){return i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s("2611")("./ship_0"+t+".png"),expression:"require(`./assets/ship_0${item}.png`)"}],key:t,attrs:{alt:""}})})),i("img",{staticClass:"jiang",attrs:{src:s("cee0"),alt:""}}),i("div",{staticClass:"ship-wrap reward"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("奖励"))+" ")]),i("div",{staticClass:"content"},[t._l(t.reward,(function(e){return i("div",{key:e.level,staticClass:"content-row"},[i("span",[t._v(t._s(t.$t("第"))+t._s(e.level)+t._s(t.$t("名")))]),i("span",[t._v(t._s(e.text))])])})),i("img",{staticClass:"jiangli",attrs:{src:s("8461"),alt:""}}),i("img",{staticClass:"zz1",attrs:{src:s("6df2"),alt:""}})],2)]),i("div",{staticClass:"ship-wrap bug"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("额外冲刺获赠方式"))+" ")]),i("div",{staticClass:"tag"},[t._v(" "+t._s(t.$t("每日特定额外冲刺获赠方式"))+" ")]),t._l(t.bug,(function(e){return i("p",{key:e},[t._v(t._s(e))])})),i("img",{staticClass:"zz2",attrs:{src:s("2ca3"),alt:""}})],2),i("div",{staticClass:"ship-wrap record"},[i("div",{staticClass:"tab",style:{backgroundImage:0===t.activeTab?"url("+s("b774")+")":"url("+s("e3d7")+")"}},t._l(t.tab,(function(e,s){return i("span",{key:s,class:{active:t.activeTab===s},on:{click:function(e){t.activeTab=s}}},[t._v(t._s(e))])})),0),0===t.activeTab?i("table",[i("tbody",[i("tr",[i("td",[t._v(t._s(t.$t("排名")))]),i("td",[t._v(t._s(t.$t("会员账号")))]),i("td",[t._v(t._s(t.$t("前进米数")))])]),t._l(t.rankList,(function(e,s){return i("tr",{key:s},[i("td",[t._v(t._s(e.rank))]),i("td",[t._v(t._s(e.username))]),i("td",[t._v(t._s(e.score))])])}))],2)]):i("table",[i("tbody",[i("tr",[i("td",[t._v(t._s(t.$t("时间")))]),i("td",[t._v(t._s(t.$t("内容")))]),i("td",[t._v(t._s(t.$t("前进米数")))])]),t._l(t.rankRecord,(function(e,s){return i("tr",{key:s},[i("td",[t._v(t._s(e.created_at))]),i("td",[t._v(t._s(t.weekType[e.week]))]),i("td",[t._v(t._s(e.score))])])}))],2)]),i("img",{staticClass:"zz3",attrs:{src:s("8bec"),alt:""}})]),i("div",{staticClass:"ship-wrap rule"},[i("div",{staticClass:"title"},[t._v(" "+t._s(t.$t("活动规则"))+" ")]),t._l(t.rule,(function(e,s){return i("p",{key:s},[i("span",[t._v(t._s(s+1)+".")]),t._v(" "+t._s(e))])})),i("img",{staticClass:"zz4",attrs:{src:s("8ef1"),alt:""}}),i("img",{staticClass:"zongzi",attrs:{src:s("5306"),alt:""}}),i("img",{staticClass:"gotop",attrs:{src:s("62a5"),alt:""},on:{click:t.backTop}})],2)],2)],2)},n=[],r=(s("a4d3"),s("4de4"),s("4160"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("ac1f"),s("1276"),s("159b"),s("96cf"),s("2fa7")),a=s("ca41"),c=s("2f62");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(s,!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var g={data:function(){return{activeTab:0,reward:[{level:"1",text:this.$t("与RION 1对1私密远程视频和38,888元彩金")},{level:"2",text:this.$t("256G IPHONE PRO MAX 或 折现18,888元彩金")},{level:"3~5",text:this.$t("最新IPAD PRO 或 折现8888元彩金")},{level:"6~10",text:this.$t("5666元彩金")},{level:"11~25",text:this.$t("1888元彩金")},{level:"26~50",text:this.$t("888元彩金")},{level:"51~100",text:this.$t("388元彩金")}],bug:[this.$t("周一 在AG百家乐连赢6局额外前进10米"),this.$t("周二 彩票注单尾数为8888额外前进6米"),this.$t("周三 电子游艺场当天总流水倍数*2"),this.$t("周四 旗开得胜，当天在棋牌第一局赢得胜利即可获得当局流水相对前进米数*2"),this.$t("周五 当天累计存款过千，即可以每1000元存款为1米额外增加前进米数"),this.$t("周六 不眠夜，0点至早6点的流水将x1.5倍计算相对额外增加米数"),this.$t("周日 连续参与一周，翻倍当周总前进总米数")],tab:[this.$t("排行榜"),this.$t("个人记录")],rule:[this.$t("单笔存款200元以及以上即获得当天龙舟大赛参与资格"),this.$t("比赛前进米数以每500流水为1米计算"),this.$t("数据将在每天00:30分更新"),"“额外冲刺”需在完成后，向在线客服申请才会获赠，经相关部门核实后将跟当天数据一起更新；",this.$t("每日额外冲刺申请截止时间为当天23:59:59，逾期不补；"),this.$t("龙舟大赛第一名与RION私密视频见面的总时长为30分钟；"),this.$t("所有赠送彩金需完成1倍流水提现"),this.$t("龙舟大赛获奖人公布以及奖励派发将在7月1日完成，奖金将直接派发至平台主钱包；"),this.$t("此活动每位玩家，每账户信息（姓名，手机），支付方式（卡号，银行户名）及IP地址只能有一个账号参与"),this.$t("如有违规并被确认为套利玩家，将立即取消参赛资格、收回所产生的盈利；"),this.$t("此活动万趣娱乐享有最终解释权。")],rank:null,rankList:[],rankRecord:[],weekType:{1:this.$t("AG百家乐连赢"),2:this.$t("彩票注单尾号"),3:this.$t("邀请好友"),4:this.$t("旗开得胜"),5:this.$t("累计存款过千"),6:this.$t("不眠夜"),0:this.$t("连续一周奖金翻倍"),"-1":this.$t("常规获得")}}},computed:p({},Object(c["c"])("user",["userInfo","isLogin"])),mounted:function(){var t,e,s,i;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(Object(a["g"])());case 2:return t=n.sent,e=t.score,this.rank=e?String(e).split(""):["0"],n.next=7,regeneratorRuntime.awrap(Object(a["h"])());case 7:return this.rankList=n.sent,n.next=10,regeneratorRuntime.awrap(Object(a["i"])());case 10:s=n.sent,i=s.data,this.rankRecord=i;case 13:case"end":return n.stop()}}),null,this)},methods:{goDeposit:function(){this.isLogin?this.$router.push("/deposit"):this.$router.push({name:"register"})},backTop:function(){scroll(0,0)}}},u=g,l=(s("89b8"),s("2877")),d=Object(l["a"])(u,i,n,!1,null,"2d8ee712",null);e["default"]=d.exports},"070b":function(t,e,s){var i={"./body-bg_01.jpg":"a3b1","./body-bg_02.jpg":"5468","./body-bg_03.jpg":"56db","./body-bg_04.jpg":"c6ba","./body-bg_05.jpg":"b7cd","./body-bg_06.jpg":"fed58"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="070b"},"1e0f":function(t,e,s){t.exports=s.p+"img/ship_04.81221fb9.png"},2611:function(t,e,s){var i={"./ship_01.png":"d4fe","./ship_02.png":"2903","./ship_03.png":"3cf5","./ship_04.png":"1e0f","./ship_05.png":"a35a","./ship_06.png":"30cc"};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}n.keys=function(){return Object.keys(i)},n.resolve=r,t.exports=n,n.id="2611"},2903:function(t,e,s){t.exports=s.p+"img/ship_02.966b70e7.png"},"2ca3":function(t,e,s){t.exports=s.p+"img/zz2.906f6a22.png"},"30cc":function(t,e,s){t.exports=s.p+"img/ship_06.e120a53b.png"},"3cf5":function(t,e,s){t.exports=s.p+"img/ship_03.caf1b529.png"},"3d8f":function(t,e,s){t.exports=s.p+"img/top_01.e20b35e8.png"},5306:function(t,e,s){t.exports=s.p+"img/zongzi.dbe0e732.png"},5468:function(t,e,s){t.exports=s.p+"img/body-bg_02.7485ecee.jpg"},"56db":function(t,e,s){t.exports=s.p+"img/body-bg_03.11155faf.jpg"},"62a5":function(t,e,s){t.exports=s.p+"img/go-top.17182342.png"},"6df2":function(t,e,s){t.exports=s.p+"img/zz1.dcb866d2.png"},"6f58":function(t,e,s){t.exports=s.p+"img/menpiiao.2af2cbc4.png"},8461:function(t,e,s){t.exports=s.p+"img/jiangli.fbd781ad.png"},"89b8":function(t,e,s){"use strict";var i=s("e76d"),n=s.n(i);n.a},"8bec":function(t,e,s){t.exports=s.p+"img/zz3.2c2ae8b2.png"},"8ef1":function(t,e,s){t.exports=s.p+"img/zz4.0ee45e6e.png"},9223:function(t,e,s){t.exports=s.p+"img/chongya.cd550d04.png"},a35a:function(t,e,s){t.exports=s.p+"img/ship_05.f5b0fc2e.png"},a3b1:function(t,e,s){t.exports=s.p+"img/body-bg_01.a498aa91.jpg"},b774:function(t,e,s){t.exports=s.p+"img/r-active.a249cb89.png"},b7cd:function(t,e,s){t.exports=s.p+"img/body-bg_05.5c4fd863.jpg"},c6ba:function(t,e,s){t.exports=s.p+"img/body-bg_04.e44123f7.jpg"},cee0:function(t,e,s){t.exports=s.p+"img/jiang.025b948a.png"},d4fe:function(t,e,s){t.exports=s.p+"img/ship_01.34570762.png"},e3d7:function(t,e,s){t.exports=s.p+"img/l-active.2ccd986e.png"},e76d:function(t,e,s){},e8fe:function(t,e,s){t.exports=s.p+"img/top_02.b45b0dda.png"},fed58:function(t,e,s){t.exports=s.p+"img/body-bg_06.869082b1.jpg"}}]);