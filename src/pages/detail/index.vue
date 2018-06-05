<template>
  <layout>
    <topbar slot="topbar" />
    <div class="detail-page">
      <Content />
      <time-line />
    </div>
    </block>
    <sidebar slot="sidebar">
      <relate-news />
    </sidebar>
    <footerBar slot="footer" />
  </layout>
</template>

<script>
import relateNews from '@/components/aside/relateNews'
import TimeLine from './timeline'
import Content from './content'

export default {
  name: "detail",
  components: {
    Content,
    relateNews,
    TimeLine,
  }
}
</script>
<style lang="less" scoped>
.detail-page {
  
}
</style>

