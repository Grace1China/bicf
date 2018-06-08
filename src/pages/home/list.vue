<template>
  <div class="list news-list">
    <div class="list-container">
      <news-item v-for="(item ,i) in news.list"
        :key="i"
        :link="'/post/' + item.id"
        :title="item.title"
        :description="item.summary"
        :imgUrl="item.image"
        :location="item.media"
        :time="item.ctime"
        :spread="item.propagation"
        :tags="item.keywords"
      />
      <div ref="loadMore"></div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import NewsItem from '@/components/newsItem'

export default {
  data() {
    return {
      loading: false,
      page: 1
    }
  },
  components: {
    NewsItem
  },
  computed: {
    ...mapState({
      news: state => state.page.home.news
    }),
  },
  methods: {
    loadData() {
      this.$store.dispatch('getNews', {
        page: this.page++,
        limit: 15,
      }).then(() => {
        this.loading = false
      })
    },
  },
  mounted() {
    this.loadData()
    document.querySelector('html')

    window.addEventListener('scroll', e => {
      if(this.loading) return
      const { top } = this.$refs.loadMore && this.$refs.loadMore.getBoundingClientRect && this.$refs.loadMore.getBoundingClientRect()
      // console.log( top - window.innerHeight)
      const distence = top - window.innerHeight
      if(distence < 1000) {
        this.loading = true
        this.loadData()
      }
    })
    window.dispatchEvent(new Event('scroll'))
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 100%;
}
</style>
