<template>
  <div id="topbar">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="">
        </router-link>
      </div>
      <navbar />
      <div class="search">
        <input type="text" placeholder="请输入搜索关键字" />
        <icon type="search" />
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./navbar";

export default {
  components: {
    navbar
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/style/var";

#topbar {
  height: 100px;
  line-height: 100px;
  background: @mainBg;
  .logo {
    float: left;
    margin-right: 140px;
    img {
      width: 112px;
      // height: 36px;
      vertical-align: middle;
    }
  }
  .search{
    float: right;
    width: 340px;
    height: 50px;
    position: relative;
    input {
      background: rgba(0,0,0,0);
      border: 1px solid #fff;
      width: 340px - 54px;
      height: 100%;
      line-height: 50px;
      border-radius: 5px;
      padding-left: 54px;
      color: #fff;
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }
    :global(.iconfont) {
      position: absolute;
      top: 0;
      left: 12px;
      font-size: 26px;
      color: #fff;

    }
  }
}
</style>



