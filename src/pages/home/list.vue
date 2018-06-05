<template>
  <div class="list news-list">
    <div class="list-container">
      <news-item v-for="i in 15"
        :key="i"
        title="建设银行舟山分行创新服务浙江自贸区建设小计"
        description="建设银行舟山分行创新服务浙江自贸区建设小计建设银行舟山分行创新服务浙江自贸区建设小计建设银行舟山分行创新服务浙江自贸区建设小计建设银行舟山分行创新服务浙江自贸区建设小计"
        :imgUrl="'http://via.placeholder.com/350x350?text=' + i"
        location="光明网"
        time="2018-05-23 13:58:23"
        spread="12"
        :tags="['中国', '服务', '发展', '探索']"
      />
    </div>
  </div>
</template>
<script>
import NewsItem from '@/components/newsItem'

export default {
  components: {
    NewsItem
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 100%;
}
</style>
