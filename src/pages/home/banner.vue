<template>
  <div>
    <v-line 
      :data="chartData"
      :grid="chartGrid"
      :yAxis="yAxis"
      :xAxis="xAxis"
    />
  </div>
</template>
<script>
import VLine from 'v-charts/lib/line'

export default {
  name: 'home-banner',
  components: {
    VLine
  },
  data() {
    return {
      chartData: {
        columns: ['x', '销售额'],
        rows: [
          { 'x': '1', '销售额': 123 },
          { 'x': '2', '销售额': 1223 },
          { 'x': '3', '销售额': 2123 },
        ]
      },
      yAxis: {
        axisLine: { show: true },
        splitLine: {show: false}
      },
      xAxis: {show: false},
      chartSetting: {

      },
      chartGrid: {
        // show: false,
        // top: 0,
        // left: 0,
        // backgroundColor: '#fff',
        // borderColor: '#fff'
      }
    }
  },
}
</script>
