(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ChannelActive"],{"149f":function(t,s,i){"use strict";i.r(s);var e=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"app-download"},[i("div",{staticClass:"container"},[i("div",{staticClass:"aside"},[i("ul",{staticClass:"menu"},[i("li",{staticClass:"active"},[t._v(t._s(t.$t("下载中心")))])])]),i("div",{staticClass:"main-cont"},[i("div",{staticClass:"section1"},[i("div",{staticClass:"qrcode"},[i("img",{staticClass:"qrimg",attrs:{src:t.er_pic,alt:"",width:"100%",height:"100%"}}),i("img",{staticClass:"qrlogo",attrs:{src:t.$imgs["common/qrlogo"],alt:"",height:"24"}})]),i("div",{staticClass:"qrlist"},[i("div",{staticClass:"block"},[i("img",{attrs:{src:t.$imgs["appdownload/img-ios"],alt:""}}),i("p",[t._v("IOS")])]),i("div",{staticClass:"line"}),i("div",{staticClass:"block"},[i("img",{attrs:{src:t.$imgs["appdownload/img-android"],alt:""}}),i("p",[t._v("android")])])])]),i("div",{staticClass:"section2"},[i("ul",{staticClass:"tabs"},[i("li",{on:{click:function(s){t.active=0}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:0!==t.active,expression:"active !== 0"}],attrs:{src:t.$imgs["appdownload/tab-ios"],alt:""}}),i("img",{directives:[{name:"show",rawName:"v-show",value:0===t.active,expression:"active === 0"}],attrs:{src:t.$imgs["appdownload/tab-ios-a"],alt:""}})]),i("li",{on:{click:function(s){t.active=1}}},[i("img",{directives:[{name:"show",rawName:"v-show",value:1!==t.active,expression:"active !== 1"}],attrs:{src:t.$imgs["appdownload/tab-android"],alt:""}}),i("img",{directives:[{name:"show",rawName:"v-show",value:1===t.active,expression:"active === 1"}],attrs:{src:t.$imgs["appdownload/tab-android-a"],alt:""}})])]),i("div",{staticClass:"slide-box"},[i("swiper",{directives:[{name:"show",rawName:"v-show",value:0===t.active,expression:"active === 0"}],ref:"slide01",attrs:{options:t.opts}},[t._l(t.iosList,(function(s,e){return i("swiper-slide",{key:e},[i("div",{staticClass:"left"},[i("h2",[t._v(t._s(s.title))]),i("p",{domProps:{innerHTML:t._s(s.desc)}})]),i("div",{staticClass:"right"},[i("img",{attrs:{src:t.$imgs["appdownload/ios/"+(e+1)]}})])])})),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2),i("swiper",{directives:[{name:"show",rawName:"v-show",value:1===t.active,expression:"active === 1"}],ref:"slide02",attrs:{options:t.opts}},[t._l(t.androidList,(function(s,e){return i("swiper-slide",{key:"_"+e},[i("div",{staticClass:"left"},[i("h2",[t._v(t._s(s.title))]),i("p",{domProps:{innerHTML:t._s(s.desc)}})]),i("div",{staticClass:"right"},[i("img",{attrs:{src:t.$imgs["appdownload/android/"+(e+1)]}})])])})),i("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),i("div",{staticClass:"swiper-button-next",attrs:{slot:"button-next"},slot:"button-next"})],2)],1)])])])])},a=[],o=(i("ac1f"),i("5319"),i("d055")),r=i.n(o),n=(i("455b"),i("7212")),c={errorCorrectionLevel:"H",type:"image/jpeg",margin:0,rendererOpts:{quality:.3}},l={name:"AppDownload",components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"]},data:function(){return{er_pic:"",active:0,iosList:[{title:"第一步",desc:"使用二维码扫描工具扫描页面上方二维码<br/>*请避免使用微信扫描以免二维码被屏蔽"},{title:"第二步",desc:"点击“立即安装”按钮，出现安装弹框，<br/>点击“安装”确认，耐心等待安装完成"},{title:"第三步",desc:'安装完成后，打开手机"设置", 点击"通用"'},{title:"第四步",desc:"滑到页面底部，找到并进入“设备管理”"},{title:"第五步",desc:"找到并点击“China SCE Property<br/>Holdings Limited”"},{title:"第六步",desc:"进入后点击“信任China SCE Property<br/>Holdings Limited”"},{title:"第七步",desc:"弹出框中，选择“信任”，设置完成，<br/>返回桌面点击“永发国际”即可开始游戏。"}],androidList:[{title:"第一步",desc:"使用二维码扫描工具扫描页面上方二维码<br/>*请避免使用微信扫描以免二维码被屏蔽"},{title:"第二步",desc:"点击“立即安装”按钮，弹出框中选择<br/>“下载”，耐心等待下载完成；"},{title:"第三步",desc:'下载完成后，出现永发国际安装项目<br/>点击"安装"；'},{title:"第四步",desc:"安装完成后，点击桌面图标“永发<br/>国际”即可开始游戏。"}],opts:{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},mounted:function(){var t=this,s=location.host.replace("www.",""),i="https://m.".concat(s,"/downApp");r.a.toDataURL(i,c,(function(s,i){if(s)throw s;t.er_pic=i}))}},d=l,p=(i("15f7"),i("2877")),v=Object(p["a"])(d,e,a,!1,null,"75eed8e8",null);s["default"]=v.exports},"15f7":function(t,s,i){"use strict";var e=i("7e2f3"),a=i.n(e);a.a},"455b":function(t,s,i){},"7e2f3":function(t,s,i){}}]);