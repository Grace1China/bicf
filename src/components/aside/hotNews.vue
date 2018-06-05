<template>
  <block
    title="热门关键词"
  >
    <div class="hot-news">
      <news-item v-for="i in 15"
        :key="i"
        title="建设银行舟山分行创新服务浙江自贸区建设小计"
        :imgUrl="'http://via.placeholder.com/350x350?text=' + i"
      />
    </div>
  </block>
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
.news-item {
  border-radius:10px;
  border:1px solid rgba(230,230,230,1);
  padding: 25px 20px;
  margin-bottom: 20px;
  transition: all 500ms;
  &:hover {
    box-shadow:0px 0px 15px 0px rgba(204,204,204,0.5);
    border-color: #fff;
  }
  .thumbnail {
    width: 90px;
    height: 90px;
    float: left;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    float: left;
    width: ~"calc(100% - 110px)";
    h1 {
      font-size:16px;
      color:rgba(34,34,34,1);
      line-height:22px;
      margin: 0;
    }
    .meta {
      .meta-item {
        float: left;
        font-size: 12px;
        margin-right: 15px;
        color:rgba(34,34,34,1);
        :global(.iconfont) {
          margin-right: 5px;
          color: #597EF7;
        }
      }
    }
  }
  &:after {
    float: none;
    clear: both;
  }
}
</style>

