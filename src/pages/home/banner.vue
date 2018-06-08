<template>
  <div class="banner">
    <div class="container">
        <div class="gradual-l"></div>
        <div class="banner-canvas">
          <div class="canvas" ref="canvas" width="1200" height="300"></div>
        </div>
        <div class="gradual-r"></div>
      <div class="banner-data">
        <div v-for="(item, key) in list" :key="key" class="item active">
          <h2>{{item[0].change_1h}}</h2>
          <p>{{key}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import { mapState } from 'vuex'

export default {
  name: "home-banner",
  data: () => ({
    $chart: {},
    colors: ['#F000BC', '#FFC900', '#7EC5FF']
  }),
  computed: {
    ...mapState({
      list: state => state.page.home.banner
    }),
    chartData() {
      const data = this.list;
      const option = {
        tooltip: {
          position: function (pos, params, dom, rect, size) {
            // console.log(pos)
            let [x, y] = pos
            if(x > 600) {
              x = x - dom.clientWidth
            } 
            return [x, y];
          },
        },
        grid: {
          left: '50',
        },
        xAxis: {
          show: false,
          data: []
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
        series: []
       
      };

      const series = {
        // name: "Data Display3",
        type: "line",
        // data: [1, 10, 30, 19, 15, 20],
        smooth: true,
        lineStyle: {
          width: 12,
          // color: '#7EC5FF',
          opacity: '0.8'
        },
        itemStyle: {
          // color: '#7EC5FF',
        }
      }

      let index = 0
      for(let key in data) {
        const arr = data[key]
        option.series.push({
          ...series,
          name: key,
          lineStyle: {
            ...series.lineStyle,
            color: this.colors[index % this.colors.length],
          },
          itemStyle: {
            ...series.itemStyle,
            color: this.colors[index % this.colors.length]
          },
          data: arr.map(i => i.price)
        })
        option.xAxis.data = arr.map(i => i.time)
        index++
      }
      return option;

    },
  },
  mounted() {
    this.$chart = echarts.init(this.$refs.canvas);
    this.$chart.setOption(this.chartData);
  },
  watch: {
    list(val) {
      this.$chart.setOption(this.chartData);
    }
  }
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
  left: 90px;

}
.gradual-r {
  right: 160px;
  transform: rotate(180deg);
}
.banner-data {
  float: right;
  text-align: right;
  z-index: 10;
  margin-top: 60px;
  .item {
    color: #fff;
    margin-bottom: 31px;
    h2 {
      font-size: 24px;
      margin: 4px 0;
    }
    p {
      display: inline-block;
      font-size: 16px;
      margin: 0;
      padding-bottom: 10px;
      border-bottom: @mainBg solid 1px;
      color: #7EC5FF;
    }
    &:hover,&.active {
      p {
        color: #fff;
        border-bottom-color: #fff;
      }
    }
  }
}
</style>

