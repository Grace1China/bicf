webpackJsonp([5],{"3YfN":function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r={data:function(){return{colors:["#009966","#009999","#00FF66","#00FF99","#339966","#339999","#990066","#990099","#CC0066","#CC0099","#FF6666","#FF6699"]}},computed:a()({},Object(s.b)({list:function(t){return t.page.home.hotkeys}})),mounted:function(){this.$store.dispatch("getHotkeys")},methods:{goKeyword:function(t){this.$router.push({name:"keyword",params:{keyword:t.id}})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",{attrs:{title:"热门关键词"}},[n("div",{staticClass:"tag-list"},[n("div",{staticClass:"inner"},t._l(t.list,function(e,i){return n("a",{key:i,style:{backgroundColor:t.colors[Math.abs(i%t.colors.length)]},attrs:{href:"javascrit:"},on:{click:function(n){t.goKeyword(e)}}},[t._v(t._s(e.keyword))])}))])])},staticRenderFns:[]};var c=n("VU/8")(r,o,!1,function(t){n("fVGs")},"data-v-3ad214e9",null);e.a=c.exports},"5yqa":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.dabf6c6.png"},C5rh:function(t,e){},EtJ5:function(t,e){},FQHI:function(t,e){},"KPU/":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"getBanner",function(){return gt}),n.d(i,"getHotnews",function(){return wt}),n.d(i,"getHotkeys",function(){return yt}),n.d(i,"getDailycoin",function(){return bt}),n.d(i,"getNews",function(){return Ct}),n.d(i,"getDetail",function(){return kt}),n.d(i,"getRelateNews",function(){return xt}),n.d(i,"getRelateObj",function(){return $t}),n.d(i,"getTimeLine",function(){return Ft}),n.d(i,"searchNews",function(){return Dt}),n.d(i,"keywordNews",function(){return Ut}),n.d(i,"getCoins",function(){return Ht}),n.d(i,"getCoinDetail",function(){return jt}),n.d(i,"getCoinNews",function(){return Et});n("MU8w");var a=n("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},s,!1,function(t){n("dsON")},null,null).exports,o=n("/ocq"),c=n("bOdI"),l=n.n(c),d=n("d7EF"),u=n.n(d),h=n("Dd8w"),f=n.n(h),v=n("rdLu"),p=n.n(v),m=n("XLwt"),_=n.n(m),g=n("NYxO"),w={name:"home-banner",data:function(){return{$chart:{},colors:["#F000BC","#FFC900","#7EC5FF"]}},computed:f()({},Object(g.b)({list:function(t){return t.page.home.banner}}),{chartData:function(){var t=this.list,e={tooltip:{position:function(t,e,n,i,a){var s=u()(t,2),r=s[0],o=s[1];return r>600&&(r-=n.clientWidth),[r,o]},formatter:function(e){var n=t[e.seriesName][e.dataIndex];return'\n              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+e.color+';"></span>'+e.seriesName+"\n              <br />\n              时间："+n.time+"\n              <br />\n              价格: "+a.a.filter("currency")(n.price,"$")+"\n              <br />\n              跌涨幅："+n.change_1h+"%\n            "}},grid:{left:"70"},xAxis:{show:!1,data:[]},yAxis:l()({axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:16,color:"#fff",formatter:"{value} %"}},"splitLine",{show:!1}),series:[]},n={type:"line",smooth:!0,lineStyle:{width:8,opacity:"0.8"},itemStyle:{color:"#fff",borderWidth:6,borderColor:"#fff"}},i=0;for(var s in t){var r=t[s];e.series.push(f()({},n,{name:s,lineStyle:f()({},n.lineStyle,{color:this.colors[i%this.colors.length]}),data:r.map(function(t){return t.change_1h}),extraData:r.map(function(t){return t.price})})),e.xAxis.data=r.map(function(t){return t.time}),i++}return e}}),mounted:function(){this.$store.commit("setNavbar",0),this.$chart=_.a.init(this.$refs.canvas),this.$chart.setOption(this.chartData)},watch:{list:function(t){this.$chart.setOption(this.chartData)}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"container"},[n("div",{staticClass:"gradual-l"}),t._v(" "),n("div",{staticClass:"banner-canvas"},[n("div",{ref:"canvas",staticClass:"canvas",attrs:{width:"1200",height:"300"}})]),t._v(" "),n("div",{staticClass:"gradual-r"}),t._v(" "),n("div",{staticClass:"banner-data"},t._l(t.chartData.series,function(e,i){return n("div",{key:i,staticClass:"item active"},[n("h2",[t._v(t._s(e.data[e.data.length-1])+"%")]),t._v(" "),n("p",[n("span",{staticClass:"color",style:{backgroundColor:t.colors[i]}}),t._v(t._s(e.name))])])}))])])},staticRenderFns:[]};var b=n("VU/8")(w,y,!1,function(t){n("FQHI")},"data-v-20a99b20",null).exports,C=n("YXC6"),k={data:function(){return{loading:!1,page:1}},components:{NewsItem:C.a},computed:f()({},Object(g.b)({news:function(t){return t.page.home.news}})),methods:{checkLoad:function(t){this.loading||(this.$refs.loadMore&&this.$refs.loadMore.getBoundingClientRect&&this.$refs.loadMore.getBoundingClientRect()).top-window.innerHeight<1e3&&(this.loading=!0,this.loadData())},loadData:function(){var t=this;this.$store.dispatch("getNews",{page:this.page++,limit:15}).then(function(){t.loading=!1})}},mounted:function(){this.loadData(),document.querySelector("html"),window.addEventListener("scroll",this.checkLoad),window.dispatchEvent(new Event("scroll"))},destroyed:function(){window.removeEventListener("scroll",this.checkLoad)}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list news-list"},[e("div",{staticClass:"list-container"},[this._l(this.news.list,function(t,n){return e("news-item",{key:n,attrs:{forceDesc:!0,link:"/post/"+t.id,title:t.title,description:t.summary,imgUrl:t.image,location:t.media,locationLink:t.url,time:t.ctime,spread:t.propagation,tags:t.keywords}})}),this._v(" "),e("div",{ref:"loadMore"})],2)])},staticRenderFns:[]};var $=n("VU/8")(k,x,!1,function(t){n("ePKH")},"data-v-bca3e89a",null).exports,F=n("3YfN"),D={components:{NewsItem:C.a},computed:f()({},Object(g.b)({list:function(t){return t.page.home.hotnews}}))},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("block",{attrs:{title:"热点新闻"}},[e("div",{staticClass:"hot-news"},this._l(this.list,function(t,n){return e("news-item",{key:n,attrs:{link:"/post/"+t.news_id,title:t.title,imgUrl:t.image}})}))])},staticRenderFns:[]};var H=n("VU/8")(D,U,!1,function(t){n("EtJ5")},"data-v-ec3ab914",null).exports,j=n("Gu7T"),E=n.n(j),N={data:function(){return{orderBy:"",isDesc:!0}},computed:f()({},Object(g.b)({dailycoin:function(t){return t.page.home.dailycoin}}),{list:function(){var t=this.isDesc,e=void 0;switch(this.orderBy){case"name":e=p.a.sortBy(this.dailycoin,function(t){return t.name});break;case"price":e=p.a.sortBy(this.dailycoin,function(t){return t.price});break;case"change_24h":e=p.a.sortBy(this.dailycoin,function(t){return t.change_24h});break;case"":default:return[].concat(E()(this.dailycoin))}return t&&e.reverse(),e}}),methods:{setOrder:function(t){this.orderBy==t?this.isDesc=!this.isDesc:(this.orderBy=t,this.isDesc=!0)}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",{attrs:{title:"今日行情",hasMore:!1}},[n("div",{staticClass:"daily-coin"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"theader"},[n("div",{staticClass:"col",on:{click:function(e){t.setOrder("name")}}},[t._v("\n          币种\n          "),n("br"),t._v(" "),n("span",[t._v("市值")])]),t._v(" "),n("div",{staticClass:"col",on:{click:function(e){t.setOrder("price")}}},[t._v("\n          价格\n          "),n("br"),t._v(" "),n("span",[t._v("交易量")])]),t._v(" "),n("div",{staticClass:"col",on:{click:function(e){t.setOrder("change_24h")}}},[t._v("\n          涨跌幅\n        ")])]),t._v(" "),n("div",{staticClass:"tbody"},t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"row item"},[n("div",{staticClass:"col"},[t._v("\n            "+t._s(e.name)+"\n            "),n("br"),t._v(" "),n("span",[t._v(t._s(t._f("currency")(e.marketcap,"$")))])]),t._v(" "),n("div",{staticClass:"col"},[t._v("\n            "+t._s(t._f("currency")(e.price,"$"))+"\n            "),n("br"),t._v(" "),n("span",[t._v(t._s(t._f("currency")(e.volume_24h,"$")))])]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"btnx",class:e.change_24h>=0?"info":"danger"},[t._v(t._s(e.change_24h)+"%")])])])}))])])])},staticRenderFns:[]};var R=n("VU/8")(N,O,!1,function(t){n("5yqa")},"data-v-df485120",null).exports,V={name:"home",components:{banner:b,list:$,HotKey:F.a,HotNews:H,dailyCoin:R},mounted:function(){this.$store.dispatch("getBanner"),this.$store.dispatch("getHotnews"),this.$store.dispatch("getDailycoin")}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),this._v(" "),e("banner",{attrs:{slot:"banner"},slot:"banner"}),this._v(" "),e("block",{attrs:{title:"币市头条"}},[e("list")],1),this._v(" "),e("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"},[e("hot-key"),this._v(" "),e("hot-news"),this._v(" "),e("daily-coin")],1),this._v(" "),e("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]},B=n("VU/8")(V,L,!1,null,null,null).exports,S={components:{NewsItem:C.a},computed:f()({},Object(g.b)({list:function(t){return t.page.detail.relatenews}}))},A={render:function(){var t=this.$createElement,e=this._self._c||t;return this.list&&this.list.length?e("block",{attrs:{title:"相关新闻"}},[e("div",{staticClass:"hot-news"},[e("div",{staticClass:"inner"},this._l(this.list,function(t,n){return e("news-item",{key:n,attrs:{metaAlign:!0,title:t.title,location:t.media,imgUrl:t.image,link:"/post/"+t.news_id}})}))])]):this._e()},staticRenderFns:[]};var M=n("VU/8")(S,A,!1,function(t){n("dGHQ")},"data-v-13ebbba5",null).exports,T={props:{list:{type:Array,default:[]}}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"timeline"},t._l(t.list,function(e,i){return n("li",{key:i},[n("div",{staticClass:"direction-r"},[n("div",{staticClass:"flag-wrapper"},[n("span",{staticClass:"time-wrapper"},[n("span",{staticClass:"text"},[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"line"})]),t._v(" "),n("span",{staticClass:"flag"},[t._v(t._s(e.text))])])])])}))},staticRenderFns:[]};var K={components:{TimeLine:n("VU/8")(T,P,!1,function(t){n("KPU/")},"data-v-31241c9b",null).exports},computed:f()({},Object(g.b)({list:function(t){return t.page.detail.timeline}}))},q={render:function(){var t=this.$createElement,e=this._self._c||t;return this.list&&this.list.length?e("div",{staticClass:"timeline"},[e("div",{staticClass:"title"},[this._v("\n    时间线\n  ")]),this._v(" "),e("div",{staticClass:"timeline-detail"},[e("time-line",{attrs:{list:this.list}})],1)]):this._e()},staticRenderFns:[]};var Q=n("VU/8")(K,q,!1,function(t){n("ey6o")},"data-v-8c0ddda4",null).exports,W=n("oqQY"),I=n.n(W),Y=(n("uM1m"),n("B197")),G=n.n(Y);I.a.locale("zh-cn"),I.a.extend(G.a);var J=I.a,z={data:function(){return{maxHeight:1e3,currentHeight:0,showAll:!0}},computed:f()({},Object(g.b)({post:function(t){return t.page.detail.post}})),updated:function(){this.post.id&&!this.showAll&&(this.currentHeight=this.$refs.inner.clientHeight,this.currentHeight<this.maxHeight&&(this.showAll=!0))},methods:{showAllHandler:function(){this.showAll=!0},relativeTime:function(t){return J(t).fromNow()}}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-body"},[n("div",{ref:"inner",staticClass:"inner",style:{maxHeight:t.post.id&&!t.showAll?t.maxHeight+"px":"initial"}},[n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.post.title))])]),t._v(" "),n("div",{staticClass:"meta"},[t.post.media?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"location"}}),t._v("\n        "+t._s(t.post.media)+"\n      ")],1):t._e(),t._v(" "),t.post.ctime?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"clock"}}),t._v("\n        "+t._s(t.post.ctime)+"\n      ")],1):t._e(),t._v(" "),t.post.keywords&&t.post.keywords.length?n("div",{staticClass:"meta-item tag"},[n("icon",{attrs:{type:"tag"}}),t._v(" "),t._l(t.post.keywords,function(e,i){return n("router-link",{key:i,attrs:{to:"/keyword/"+(e.keyword_id||e.id)}},[t._v(t._s(e.keyword))])})],2):t._e(),t._v(" "),n("div",{staticClass:"clearfix"})]),t._v(" "),t.post.summary&&t.post.summary.trim()?n("div",{staticClass:"expect"},[n("span",[t._v("\n        摘要：\n      ")]),t._v("\n      "+t._s(t.post.summary)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),t.post.url?n("div",{staticClass:"post-readorigin"},[n("a",{attrs:{href:t.post.url,target:"_blank"}},[t._v("查看原文")])]):t._e()]),t._v(" "),!t.showAll&&t.post.id?n("div",{staticClass:"read-more",on:{click:t.showAllHandler}},[t._v("\n    显示全部\n  ")]):t._e()])},staticRenderFns:[]};var Z=n("VU/8")(z,X,!1,function(t){n("WVC6")},"data-v-3c6a2fc4",null).exports,tt={computed:f()({},Object(g.b)({list:function(t){return t.page.detail.relateobj}}))},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list&&t.list.length?n("block",{attrs:{title:"相关人物和事件",hasMore:!1}},[n("div",{staticClass:"relate-obj"},[n("ul",t._l(t.list,function(e,i){return n("li",{key:i},[n("a",{attrs:{href:"javascript:"},domProps:{textContent:t._s(e.text)}})])}))])]):t._e()},staticRenderFns:[]};var nt={name:"detail",components:{Content:Z,relateNews:M,TimeLine:Q,RelateObj:n("VU/8")(tt,et,!1,function(t){n("C5rh")},"data-v-e809e89e",null).exports},methods:{load:function(t){this.$store.dispatch("getDetail",this.$route.params.id),this.$store.dispatch("getRelateNews",this.$route.params.id),this.$store.dispatch("getRelateObj",this.$route.params.id),this.$store.dispatch("getTimeLine",this.$route.params.id)}},mounted:function(){this.$store.commit("setNavbar",-1),this.$store.commit("resetDetail"),window.scrollTo(0,0),this.load(this.$route.params.id)},watch:{$route:function(t,e){t.params.id!=e.params.id&&(this.$store.commit("resetDetail"),this.load(t.params.id))}}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),this._v(" "),e("div",{staticClass:"detail-page"},[e("Content"),this._v(" "),e("time-line")],1),this._v(" "),e("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"},[e("relate-news"),this._v(" "),e("relate-obj")],1),this._v(" "),e("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]};var at=n("VU/8")(nt,it,!1,function(t){n("UW/0")},"data-v-b181409e",null).exports;a.a.use(o.a);var st=new o.a({routes:[{path:"/",name:"home",component:B},{path:"/post/:id",name:"detail",component:at},{path:"/search/:keyword",name:"search",component:function(){return n.e(0).then(n.bind(null,"ar59"))}},{path:"/keyword/:keyword",name:"keyword",component:function(){return n.e(1).then(n.bind(null,"hNPt"))}},{path:"/coin/list",name:"coin-list",component:function(){return n.e(2).then(n.bind(null,"el11"))}},{path:"/coin/p/:id",name:"coin-detail",component:function(){return n.e(3).then(n.bind(null,"Q+b0"))}}]}),rt=n("+6Bu"),ot=n.n(rt),ct=n("Xxa5"),lt=n.n(ct),dt=n("exGp"),ut=n.n(dt),ht=n("mtWM"),ft=n.n(ht).a,vt=this,pt=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get";return function(i){return a=ut()(lt.a.mark(function a(s){var r,o=s.commit,c=s.state;return lt.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ft[n](e);case 2:r=a.sent,o(t,i(r,c));case 4:case"end":return a.stop()}},a,vt)})),function(t){return a.apply(this,arguments)};var a}}},mt="http://47.104.135.60:8080",_t=pt("setHome"),gt=_t(mt+"/api/reports")(function(t){return{banner:t.data.data}}),wt=_t(mt+"/api/hot_news")(function(t){return{hotnews:t.data.data}}),yt=_t(mt+"/api/hot_keywords")(function(t){return{hotkeys:t.data.data}}),bt=_t(mt+"/api/today_market")(function(t){return{dailycoin:t.data.data}}),Ct=function(t,e){var n=t.commit,i=t.state;return ft.get(mt+"/api/news",{params:e}).then(function(t){n("setHome",{news:{list:[].concat(E()(i.home.news.list),E()(t.data.data.data))}})})},kt=(pt("setDetail"),function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e).then(function(t){n("setDetail",{post:t.data.data})})}),xt=function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e+"/similarity_news").then(function(t){n("setDetail",{relatenews:t.data.data})})},$t=function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e+"/related_event").then(function(t){n("setDetail",{relateobj:t.data.data})})},Ft=function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e+"/time_line").then(function(t){n("setDetail",{timeline:t.data.data})})},Dt=function(t,e){var n=t.commit,i=t.state;return ft.get(mt+"/api/search",{params:e}).then(function(t){n("setSearch",{word:e.word,list:[].concat(E()(i.search.list),E()(t.data.data.data))})})},Ut=function(t,e){var n=t.commit,i=t.state,a=e.id,s=ot()(e,["id"]);return ft.get(mt+"/api/keywords/"+a,{params:s}).then(function(t){n("setKeyword",{id:a,list:[].concat(E()(i.keyword.list),E()(t.data.data.data))})})},Ht=function(t,e){var n=t.commit,i=t.state;return ft.get(mt+"/api/coins",{params:e}).then(function(t){n("setCoin",{list:[].concat(E()(i.coin.list),E()(t.data.data.data))})})},jt=function(t,e){var n=t.commit,i=e.id,a=ot()(e,["id"]);return ft.get(mt+"/api/coins/"+i,{params:a}).then(function(t){n("setCoinDetail",{detail:t.data.data})})},Et=function(t,e){var n=t.commit;return ft.get(mt+"/api/coins/"+e+"/news").then(function(t){n("setCoinDetail",{news:t.data.data})})},Nt={state:{home:{hotkeys:[],hotnews:[],dailycoin:[],banner:{},news:{list:[]}},detail:{post:{},relatenews:[],relateobj:[],timeline:[]},search:{word:"",list:[]},keyword:{id:0,list:[]},coin:{list:[]},coinDetail:{detail:{},news:[]}},mutations:{setHome:function(t,e){for(var n in e)t.home[n]=e[n]},setDetail:function(t,e){for(var n in e)t.detail[n]=e[n]},resetDetail:function(t){t.detail.post={},t.detail.relatenews=[],t.detail.relateobj=[],t.detail.timeline=[]},setSearch:function(t,e){for(var n in e)t.search[n]=e[n]},setKeyword:function(t,e){for(var n in e)t.keyword[n]=e[n]},setCoin:function(t,e){for(var n in e)t.coin[n]=e[n]},setCoinDetail:function(t,e){for(var n in e)t.coinDetail[n]=e[n]}},actions:i};a.a.use(g.a);var Ot=new g.a.Store({strict:!1,modules:{common:{state:{logo:{url:"http://via.placeholder.com/112x36?text=logo"},navbar:{list:[{link:"/",text:"首页"},{link:"/coin/list",text:"行情"}],active:0},footer:[{link:"/",text:"关于我们"},{link:"/",text:"服务条款"},{link:"/",text:"联系我们"},{link:"/",text:"投稿须知"},{link:"/",text:"反馈意见"}]},mutations:{setNavbar:function(t,e){t.navbar.active=e}}},page:Nt}}),Rt=/(\d{3})(?=\d)/g;a.a.filter("currency",function(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",n=null!=n?n:2;var i=Math.abs(t).toFixed(n),a=n?i.slice(0,-1-n):i,s=a.length%3,r=s>0?a.slice(0,s)+(a.length>3?",":""):"",o=n?i.slice(-1-n):"";return(t<0?"-":"")+e+r+a.slice(s).replace(Rt,"$1,")+o}),a.a.filter("relateTime",function(t){return J(t).fromNow()});var Vt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aside"},[e("div",{staticClass:"aside-container"},[e("div",{staticClass:"aside-blocks"},[this._t("default")],2)])])},staticRenderFns:[]};var Lt=n("VU/8")(null,Vt,!1,function(t){n("a8V/")},"data-v-4d9ee7fd",null).exports,Bt={name:"aside-block",props:{title:{type:[String,Boolean],default:!1},hasMore:{type:Boolean,default:!0}}},St={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.title?n("div",{staticClass:"title"},[n("span",{staticClass:"color"}),t._v(" "),n("h3",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.hasMore?n("a",{staticClass:"more",attrs:{href:"javascript:"}},[t._v("更多")]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"content"},[t._t("default")],2)])},staticRenderFns:[]};var At=n("VU/8")(Bt,St,!1,function(t){n("oAiL")},"data-v-1d47dc6a",null).exports,Mt={computed:f()({},Object(g.b)({navbar:function(t){return t.common.navbar}}))},Tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("ul",t._l(t.navbar.list,function(e,i){return n("li",{key:i,class:t.navbar.active==i?"active":""},[n("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1)}))])},staticRenderFns:[]};var Pt={data:function(){return{keyword:""}},components:{navbar:n("VU/8")(Mt,Tt,!1,function(t){n("zQ6u")},"data-v-46693c22",null).exports},computed:f()({},Object(g.b)({word:function(t){return t.page.search.word}})),methods:{onSearch:p.a.debounce(function(){this.$router.push({name:"search",params:{keyword:this.keyword}})},200)},watch:{word:function(t,e){this.keyword=t}},mounted:function(){this.word&&(this.keyword=this.word)}},Kt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"topbar"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("7Otq"),alt:""}})])],1),t._v(" "),i("navbar"),t._v(" "),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.keyword,expression:"keyword",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入搜索关键字"},domProps:{value:t.keyword},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSearch(e):null},input:function(e){e.target.composing||(t.keyword=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("icon",{attrs:{type:"search"}})],1),t._v(" "),i("div",{staticClass:"clearfix"})],1)])},staticRenderFns:[]};var qt=n("VU/8")(Pt,Kt,!1,function(t){n("yfSP")},"data-v-ebd8565a",null).exports,Qt={computed:f()({},Object(g.b)({footer:function(t){return t.common.footer}}))},Wt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("7Otq")}})])],1),t._v(" "),i("div",{staticClass:"footer-navbar"},[i("ul",t._l(t.footer,function(e,n){return i("li",{key:n},[i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1)}))])])])},staticRenderFns:[]};var It=n("VU/8")(Qt,Wt,!1,function(t){n("vjjk")},"data-v-a56f8792",null).exports,Yt={props:{fullwidth:Boolean},mounted:function(){console.log(this.fullwidth)}},Gt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"topbar"},[t._t("topbar")],2),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"banner"},[t._t("banner")],2),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content",class:{fullwidth:t.fullwidth}},[t._t("default")],2),t._v(" "),n("div",{staticClass:"sidebar"},[t._t("sidebar")],2)]),t._v(" "),n("div",{staticClass:"clearfix"})]),t._v(" "),n("div",{staticClass:"footer"},[t._t("footer")],2)])},staticRenderFns:[]};var Jt=n("VU/8")(Yt,Gt,!1,function(t){n("g6Rp")},"data-v-c6239efa",null).exports,zt={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{staticClass:"iconfont",class:"icon-"+this.iconType})},staticRenderFns:[]},Xt=n("VU/8")({props:["type"],computed:{iconType:function(){return this.type||""}}},zt,!1,null,null,null).exports;a.a.component("sidebar",Lt),a.a.component("block",At),a.a.component("topbar",qt),a.a.component("footerBar",It),a.a.component("layout",Jt),a.a.component("icon",Xt);n("d+x2");a.a.config.productionTip=!1,new a.a({el:"#app",router:st,store:Ot,components:{App:r},template:"<App/>"})},"UW/0":function(t,e){},WVC6:function(t,e){},YXC6:function(t,e,n){"use strict";var i={props:{title:String,link:{type:String,default:"/"},imgUrl:String,forceDesc:Boolean,metaAlign:Boolean,description:String,location:String,locationLink:String,time:String,spread:[String,Number],tags:{type:Array,default:function(){return[]}}},computed:{desc:function(){return this.description&&this.description.length>70?this.description.substr(0,70)+"...":this.description}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-item"},[n("router-link",{staticClass:"wrap",class:t.metaAlign?"meta-align":"",attrs:{to:t.link}},[n("div",{staticClass:"thumbnail"},[n("img",{attrs:{src:t.imgUrl,alt:t.title}})]),t._v(" "),n("div",{staticClass:"info"},[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.desc||t.forceDesc?n("p",{staticClass:"description",domProps:{innerHTML:t._s(t.desc)}}):t._e(),t._v(" "),n("div",{staticClass:"meta"},[t.location?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"location"}}),t._v(" "),n("a",{attrs:{target:"_blank",href:t.locationLink||"javascript:"},on:{"!click":function(t){return t.stopPropagation(),(!1)(t)}}},[t._v(t._s(t.location))])],1):t._e(),t._v(" "),t.time?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"clock"}}),t._v("\n          "+t._s(t._f("relateTime")(t.time))+"\n        ")],1):t._e(),t._v(" "),t.spread?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"notify"}}),t._v("\n          传播度("+t._s(t.spread)+")\n        ")],1):t._e(),t._v(" "),t.tags.length?n("div",{staticClass:"meta-item tag"},[n("icon",{attrs:{type:"tag"}}),t._v(" "),t._l(t.tags,function(e,i){return n("router-link",{key:i,attrs:{to:"/keyword/"+(e.keyword_id||e.id)}},[t._v(t._s(e.keyword))])})],2):t._e()])]),t._v(" "),n("div",{staticClass:"clearfix"})])],1)},staticRenderFns:[]};var s=n("VU/8")(i,a,!1,function(t){n("a8nJ")},"data-v-c722914e",null);e.a=s.exports},"a8V/":function(t,e){},a8nJ:function(t,e){},"d+x2":function(t,e){},dGHQ:function(t,e){},dsON:function(t,e){},ePKH:function(t,e){},ey6o:function(t,e){},fVGs:function(t,e){},g6Rp:function(t,e){},oAiL:function(t,e){},vjjk:function(t,e){},yfSP:function(t,e){},zQ6u:function(t,e){}},["NHnr"]);