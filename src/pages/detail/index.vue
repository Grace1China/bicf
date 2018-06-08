<template>
  <layout>
    <topbar slot="topbar" />
    <div class="detail-page">
      <Content />
      <time-line />
    </div>
    <sidebar slot="sidebar">
      <relate-news />
      <relate-obj />
    </sidebar>
    <footerBar slot="footer" />
  </layout>
</template>

<script>
import relateNews from '@/components/aside/relateNews'
import TimeLine from './timeline'
import Content from './content'
import RelateObj from './relateObj'

export default {
  name: "detail",
  components: {
    Content,
    relateNews,
    TimeLine,
    RelateObj,
  },
  mounted() {
    // this.$store.commit('setDetail', { post: {}})
    document.getElementsByTagName('html').item(0).scrollTop = 0
    console.log(this.$route)
    this.$store.dispatch('getDetail', this.$route.params.id)
    this.$store.dispatch('getRelateNews', this.$route.params.id)
  }
}
</script>
<style lang="less" scoped>
.detail-page {
  
}
</style>

