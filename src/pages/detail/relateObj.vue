<template>
  <block title="相关人物和事件" :hasMore="false" v-if="list && list.length">
    <div class="relate-obj">
      <ul>
        <li v-for="(item, i) in list" :key="i"><a href="javascript:" v-text="item.text"></a></li>
      </ul>
    </div>
  </block>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      list: state => state.page.detail.relateobj
    })
  }
}
</script>

<style lang="less" scoped>
.relate-obj {
  border-radius: 10px;
  border: 1px solid rgba(230, 230, 230, 1);
  color: #4264FB;
  background: #fff;

  ul {
    li {
      line-height: 50px;
    }
    a {
      font-size: 14px;
      color: #333333;
      text-decoration: none;
    }
  }
}
</style>
