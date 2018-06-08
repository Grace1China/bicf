<template>
  <div class="footer">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png">
        </router-link>
      </div>
      <div class="footer-navbar">
        <ul>
          <li v-for="(item, index) in footer" :key="index">
            <router-link :to="item.link">{{item.text}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      footer: state => state.common.footer
    })
  }
}
</script>
<style lang="less" scoped>
.footer {
  background:rgba(239,239,239,1);
  padding-top: 60px;
  padding-bottom: 60px;
}
.logo {
  float: left;
  img {
    // width:112px;
    height:36px;
    vertical-align: middle;
  }
}
.footer-navbar {
  line-height:36px;
  float: right;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      float: left;
      padding: 0 70px;
      a {
        text-decoration: none;
        color:rgba(114,144,172,1);
        font-size: 16px;
      }
    }
  }
}
</style>

