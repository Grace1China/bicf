<template>
  <layout fullwidth>
    <topbar slot="topbar" />
    <div class="coin-detail">
      <div class="inner">
        <h1 class="title">
          <img :src="basic.image">
          {{basic.name}}-{{basic.symbol}}
          <span>
            当前价格：{{basic.price | currency}} ({{basic.change_24h}}%)
          </span>
        </h1>
        <div class="number">
          <div class="non-item">
            <span class="btn primary">市值</span>
            <span class="nonid">{{basic.marketcap | currency}}</span>
          </div>
          <div class="non-item">
            <span class="btn primary">成交量</span>
            <span class="nonid">{{basic.volume_24h | currency}}</span>
          </div>
          <div class="non-item">
            <span class="btn primary">总供应量</span>
            <span class="nonid">{{basic.circulating_supply}}</span>
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
import _ from 'underscore'
import { mapState } from 'vuex'
import NewsItem from '@/components/newsItem'
import echarts from "echarts";

const options = {
  xAxis: { show: false, data: [] },
  yAxis: {},
  grid: { 
    backgroundColor: '#FFF',
  },
}
const series = {
  type: "line",
  // data: [1, 10, 30, 19, 15, 20],
  smooth: true,
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
      $chart: null,
      colors: ['#02B000', '#4264FB', "#F000BC", "#FFC900", "#7EC5FF"],
      allTimeType: [
        {
          value: '1d',
          text: '1天'
        },
        {
          value: '1w',
          text: '1周'
        },
        {
          value: '1m',
          text: '1月'
        },
        {
          value: '2m',
          text: '2月'
        },
        {
          value: '6m',
          text: '6月'
        },
        {
          value: '1y',
          text: '1年'
        },
        {
          value: 'all',
          text: '全部'
        },
      ],
      timeType: '1w',
      chartDataList: [
        {
          name: 'test1',
          data: [2,2,4,4,5,6,2,3,4,5,1,4,3,2,6,2,4,4,5,6,2,3,4,5,1,4,3,2,6,2,4,4,5,6,2,3,4,5,1,4,3,2,6,2,4,4,5,6,2,3,4,5,1,4,3,2,6],
        },
        {
          name: 'test2',
          data: [9,9,19,19,15,16,9,13,19,15,11,19,13,9,16,9,19,19,15,16,9,13,19,15,11,19,13,9,16,9,19,19,15,16,9,13,19,15,11,19,13,9,16,9,19,14,15,16,9,13,14,15,11,14,13,9,6],
        },
      ]
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
    chartData() {
      const chartOptions = {
        ...options,
        yAxis: [],
        series: []
      }
      this.chartDataList.forEach((item, index) => {
        const color = this.colors[index % this.colors.length]
        chartOptions.yAxis.push({
          ...options.yAxis,
          color: color,
          name: item.name,
          min: _.min(item.data) - 1,
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
      return chartOptions
    },
  },
  methods: {
    async loadData() {
      const cid = this.$route.params.id
      await Promise.all([
        this.$store.dispatch('getCoinDetail', cid),
        this.$store.dispatch('getCoinNews', cid),
      ])
    },
    changeTimeType(name) {
      this.timeType = name
    }
  },
  async mounted() {
    await this.loadData()
    this.$chart = echarts.init(this.$refs.canvas);
    this.$chart.setOption(this.chartData);
  },
  watch: {
    data(val) {
      this.$chart.setOption(this.chartData);
    }
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


