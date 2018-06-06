<template>
  <div class="banner">
    <div class="container">
        <div class="gradual-l"></div>
        <div class="banner-canvas">
          <div class="canvas" ref="canvas" width="1200" height="300"></div>
        </div>
        <div class="gradual-r"></div>
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
// import VLine from 'v-charts/lib/line'
// import 'v-charts/lib/style.css'
import echarts from "echarts";

export default {
  name: "home-banner",
  // components: {
  //   VLine
  // },
  data: () => ({
    $chart: {}
  }),
  mounted() {
    this.$chart = echarts.init(this.$refs.canvas);
    const option = {
      tooltip: {},

      xAxis: {
        show: false,
        data: [1,2,3,4,5,6]
      },
      yAxis: {
        axisLine: { show: false },
        splitLine: { show: false },
        axisTick: {
          show: false,
        },
        axisLabel: {
          fontSize: 16,
          color: '#fff',
        },
        splitLine: {
          show: false,
        }
      },
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
          smooth: true,
          lineStyle: {
            width: 15
          }
        },
        {
          name: "销量1",
          type: "line",
          data: [9, 30, 26, 20, 30, 10],
          smooth: true,
          lineStyle: {
            width: 15
          }
        },
        {
          name: "销量2",
          type: "line",
          data: [1, 10, 30, 19, 15, 20],
          smooth: true,
          lineStyle: {
            width: 15
          }
        }
      ]
    };
    this.$chart.setOption(option);
  },
};
</script>
<style lang="less" scoped>
@import "~@/assets/style/var";
.banner {
  height: 300px;
  width: 100%;
  background: @mainBg;
  position: relative;
  .container {
    position: relative;
  }
}
.banner-canvas {
  position: absolute;
  z-index: 0;
  .canvas{
    width: 1200px;
    height: 300px;
  }
  
}
.gradual-l, .gradual-r {
  background-image: -webkit-gradient(linear,left top, left bottom,from(rgba(255,255,255,0)),color-stop(70%, @mainBg));
  background-image: linear-gradient(-90deg,rgba(255,255,255,0) 0%,@mainBg 70%);
  position: absolute;
  width: 150px;
  height: 300px;
  z-index: 100;
}
.gradual-l {
  left: 180px;

}
.gradual-r {
  right: 180px;
  transform: rotate(180deg);
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

