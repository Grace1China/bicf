<template>
  <block
    title="热门关键词"
  >
    <div class="tag-list">
      <div class="inner">
        <a href="javascrit:" v-for="(item, index) of list" :key="index" :style="{backgroundColor: colors[Math.abs(index % colors.length)]}">{{item.keyword}}</a>
      </div>
    </div>
  </block>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    colors: [
      '#009966',
      '#009999',
      '#00FF66',
      '#00FF99',
      '#339966',
      '#339999',
      '#990066',
      '#990099',
      '#CC0066',
      '#CC0099',
      '#FF6666',
      '#FF6699',
    ],
  }),
  computed: {
    ...mapState({
      list: state => state.page.home.hotkeys
    })
  },

}
</script>
<style lang="less" scoped>
.tag-list {
  width: 100%;
  border-radius:10px;
  border:1px solid rgba(216,216,216,1);
  .inner {
    padding: 10px;

  }
  a {
    display: inline-block;
    text-decoration: none;
    font-size: 16px;
    white-space: nowrap;
    padding: 9px 20px;
    margin: 10px;
    background-color: grey;
    border-radius: 25px;
    color: #fff;
    
  }
}
</style>


