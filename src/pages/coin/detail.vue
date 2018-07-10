<template>
  <layout fullwidth>
    <topbar slot="topbar" />
    <div class="coin-detail">
      <loading v-if="loading" />
      <div v-else class="inner">
        <h1 class="title">
          <img :src="basic.image">
          {{basic.name}}-{{basic.symbol}}
          <span>
            当前价格：{{basic.price | currency}} 
            (<i :class="basic.change_24h >= 0 ? 'price-up' : 'price-down'">
              {{basic.change_24h}}%
            </i>)
          </span>
        </h1>
        <div class="number">
          <div class="non-item">
            <span class="btn primary">市值</span>
            <span class="nonid">
              {{basic.marketcap | shortCurrency}}
              ({{basic.marketcap | currency}})
            </span>
          </div>
          <div class="non-item">
            <span class="btn primary">成交量(24h)</span>
            <span class="nonid">
              {{basic.volume_24h | shortCurrency}}
              ({{basic.volume_24h | currency}})
            </span>
          </div>
          <div class="non-item">
            <span class="btn primary">总供应量</span>
            <span class="nonid">
              {{basic.circulating_supply}}
            </span>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="coin-chart">
          <div class="actions">
            <button 
              v-for="item in allTimeType"
              :key="item.value"
              class="btn"
              :class="timeType === item.value ? 'primary' : 'default'"
              @click="changeTimeType(item.value)"
            >
              {{item.text}}
            </button>
          </div>
          <div class="chart-detail">
            <div class="chart" ref="canvas"></div>
          </div>
          <div class="relate-coin">
            <news-item v-for="item in news"
              :key="item.id"
              :imgUrl="item.image"
              :title="item.title"
              :forceDesc="true"
              :link="'/post/' + item.id"
              :description="item.summary"
              :location="item.media"
              :locationLink="item.url"
              :time="item.ctime"
              :spread="item.propagation"
              :tags="[]"
            />
          </div>
        </div>
      </div>
    </div>
    <footerBar slot="footer" />
  </layout>
</template>
<script>
import Vue from 'vue'
import _ from 'underscore'
import { mapState } from 'vuex'
import NewsItem from '@/components/newsItem'
import echarts from "echarts";

const options = {
  xAxis: {
    show: false,
    data: [],
    axisLabel: {
      formatter: ''
    },
  },
  yAxis: {},
  grid: { 
    backgroundColor: '#FFF',
    right: 250,
  },
  
}
const series = {
  type: "line",
  animation: false,
  // data: [1, 10, 30, 19, 15, 20],
  smooth: false,
  lineStyle: {
    width: 2,
    // color: '#4264FB',
    // opacity: "1"
  },
  itemStyle: {
    opacity: '0.01',
    color: '#fff',
    borderWidth: 0,
    borderColor: '#fff',
  }
}
export default {
  data() {
    return {
      loading: true,
      $chart: null,
      colors: ['#02B000', '#4264FB', "#F000BC", "#FFC900", "#7EC5FF"],
      allTimeType: [
        {
          value: '1',
          text: '1天'
        },
        {
          value: '7',
          text: '1周'
        },
        {
          value: '30',
          text: '1月'
        },
        {
          value: '60',
          text: '2月'
        },
        {
          value: '180',
          text: '6月'
        },
        {
          value: '365',
          text: '1年'
        },
        {
          value: 'all',
          text: '全部'
        },
      ],
      timeType: '7',
      // chartDataList: [
      //   {
      //     name: 'test1',
      //     data: [2,2,4,4,5,6,2,3,4,5,1,4,3,2,6,2,4,4,5,6,2,3,4,5,1,4,3,2,6,2,4,4,5,6,2,3,4,5,1,4,3,2,6,2,4,4,5,6,2,3,4,5,1,4,3,2,6],
      //   },
      //   {
      //     name: 'test2',
      //     data: [9,9,19,19,15,16,9,13,19,15,11,19,13,9,16,9,19,19,15,16,9,13,19,15,11,19,13,9,16,9,19,19,15,16,9,13,19,15,11,19,13,9,16,9,19,14,15,16,9,13,14,15,11,14,13,9,6],
      //   },
      // ]
    }
  },
  components: {
    NewsItem
  },
  computed: {
    ...mapState({
      detail: state => state.page.coinDetail.detail,
      news: state => state.page.coinDetail.news,
    }),
    basic() {
      return this.detail.basic || {}
    },
    chartDataList() {
      const list = []
      const priceMap = {
        name: '价格',
        data: [],
      }
      const marketcapMap = {
        name:'市值',
        data: [],
      }
      const volumeMap = {
        name: '成交量(24h)',
        data: [],
      };
      (this.detail.coordinate || []).forEach(item => {
        priceMap.data.push(item.price)
        marketcapMap.data.push(item.marketcap)
        volumeMap.data.push(item.volume_24h)
      })
      return [priceMap, marketcapMap, volumeMap]
    },
    chartData() {
      const chartOptions = {
        ...options,
        yAxis: [],
        series: []
      }
      const yPosition = [
        {
          type: 'left',
          offset: 0,
        }, {
          type: 'right',
          offset: 0,
        }, {
          type: 'right',
          offset: 100,
        }, 
      ]
      this.chartDataList.forEach((item, index) => {
        const color = this.colors[index % this.colors.length]
        let min = _.min(item.data) - (index !== 1 ? 100 : 0)
        if (min < 0) {
          min = 0
        }
        chartOptions.yAxis.push({
          ...options.yAxis,
          color: color,
          name: item.name,
          min: min,
          max: _.max(item.data) + 1,
          axisLabel: {
              formatter: '${value}'
          },
          axisLine: {
              lineStyle: {
                  color: color
              }
          },
          splitLine: { show: !index },
          position: yPosition[index].type,
          offset: yPosition[index].offset,
        })
        chartOptions.series.push({
          ...series,
          yAxisIndex: index,
          name: item.name,
          data: item.data,
          lineStyle: {
            ...series.lineStyle,
            color: color,
          }
        })
      })
      // chartOptions.tooltip = {
      //   show: true
      // }
      chartOptions.xAxis.data = (this.detail.coordinate || []).map(i => i.time)
      chartOptions.tooltip = {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        formatter: ([price, marketcap, volume]) => {
          // console.log(price)
          let str = `
              ${price.name}
              <br />
              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                this.colors[0]
              };"></span>
              价格: ${Vue.filter('currency')(price.value, '$')}
              <br />
              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                this.colors[1]
              };"></span>
              市值: ${Vue.filter('currency')(marketcap.value, '$')}
              <br />
              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                this.colors[2]
              };"></span>
              成交量(24h): ${Vue.filter('currency')(volume.value, '$')}
            `;
          return str
        }
      }
      return chartOptions
    },
  },
  methods: {
    async loadDetail() {
      return this.$store.dispatch('getCoinDetail', {
        id: this.$route.params.id,
        day: this.timeType
      })
    },
    async loadData() {
      const cid = this.$route.params.id
      await Promise.all([
        this.loadDetail(),
        this.$store.dispatch('getCoinNews', cid),
      ])
      this.loading = false
    },
    changeTimeType(name) {
      this.timeType = name
      this.loadDetail()
    }
  },
  async mounted() {
    this.loading = true
    window.scrollTo({top: 0})
    this.$store.commit('setNavbar', 1)
    await this.loadData()
    this.$nextTick(() => {
      this.$chart = echarts.init(this.$refs.canvas);
      this.$chart.setOption(this.chartData);
    })
  },
  watch: {
    detail(val) {
      this.$chart && this.$chart.setOption(this.chartData);
    },
    $route(val, oldVal) {
      if(val.params.id != oldVal.params.id) {
        // this.$store.commit('resetDetail')
        this.loadData()
      }
    }
  },
  destroyed() {
    this.$chart && this.$chart.clear()
  }
}
</script>
<style lang="less" scoped>
.coin-detail {
  .title {
    font-size: 30px;
    color: #222222;
    margin-bottom: 50px;
    img{
      height: 40px;
      width: auto;
      position: relative;
      top: -3px;
      vertical-align: middle;
    }
    span {
      padding-left: 60px;
      i {
        font-style: normal;
      }
    }
  }
}
.number {
  margin-bottom: 100px;
  .non-item {
    border-radius: 0 0 5px 5px;
    // width: 130px;
    float: left;
    margin-right: 50px;
    text-align: center;
    height: 72px;
    background: #fff;
    .nonid {
      height: 36px;
      line-height: 36px;
      padding: 0 25px;
    }
    .btn {
      display: block;
    }
  }
}
.chart-detail {
  min-height: 350px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  margin-top: 30px;
  margin-bottom: 50px;
  .chart {
    width: 100%;
    height: 350px;
  }
}
.actions {
  .btn {
    margin-right: 30px;
    &:focus {
      border: none;
      outline: 0;
    }
  }
}
</style>


