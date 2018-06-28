<template>
  <layout>
    <topbar slot="topbar" />
    <sidebar slot="sidebar">
      <hot-key />
    </sidebar>
    <div class="keyword-list">
      <div class="inner">
        <search-item v-for="i in 10" :key="i" :imgUrl="list[0].imgUrl + i" :main="list[0].main" :list="list[0].list" />
      </div>
    </div>
    <footerBar slot="footer" />
  </layout>
</template>
<script>
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
      list: [
        {
          imgUrl: 'http://via.placeholder.com/350?text=',
          main: {...test},
          list: [
            {...test},
            {...test},
            {...test},
            {...test},
            {...test},
            {...test},
          ]
        }
      ]
    }
  },
  components: {
    HotKey,
    searchItem
  }
}
</script>

