<template>
  <div class="banner">
    <div class="container">
        <div class="gradual-l"></div>
        <div class="banner-canvas">
          <div class="canvas" ref="canvas" width="1200" height="300"></div>
        </div>
        <div class="gradual-r"></div>
      <div class="banner-data">
        <div v-for="(item, key) in chartData.series" :key="key" class="item active">
          <h2>{{item.data[item.data.length - 1]}}%</h2>
          <p><span class="color" :style="{backgroundColor: colors[key]}"></span>{{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import _ from "underscore";
import echarts from "echarts";
import { mapState } from "vuex";

export default {
  name: "home-banner",
  data: () => ({
    $chart: {},
    colors: ["#F000BC", "#FFC900", "#7EC5FF"]
  }),
  computed: {
    ...mapState({
      list: state => state.page.home.banner
    }),
    chartData() {
      const data = this.list;
      const option = {
        tooltip: {
          position: function(pos, params, dom, rect, size) {
            // console.log(pos)
            let [x, y] = pos;
            if (x > 600) {
              x = x - dom.clientWidth;
            }
            return [x, y];
          },
          formatter(params) {
            console.log(
              params,
              data[params.seriesName][params.dataIndex].price
            );
            const item = data[params.seriesName][params.dataIndex];
            // const price = item.price
            let str = `
              <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
                params.color
              };"></span>${params.seriesName}
              <br />
              时间：${item.time}
              <br />
              价格: ${Vue.filter('currency')(item.price, '$')}
              <br />
              跌涨幅：${item.change_1h}%
            `;
            return str;
          }
        },
        grid: {
          left: "70"
        },
        xAxis: {
          show: false,
          data: []
        },
        yAxis: {
          // show: false,
          axisLine: { show: false },
          splitLine: { show: false },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 16,
            color: "#fff",
            formatter: "{value} %"
          },
          splitLine: {
            show: false
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
          width: 8,
          // color: '#7EC5FF',
          opacity: "0.8"
        },
        itemStyle: {
          color: '#fff',
          // width: 12,
          // backgroundColor: '#7EC5FF',

          borderWidth: 6,
          borderColor: '#fff',


        }
      };

      let index = 0;
      for (let key in data) {
        const arr = data[key];
        option.series.push({
          ...series,
          name: key,
          lineStyle: {
            ...series.lineStyle,
            color: this.colors[index % this.colors.length]
          },
          // itemStyle: {
          //   ...series.itemStyle,
          //   // color: this.colors[index % this.colors.length]
          // },
          data: arr.map(i => i.change_1h),
          extraData: arr.map(i => i.price)
        });
        option.xAxis.data = arr.map(i => i.time);
        index++;
      }
      // const alldata = _.flatten(option.series.map(i => i.data))
      // const min = _.min(alldata)
      // console.log(min, alldata, option.series)
      // option.yAxis.min = min
      return option;
    }
  },
  mounted() {
    this.$store.commit('setNavbar', 0)
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
    background: @mainBg;
  position: absolute;
  z-index: 0;
  .canvas {
    width: 1200px;
    height: 300px;
  }
}
.gradual-l,
.gradual-r {
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(255, 255, 255, 0)),
    color-stop(70%, @mainBg)
  );
  background-image: linear-gradient(
    -90deg,
    rgba(255, 255, 255, 0) 0%,
    @mainBg 70%
  );
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
  text-align: right;
  z-index: 10;
  margin-top: 60px;
  position: absolute;
  right: 0;
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
      color: #7ec5ff;
    }
    &:hover,
    &.active {
      p {
        color: #fff;
        border-bottom-color: #fff;
      }
    }
  }
}
.color {
  display: inline-block;
  margin-right: 5px;
  border-radius: 10px;
  width: 10px;
  height: 10px;
  // background-color: ;
}
</style>

