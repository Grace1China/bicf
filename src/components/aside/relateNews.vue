<template>
  <block
    title="相关新闻"
  >
    <div class="hot-news">
      <news-item v-for="i in 10"
        :key="i"
        title="建设银行舟山分行创新服务浙江自贸区建设小计"
        location="人民网"
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

</style>

