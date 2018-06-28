<template>
  <layout fullwidth>
    <topbar slot="topbar" />
    <div class="coin-detail">
      <div class="inner">
        <h1 class="title">
          <img src="http://placeholder.com/100?text=B">
          Bitcoin-BTC
          <span>
            当前价格：$6666.89 (5.66%)
          </span>
        </h1>
        <div class="number">
          <div class="non-item">
            <span class="btn primary">市值</span>
            <span class="nonid">100亿</span>
          </div>
          <div class="non-item">
            <span class="btn primary">成交量</span>
            <span class="nonid">100亿</span>
          </div>
          <div class="non-item">
            <span class="btn primary">总供应量</span>
            <span class="nonid">100亿</span>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="coin-chart">
          <div class="actions">
            <button class="btn default">1天</button>
            <button class="btn primary">1周</button>
            <button class="btn default">1月</button>
            <button class="btn default">2月</button>
            <button class="btn default">6月</button>
            <button class="btn default">1天</button>
            <button class="btn default">1天</button>
          </div>
          <div class="chart-detail">
            <!-- chart -->
          </div>
          <div class="relate-coin">
            <news-item v-for="i in 10"
              :key="i"
              imgUrl="http://placeholder.com/400?text=X"
              title="3000多人被骗3亿元！又一庞氏骗局曝光"
              :forceDesc="true"
              :link="'/post/1'"
              :description="'一则警方通报，将数千人的“发财梦”彻底打碎。近日，深圳南山警方召开新闻通气会，通报了一起以发行虚拟货,一则警方通报，将数千人的“发财梦”彻底打碎。近日，深圳南山警方召开新闻通气会，通报了一起以发行虚拟货,一则警方通报，将数千人的“发财梦”彻底打碎。近日，深圳南山警方召开新闻通气会，通报…'"
              :location="'人民网'"
              :locationLink="''"
              :time="'2018-05-20'"
              :spread="5"
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
import NewsItem from '@/components/newsItem'

export default {
  components: {
    NewsItem
  }
}
</script>
<style lang="less" scoped>
.coin-detail {
  .title {
    font-size: 30px;
    color: #222222;
    margin-bottom: 50px;
    span {
      padding-left: 60px;
    }
  }
}
.number {
  margin-bottom: 100px;
  .non-item {
    border-radius: 0 0 5px 5px;
    width: 130px;
    float: left;
    margin-right: 50px;
    text-align: center;
    height: 72px;
    background: #fff;
    .nonid {
      height: 36px;
      line-height: 36px;
    }
    .btn {
      display: block;
    }
  }
}
.chart-detail {
  min-height: 350px;
  width: 100%;
}
.actions {
  .btn {
    margin-right: 30px;
  }
}
</style>


