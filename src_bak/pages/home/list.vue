<template>
  <div class="list news-list">
    <div class="list-container">
      <news-item v-for="(item ,i) in news.list"
        :key="i"
        :forceDesc="true"
        :link="'/post/' + item.id"
        :title="item.title"
        :description="item.summary"
        :imgUrl="item.image"
        :location="item.media"
        :locationLink="item.url"
        :time="item.ctime"
        :spread="item.propagation"
        :tags="item.keywords"
      />
      <loaderror v-if="loaderror" />
      <loading v-else-if="loading" />
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
      loaderror: false,
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
    checkLoad(e) {
      if(this.loading) return
      const { top } = this.$refs.loadMore && this.$refs.loadMore.getBoundingClientRect && this.$refs.loadMore.getBoundingClientRect()
      // console.log( top - window.innerHeight)
      const distence = top - window.innerHeight
      if(distence < 1000) {
        // this.loading = true
        this.loadData()
      }
    },
    loadData() {
      if(this.loading) {
        return
      }
      this.loading = true
      this.$store.dispatch('getNews', {
        page: this.page++,
        limit: 15,
      }).then(() => {
        this.loading = false
        window.dispatchEvent(new Event('resize'))
      }).catch(() => {
        this.loaderror = true
        this.loading = false
      })
    },
  },
  mounted() {
    this.loadData()
    document.querySelector('html')

    window.addEventListener('scroll', this.checkLoad)
    window.dispatchEvent(new Event('scroll'))
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkLoad)
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 100%;
}
</style>
