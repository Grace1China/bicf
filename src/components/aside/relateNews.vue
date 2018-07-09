<template>
  <block
    title="相关新闻"
    v-if="list && list.length"
  >
    <div class="hot-news">
      <div class="inner">
        <news-item v-for="(item, i) in list"
          :key="i"
          :metaAlign="true"
          :title="item.title"
          :description="item.summary"
          :location="item.media"
          :locationLink="item.url"
          :imgUrl="item.image"
          :link="'/post/' + item.news_id"
        />
      </div>
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
.inner {
  overflow-y: auto;
  max-height: 620px;
  overflow-x: hidden;
  padding-right: 15px;
  &::-webkit-scrollbar{
    width: 6px;
    height: 16px;
    background-color: #FFF;
  }
  &::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #FFF;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: rgba(241,242,246,1);
  }
}

</style>

