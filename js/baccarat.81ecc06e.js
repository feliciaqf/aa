(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["baccarat"],{"0984":function(t,i,s){t.exports=s.p+"img/精英赛事规则.d31866bf.png"},"0a08":function(t,i,s){t.exports=s.p+"img/left.b0e82c7a.png"},"0b9c":function(t,i,s){t.exports=s.p+"img/参赛资格-晋级记录.765f48b5.png"},"1d1c":function(t,i,s){t.exports=s.p+"img/参赛资格-奖金记录.11339157.png"},"212d":function(t,i,s){t.exports=s.p+"img/精英赛规则.2f3ff8ee.png"},"2311e":function(t,i,s){t.exports=s.p+"img/锁.e6d783db.png"},"37fe":function(t,i,s){t.exports=s.p+"img/图标4.aeb54903.png"},3900:function(t,i,s){t.exports=s.p+"img/Layer-1@2x.9ec82926.png"},"3f2da":function(t,i,s){t.exports=s.p+"img/right.c2b9623d.png"},4719:function(t,i,s){t.exports=s.p+"img/1.6d1805c7.png"},"4bd1":function(t,i,s){},5037:function(t,i,s){t.exports=s.p+"img/新手赛事规则.107201bc.png"},5962:function(t,i,s){t.exports=s.p+"img/icon4.5adebf07.png"},"5a0c":function(t,i,s){!function(i,s){t.exports=s()}(0,(function(){"use strict";var t="millisecond",i="second",s="minute",e="hour",a="day",n="week",l="month",r="quarter",c="year",o=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,u=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d=function(t,i,s){var e=String(t);return!e||e.length>=i?t:""+Array(i+1-e.length).join(s)+t},g={s:d,z:function(t){var i=-t.utcOffset(),s=Math.abs(i),e=Math.floor(s/60),a=s%60;return(i<=0?"+":"-")+d(e,2,"0")+":"+d(a,2,"0")},m:function(t,i){var s=12*(i.year()-t.year())+(i.month()-t.month()),e=t.clone().add(s,l),a=i-e<0,n=t.clone().add(s+(a?-1:1),l);return Number(-(s+(i-e)/(a?e-n:n-e))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(o){return{M:l,y:c,w:n,d:a,h:e,m:s,s:i,ms:t,Q:r}[o]||String(o||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f="en",h={};h[f]=m;var v=function(t){return t instanceof x},p=function(t,i,s){var e;if(!t)return f;if("string"==typeof t)h[t]&&(e=t),i&&(h[t]=i,e=t);else{var a=t.name;h[a]=t,e=a}return s||(f=e),e},$=function(t,i,s){if(v(t))return t.clone();var e=i?"string"==typeof i?{format:i,pl:s}:i:{};return e.date=t,new x(e)},b=g;b.l=p,b.i=v,b.w=function(t,i){return $(t,{locale:i.$L,utc:i.$u,$offset:i.$offset})};var x=function(){function d(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var g=d.prototype;return g.parse=function(t){this.$d=function(t){var i=t.date,s=t.utc;if(null===i)return new Date(NaN);if(b.u(i))return new Date;if(i instanceof Date)return new Date(i);if("string"==typeof i&&!/Z$/i.test(i)){var e=i.match(o);if(e)return s?new Date(Date.UTC(e[1],e[2]-1,e[3]||1,e[4]||0,e[5]||0,e[6]||0,e[7]||0)):new Date(e[1],e[2]-1,e[3]||1,e[4]||0,e[5]||0,e[6]||0,e[7]||0)}return new Date(i)}(t),this.init()},g.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},g.$utils=function(){return b},g.isValid=function(){return!("Invalid Date"===this.$d.toString())},g.isSame=function(t,i){var s=$(t);return this.startOf(i)<=s&&s<=this.endOf(i)},g.isAfter=function(t,i){return $(t)<this.startOf(i)},g.isBefore=function(t,i){return this.endOf(i)<$(t)},g.$g=function(t,i,s){return b.u(t)?this[i]:this.set(s,t)},g.year=function(t){return this.$g(t,"$y",c)},g.month=function(t){return this.$g(t,"$M",l)},g.day=function(t){return this.$g(t,"$W",a)},g.date=function(t){return this.$g(t,"$D","date")},g.hour=function(t){return this.$g(t,"$H",e)},g.minute=function(t){return this.$g(t,"$m",s)},g.second=function(t){return this.$g(t,"$s",i)},g.millisecond=function(i){return this.$g(i,"$ms",t)},g.unix=function(){return Math.floor(this.valueOf()/1e3)},g.valueOf=function(){return this.$d.getTime()},g.startOf=function(t,r){var o=this,u=!!b.u(r)||r,d=b.p(t),g=function(t,i){var s=b.w(o.$u?Date.UTC(o.$y,i,t):new Date(o.$y,i,t),o);return u?s:s.endOf(a)},m=function(t,i){return b.w(o.toDate()[t].apply(o.toDate(),(u?[0,0,0,0]:[23,59,59,999]).slice(i)),o)},f=this.$W,h=this.$M,v=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case c:return u?g(1,0):g(31,11);case l:return u?g(1,h):g(0,h+1);case n:var $=this.$locale().weekStart||0,x=(f<$?f+7:f)-$;return g(u?v-x:v+(6-x),h);case a:case"date":return m(p+"Hours",0);case e:return m(p+"Minutes",1);case s:return m(p+"Seconds",2);case i:return m(p+"Milliseconds",3);default:return this.clone()}},g.endOf=function(t){return this.startOf(t,!1)},g.$set=function(n,r){var o,u=b.p(n),d="set"+(this.$u?"UTC":""),g=(o={},o[a]=d+"Date",o.date=d+"Date",o[l]=d+"Month",o[c]=d+"FullYear",o[e]=d+"Hours",o[s]=d+"Minutes",o[i]=d+"Seconds",o[t]=d+"Milliseconds",o)[u],m=u===a?this.$D+(r-this.$W):r;if(u===l||u===c){var f=this.clone().set("date",1);f.$d[g](m),f.init(),this.$d=f.set("date",Math.min(this.$D,f.daysInMonth())).toDate()}else g&&this.$d[g](m);return this.init(),this},g.set=function(t,i){return this.clone().$set(t,i)},g.get=function(t){return this[b.p(t)]()},g.add=function(t,r){var o,u=this;t=Number(t);var d=b.p(r),g=function(i){var s=$(u);return b.w(s.date(s.date()+Math.round(i*t)),u)};if(d===l)return this.set(l,this.$M+t);if(d===c)return this.set(c,this.$y+t);if(d===a)return g(1);if(d===n)return g(7);var m=(o={},o[s]=6e4,o[e]=36e5,o[i]=1e3,o)[d]||1,f=this.$d.getTime()+t*m;return b.w(f,this)},g.subtract=function(t,i){return this.add(-1*t,i)},g.format=function(t){var i=this;if(!this.isValid())return"Invalid Date";var s=t||"YYYY-MM-DDTHH:mm:ssZ",e=b.z(this),a=this.$locale(),n=this.$H,l=this.$m,r=this.$M,c=a.weekdays,o=a.months,d=function(t,e,a,n){return t&&(t[e]||t(i,s))||a[e].substr(0,n)},g=function(t){return b.s(n%12||12,t,"0")},m=a.meridiem||function(t,i,s){var e=t<12?"AM":"PM";return s?e.toLowerCase():e},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:b.s(r+1,2,"0"),MMM:d(a.monthsShort,r,o,3),MMMM:o[r]||o(this,s),D:this.$D,DD:b.s(this.$D,2,"0"),d:String(this.$W),dd:d(a.weekdaysMin,this.$W,c,2),ddd:d(a.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(n),HH:b.s(n,2,"0"),h:g(1),hh:g(2),a:m(n,l,!0),A:m(n,l,!1),m:String(l),mm:b.s(l,2,"0"),s:String(this.$s),ss:b.s(this.$s,2,"0"),SSS:b.s(this.$ms,3,"0"),Z:e};return s.replace(u,(function(t,i){return i||f[t]||e.replace(":","")}))},g.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},g.diff=function(t,o,u){var d,g=b.p(o),m=$(t),f=6e4*(m.utcOffset()-this.utcOffset()),h=this-m,v=b.m(this,m);return v=(d={},d[c]=v/12,d[l]=v,d[r]=v/3,d[n]=(h-f)/6048e5,d[a]=(h-f)/864e5,d[e]=h/36e5,d[s]=h/6e4,d[i]=h/1e3,d)[g]||h,u?v:b.a(v)},g.daysInMonth=function(){return this.endOf(l).$D},g.$locale=function(){return h[this.$L]},g.locale=function(t,i){if(!t)return this.$L;var s=this.clone();return s.$L=p(t,i,!0),s},g.clone=function(){return b.w(this.$d,this)},g.toDate=function(){return new Date(this.valueOf())},g.toJSON=function(){return this.isValid()?this.toISOString():null},g.toISOString=function(){return this.$d.toISOString()},g.toString=function(){return this.$d.toUTCString()},d}();return $.prototype=x.prototype,$.extend=function(t,i){return t(i,x,$),$},$.locale=p,$.isDayjs=v,$.unix=function(t){return $(1e3*t)},$.en=h[f],$.Ls=h,$}))},"5f72":function(t,i,s){t.exports=s.p+"img/图标5.75fc1af5.png"},6057:function(t,i,s){t.exports=s.p+"img/专家赛规则.45d2a66b.png"},"7a16":function(t,i,s){t.exports=s.p+"img/Group 10(2).3f80e95d.png"},"7f44":function(t,i,s){t.exports=s.p+"img/icon2.fc5fe691.png"},"8cfd":function(t,i,s){t.exports=s.p+"img/layer4.9678c9f9.png"},"8d0a":function(t,i,s){t.exports=s.p+"img/Group 10(6).5ffb52f4.png"},"917eb":function(t,i,s){t.exports=s.p+"img/icon3.7ba921dd.png"},"926b":function(t,i,s){t.exports=s.p+"img/Group 10(1).91b4cde2.png"},9301:function(t,i,s){t.exports=s.p+"img/半决赛规则.426882e9.png"},"95fa":function(t,i,s){t.exports=s.p+"img/2.5d958b95.png"},"9a47":function(t,i,s){t.exports=s.p+"img/总决赛赛事规则.855bed83.png"},"9b58":function(t,i,s){t.exports=s.p+"img/Group 10(4).ec5fd2db.png"},"9bf94":function(t,i,s){t.exports=s.p+"img/宝座.d25dff69.png"},"9f4d":function(t,i,s){t.exports=s.p+"img/新手赛规则.c268df27.png"},a1bb:function(t,i,s){t.exports=s.p+"img/图标7.94f0012f.png"},a3a05:function(t,i,s){"use strict";var e=s("4bd1"),a=s.n(e);a.a},a3d2:function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"baccarat"}},[e("img",{staticClass:"top-img1",attrs:{src:s("3900"),alt:""}}),e("div",{staticClass:"activity-time"},[t._v(" "+t._s(t.$t("2020年2月1日-2020年2月23日"))+" ")]),e("button",{staticClass:"baccarat-btn",on:{click:t.handleClick}}),t._e(),e("div",{staticClass:"top-status"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList2[t.status],expression:"imgList2[status]"}],staticClass:"top-img1",attrs:{alt:""}}),e("div",{staticClass:"top-status-item item1",on:{click:function(i){t.status=0}}}),e("div",{staticClass:"top-status-item item2",on:{click:function(i){t.status=1}}}),e("div",{staticClass:"top-status-item item3",on:{click:function(i){t.status=2}}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList2[0],expression:"imgList2[0]"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList2[1],expression:"imgList2[1]"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList2[2],expression:"imgList2[2]"}],staticStyle:{display:"none"},attrs:{alt:""}})]),0===t.status?e("div",[t._m(0),e("img",{staticClass:"top-img1",attrs:{id:"navigation2",src:s("8cfd"),alt:""}}),e("div",{staticClass:"rule",attrs:{id:"navigation3"}},[e("div",[e("div",{staticClass:"schedule"},[e("div",{staticClass:"schedule-box schedule-box-1",on:{click:function(i){t.imgIndex=0}}},[e("img",{staticClass:"selected-img",attrs:{src:s("9f4d"),alt:""}}),e("div",{staticClass:"schedule-time"},[e("p",[t._v(t._s(t.$t("下一场")))]),e("p",[t._v(t._s(t.$t("暂定")))])])]),e("div",{staticClass:"schedule-box schedule-box-2",on:{click:function(i){t.imgIndex=1}}},[e("img",{staticClass:"selected-img",attrs:{src:s("212d"),alt:""}}),e("div",{staticClass:"schedule-time"},[e("p",[t._v(t._s(t.$t("下一场")))]),e("p",[t._v(t._s(t.$t("暂定")))])])]),e("div",{staticClass:"schedule-box schedule-box-3",on:{click:function(i){t.imgIndex=2}}},[e("img",{staticClass:"selected-img",attrs:{src:s("6057"),alt:""}}),e("div",{staticClass:"schedule-time"},[e("p",[t._v(t._s(t.$t("下一场")))]),e("p",[t._v(t._s(t.$t("暂定")))])])]),e("div",{staticClass:"schedule-box schedule-box-4",on:{click:function(i){t.imgIndex=3}}},[e("img",{staticClass:"selected-img",attrs:{src:s("9301"),alt:""}}),e("div",{staticClass:"schedule-time"},[e("p",[t._v(t._s(t.$t("下一场")))]),e("p",[t._v(t._s(t.$t("暂定")))])])]),e("div",{staticClass:"schedule-box schedule-box-5",on:{click:function(i){t.imgIndex=4}}},[e("img",{staticClass:"selected-img",attrs:{src:s("b93a"),alt:""}}),e("div",{staticClass:"schedule-time"},[e("p",[t._v(t._s(t.$t("下一场")))]),e("p",[t._v(t._s(t.$t("暂定")))])])])]),e("div",{staticClass:"table-1"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList[t.imgIndex],expression:"imgList[imgIndex]"}],staticClass:"table-img",attrs:{alt:""}}),e("img",{staticClass:"table-i table-img1",attrs:{src:s("9b58"),alt:""}}),e("img",{staticClass:"table-i table-img2",attrs:{src:s("de45"),alt:""}}),e("img",{staticClass:"table-i table-img3",attrs:{src:s("8d0a"),alt:""}}),e("img",{staticClass:"table-i table-img4",attrs:{src:s("d813"),alt:""}}),e("img",{staticClass:"table-i table-img5",attrs:{src:s("f699"),alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.activityRule[t.imgIndex].tableImg,expression:"activityRule[imgIndex].tableImg"}],staticClass:"table-i table-img6",class:{"table-bjs":3===t.imgIndex,"table-zjs":4===t.imgIndex},attrs:{alt:""}}),e("div",{staticClass:"role-1 role-text"},[t._v(" "+t._s(t.activityRule[t.imgIndex].rule1)+" ")]),e("div",{staticClass:"role-2 role-text"},[t._v(" "+t._s(t.activityRule[t.imgIndex].rule2)+" ")]),e("div",{staticClass:"role-3 role-text"},[t._v(" "+t._s(t.activityRule[t.imgIndex].rule3)+" ")]),e("div",{staticClass:"role-4-title",class:{"role-zjs":4===t.imgIndex}},t._l(t.activityRule[t.imgIndex].title,(function(i){return e("span",{key:i},[t._v(" "+t._s(i)+" ")])})),0),e("div",{staticClass:"role-4",class:{"role-zjs":4===t.imgIndex}},t._l(t.activityRule[t.imgIndex].rule4,(function(i){return e("span",{key:i},[t._v(" "+t._s(i)+" ")])})),0),e("div",{staticClass:"role-5"},[t._v(" "+t._s(t.activityRule[t.imgIndex].rule5)+" ")]),e("div",{staticClass:"role-6"},[e("span",[t._v(t._s(t.activityRule[t.imgIndex].rule6))])]),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList[0],expression:"imgList[0]"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList[1],expression:"imgList[1]"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList[2],expression:"imgList[2]"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList[3],expression:"imgList[3]"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgList[4],expression:"imgList[4]"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.activityRule[0].tableImg,expression:"activityRule[0].tableImg"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.activityRule[1].tableImg,expression:"activityRule[1].tableImg"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.activityRule[2].tableImg,expression:"activityRule[2].tableImg"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.activityRule[3].tableImg,expression:"activityRule[3].tableImg"}],staticStyle:{display:"none"},attrs:{alt:""}}),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.activityRule[4].tableImg,expression:"activityRule[4].tableImg"}],staticStyle:{display:"none"},attrs:{alt:""}})])])]),e("div",{staticClass:"details"},[e("ul",{staticClass:"details-ul"},t._l(t.detalisList,(function(i,s){return e("li",{staticClass:"details-li"},[t._v(" "+t._s(i)+" "),e("div",{staticClass:"item-img"},[t._v(" "+t._s(s+1)+" ")])])})),0)]),e("div",{staticClass:"navigation"},[e("a",{staticClass:"item item-1",class:{active:1===t.navigationIndex},attrs:{href:"#navigation1"},on:{click:function(i){t.navigationIndex=1}}},[t._v(" "+t._s(t.$t("赛事奖金"))+" ")]),e("a",{staticClass:"item item-2",class:{active:2===t.navigationIndex},attrs:{href:"#navigation2"},on:{click:function(i){t.navigationIndex=2}}},[t._v(" "+t._s(t.$t("赛事流程"))+" ")]),e("a",{staticClass:"item item-3",class:{active:3===t.navigationIndex},attrs:{href:"#navigation3"},on:{click:function(i){t.navigationIndex=3}}},[t._v(" "+t._s(t.$t("赛事规则"))+" ")]),e("a",{staticClass:"item item-4",attrs:{href:"#top_bar"},on:{click:function(i){t.navigationIndex=1}}},[t._v(" "+t._s(t.$t("返回顶部"))+" ")])])]):t._e(),1===t.status?e("div",{staticClass:"advance-box"},[e("div",{staticClass:"advance-top"},[e("div",{staticClass:"click-box click-box-1",on:{click:function(i){t.tableActive=1}}},[1===t.tableActive?e("img",{attrs:{src:s("b894"),alt:""}}):t._e()]),e("div",{staticClass:"click-box click-box-2",on:{click:function(i){t.tableActive=2}}},[2===t.tableActive?e("img",{attrs:{src:s("b894"),alt:""}}):t._e()]),1===t.tableActive?e("img",{staticClass:"advance-top-bg",attrs:{src:s("1d1c")}}):t._e(),2===t.tableActive?e("img",{staticClass:"advance-top-bg",attrs:{src:s("0b9c")}}):t._e(),1===t.tableActive?e("table",{staticClass:"table-left table-left-1"},t._l(6,(function(i){return e("tr",{key:i},t._l(3,(function(i){return e("td",{key:i},[t._v(" —— ")])})),0)})),0):t._e(),2===t.tableActive?e("table",{staticClass:"table-left table-left-2"},t._l(6,(function(i){return e("tr",{key:i},t._l(4,(function(i){return e("td",{key:i},[t._v(" —— ")])})),0)})),0):t._e(),e("div",{staticClass:"advance-right"},[e("div",{staticClass:"advance-right-note"},[t._v(" "+t._s(t.$t("登录查看参赛资格及获奖记录"))+" ")]),e("button",{staticClass:"advance-right-login",on:{click:t.handleClick}}),e("p",{staticClass:"advance-right-p"},[t._v(" 存款5000元以上，即可参与下个时间段新手赛； ")]),e("p",{staticClass:"advance-right-p"},[t._v(" "+t._s(t.$t("VIP3以上会员可以直接参与新手赛事"))+" ")])])]),e("div",{staticClass:"ranking-list"},[e("div",{staticClass:"ranking-list-top"},t._l(t.rankingList,(function(i,s){return e("div",{key:i.title,staticClass:"ranking-list-item",class:{active:t.rankingListIndex===s},on:{click:function(i){t.rankingListIndex=s}}},[e("div",{staticClass:"ranking-list-title"},[t._v(" "+t._s(i.title)+" ")]),e("div",{staticClass:"ranking-list-description"},[t._v(" "+t._s(i.description)+" ")])])})),0),e("div",{staticClass:"ranking-list-data"},[e("img",{staticClass:"list-left",attrs:{src:s("0a08")},on:{click:function(i){t.dataListIndex--}}}),e("div",{staticClass:"data-list"},[e("div",{staticClass:"data-list-item",staticStyle:{margin:"0 auto"}},[t._v(" "+t._s(t.$t("暂定"))+" ")])]),e("img",{staticClass:"list-right",attrs:{src:s("3f2da")},on:{click:function(i){t.dataListIndex++}}})]),e("div",{staticClass:"ranking-list-text"},[t._v(" "+t._s(t.rankingMap[t.rankingListIndex])+"排行榜 ")])])]):t._e(),2===t.status?e("div",[e("div",{staticClass:"integral-top"},[e("button",{staticClass:"integral-box-login",on:{click:t.handleClick}}),e("div",{staticClass:"integral-top-box"},[e("div",{staticClass:"img-line-1"},t._l(t.achievementList.slice(0,4),(function(i,a){return e("div",{key:a,staticClass:"img-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.img,expression:"i.img"}],staticClass:"head-portrait",attrs:{alt:""}}),e("div",{staticClass:"text-1"},[e("img",{staticClass:"lock",attrs:{src:s("2311e"),alt:""}}),t._v(" "+t._s(t.$t("未解锁"))+t._s(i.integral)+"积分 ")]),t._l(i.bonus,(function(i,s){return e("p",{key:s,staticClass:"text-p"},[t._v(" "+t._s(i)+" ")])}))],2)})),0),e("div",{staticClass:"img-line-1 img-line-2"},t._l(t.achievementList.slice(4,7),(function(i,a){return e("div",{key:a,staticClass:"img-box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.img,expression:"i.img"}],staticClass:"head-portrait",attrs:{alt:""}}),e("div",{staticClass:"text-1"},[e("img",{staticClass:"lock",attrs:{src:s("2311e"),alt:""}}),t._v(" "+t._s(t.$t("未解锁"))+t._s(i.integral)+"积分 ")]),t._l(i.bonus,(function(i,s){return e("p",{key:s,staticClass:"text-p",class:{"text-p-2":1===s}},[t._v(" "+t._s(i)+" ")])}))],2)})),0)])]),e("div",{staticClass:"guest"},[e("div",{staticClass:"guest-left"},[e("div",{staticClass:"guest-left-item top1"},[e("img",{staticClass:"crown",attrs:{src:s("a547"),alt:""}}),e("img",{staticClass:"table",attrs:{src:s("9bf94"),alt:""}}),e("div",{staticClass:"guest-left-name"},[t._v(" "+t._s(t.$t("虚位以待"))+" ")])]),e("div",{staticClass:"guest-left-line"},t._l(3,(function(i){return e("div",{staticClass:"guest-left-item"},[e("img",{staticClass:"crown",attrs:{src:s("a547"),alt:""}}),e("img",{staticClass:"table",attrs:{src:s("9bf94"),alt:""}}),e("div",{staticClass:"guest-left-name"},[t._v(" "+t._s(t.$t("虚位以待"))+" ")])])})),0),e("div",{staticClass:"guest-left-line"},t._l(3,(function(i){return e("div",{staticClass:"guest-left-item"},[e("img",{staticClass:"crown",attrs:{src:s("a547"),alt:""}}),e("img",{staticClass:"table",attrs:{src:s("9bf94"),alt:""}}),e("div",{staticClass:"guest-left-name"},[t._v(" "+t._s(t.$t("虚位以待"))+" ")])])})),0)]),e("div",{staticClass:"guest-right"},t._l(t.guestRuleList,(function(i,s){return e("div",{key:s,staticClass:"guest-right-item"},[t._v(" "+t._s(i.text)+" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.icon,expression:"i.icon"}],attrs:{alt:""}})])})),0)]),e("div",{staticClass:"integral"},[e("div",{staticClass:"integral-left"},[e("div",{staticClass:"integral-left-text1"},[t._v(" "+t._s(t.$t("赛事积分是"))+t._s(t.$t(t.$constant.title))+"大师赛的专属积分 ")]),e("div",{staticClass:"integral-left-text2"},[t._v(" 赛事积分日期：2020年2月1日 至 2020年2月23日 ")]),e("div",{staticClass:"integral-line"}),e("div",{staticClass:"integral-left-text3"},[t._v(" "+t._s(t.$t("存款1000元=1赛事积分"))+" ")]),e("div",{staticClass:"integral-left-text4"},[t._v(" "+t._s(t.$t("10000有效投注=1赛事积分"))+" ")]),e("ul",{staticClass:"integral-left-ul"},[e("li",{staticClass:"integral-left-li"},[t._v(" "+t._s(t.$t("跻身赛事积分榜前列，可以达成个人成就，领取奖金、赛事勋章"))+" "),e("img",{staticClass:"integral-left-icon",attrs:{src:s("e912"),alt:""}})]),e("li",{staticClass:"integral-left-li"},[t._v(" "+t._s(t.$t("更有机会直接晋级半决赛"))+" "),e("img",{staticClass:"integral-left-icon",attrs:{src:s("e912"),alt:""}})]),t._m(1)])])])]):t._e()])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"bonus-box",attrs:{id:"navigation1"}},[s("div",{staticClass:"bonus-box-item bonus-box-1"},[t._v(" 3,888,888 ")]),s("div",{staticClass:"bonus-box-item bonus-box-2"},[t._v(" 588,888 ")]),s("div",{staticClass:"bonus-box-item bonus-box-3"},[t._v(" 1,888,888 ")]),s("div",{staticClass:"bonus-box-item bonus-box-4"},[t._v(" 5,8888 ")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"integral-left-li"},[t._v(" 率先7人达成20000赛事积分的会员可以作为特约嘉宾直通总决赛。 "),e("img",{staticClass:"integral-left-icon",attrs:{src:s("e912"),alt:""}})])}],n=(s("99af"),s("cb29"),s("0d03"),s("5037")),l=s.n(n),r=s("0984"),c=s.n(r),o=s("ec1b"),u=s.n(o),d=s("f85c"),g=s.n(d),m=s("9a47"),f=s.n(m),h=s("4719"),v=s.n(h),p=s("95fa"),$=s.n(p),b=s("d528"),x=s.n(b),_=s("cb1d"),y=s.n(_),C=s("a48a"),I=s.n(C),k=s("e016"),w=s.n(k),L=s("37fe"),S=s.n(L),M=s("5f72"),z=s.n(M),D=s("d56d"),N=s.n(D),O=s("a1bb"),R=s.n(O),A=s("d3bf"),T=s.n(A),H=s("7f44"),Y=s.n(H),G=s("917eb"),W=s.n(G),j=s("5962"),J=s.n(j),P=s("a97b"),U=s.n(P),V=s("f67e"),F=s.n(V),Z=s("7a16"),E=s.n(Z),q=s("926b"),B=s.n(q),Q=s("b5fd"),K=s.n(Q),X=s("5a0c"),tt=s.n(X),it={data:function(){return{navigationIndex:0,imgIndex:0,imgList:[l.a,c.a,u.a,g.a,f.a],activityRule:[{rule1:this.$t("积分前280名精英赛门票"),rule2:this.$t("存款5000元，已晋级会员无法再次参与"),rule3:this.$t("每场晋级20位会员积分最高名额，派发高额奖金"),rule4:[this.$t("奖金"),1888,888,588,188,18],rule5:this.$t("3倍流水提款"),rule6:this.$t("暂定"),tableImg:F.a,title:[this.$t("名次"),this.$t("第一名"),this.$t("第二名"),this.$t("第三名"),this.$t("第4-10名"),this.$t("第10-20名")]},{rule1:this.$t("晋级280人进行3轮对决"),rule2:this.$t("存款50000以上，或者VIP4以上会员直接参与"),rule3:this.$t("每轮积分最高的33人直接晋级专家赛"),rule4:[this.$t("奖金"),38888,18888,8888,3888,188],rule5:this.$t("3倍流水提款"),rule6:this.$t("暂定"),tableImg:E.a,title:[this.$t("名次"),this.$t("第一名"),this.$t("第二名"),this.$t("第三名"),this.$t("第4-10名"),this.$t("第10-20名")]},{rule1:this.$t("晋级99人进行1轮对决"),rule2:this.$t("存款大于等于500000元"),rule3:this.$t("积分最高的50人直接晋级半决赛"),rule4:[this.$t("奖金"),188888,88888,58888,18888,1888],rule5:this.$t("3倍流水提款"),rule6:this.$t("暂定"),tableImg:E.a,title:[this.$t("名次"),this.$t("第一名"),this.$t("第二名"),this.$t("第三名"),this.$t("第4-10名"),this.$t("第10-20名")]},{rule1:this.$t("根据晋级半决赛者计算积分"),rule2:this.$t("存款大于等于5000000元"),rule3:this.$t("积分前7者进入总决赛"),rule4:[],rule5:"",rule6:this.$t("暂定"),tableImg:B.a,title:[]},{rule1:this.$t("根据晋级人数计算出积分最高前七名"),rule2:this.$t("获得半决赛晋级资格的7人+特约嘉宾7人"),rule3:this.$t("晋级者全部赠送礼金"),rule4:[this.$t("奖金"),3888888,1888888,588888,58888],rule5:this.$t("无需流水即可取款"),rule6:this.$t("暂定"),tableImg:K.a,title:[this.$t("名次"),this.$t("第一名"),this.$t("第二名"),this.$t("第三名"),this.$t("第4-10名")]}],status:0,imgList2:[v.a,$.a,x.a],countDown:!1,tableActive:1,downTimeId:void 0,downTime:"",detalisList:[this.$t("所有赛事结果将在赛事结束并经过审核部门核实无误后2小时内公布并添加奖金到游戏账号，完成3倍流水即可取款，决赛奖金无需流水"),this.$t("只有真人游戏厅的百家乐游戏才会计算有效流水。棋牌游戏(大牌德州+雀神麻将)及电子游戏的以下类型游戏不计算为有效投注额，")+this.$t("包括各种桌面卡牌游戏、视频扑克、轮盘、Pontoon游戏、各种Craps游戏赌场战争游戏、娱乐场Hold’em游戏、牌九游戏等均不计算在百家乐大赛有效投注内；"),this.$t("本赛事所指单周定义为自然周（周一0:00至周日23:59）、单日定义为自然日（0:00至23:59）；"),this.$t("同账号、姓名、电话、银行卡、IP等绑定信息的玩家仅获得一个参赛资格及领取奖金机会；"),this.$t("会员参加任何优惠活动则被视为认可并同意遵守这些规则以及本娱乐场有关规定，愿意受其约束。为了避免对文字的理解差异，".concat(this.$t(this.$constant.title),"保留对以上方案的最终解释权。"))],rankingList:[{title:this.$t("新手赛排行"),description:this.$t("最高奖金1888元")},{title:this.$t("精英赛排行"),description:this.$t("最高奖金38888元")},{title:this.$t("专家赛排行"),description:this.$t("最高奖金188888元")},{title:this.$t("半决赛排行"),description:this.$t("争夺决赛资格")},{title:this.$t("总决赛排行"),description:this.$t("最高奖金3888888元")}],rankingMap:[this.$t("新手赛"),this.$t("精英赛"),this.$t("专家赛"),this.$t("半决赛"),this.$t("总决赛")],rankingListIndex:0,dataList:[this.$t("12月13日"),this.$t("12月14日"),this.$t("12月15日"),this.$t("12月16日"),this.$t("12月17日"),this.$t("12月18日"),this.$t("12月19日"),this.$t("12月20日"),this.$t("12月21日"),this.$t("12月22日"),this.$t("12月23日"),this.$t("12月24日"),this.$t("12月25日"),this.$t("12月26日")],dataListIndex:0,achievementList:[{img:y.a,integral:100,bonus:[this.$t("88元红包")]},{img:I.a,integral:1e3,bonus:[this.$t("888元红包")]},{img:w.a,integral:5e3,bonus:[this.$t("1888元红包")]},{img:S.a,integral:1e4,bonus:[this.$t("3888元红包")]},{img:z.a,integral:2e4,bonus:[this.$t("5888元红包"),this.$t("率先达成7人获得特约嘉宾名额")]},{img:N.a,integral:5e4,bonus:[this.$t("30g定制黄金"),this.$t("纪念徽章")]},{img:R.a,integral:100,bonus:[this.$t("50g定制黄金"),this.$t("纪念徽章")]}],guestRuleList:[{icon:T.a,text:this.$t("直通总决赛，保底5万，最高388万奖金")},{icon:Y.a,text:this.$t("菲律宾豪华游全套超豪华服务，往返商务舱+星级美食+特色旅游+奢华晚宴")},{icon:W.a,text:this.$t("与代言女优同框合影留念")},{icon:J.a,text:"{{$constant.title}}大师赛纯金定制纪念勋章"},{icon:U.a,text:this.$t("入选{{$constant.title}}大师赛委员会，您的态度指引我们赛事")}],ruleList:new Array(5).fill({rule1:this.$t("积分前280名精英赛门票"),rule2:this.$t("存款5000元，已晋级会员无法再次参与"),rule3:this.$t("每场晋级20位会员积分最高名额 ,"),bonus:[1888,888,588,188,18],competitionTime:[this.$t("12月13日"),this.$t("12月27日"),this.$t("1月10日"),this.$t("1月24日"),this.$t("2月7日"),this.$t("2月21日"),this.$t("3月13日"),this.$t("3月27日"),this.$t("4月10日"),this.$t("4月24日"),this.$t("5月8日"),this.$t("5月22日"),this.$t("6月12日"),this.$t("6月26日")]})}},mounted:function(){var t=this;this.downTimeId=setInterval((function(){var i=tt()("2020-2-1"),s=tt()(new Date),e=i.diff(s,"hour"),a=i.diff(s,"minute")%60,n=i.diff(s,"second")%60;t.downTime="".concat(e>=10?e:"0"+e,":").concat(a>=10?a:"0"+a,":").concat(n>=10?n:"0"+n)}),1e3)},beforeMount:function(){clearInterval(this.downTimeId)},methods:{handleClick:function(){this.$message(this.$t("活动暂未开始"))}}},st=it,et=(s("a3a05"),s("2877")),at=Object(et["a"])(st,e,a,!1,null,"6d6dcfb2",null);i["default"]=at.exports},a48a:function(t,i,s){t.exports=s.p+"img/图标2.b01a71a4.png"},a547:function(t,i,s){t.exports=s.p+"img/皇冠.41d3fe41.png"},a97b:function(t,i,s){t.exports=s.p+"img/icon5.3dbe2c01.png"},b5fd:function(t,i,s){t.exports=s.p+"img/Group 10.447eaad2.png"},b894:function(t,i,s){t.exports=s.p+"img/矩形copy.071da5d7.png"},b93a:function(t,i,s){t.exports=s.p+"img/总决赛规则.51bed2bc.png"},cb1d:function(t,i,s){t.exports=s.p+"img/图标1.cd5f080f.png"},d3bf:function(t,i,s){t.exports=s.p+"img/icon1.6b064956.png"},d528:function(t,i,s){t.exports=s.p+"img/3.06f19a10.png"},d56d:function(t,i,s){t.exports=s.p+"img/图标6.f0fcd3d0.png"},d813:function(t,i,s){t.exports=s.p+"img/Group 10(7).88c19d73.png"},de45:function(t,i,s){t.exports=s.p+"img/Group 10(5).edb3969f.png"},e016:function(t,i,s){t.exports=s.p+"img/图标3.a731f388.png"},e912:function(t,i,s){t.exports=s.p+"img/left-icon.b6fc3ea0.png"},ec1b:function(t,i,s){t.exports=s.p+"img/专家赛事规则.84ea7840.png"},f67e:function(t,i,s){t.exports=s.p+"img/Group 10(9).7c41b310.png"},f699:function(t,i,s){t.exports=s.p+"img/Group 10(8).bfea163e.png"},f85c:function(t,i,s){t.exports=s.p+"img/半决赛事规则.99af0b26.png"}}]);