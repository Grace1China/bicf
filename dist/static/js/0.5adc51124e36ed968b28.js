webpackJsonp([0],{ar59:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e("Dd8w"),s=e.n(a),n=e("NYxO"),o=e("epz3"),r={data:function(){return{loading:!1,maxPage:99,page:1}},computed:s()({},Object(n.b)({news:function(t){return t.page.search.list}}),{list:function(){return(this.news||[]).map(function(t){return{imgUrl:t.image,main:{time:t.ctime,title:t.title,link:"/post/"+t.id,location:t.media,locationLink:t.url},list:(t.similarities||[]).map(function(t){return{time:t.ctime,title:t.title,link:"/post/"+t.id,location:t.media,locationLink:t.url}})}})}}),components:{searchItem:o.a},methods:{resetData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$route.params.keyword;this.maxPage=99,this.$store.commit("setSearch",{word:t,list:[]})},checkLoad:function(t){this.loading||(this.$refs.loadMore&&this.$refs.loadMore.getBoundingClientRect&&this.$refs.loadMore.getBoundingClientRect()).top-window.innerHeight<1e3&&(this.loading=!0,this.load())},load:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$route.params.keyword;if(!this.loading){if(this.page>=this.maxPage)return this.loading=!1,!1;this.loading=!0,this.$store.dispatch("searchNews",{word:i,page:this.page++,limit:15}).then(function(i){t.maxPage=i.last_page,t.loading=!1})}}},watch:{$route:function(t,i){t.params.keyword!=i.params.keyword&&(this.page=1,this.resetData(t.params.keyword),this.load(t.params.keyword))}},mounted:function(){this.$store.commit("setNavbar",-1),this.resetData(),this.load(this.$route.params.keyword),window.addEventListener("scroll",this.checkLoad),window.dispatchEvent(new Event("scroll"))},destroyed:function(){window.removeEventListener("scroll",this.checkLoad)}},l={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("layout",{attrs:{fullwidth:""}},[e("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),t._v(" "),e("div",{staticClass:"search-list"},[e("div",{staticClass:"inner"},[t._l(t.list,function(t,i){return e("search-item",{key:i,attrs:{imgUrl:t.imgUrl,main:t.main,list:t.list}})}),t._v(" "),t.loading?e("loading"):t._e(),t._v(" "),e("div",{ref:"loadMore"})],2)]),t._v(" "),e("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]},c=e("VU/8")(r,l,!1,null,null,null);i.default=c.exports},epz3:function(t,i,e){"use strict";var a={data:function(){return{showMore:!1}},computed:{listitems:function(){return this.showMore?this.list:this.list.slice(0,2)}},props:{imgUrl:String,main:{type:Object,default:{}},list:{type:Array,default:[]}},methods:{toggleShowMore:function(){this.showMore=!this.showMore}}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"search-item"},[e("div",{staticClass:"wrap"},[e("div",{staticClass:"thumbnail"},[e("img",{attrs:{src:t.imgUrl,alt:t.main.title}})]),t._v(" "),e("div",{staticClass:"info"},[t.main.title?e("h1",[e("router-link",{attrs:{to:t.main.link}},[t._v("\n          "+t._s(t.main.title)+"\n        ")])],1):t._e(),t._v(" "),e("div",{staticClass:"meta"},[t.main.location?e("div",{staticClass:"meta-item"},[e("icon",{attrs:{type:"location"}}),t._v(" "),e("a",{attrs:{target:"_blank",href:t.main.locationLink||"javascript:"},on:{"!click":function(t){return t.stopPropagation(),(!1)(t)}}},[t._v(t._s(t.main.location))])],1):t._e(),t._v(" "),t.main.time?e("div",{staticClass:"meta-item"},[e("icon",{attrs:{type:"clock"}}),t._v("\n          "+t._s(t._f("relateTime")(t.main.time))+"\n        ")],1):t._e()]),t._v(" "),e("div",{staticClass:"relate-list"},t._l(t.listitems,function(i,a){return e("div",{key:a,staticClass:"item"},[e("router-link",{staticClass:"wrap",attrs:{to:i.link}},[e("h3",[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"meta"},[i.location?e("div",{staticClass:"meta-item"},[e("icon",{attrs:{type:"location"}}),t._v(" "),e("a",{attrs:{target:"_blank",href:i.locationLink||"javascript:"},on:{"!click":function(t){return t.stopPropagation(),(!1)(t)}}},[t._v(t._s(i.location))])],1):t._e(),t._v(" "),i.time?e("div",{staticClass:"meta-item"},[e("icon",{attrs:{type:"clock"}}),t._v("\n                "+t._s(t._f("relateTime")(i.time))+"\n              ")],1):t._e()])])],1)})),t._v(" "),t.list.length>2?e("div",{staticClass:"showmore",on:{click:t.toggleShowMore}},[t._v("\n        查看更多\n        "),e("icon",{class:{reverse:t.showMore},attrs:{type:"arrow"}})],1):t._e()]),t._v(" "),e("div",{staticClass:"clearfix"})])])},staticRenderFns:[]};var n=e("VU/8")(a,s,!1,function(t){e("widN")},"data-v-f7b2f954",null);i.a=n.exports},widN:function(t,i){}});