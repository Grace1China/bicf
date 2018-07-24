<template>
<div class="navbar">
  <ul>
    <li v-for="(item, index) in navbar.list" :key="index" :class="navbar.active == index ? 'active' : ''"><router-link :to="item.link">{{item.text}}</router-link></li>
  </ul>
</div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      navbar: state => state.common.navbar
    })
  }
}
</script>

<style lang="less" scoped>
.navbar {
  float: left;
  font-size: 20px;
  ul {
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      &.active {
        border-bottom: 4px #fff solid;
        a {
          color: #fff;
        }
      }
      a {
        color: rgba(173,198,255,1);
        display: block;
        text-decoration: none;
        padding: 0 20px;
        height: 96px;
      }
    }
  }
}
</style>
