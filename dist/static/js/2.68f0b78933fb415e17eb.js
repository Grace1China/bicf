webpackJsonp([2],{P9m8:function(t,a){},el11:function(t,a,r){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=r("Dd8w"),i=r.n(s),n=r("rdLu"),c=r.n(n),e=r("NYxO"),o=r("XLwt"),l=r.n(o),d={xAxis:{show:!1,data:[]},yAxis:{show:!1},grid:{top:0,left:0}},u={type:"line",smooth:!1,lineStyle:{width:2,color:"#4264FB",opacity:"1"},itemStyle:{opacity:"0",color:"#fff",borderWidth:0,borderColor:"#fff"}},h={props:{width:Number,height:Number,data:{type:Array,default:[]}},data:function(){return{$chart:null}},computed:{chartData:function(){var t=i()({width:130,height:30},d,{series:[]});return t.series.push(i()({},u,{data:this.data})),t}},mounted:function(){this.$chart=l.a.init(this.$refs.chart),this.$chart.setOption(this.chartData)},watch:{data:function(t){this.$chart.setOption(this.chartData)}}},v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"mini-chart"},[a("div",{ref:"chart",staticClass:"chart"})])},staticRenderFns:[]};var f=["marketcap","price","volume_24h","change_24h","range"],_={data:function(){return{page:1,orderBy:"rank",orderAsc:!0,loading:!1}},components:{MiniChart:r("VU/8")(h,v,!1,function(t){r("tMFd")},"data-v-3e79a35c",null).exports},computed:i()({},Object(e.b)({coinlist:function(t){return t.page.coin.list}}),{list:function(){var t=this.coinlist.map(function(t,a){return i()({rank:a+1,chart:(t.coordinate||[]).map(function(t){return t.price})},t)}),a=t;switch(this.orderBy){case"rank":a=c.a.sortBy(t,function(t){return t.rank});break;case"name":a=c.a.sortBy(t,function(t,a){return t.name.toLowerCase()});break;case"marketcap":a=c.a.sortBy(t,function(t){return t.marketcap});break;case"price":a=c.a.sortBy(t,function(t){return t.price});break;case"volume_24h":a=c.a.sortBy(t,function(t){return t.volume_24h});break;case"change_24h":a=c.a.sortBy(t,function(t){return t.change_24h});break;case"range":a=c.a.sortBy(t,function(t){var a=c.a.min(t.chart);return c.a.max(t.chart)-a})}return this.orderAsc||(a=a.reverse()),a}}),methods:{load:function(){this.$store.dispatch("getCoins",{page:this.page++})},setOrder:function(t){this.orderBy===t?this.orderAsc=!this.orderAsc:(this.orderBy=t,this.orderAsc=!f.includes(t))}},mounted:function(){this.load()}},p={render:function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("layout",{attrs:{fullwidth:""}},[r("topbar",{attrs:{slot:"topbar"},slot:"topbar"}),t._v(" "),r("div",{staticClass:"coin-table"},[r("div",{staticClass:"inner"},[r("div",{staticClass:"theader"},[r("div",{staticClass:"col",on:{click:function(a){t.setOrder("rank")}}},[r("div",{staticClass:"btn primary"},[t._v("\n            #\n          ")])]),t._v(" "),r("div",{staticClass:"col",on:{click:function(a){t.setOrder("name")}}},[r("div",{staticClass:"btn primary"},[t._v("\n            币种\n          ")])]),t._v(" "),r("div",{staticClass:"col",on:{click:function(a){t.setOrder("marketcap")}}},[r("div",{staticClass:"btn primary"},[t._v("\n            市值\n          ")])]),t._v(" "),r("div",{staticClass:"col",on:{click:function(a){t.setOrder("price")}}},[r("div",{staticClass:"btn primary"},[t._v("\n            价格\n          ")])]),t._v(" "),r("div",{staticClass:"col",on:{click:function(a){t.setOrder("volume_24h")}}},[r("div",{staticClass:"btn primary"},[t._v("\n            成交量(24h)\n          ")])]),t._v(" "),r("div",{staticClass:"col",on:{click:function(a){t.setOrder("change_24h")}}},[r("div",{staticClass:"btn primary"},[t._v("\n            涨跌幅(24h)\n          ")])]),t._v(" "),r("div",{staticClass:"col",on:{click:function(a){t.setOrder("range")}}},[r("div",{staticClass:"btn primary"},[t._v("\n            近期走势(7d)\n          ")])])]),t._v(" "),r("div",{staticClass:"tbody"},t._l(t.list,function(a){return r("div",{key:a.id,staticClass:"row item",on:{click:function(r){t.$router.push({path:"/coin/p/"+a.id})}}},[r("div",{staticClass:"col"},[t._v("\n            "+t._s(a.rank)+"\n          ")]),t._v(" "),r("div",{staticClass:"col left"},[r("div",{staticClass:"col-inner"},[r("img",{staticClass:"coin-logo",attrs:{src:a.image,width:"20",height:"20"}}),t._v(" "),r("b",[t._v("\n                "+t._s(a.name)+"\n              ")])])]),t._v(" "),r("div",{staticClass:"col"},[t._v("\n            "+t._s(t._f("currency")(a.marketcap))+"\n          ")]),t._v(" "),r("div",{staticClass:"col"},[t._v("\n            "+t._s(t._f("currency")(a.price))+"\n          ")]),t._v(" "),r("div",{staticClass:"col"},[t._v("\n            "+t._s(t._f("currency")(a.volume_24h))+"\n          ")]),t._v(" "),r("div",{staticClass:"col"},[t._v("\n            "+t._s(a.change_24h)+"%\n          ")]),t._v(" "),r("div",{staticClass:"col"},[r("mini-chart",{attrs:{data:a.chart}})],1)])}))])]),t._v(" "),r("footerBar",{attrs:{slot:"footer"},slot:"footer"})],1)},staticRenderFns:[]};var m=r("VU/8")(_,p,!1,function(t){r("P9m8")},"data-v-c0ce8af4",null);a.default=m.exports},tMFd:function(t,a){}});