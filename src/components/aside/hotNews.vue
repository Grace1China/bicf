<template>
  <block
    title="热点新闻"
  >
    <div class="hot-news">
      <news-item v-for="(item, index) in list"
        :key="index"
        :link="'/post/' + item.news_id"
        :title="item.title"
        :description="item.summary"
        :imgUrl="item.image"
      />
    </div>
  </block>
</template>
<script>
import NewsItem from '@/components/newsItem'
import { mapState } from 'vuex'

export default {
  components: {
    NewsItem
  },
  computed: {
    ...mapState({
      list: state => state.page.home.hotnews
    })
  },
}
</script>

<style lang="less" scoped>

</style>

