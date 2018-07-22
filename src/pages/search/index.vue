<template>
  <layout fullwidth>
    <topbar slot="topbar" />
    <div class="search-list">
      <div class="inner">
        <search-item 
          v-for="(item, index) in list"
          :key="index"
          :imgUrl="item.imgUrl"
          :main="item.main"
          :list="item.list"
        />
        <loading :hasMore="loading"  />
        <div ref="loadMore"></div>
      </div>
    </div>
    <footerBar slot="footer" />
  </layout>
</template>
<script>
import { mapState } from 'vuex'
import searchItem from '@/components/searchItem'

// const test = {
//   time: new Date,
//   title: '币特币今日大涨，币特币今日大涨币特币今日',
//   link: '/post/xxx',
//   location: '光明网',
//   locationLink: 'http://baidu.com'
// }
export default {
  data(){
    return {
      loading: false,
      maxPage: 99,
      page: 1
    }
  },
  computed: {
    ...mapState({
      // word: state => state.page.search.word,
      news: state => state.page.search.list
    }),
    list() {
      const listdata = (this.news || []).map(item => ({
        imgUrl: item.image,
        main: {
          time: item.ctime,
          title: item.title,
          link: `/post/${item.id}`,
          location: item.media,
          locationLink: item.url
        },
        list: (item.similarities || []).map(i => ({
          time: i.ctime,
          title: i.title,
          link: `/post/${i.id}`,
          location: i.media,
          locationLink: i.url
        }))
      }))
      return listdata
    }
  },
  components: {
    searchItem
  },
  methods: {
    resetData(word = this.$route.params.keyword) {
      this.maxPage = 99
      this.$store.commit('setSearch', {
        word: word,
        list: []
      })
    },
    checkLoad(e) {
      if(this.loading) return
      const { top } = this.$refs.loadMore && this.$refs.loadMore.getBoundingClientRect && this.$refs.loadMore.getBoundingClientRect()
      // console.log( top - window.innerHeight)
      const distence = top - window.innerHeight
      if(distence < 1000) {
        //this.loading = true
        this.load()
      }
    },
    load(word = this.$route.params.keyword) {
      if(this.loading) {
        return
      }
      if(this.page >= this.maxPage) {
        this.loading = false
        return false
      }
      this.loading = true
      this.$store.dispatch('searchNews', {
        word: word,
        page: this.page++,
        limit: 15,
      }).then(res => {
        this.maxPage = res.last_page
        this.loading = false
      })
    },
  },
  watch: {
    $route(val, oldVal) {
      if(val.params.keyword != oldVal.params.keyword) {
        // console.log('do search')
        this.page = 1
        this.resetData(val.params.keyword)
        this.load(val.params.keyword)
      }
    }
  },
  mounted() {
    this.$store.commit('setNavbar', -1)
    this.resetData()
    this.load(this.$route.params.keyword)

    window.addEventListener('scroll', this.checkLoad)
    window.dispatchEvent(new Event('scroll'))
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkLoad)
  }
}
</script>

