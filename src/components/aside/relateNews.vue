<template>
  <block
    title="相关新闻"
    v-if="list && list.length"
  >
    <div class="hot-news">
      <news-item v-for="(item, i) in list"
        :key="i"
        :metaAlign="true"
        :title="item.title"
        :location="item.media"
        :imgUrl="item.image"
        :link="'/post/' + item.news_id"
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
      list: state => state.page.detail.relatenews
    })
  }
}
</script>

<style lang="less" scoped>

</style>

