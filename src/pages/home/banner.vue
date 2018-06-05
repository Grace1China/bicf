<template>
  <div class="banner">
    <div class="container">
      <div class="banner-canvas">
        <v-line 
          :data="chartData"
          :grid="chartGrid"
          :yAxis="yAxis"
          :xAxis="xAxis"
          width="1200px"
          height="300px"
        />
      </div>
      <div class="banner-data">
        <div class="item">
          <h2>33%</h2>
          <p>A series of data reports</p>
        </div>
        <div class="item">
          <h2>22%</h2>
          <p>data reports</p>
        </div>
        <div class="item">
          <h2>11%</h2>
          <p>data reports</p>
        </div>
      </div>
    </div>
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
<style lang="less" scoped>
@import "~@/assets/style/var";
.banner {
  height: 300px;
  width: 100%;
  background: @mainBg;
  position: relative;
}
.banner-canvas {
  position: absolute;
  z-index: 0;
}
.banner-data {
  float: right;
  text-align: right;
  z-index: 10;
  .item {
    color: #fff;
    h2 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
  }
}
</style>

