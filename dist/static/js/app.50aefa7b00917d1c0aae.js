webpackJsonp([5],{"+3SR":function(t,e){},"3YfN":function(t,e,n){"use strict";var i=n("4YfN"),a=n.n(i),s=n("9rMa"),r={data:function(){return{colors:["#009966","#009999","#00FF66","#00FF99","#339966","#339999","#990066","#990099","#CC0066","#CC0099","#FF6666","#FF6699"]}},computed:a()({},Object(s.b)({list:function(t){return t.page.home.hotkeys}})),mounted:function(){this.$store.dispatch("getHotkeys")},methods:{goKeyword:function(t){this.$router.push({name:"keyword",params:{keyword:t.id}})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",{attrs:{title:"热门关键词"}},[n("div",{staticClass:"tag-list"},[n("div",{staticClass:"inner"},t._l(t.list,function(e,i){return n("a",{key:i,style:{backgroundColor:t.colors[Math.abs(i%t.colors.length)]},attrs:{href:"javascrit:"},on:{click:function(n){t.goKeyword(e)}}},[t._v(t._s(e.keyword))])}))])])},staticRenderFns:[]};var c=n("vSla")(r,o,!1,function(t){n("YorI")},"data-v-4c22fe8c",null);e.a=c.exports},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.dabf6c6.png"},"8YF5":function(t,e){},ElJc:function(t,e){},HW7U:function(t,e){},J30U:function(t,e){},KhKm:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"getBanner",function(){return gt}),n.d(i,"getHotnews",function(){return wt}),n.d(i,"getHotkeys",function(){return bt}),n.d(i,"getDailycoin",function(){return yt}),n.d(i,"getNews",function(){return Ct}),n.d(i,"getDetail",function(){return kt}),n.d(i,"getRelateNews",function(){return xt}),n.d(i,"getRelateObj",function(){return $t}),n.d(i,"getTimeLine",function(){return St}),n.d(i,"searchNews",function(){return Ft}),n.d(i,"keywordNews",function(){return Dt}),n.d(i,"getCoins",function(){return Rt}),n.d(i,"getCoinDetail",function(){return jt}),n.d(i,"getCoinNews",function(){return Et});n("ABOc");var a=n("MVMM"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("vSla")({name:"App"},s,!1,function(t){n("KhKm")},null,null).exports,o=n("zO6J"),c=n("a3Yh"),l=n.n(c),d=n("KH7x"),u=n.n(d),v=n("4YfN"),f=n.n(v),h=n("jMcx"),p=n.n(h),m=n("5YEj"),_=n.n(m),g=n("9rMa"),w={name:"home-banner",data:function(){return{$chart:{},colors:["#F000BC","#FFC900","#7EC5FF"]}},computed:f()({},Object(g.b)({list:function(t){return t.page.home.banner}}),{chartData:function(){var t=this.list,e={tooltip:{position:function(t,e,n,i,a){var s=u()(t,2),r=s[0],o=s[1];return r>600&&(r-=n.clientWidth),[r,o]},formatter:function(e){var n=t[e.seriesName][e.dataIndex];return'\n              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+e.color+';"></span>'+e.seriesName+"\n              <br />\n              时间："+n.time+"\n              <br />\n              价格: "+a.a.filter("currency")(n.price,"$")+"\n              <br />\n              跌涨幅："+n.change_1h+"%\n            "}},grid:{left:"70"},xAxis:{show:!1,data:[]},yAxis:l()({axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:16,color:"#fff",formatter:"{value} %"}},"splitLine",{show:!1}),series:[]},n={type:"line",smooth:!0,lineStyle:{width:8,opacity:"0.8"},itemStyle:{color:"#fff",borderWidth:6,borderColor:"#fff"}},i=0;for(var s in t){var r=t[s];e.series.push(f()({},n,{name:s,lineStyle:f()({},n.lineStyle,{color:this.colors[i%this.colors.length]}),data:r.map(function(t){return t.change_1h}),extraData:r.map(function(t){return t.price})})),e.xAxis.data=r.map(function(t){return t.time}),i++}return e}}),mounted:function(){this.$store.commit("setNavbar",0),this.$chart=_.a.init(this.$refs.canvas),this.$chart.setOption(this.chartData)},watch:{list:function(t){this.$chart.setOption(this.chartData)}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"container"},[n("div",{staticClass:"gradual-l"}),t._v(" "),n("div",{staticClass:"banner-canvas"},[n("div",{ref:"canvas",staticClass:"canvas",attrs:{width:"1200",height:"300"}})]),t._v(" "),n("div",{staticClass:"gradual-r"}),t._v(" "),n("div",{staticClass:"banner-data"},t._l(t.chartData.series,function(e,i){return n("div",{key:i,staticClass:"item active"},[n("h2",[t._v(t._s(e.data[e.data.length-1])+"%")]),t._v(" "),n("p",[n("span",{staticClass:"color",style:{backgroundColor:t.colors[i]}}),t._v(t._s(e.name))])])}))])])},staticRenderFns:[]};var y=n("vSla")(w,b,!1,function(t){n("8YF5")},"data-v-73ec405e",null).exports,C=n("YXC6"),k={data:function(){return{loading:!1,page:1}},components:{NewsItem:C.a},computed:f()({},Object(g.b)({news:function(t){return t.page.home.news}})),methods:{checkLoad:function(t){this.loading||(this.$refs.loadMore&&this.$refs.loadMore.getBoundingClientRect&&this.$refs.loadMore.getBoundingClientRect()).top-window.innerHeight<1e3&&(this.loading=!0,this.loadData())},loadData:function(){var t=this;this.$store.dispatch("getNews",{page:this.page++,limit:15}).then(function(){t.loading=!1})}},mounted:function(){this.loadData(),document.querySelector("html"),window.addEventListener("scroll",this.checkLoad),window.dispatchEvent(new Event("scroll"))},destroyed:function(){window.removeEventListener("scroll",this.checkLoad)}},x={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list news-list"},[e("div",{staticClass:"list-container"},[this._l(this.news.list,function(t,n){return e("news-item",{key:n,attrs:{forceDesc:!0,link:"/post/"+t.id,title:t.title,description:t.summary,imgUrl:t.image,location:t.media,locationLink:t.url,time:t.ctime,spread:t.propagation,tags:t.keywords}})}),this._v(" "),e("div",{ref:"loadMore"})],2)])},staticRenderFns:[]};var $=n("vSla")(k,x,!1,function(t){n("ScrP")},"data-v-c82522bc",null).exports,S=n("3YfN"),F={components:{NewsItem:C.a},computed:f()({},Object(g.b)({list:function(t){return t.page.home.hotnews}}))},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("block",{attrs:{title:"热点新闻"}},[e("div",{staticClass:"hot-news"},this._l(this.list,function(t,n){return e("news-item",{key:n,attrs:{link:"/post/"+t.news_id,title:t.title,description:t.summary,imgUrl:t.image}})}))])},staticRenderFns:[]};var R=n("vSla")(F,D,!1,function(t){n("oztF")},"data-v-1133c204",null).exports,j=n("IHPB"),E=n.n(j),O={data:function(){return{orderBy:"",isDesc:!0}},computed:f()({},Object(g.b)({dailycoin:function(t){return t.page.home.dailycoin}}),{list:function(){var t=this.isDesc,e=void 0;switch(this.orderBy){case"name":e=p.a.sortBy(this.dailycoin,function(t){return t.name});break;case"price":e=p.a.sortBy(this.dailycoin,function(t){return t.price});break;case"change_24h":e=p.a.sortBy(this.dailycoin,function(t){return t.change_24h});break;case"":default:return[].concat(E()(this.dailycoin))}return t&&e.reverse(),e}}),methods:{setOrder:function(t){this.orderBy==t?this.isDesc=!this.isDesc:(this.orderBy=t,this.isDesc=!0)}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",{attrs:{title:"今日行情",hasMore:!1}},[n("div",{staticClass:"daily-coin"},[n("div",{staticClass:"inner"},[n("div",{staticClass:"theader"},[n("div",{staticClass:"col",on:{click:function(e){t.setOrder("name")}}},[t._v("\n          币种\n          "),n("br"),t._v(" "),n("span",[t._v("市值")])]),t._v(" "),n("div",{staticClass:"col",on:{click:function(e){t.setOrder("price")}}},[t._v("\n          价格\n          "),n("br"),t._v(" "),n("span",[t._v("交易量")])]),t._v(" "),n("div",{staticClass:"col",on:{click:function(e){t.setOrder("change_24h")}}},[t._v("\n          涨跌幅\n        ")])]),t._v(" "),n("div",{staticClass:"tbody"},t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"row item"},[n("div",{staticClass:"col"},[t._v("\n            "+t._s(e.name)+"\n            "),n("br"),t._v(" "),n("span",[t._v(t._s(t._f("currency")(e.marketcap,"$")))])]),t._v(" "),n("div",{staticClass:"col"},[t._v("\n            "+t._s(t._f("currency")(e.price,"$"))+"\n            "),n("br"),t._v(" "),n("span",[t._v(t._s(t._f("currency")(e.volume_24h,"$")))])]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"btnx",class:e.change_24h>=0?"info":"danger"},[t._v(t._s(e.change_24h)+"%")])])])}))])])])},staticRenderFns:[]};var N=n("vSla")(O,H,!1,function(t){n("Sqwe")},"data-v-df485120",null).exports,B={name:"home",components:{banner:y,list:$,HotKey:S.a,HotNews:R,dailyCoin:N},mounted:function(){this.$store.dispatch("getBanner"),this.$store.dispatch("getHotnews"),this.$store.dispatch("getDailycoin")}},A={render:function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),this._v(" "),e("banner",{attrs:{slot:"banner"},slot:"banner"}),this._v(" "),e("block",{attrs:{title:"币市头条"}},[e("list")],1),this._v(" "),e("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"},[e("hot-key"),this._v(" "),e("hot-news"),this._v(" "),e("daily-coin")],1),this._v(" "),e("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]},L=n("vSla")(B,A,!1,null,null,null).exports,M={components:{NewsItem:C.a},computed:f()({},Object(g.b)({list:function(t){return t.page.detail.relatenews}}))},T={render:function(){var t=this.$createElement,e=this._self._c||t;return this.list&&this.list.length?e("block",{attrs:{title:"相关新闻"}},[e("div",{staticClass:"hot-news"},[e("div",{staticClass:"inner"},this._l(this.list,function(t,n){return e("news-item",{key:n,attrs:{metaAlign:!0,title:t.title,description:t.summary,location:t.media,imgUrl:t.image,link:"/post/"+t.news_id}})}))])]):this._e()},staticRenderFns:[]};var Y=n("vSla")(M,T,!1,function(t){n("hOX5")},"data-v-b8c8fbc2",null).exports,P={props:{list:{type:Array,default:[]}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"timeline"},t._l(t.list,function(e,i){return n("li",{key:i},[n("div",{staticClass:"direction-r"},[n("div",{staticClass:"flag-wrapper"},[n("span",{staticClass:"time-wrapper"},[n("span",{staticClass:"text"},[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"line"})]),t._v(" "),n("span",{staticClass:"flag"},[t._v(t._s(e.text))])])])])}))},staticRenderFns:[]};var U={components:{TimeLine:n("vSla")(P,K,!1,function(t){n("ElJc")},"data-v-31241c9b",null).exports},computed:f()({},Object(g.b)({list:function(t){return t.page.detail.timeline}}))},q={render:function(){var t=this.$createElement,e=this._self._c||t;return this.list&&this.list.length?e("div",{staticClass:"timeline"},[e("div",{staticClass:"title"},[this._v("\n    时间线\n  ")]),this._v(" "),e("div",{staticClass:"timeline-detail"},[e("time-line",{attrs:{list:this.list}})],1)]):this._e()},staticRenderFns:[]};var I=n("vSla")(U,q,!1,function(t){n("Zlf4")},"data-v-9f93f3c8",null).exports,W=n("X4b7"),z=n.n(W),J=(n("lBqY"),n("GIBV")),X=n.n(J);z.a.locale("zh-cn"),z.a.extend(X.a);var V=z.a,Z={data:function(){return{maxHeight:1e3,currentHeight:0,showAll:!0}},computed:f()({},Object(g.b)({post:function(t){return t.page.detail.post}})),updated:function(){this.post.id&&!this.showAll&&(this.currentHeight=this.$refs.inner.clientHeight,this.currentHeight<this.maxHeight&&(this.showAll=!0))},methods:{showAllHandler:function(){this.showAll=!0},relativeTime:function(t){return V(t).fromNow()}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-body"},[n("div",{ref:"inner",staticClass:"inner",style:{maxHeight:t.post.id&&!t.showAll?t.maxHeight+"px":"initial"}},[n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.post.title))])]),t._v(" "),n("div",{staticClass:"meta"},[t.post.media?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"location"}}),t._v("\n        "+t._s(t.post.media)+"\n      ")],1):t._e(),t._v(" "),t.post.ctime?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"clock"}}),t._v("\n        "+t._s(t.post.ctime)+"\n      ")],1):t._e(),t._v(" "),t.post.keywords&&t.post.keywords.length?n("div",{staticClass:"meta-item tag"},[n("icon",{attrs:{type:"tag"}}),t._v(" "),t._l(t.post.keywords,function(e,i){return n("router-link",{key:i,attrs:{to:"/keyword/"+(e.keyword_id||e.id)}},[t._v(t._s(e.keyword))])})],2):t._e(),t._v(" "),n("div",{staticClass:"clearfix"})]),t._v(" "),t.post.summary&&t.post.summary.trim()?n("div",{staticClass:"expect"},[n("span",[t._v("\n        摘要：\n      ")]),t._v("\n      "+t._s(t.post.summary)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),t.post.url?n("div",{staticClass:"post-readorigin"},[n("a",{attrs:{href:t.post.url,target:"_blank"}},[t._v("查看原文")])]):t._e()]),t._v(" "),!t.showAll&&t.post.id?n("div",{staticClass:"read-more",on:{click:t.showAllHandler}},[t._v("\n    显示全部\n  ")]):t._e()])},staticRenderFns:[]};var Q=n("vSla")(Z,G,!1,function(t){n("+3SR")},"data-v-07c3901a",null).exports,tt={computed:f()({},Object(g.b)({list:function(t){return t.page.detail.relateobj}}))},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list&&t.list.length?n("block",{attrs:{title:"相关人物和事件",hasMore:!1}},[n("div",{staticClass:"relate-obj"},[n("ul",t._l(t.list,function(e,i){return n("li",{key:i},[n("a",{attrs:{href:"javascript:"},domProps:{textContent:t._s(e.text)}})])}))])]):t._e()},staticRenderFns:[]};var nt={name:"detail",components:{Content:Q,relateNews:Y,TimeLine:I,RelateObj:n("vSla")(tt,et,!1,function(t){n("Rfoj")},"data-v-0bb2259d",null).exports},methods:{load:function(t){this.$store.dispatch("getDetail",this.$route.params.id),this.$store.dispatch("getRelateNews",this.$route.params.id),this.$store.dispatch("getRelateObj",this.$route.params.id),this.$store.dispatch("getTimeLine",this.$route.params.id)}},mounted:function(){this.$store.commit("setNavbar",-1),this.$store.commit("resetDetail"),window.scrollTo(0,0),this.load(this.$route.params.id)},watch:{$route:function(t,e){t.params.id!=e.params.id&&(this.$store.commit("resetDetail"),this.load(t.params.id))}}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),this._v(" "),e("div",{staticClass:"detail-page"},[e("Content"),this._v(" "),e("time-line")],1),this._v(" "),e("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"},[e("relate-news"),this._v(" "),e("relate-obj")],1),this._v(" "),e("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]};var at=n("vSla")(nt,it,!1,function(t){n("J30U")},"data-v-9c7033e2",null).exports;a.a.use(o.a);var st=new o.a({routes:[{path:"/",name:"home",component:L},{path:"/post/:id",name:"detail",component:at},{path:"/search/:keyword",name:"search",component:function(){return n.e(0).then(n.bind(null,"ar59"))}},{path:"/keyword/:keyword",name:"keyword",component:function(){return n.e(1).then(n.bind(null,"hNPt"))}},{path:"/coin/list",name:"coin-list",component:function(){return n.e(2).then(n.bind(null,"el11"))}},{path:"/coin/p/:id",name:"coin-detail",component:function(){return n.e(3).then(n.bind(null,"Q+b0"))}}]}),rt=n("A9zj"),ot=n.n(rt),ct=n("lC5x"),lt=n.n(ct),dt=n("J0Oq"),ut=n.n(dt),vt=n("aozt"),ft=n.n(vt).a,ht=this,pt=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get";return function(i){return a=ut()(lt.a.mark(function a(s){var r,o=s.commit,c=s.state;return lt.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ft[n](e);case 2:r=a.sent,o(t,i(r,c));case 4:case"end":return a.stop()}},a,ht)})),function(t){return a.apply(this,arguments)};var a}}},mt="http://47.104.135.60:8080",_t=pt("setHome"),gt=_t(mt+"/api/reports")(function(t){return{banner:t.data.data}}),wt=_t(mt+"/api/hot_news")(function(t){return{hotnews:t.data.data}}),bt=_t(mt+"/api/hot_keywords")(function(t){return{hotkeys:t.data.data}}),yt=_t(mt+"/api/today_market")(function(t){return{dailycoin:t.data.data}}),Ct=function(t,e){var n=t.commit,i=t.state;return ft.get(mt+"/api/news",{params:e}).then(function(t){n("setHome",{news:{list:[].concat(E()(i.home.news.list),E()(t.data.data.data))}})})},kt=(pt("setDetail"),function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e).then(function(t){n("setDetail",{post:t.data.data})})}),xt=function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e+"/similarity_news").then(function(t){n("setDetail",{relatenews:t.data.data})})},$t=function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e+"/related_event").then(function(t){n("setDetail",{relateobj:t.data.data})})},St=function(t,e){var n=t.commit;return ft.get(mt+"/api/news/"+e+"/time_line").then(function(t){n("setDetail",{timeline:t.data.data})})},Ft=function(t,e){var n=t.commit,i=t.state;return ft.get(mt+"/api/search",{params:e}).then(function(t){n("setSearch",{word:e.word,list:[].concat(E()(i.search.list),E()(t.data.data.data))})})},Dt=function(t,e){var n=t.commit,i=t.state,a=e.id,s=ot()(e,["id"]);return ft.get(mt+"/api/keywords/"+a,{params:s}).then(function(t){n("setKeyword",{id:a,list:[].concat(E()(i.keyword.list),E()(t.data.data.data))})})},Rt=function(t,e){var n=t.commit,i=t.state;return ft.get(mt+"/api/coins",{params:e}).then(function(t){n("setCoin",{list:[].concat(E()(i.coin.list),E()(t.data.data.data))})})},jt=function(t,e){var n=t.commit,i=e.id,a=ot()(e,["id"]);return ft.get(mt+"/api/coins/"+i,{params:a}).then(function(t){n("setCoinDetail",{detail:t.data.data})})},Et=function(t,e){var n=t.commit;return ft.get(mt+"/api/coins/"+e+"/news").then(function(t){n("setCoinDetail",{news:t.data.data})})},Ot={state:{home:{hotkeys:[],hotnews:[],dailycoin:[],banner:{},news:{list:[]}},detail:{post:{},relatenews:[],relateobj:[],timeline:[]},search:{word:"",list:[]},keyword:{id:0,list:[]},coin:{list:[]},coinDetail:{detail:{},news:[]}},mutations:{setHome:function(t,e){for(var n in e)t.home[n]=e[n]},setDetail:function(t,e){for(var n in e)t.detail[n]=e[n]},resetDetail:function(t){t.detail.post={},t.detail.relatenews=[],t.detail.relateobj=[],t.detail.timeline=[]},setSearch:function(t,e){for(var n in e)t.search[n]=e[n]},setKeyword:function(t,e){for(var n in e)t.keyword[n]=e[n]},setCoin:function(t,e){for(var n in e)t.coin[n]=e[n]},setCoinDetail:function(t,e){for(var n in e)t.coinDetail[n]=e[n]}},actions:i};a.a.use(g.a);var Ht=new g.a.Store({strict:!1,modules:{common:{state:{logo:{url:"http://via.placeholder.com/112x36?text=logo"},navbar:{list:[{link:"/",text:"首页"},{link:"/coin/list",text:"行情"}],active:0},footer:[{link:"/",text:"关于我们"},{link:"/",text:"服务条款"},{link:"/",text:"联系我们"},{link:"/",text:"投稿须知"},{link:"/",text:"反馈意见"}]},mutations:{setNavbar:function(t,e){t.navbar.active=e}}},page:Ot}}),Nt=/(\d{3})(?=\d)/g;a.a.filter("currency",function(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",n=null!=n?n:2;var i=Math.abs(t).toFixed(n),a=n?i.slice(0,-1-n):i,s=a.length%3,r=s>0?a.slice(0,s)+(a.length>3?",":""):"",o=n?i.slice(-1-n):"";return(t<0?"-":"")+e+r+a.slice(s).replace(Nt,"$1,")+o}),a.a.filter("relateTime",function(t){return V(t).fromNow()});var Bt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aside"},[e("div",{staticClass:"aside-container"},[e("div",{staticClass:"aside-blocks"},[this._t("default")],2)])])},staticRenderFns:[]};var At=n("vSla")(null,Bt,!1,function(t){n("P6Cg")},"data-v-4a1af631",null).exports,Lt={name:"aside-block",props:{title:{type:[String,Boolean],default:!1},hasMore:{type:Boolean,default:!0}}},Mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.title?n("div",{staticClass:"title"},[n("span",{staticClass:"color"}),t._v(" "),n("h3",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t._e()]):t._e(),t._v(" "),n("div",{staticClass:"content"},[t._t("default")],2)])},staticRenderFns:[]};var Tt=n("vSla")(Lt,Mt,!1,function(t){n("a6eF")},"data-v-7557b5d2",null).exports,Yt={computed:f()({},Object(g.b)({navbar:function(t){return t.common.navbar}}))},Pt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("ul",t._l(t.navbar.list,function(e,i){return n("li",{key:i,class:t.navbar.active==i?"active":""},[n("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1)}))])},staticRenderFns:[]};var Kt={data:function(){return{keyword:""}},components:{navbar:n("vSla")(Yt,Pt,!1,function(t){n("WWS0")},"data-v-9cb3dfc8",null).exports},computed:f()({},Object(g.b)({word:function(t){return t.page.search.word}})),methods:{onSearch:p.a.debounce(function(){this.$router.push({name:"search",params:{keyword:this.keyword}})},200)},watch:{word:function(t,e){this.keyword=t}},mounted:function(){this.word&&(this.keyword=this.word)}},Ut={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"topbar"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("7Otq"),alt:""}})])],1),t._v(" "),i("navbar"),t._v(" "),i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.keyword,expression:"keyword",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入搜索关键字"},domProps:{value:t.keyword},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.onSearch(e):null},input:function(e){e.target.composing||(t.keyword=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),i("icon",{attrs:{type:"search"}})],1),t._v(" "),i("div",{staticClass:"clearfix"})],1)])},staticRenderFns:[]};var qt=n("vSla")(Kt,Ut,!1,function(t){n("Snr0")},"data-v-75c0a6ac",null).exports,It={computed:f()({},Object(g.b)({footer:function(t){return t.common.footer}}))},Wt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("7Otq")}})])],1),t._v(" "),i("div",{staticClass:"footer-navbar"},[i("ul",t._l(t.footer,function(e,n){return i("li",{key:n},[i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1)}))])])])},staticRenderFns:[]};var zt=n("vSla")(It,Wt,!1,function(t){n("inYX")},"data-v-f2aafbd6",null).exports,Jt={props:{fullwidth:Boolean},mounted:function(){console.log(this.fullwidth)}},Xt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"topbar"},[t._t("topbar")],2),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"banner"},[t._t("banner")],2),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content",class:{fullwidth:t.fullwidth}},[t._t("default")],2),t._v(" "),n("div",{staticClass:"sidebar"},[t._t("sidebar")],2)]),t._v(" "),n("div",{staticClass:"clearfix"})]),t._v(" "),n("div",{staticClass:"footer"},[t._t("footer")],2)])},staticRenderFns:[]};var Vt=n("vSla")(Jt,Xt,!1,function(t){n("kiew")},"data-v-fa6275b2",null).exports,Zt={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{staticClass:"iconfont",class:"icon-"+this.iconType})},staticRenderFns:[]},Gt=n("vSla")({props:["type"],computed:{iconType:function(){return this.type||""}}},Zt,!1,null,null,null).exports;a.a.component("sidebar",At),a.a.component("block",Tt),a.a.component("topbar",qt),a.a.component("footerBar",zt),a.a.component("layout",Vt),a.a.component("icon",Gt);n("d+x2");a.a.config.productionTip=!1,new a.a({el:"#app",router:st,store:Ht,components:{App:r},template:"<App/>"})},P6Cg:function(t,e){},Rfoj:function(t,e){},ScrP:function(t,e){},Snr0:function(t,e){},Sqwe:function(t,e){},WWS0:function(t,e){},YXC6:function(t,e,n){"use strict";var i={props:{title:String,link:{type:String,default:"/"},imgUrl:String,forceDesc:Boolean,metaAlign:Boolean,description:String,location:String,locationLink:String,time:String,spread:[String,Number],tags:{type:Array,default:function(){return[]}}},computed:{desc:function(){return this.description&&this.description.length>70?this.description.substr(0,70)+"...":this.description}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-item"},[n("router-link",{staticClass:"wrap",class:t.metaAlign?"meta-align":"",attrs:{to:t.link}},[n("div",{staticClass:"thumbnail"},[n("img",{attrs:{src:t.imgUrl,alt:t.title}})]),t._v(" "),n("div",{staticClass:"info"},[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.desc||t.forceDesc?n("p",{staticClass:"description",domProps:{innerHTML:t._s(t.desc)}}):t._e(),t._v(" "),n("div",{staticClass:"meta"},[t.location?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"location"}}),t._v(" "),n("a",{attrs:{target:"_blank",href:t.locationLink||"javascript:"},on:{"!click":function(t){return t.stopPropagation(),(!1)(t)}}},[t._v(t._s(t.location))])],1):t._e(),t._v(" "),t.time?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"clock"}}),t._v("\n          "+t._s(t._f("relateTime")(t.time))+"\n        ")],1):t._e(),t._v(" "),t._e(),t._v(" "),t.tags.length?n("div",{staticClass:"meta-item tag"},[n("icon",{attrs:{type:"tag"}}),t._v(" "),t._l(t.tags,function(e,i){return n("router-link",{key:i,attrs:{to:"/keyword/"+(e.keyword_id||e.id)}},[t._v(t._s(e.keyword))])})],2):t._e()])]),t._v(" "),n("div",{staticClass:"clearfix"})])],1)},staticRenderFns:[]};var s=n("vSla")(i,a,!1,function(t){n("HW7U")},"data-v-d367b172",null);e.a=s.exports},YorI:function(t,e){},Zlf4:function(t,e){},a6eF:function(t,e){},"d+x2":function(t,e){},hOX5:function(t,e){},inYX:function(t,e){},kiew:function(t,e){},oztF:function(t,e){}},["NHnr"]);