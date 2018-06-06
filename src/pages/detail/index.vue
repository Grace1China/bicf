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
  }
}
</script>
<style lang="less" scoped>
.detail-page {
  
}
</style>

