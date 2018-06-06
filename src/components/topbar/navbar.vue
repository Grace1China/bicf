<template>
<div class="navbar">
  <ul>
    <li class="active"><router-link to="/">首页</router-link></li>
    <li><router-link to="/post/1">二级页面1</router-link></li>
    <li><router-link to="/">二级页面2</router-link></li>
  </ul>
</div>
</template>
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
