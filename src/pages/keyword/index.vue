<template>
  <layout>
    <topbar slot="topbar" />
    <sidebar slot="sidebar">
      <hot-key />
    </sidebar>
    <div class="keyword-list">
      <div class="inner">
        <search-item 
          v-for="(item, index) in list"
          :key="index"
          :imgUrl="item.imgUrl"
          :main="item.main"
          :list="item.list"
        />
        <div ref="loadMore"></div>
      </div>
    </div>
    <footerBar slot="footer" />
  </layout>
</template>
<script>
import { mapState } from 'vuex'
import HotKey from '@/components/aside/hotkey'
import searchItem from '@/components/searchItem'

const test = {
  time: new Date,
  title: '币特币今日大涨，币特币今日大涨币特币今日',
  link: '/post/xxx',
  location: '光明网',
  locationLink: 'http://baidu.com'
}

export default {
  data(){
    return {
      loading: false,
      page: 1
    }
  },
  computed: {
    ...mapState({
      // word: state => state.page.search.word,
      news: state => state.page.keyword.list
    }),
    list() {
      const listdata = (this.news || []).map(item => ({
        imgUrl: item.image || '',
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
    HotKey,
    searchItem
  },
  methods: {
    resetData() {
      this.$store.commit('setKeyword', {
        id: this.$route.params.keyword,
        list: []
      })
    },
    checkLoad(e) {
      if(this.loading) return
      const { top } = this.$refs.loadMore && this.$refs.loadMore.getBoundingClientRect && this.$refs.loadMore.getBoundingClientRect()
      // console.log( top - window.innerHeight)
      const distence = top - window.innerHeight
      if(distence < 1000) {
        this.loading = true
        this.load()
      }
    },
    load(id = this.$route.params.keyword) {
      this.loading = true
      this.$store.dispatch('keywordNews', {
        id: id,
        page: this.page++,
        limit: 15,
      }).then(() => {
        this.loading = false
      })
    },
  },
  watch: {
    $route(val, oldVal) {
      if(val.params.keyword != oldVal.params.keyword) {
        this.page = 1
        this.resetData()
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

