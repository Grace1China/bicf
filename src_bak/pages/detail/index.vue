<template>
  <layout :fullwidth="loaderror || loading">
    <topbar slot="topbar" />
    <loaderror v-if="loaderror" />
    <loading v-else-if="loading" />
    <div v-else class="detail-page">
      <Content />
      <time-line  />
    </div>
    <sidebar slot="sidebar">
      <relate-news />
      <relate-obj />
    </sidebar>
    <footerBar slot="footer" />
  </layout>
</template>

<script>
import { mapState } from 'vuex'

import relateNews from '@/components/aside/relateNews'
import TimeLine from './timeline'
import Content from './content'
import RelateObj from './relateObj'

export default {
  name: "detail",
  data: () => {
    return {
      loading: true,
      loaderror: false
    }
  },
  components: {
    Content,
    relateNews,
    TimeLine,
    RelateObj,
  },

  methods: {
    async load(id) {
      this.loading = true
      await Promise.all([
        this.$store.dispatch('getDetail', this.$route.params.id),
        this.$store.dispatch('getRelateNews', this.$route.params.id),
        this.$store.dispatch('getRelateObj', this.$route.params.id),
        this.$store.dispatch('getTimeLine', this.$route.params.id),
        // Promise.reject(),
      ]).catch(() => {
        this.loaderror = true
      })
      this.loading = false
    }
  },
  mounted() {
    this.$store.commit('setNavbar', -1)
    this.$store.commit('resetDetail')
    window.scrollTo(0, 0)
    this.load(this.$route.params.id)
  },

  watch: {
    $route(val, oldVal) {
      if(val.params.id != oldVal.params.id) {
        this.$store.commit('resetDetail')
        this.load(val.params.id)
      }
      // console.log(val, oldVal)
    }
  }
}
</script>
<style lang="less" scoped>
.detail-page {
  
}
</style>

