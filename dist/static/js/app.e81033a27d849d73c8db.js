webpackJsonp([1],{"+3m0":function(t,e){},"061J":function(t,e){},"6gIU":function(t,e){},"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.dabf6c6.png"},"82vS":function(t,e){},EtJ5:function(t,e){},H1Cl:function(t,e){},"KPU/":function(t,e){},M3nl:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"getBanner",function(){return bt}),n.d(i,"getHotnews",function(){return Ct}),n.d(i,"getHotkeys",function(){return yt}),n.d(i,"getDailycoin",function(){return wt}),n.d(i,"getNews",function(){return kt}),n.d(i,"getDetail",function(){return xt}),n.d(i,"getRelateNews",function(){return $t}),n.d(i,"getRelateObj",function(){return Ft}),n.d(i,"getTimeLine",function(){return Dt});n("MU8w");var s=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(t){n("dsON")},null,null).exports,o=n("/ocq"),c=n("bOdI"),l=n.n(c),d=n("d7EF"),u=n.n(d),v=n("Dd8w"),h=n.n(v),p=n("rdLu"),f=n.n(p),m=n("XLwt"),_=n.n(m),g=n("NYxO"),b={name:"home-banner",data:function(){return{$chart:{},colors:["#F000BC","#FFC900","#7EC5FF"]}},computed:h()({},Object(g.b)({list:function(t){return t.page.home.banner}}),{chartData:function(){var t=this.list,e={tooltip:{position:function(t,e,n,i,s){var a=u()(t,2),r=a[0],o=a[1];return r>600&&(r-=n.clientWidth),[r,o]},formatter:function(e){console.log(e,t[e.seriesName][e.dataIndex].price);var n=t[e.seriesName][e.dataIndex];return'\n              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:'+e.color+';"></span>'+e.seriesName+"\n              <br />\n              时间："+n.time+"\n              <br />\n              价格: "+s.a.filter("currency")(n.price,"$")+"\n              <br />\n              跌涨幅："+n.change_1h+"%\n            "}},grid:{left:"70"},xAxis:{show:!1,data:[]},yAxis:l()({axisLine:{show:!1},splitLine:{show:!1},axisTick:{show:!1},axisLabel:{fontSize:16,color:"#fff",formatter:"{value} %"}},"splitLine",{show:!1}),series:[]},n={type:"line",smooth:!0,lineStyle:{width:8,opacity:"0.8"},itemStyle:{color:"#fff",borderWidth:6,borderColor:"#fff"}},i=0;for(var a in t){var r=t[a];e.series.push(h()({},n,{name:a,lineStyle:h()({},n.lineStyle,{color:this.colors[i%this.colors.length]}),data:r.map(function(t){return t.change_1h}),extraData:r.map(function(t){return t.price})})),e.xAxis.data=r.map(function(t){return t.time}),i++}return e}}),mounted:function(){this.$chart=_.a.init(this.$refs.canvas),this.$chart.setOption(this.chartData)},watch:{list:function(t){this.$chart.setOption(this.chartData)}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"container"},[n("div",{staticClass:"gradual-l"}),t._v(" "),n("div",{staticClass:"banner-canvas"},[n("div",{ref:"canvas",staticClass:"canvas",attrs:{width:"1200",height:"300"}})]),t._v(" "),n("div",{staticClass:"gradual-r"}),t._v(" "),n("div",{staticClass:"banner-data"},t._l(t.chartData.series,function(e,i){return n("div",{key:i,staticClass:"item active"},[n("h2",[t._v(t._s(e.data[e.data.length-1])+"%")]),t._v(" "),n("p",[n("span",{staticClass:"color",style:{backgroundColor:t.colors[i]}}),t._v(t._s(e.name))])])}))])])},staticRenderFns:[]};var y=n("VU/8")(b,C,!1,function(t){n("061J")},"data-v-c720a29e",null).exports,w=n("oqQY"),k=n.n(w),x=(n("uM1m"),n("B197")),$=n.n(x);k.a.locale("zh-cn"),k.a.extend($.a);var F=k.a,D={props:{title:String,link:{type:String,default:"/"},imgUrl:String,forceDesc:Boolean,metaAlign:Boolean,description:String,location:String,locationLink:String,time:String,spread:[String,Number],tags:{type:Array,default:function(){return[]}}},computed:{relativeTime:function(){return F(this.time).fromNow()},desc:function(){return this.description&&this.description.length>70?this.description.substr(0,70)+"...":this.description}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-item"},[n("router-link",{staticClass:"wrap",class:t.metaAlign?"meta-align":"",attrs:{to:t.link}},[n("div",{staticClass:"thumbnail"},[n("img",{attrs:{src:t.imgUrl,alt:t.title}})]),t._v(" "),n("div",{staticClass:"info"},[t.title?n("h1",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.desc||t.forceDesc?n("p",{staticClass:"description",domProps:{innerHTML:t._s(t.desc)}}):t._e(),t._v(" "),n("div",{staticClass:"meta"},[t.location?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"location"}}),t._v(" "),n("a",{attrs:{target:"_blank",href:t.locationLink||"javascript:"},on:{"!click":function(t){return t.stopPropagation(),(!1)(t)}}},[t._v(t._s(t.location))])],1):t._e(),t._v(" "),t.time?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"clock"}}),t._v("\n          "+t._s(t.relativeTime)+"\n        ")],1):t._e(),t._v(" "),t.spread?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"notify"}}),t._v("\n          传播度("+t._s(t.spread)+")\n        ")],1):t._e(),t._v(" "),t.tags.length?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"tag"}}),t._v("\n          "+t._s(t.tags.map(function(t){return t.keyword}).join(", "))+"\n        ")],1):t._e()])]),t._v(" "),n("div",{staticClass:"clearfix"})])],1)},staticRenderFns:[]};var U=n("VU/8")(D,H,!1,function(t){n("sy2D")},"data-v-11f1e2da",null).exports,E={data:function(){return{loading:!1,page:1}},components:{NewsItem:U},computed:h()({},Object(g.b)({news:function(t){return t.page.home.news}})),methods:{checkLoad:function(t){this.loading||(this.$refs.loadMore&&this.$refs.loadMore.getBoundingClientRect&&this.$refs.loadMore.getBoundingClientRect()).top-window.innerHeight<1e3&&(this.loading=!0,this.loadData())},loadData:function(){var t=this;this.$store.dispatch("getNews",{page:this.page++,limit:15}).then(function(){t.loading=!1})}},mounted:function(){this.loadData(),document.querySelector("html"),window.addEventListener("scroll",this.checkLoad),window.dispatchEvent(new Event("scroll"))},destroyed:function(){window.removeEventListener("scroll",this.checkLoad)}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"list news-list"},[e("div",{staticClass:"list-container"},[this._l(this.news.list,function(t,n){return e("news-item",{key:n,attrs:{forceDesc:!0,link:"/post/"+t.id,title:t.title,description:t.summary,imgUrl:t.image,location:t.media,locationLink:t.url,time:t.ctime,spread:t.propagation,tags:t.keywords}})}),this._v(" "),e("div",{ref:"loadMore"})],2)])},staticRenderFns:[]};var R=n("VU/8")(E,O,!1,function(t){n("ePKH")},"data-v-bca3e89a",null).exports,j={data:function(){return{colors:["#009966","#009999","#00FF66","#00FF99","#339966","#339999","#990066","#990099","#CC0066","#CC0099","#FF6666","#FF6699"]}},computed:h()({},Object(g.b)({list:function(t){return t.page.home.hotkeys}}))},V={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",{attrs:{title:"热门关键词"}},[n("div",{staticClass:"tag-list"},[n("div",{staticClass:"inner"},t._l(t.list,function(e,i){return n("a",{key:i,style:{backgroundColor:t.colors[Math.abs(i%t.colors.length)]},attrs:{href:"javascrit:"}},[t._v(t._s(e.keyword))])}))])])},staticRenderFns:[]};var L=n("VU/8")(j,V,!1,function(t){n("v+DW")},"data-v-2b8598c6",null).exports,A={components:{NewsItem:U},computed:h()({},Object(g.b)({list:function(t){return t.page.home.hotnews}}))},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("block",{attrs:{title:"热点新闻"}},[e("div",{staticClass:"hot-news"},this._l(this.list,function(t,n){return e("news-item",{key:n,attrs:{link:"/post/"+t.news_id,title:t.title,imgUrl:t.image}})}))])},staticRenderFns:[]};var B=n("VU/8")(A,M,!1,function(t){n("EtJ5")},"data-v-ec3ab914",null).exports,N=n("Gu7T"),S=n.n(N),T={data:function(){return{orderBy:"",isDesc:!0}},computed:h()({},Object(g.b)({dailycoin:function(t){return t.page.home.dailycoin}}),{list:function(){var t=this.isDesc,e=void 0;switch(this.orderBy){case"name":e=f.a.sortBy(this.dailycoin,function(t){return t.name});break;case"price":e=f.a.sortBy(this.dailycoin,function(t){return t.price});break;case"change_24h":e=f.a.sortBy(this.dailycoin,function(t){return t.change_24h});break;case"":default:return[].concat(S()(this.dailycoin))}return t&&e.reverse(),e}}),methods:{setOrder:function(t){this.orderBy==t?this.isDesc=!this.isDesc:(this.orderBy=t,this.isDesc=!0)}}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("block",{attrs:{title:"今日行情",hasMore:!1}},[n("div",{staticClass:"daily-coin"},[n("div",{staticClass:"theader"},[n("div",{staticClass:"col",on:{click:function(e){t.setOrder("name")}}},[t._v("\n        币种\n        "),n("br"),t._v(" "),n("span",[t._v("市值")])]),t._v(" "),n("div",{staticClass:"col",on:{click:function(e){t.setOrder("price")}}},[t._v("\n        价格\n        "),n("br"),t._v(" "),n("span",[t._v("交易量")])]),t._v(" "),n("div",{staticClass:"col",on:{click:function(e){t.setOrder("change_24h")}}},[t._v("\n        涨跌幅\n      ")])]),t._v(" "),n("div",{staticClass:"tbody"},t._l(t.list,function(e,i){return n("div",{key:i,staticClass:"row item"},[n("div",{staticClass:"col"},[t._v("\n          "+t._s(e.name)+"\n          "),n("br"),t._v(" "),n("span",[t._v(t._s(t._f("currency")(e.marketcap,"$")))])]),t._v(" "),n("div",{staticClass:"col"},[t._v("\n          "+t._s(t._f("currency")(e.price,"$"))+"\n          "),n("br"),t._v(" "),n("span",[t._v(t._s(t._f("currency")(e.volume_24h,"$")))])]),t._v(" "),n("div",{staticClass:"col"},[n("div",{staticClass:"btn",class:e.change_24h>=0?"info":"danger"},[t._v(t._s(e.change_24h)+"%")])])])}))])])},staticRenderFns:[]};var P={name:"home",components:{banner:y,list:R,HotKey:L,HotNews:B,dailyCoin:n("VU/8")(T,I,!1,function(t){n("+3m0")},"data-v-01d246f8",null).exports},mounted:function(){this.$store.dispatch("getBanner"),this.$store.dispatch("getHotkeys"),this.$store.dispatch("getHotnews"),this.$store.dispatch("getDailycoin")}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),this._v(" "),e("banner",{attrs:{slot:"banner"},slot:"banner"}),this._v(" "),e("block",{attrs:{title:"币市头条"}},[e("list")],1),this._v(" "),e("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"},[e("hot-key"),this._v(" "),e("hot-news"),this._v(" "),e("daily-coin")],1),this._v(" "),e("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]},q=n("VU/8")(P,Q,!1,null,null,null).exports,W={components:{NewsItem:U},computed:h()({},Object(g.b)({list:function(t){return t.page.detail.relatenews}}))},J={render:function(){var t=this.$createElement,e=this._self._c||t;return this.list&&this.list.length?e("block",{attrs:{title:"相关新闻"}},[e("div",{staticClass:"hot-news"},[e("div",{staticClass:"inner"},this._l(this.list,function(t,n){return e("news-item",{key:n,attrs:{metaAlign:!0,title:t.title,location:t.media,imgUrl:t.image,link:"/post/"+t.news_id}})}))])]):this._e()},staticRenderFns:[]};var K=n("VU/8")(W,J,!1,function(t){n("dGHQ")},"data-v-13ebbba5",null).exports,z={props:{list:{type:Array,default:[]}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"timeline"},t._l(t.list,function(e,i){return n("li",{key:i},[n("div",{staticClass:"direction-r"},[n("div",{staticClass:"flag-wrapper"},[n("span",{staticClass:"time-wrapper"},[n("span",{staticClass:"text"},[t._v(t._s(e.date))]),t._v(" "),n("span",{staticClass:"line"})]),t._v(" "),n("span",{staticClass:"flag"},[t._v(t._s(e.text))])])])])}))},staticRenderFns:[]};var X={components:{TimeLine:n("VU/8")(z,G,!1,function(t){n("KPU/")},"data-v-31241c9b",null).exports},computed:h()({},Object(g.b)({list:function(t){return t.page.detail.timeline}}))},Y={render:function(){var t=this.$createElement,e=this._self._c||t;return this.list&&this.list.length?e("div",{staticClass:"timeline"},[e("div",{staticClass:"title"},[this._v("\n    时间线\n  ")]),this._v(" "),e("div",{staticClass:"timeline-detail"},[e("time-line",{attrs:{list:this.list}})],1)]):this._e()},staticRenderFns:[]};var Z=n("VU/8")(X,Y,!1,function(t){n("H1Cl")},"data-v-4541270c",null).exports,tt={data:function(){return{maxHeight:1e3,currentHeight:0,showAll:!0}},computed:h()({},Object(g.b)({post:function(t){return t.page.detail.post}})),updated:function(){this.post.id&&!this.showAll&&(this.currentHeight=this.$refs.inner.clientHeight,this.currentHeight<this.maxHeight&&(this.showAll=!0))},methods:{showAllHandler:function(){this.showAll=!0},relativeTime:function(t){return F(t).fromNow()}}},et={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-body"},[n("div",{ref:"inner",staticClass:"inner",style:{maxHeight:t.post.id&&!t.showAll?t.maxHeight+"px":"initial"}},[n("div",{staticClass:"title"},[n("h1",[t._v(t._s(t.post.title))])]),t._v(" "),n("div",{staticClass:"meta"},[t.post.media?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"location"}}),t._v("\n        "+t._s(t.post.media)+"\n      ")],1):t._e(),t._v(" "),t.post.ctime?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"clock"}}),t._v("\n        "+t._s(t.post.ctime)+"\n      ")],1):t._e(),t._v(" "),t.post.keywords&&t.post.keywords.length?n("div",{staticClass:"meta-item"},[n("icon",{attrs:{type:"tag"}}),t._v("\n        "+t._s(t.post.keywords.map(function(t){return t.keyword}).join(", "))+"\n      ")],1):t._e(),t._v(" "),n("div",{staticClass:"clearfix"})]),t._v(" "),t.post.summary&&t.post.summary.trim()?n("div",{staticClass:"expect"},[n("span",[t._v("\n        摘要：\n      ")]),t._v("\n      "+t._s(t.post.summary)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"post-body",domProps:{innerHTML:t._s(t.post.content)}}),t._v(" "),t.post.url?n("div",{staticClass:"post-readorigin"},[n("a",{attrs:{href:t.post.url,target:"_blank"}},[t._v("查看原文")])]):t._e()]),t._v(" "),!t.showAll&&t.post.id?n("div",{staticClass:"read-more",on:{click:t.showAllHandler}},[t._v("\n    显示全部\n  ")]):t._e()])},staticRenderFns:[]};var nt=n("VU/8")(tt,et,!1,function(t){n("M3nl")},"data-v-860102a2",null).exports,it={computed:h()({},Object(g.b)({list:function(t){return t.page.detail.relateobj}}))},st={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.list&&t.list.length?n("block",{attrs:{title:"相关人物和事件",hasMore:!1}},[n("div",{staticClass:"relate-obj"},[n("ul",t._l(t.list,function(e,i){return n("li",{key:i},[n("a",{attrs:{href:"javascript:"},domProps:{textContent:t._s(e.text)}})])}))])]):t._e()},staticRenderFns:[]};var at={name:"detail",components:{Content:nt,relateNews:K,TimeLine:Z,RelateObj:n("VU/8")(it,st,!1,function(t){n("82vS")},"data-v-75d57152",null).exports},methods:{load:function(t){this.$store.dispatch("getDetail",this.$route.params.id),this.$store.dispatch("getRelateNews",this.$route.params.id),this.$store.dispatch("getRelateObj",this.$route.params.id),this.$store.dispatch("getTimeLine",this.$route.params.id)}},mounted:function(){this.$store.commit("resetDetail"),window.scrollTo(0,0),this.load(this.$route.params.id)},watch:{$route:function(t,e){t.params.id!=e.params.id&&(this.$store.commit("resetDetail"),this.load(t.params.id))}}},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("layout",[e("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),this._v(" "),e("div",{staticClass:"detail-page"},[e("Content"),this._v(" "),e("time-line")],1),this._v(" "),e("sidebar",{attrs:{slot:"sidebar"},slot:"sidebar"},[e("relate-news"),this._v(" "),e("relate-obj")],1),this._v(" "),e("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]};var ot=n("VU/8")(at,rt,!1,function(t){n("6gIU")},"data-v-e549cee8",null).exports;s.a.use(o.a);var ct=new o.a({routes:[{path:"/",name:"home",component:q},{path:"/post/:id",name:"detail",component:ot}]}),lt=n("Xxa5"),dt=n.n(lt),ut=n("exGp"),vt=n.n(ut),ht=n("mtWM"),pt=n.n(ht).a,ft=this,mt=function(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"get";return function(i){return s=vt()(dt.a.mark(function s(a){var r,o=a.commit,c=a.state;return dt.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,pt[n](e);case 2:r=s.sent,o(t,i(r,c));case 4:case"end":return s.stop()}},s,ft)})),function(t){return s.apply(this,arguments)};var s}}},_t="http://47.104.135.60:8080",gt=mt("setHome"),bt=gt(_t+"/api/reports")(function(t){return{banner:t.data.data}}),Ct=gt(_t+"/api/hot_news")(function(t){return{hotnews:t.data.data}}),yt=gt(_t+"/api/hot_keywords")(function(t){return{hotkeys:t.data.data}}),wt=gt(_t+"/api/today_market")(function(t){return{dailycoin:t.data.data}}),kt=function(t,e){var n=t.commit,i=t.state;return pt.get(_t+"/api/news",{params:e}).then(function(t){n("setHome",{news:{list:[].concat(S()(i.home.news.list),S()(t.data.data.data))}})})},xt=(mt("setDetail"),function(t,e){var n=t.commit;return pt.get(_t+"/api/news/"+e).then(function(t){n("setDetail",{post:t.data.data})})}),$t=function(t,e){var n=t.commit;return pt.get(_t+"/api/news/"+e+"/similarity_news").then(function(t){n("setDetail",{relatenews:t.data.data})})},Ft=function(t,e){var n=t.commit;return pt.get(_t+"/api/news/"+e+"/related_event").then(function(t){n("setDetail",{relateobj:t.data.data})})},Dt=function(t,e){var n=t.commit;return pt.get(_t+"/api/news/"+e+"/time_line").then(function(t){n("setDetail",{timeline:t.data.data})})},Ht={state:{home:{hotkeys:[],hotnews:[],dailycoin:[],banner:{},news:{list:[]}},detail:{post:{},relatenews:[],relateobj:[],timeline:[]}},mutations:{setHome:function(t,e){for(var n in e)t.home[n]=e[n]},setDetail:function(t,e){for(var n in e)t.detail[n]=e[n]},resetDetail:function(t){t.detail.post={},t.detail.relatenews=[],t.detail.relateobj=[],t.detail.timeline=[]}},actions:i};s.a.use(g.a);var Ut=new g.a.Store({strict:!1,modules:{common:{state:{logo:{url:"http://via.placeholder.com/112x36?text=logo"},navbar:{list:[{link:"/",text:"首页"}],active:0},footer:[{link:"/",text:"关于我们"},{link:"/",text:"服务条款"},{link:"/",text:"联系我们"},{link:"/",text:"投稿须知"},{link:"/",text:"反馈意见"}]}},page:Ht}}),Et=/(\d{3})(?=\d)/g;s.a.filter("currency",function(t,e,n){if(t=parseFloat(t),!isFinite(t)||!t&&0!==t)return"";e=null!=e?e:"$",n=null!=n?n:2;var i=Math.abs(t).toFixed(n),s=n?i.slice(0,-1-n):i,a=s.length%3,r=a>0?s.slice(0,a)+(s.length>3?",":""):"",o=n?i.slice(-1-n):"";return(t<0?"-":"")+e+r+s.slice(a).replace(Et,"$1,")+o});var Ot={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aside"},[e("div",{staticClass:"aside-container"},[e("div",{staticClass:"aside-blocks"},[this._t("default")],2)])])},staticRenderFns:[]};var Rt=n("VU/8")(null,Ot,!1,function(t){n("a8V/")},"data-v-4d9ee7fd",null).exports,jt={name:"aside-block",props:{title:{type:[String,Boolean],default:!1},hasMore:{type:Boolean,default:!0}}},Vt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[t.title?n("div",{staticClass:"title"},[n("span",{staticClass:"color"}),t._v(" "),n("h3",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.hasMore?n("a",{staticClass:"more",attrs:{href:"javascript:"}},[t._v("更多")]):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"content"},[t._t("default")],2)])},staticRenderFns:[]};var Lt=n("VU/8")(jt,Vt,!1,function(t){n("oAiL")},"data-v-1d47dc6a",null).exports,At={computed:h()({},Object(g.b)({navbar:function(t){return t.common.navbar}}))},Mt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar"},[n("ul",t._l(t.navbar.list,function(e,i){return n("li",{key:i,class:t.navbar.active==i?"active":""},[n("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1)}))])},staticRenderFns:[]};var Bt={components:{navbar:n("VU/8")(At,Mt,!1,function(t){n("zQ6u")},"data-v-46693c22",null).exports}},Nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"topbar"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"logo"},[e("router-link",{attrs:{to:"/"}},[e("img",{attrs:{src:n("7Otq"),alt:""}})])],1),this._v(" "),e("navbar"),this._v(" "),e("div",{staticClass:"search"},[e("input",{attrs:{type:"text",placeholder:"请输入搜索关键字"}}),this._v(" "),e("icon",{attrs:{type:"search"}})],1)],1)])},staticRenderFns:[]};var St=n("VU/8")(Bt,Nt,!1,function(t){n("hIdV")},"data-v-7607a0ff",null).exports,Tt={computed:h()({},Object(g.b)({footer:function(t){return t.common.footer}}))},It={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"container"},[i("div",{staticClass:"logo"},[i("router-link",{attrs:{to:"/"}},[i("img",{attrs:{src:n("7Otq")}})])],1),t._v(" "),i("div",{staticClass:"footer-navbar"},[i("ul",t._l(t.footer,function(e,n){return i("li",{key:n},[i("router-link",{attrs:{to:e.link}},[t._v(t._s(e.text))])],1)}))])])])},staticRenderFns:[]};var Pt=n("VU/8")(Tt,It,!1,function(t){n("vaMC")},"data-v-7fd32f3f",null).exports,Qt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"topbar"},[t._t("topbar")],2),t._v(" "),n("div",{staticClass:"main"},[n("div",{staticClass:"banner"},[t._t("banner")],2),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"sidebar"},[t._t("sidebar")],2)]),t._v(" "),n("div",{staticClass:"clearfix"})]),t._v(" "),n("div",{staticClass:"footer"},[t._t("footer")],2)])},staticRenderFns:[]};var qt=n("VU/8")(null,Qt,!1,function(t){n("Q3hV")},"data-v-7a8742ec",null).exports,Wt={render:function(){var t=this.$createElement;return(this._self._c||t)("i",{staticClass:"iconfont",class:"icon-"+this.iconType})},staticRenderFns:[]},Jt=n("VU/8")({props:["type"],computed:{iconType:function(){return this.type||""}}},Wt,!1,null,null,null).exports;s.a.component("sidebar",Rt),s.a.component("block",Lt),s.a.component("topbar",St),s.a.component("footerBar",Pt),s.a.component("layout",qt),s.a.component("icon",Jt);n("d+x2");s.a.config.productionTip=!1,new s.a({el:"#app",router:ct,store:Ut,components:{App:r},template:"<App/>"})},Q3hV:function(t,e){},"a8V/":function(t,e){},"d+x2":function(t,e){},dGHQ:function(t,e){},dsON:function(t,e){},ePKH:function(t,e){},hIdV:function(t,e){},oAiL:function(t,e){},sy2D:function(t,e){},"v+DW":function(t,e){},vaMC:function(t,e){},zQ6u:function(t,e){}},["NHnr"]);