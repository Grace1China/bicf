<template>
<div class="navbar">
  <ul>
    <li class="active"><a href="#">首页</a></li>
    <li><a href="#">二级页面1</a></li>
    <li><a href="#">二级页面2</a></li>
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
