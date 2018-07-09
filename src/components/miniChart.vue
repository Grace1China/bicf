<template>
  <div class="mini-chart">
    <div class="chart" ref="chart"></div>
  </div>
</template>
<script>
import _ from 'underscore'
import echarts from "echarts";

const options = {
  xAxis: { show: false, data: [] },
  yAxis: { show: false },
  grid: { top: 2, left: 0, bottom: 2, right: 2 },
  
}
const series = {
  type: "line",
  // data: [1, 10, 30, 19, 15, 20],
  smooth: true,
  lineStyle: {
    width: 2,
    color: '#4264FB',
    opacity: "1"
  },
  animation: false,
  itemStyle: {
    opacity: '0',
    color: '#fff',
    borderWidth: 0,
    borderColor: '#fff',
  }
}
export default {
  props: {
    width: Number,
    height: Number,
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      $chart: null,
      timer: null,
    }
  },
  computed: {
    chartData() {
      const chartOptions = {
        width: 130,
        height: 26,
        ...options,
        series: [],
        yAxis: {
          ...options.yAxis,
          min: _.min(this.data),
          max: _.max(this.data)
        }
      }
      chartOptions.series.push({
        ...series,
        data: this.data,
      })
      return chartOptions
    }
  },
  mounted() {
    this.timer = setTimeout(() => {
      this.$chart = echarts.init(this.$refs.chart);
      this.$chart.setOption(this.chartData);
      this.timer = null
    }, 200)
  },
  watch: {
    data(val) {
      // this.$chart && this.$chart.setOption(this.chartData);
    }
  },
  destroyed() {
    this.$chart && this.$chart.clear()
    this.timer && clearTimeout(this.timer)
  }
}
</script>
<style lang="less" scoped>
.mini-chart {
  width: 100%;
  height: 100%;
}
.chart {
  display: inline-block;
  width: 130px;
  height: 30px;
  position: relative;
  top: 10px;
}
</style>

