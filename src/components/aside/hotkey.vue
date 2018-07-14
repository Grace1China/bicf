<template>
  <block
    title="热门关键词"
  >
    <div class="tag-list">
      <div class="inner">
        <a href="javascrit:" v-for="(item, index) of list" :key="index" :style="{backgroundColor: colors[Math.abs(index % colors.length)]}" @click="goKeyword(item)">{{item.keyword}}</a>
      </div>
    </div>
  </block>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    colors: [
      '#00C37E',
      '#00D1C6',
      '#0F9EF4',
      '#4470FF',
      '#FFA940',
      '#FF6D25',
      '#FF64C0',
      '#FF6487',
      '#FF6464',
      '#FF8D64',
      '#FF6666',
      '#FF6699',
    ],
  }),
  computed: {
    ...mapState({
      list: state => state.page.home.hotkeys
    })
  },
  mounted() {
    this.$store.dispatch('getHotkeys')
  },
  methods: {
    goKeyword(item) {
      this.$router.push({
        name: 'keyword',
        params: {
          keyword: item.id
        }
      })
    }
  }

}
</script>
<style lang="less" scoped>
.tag-list {
  background: #fff;
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


