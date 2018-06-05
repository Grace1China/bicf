<template>
  <div class="footer">
    <div class="container">
      <div class="logo">
        <a href="#">
          <img src="http://via.placeholder.com/112x36" alt="">
        </a>
      </div>
      <div class="footer-navbar">
        <ul>
          <li>
            <a href="#">关于我们</a>
          </li>
          <li>
            <a href="#">服务条款</a>
          </li>
          <li>
            <a href="#">联系我们</a>
          </li>
          <li>
            <a href="#">投稿须知</a>
          </li>
          <li>
            <a href="#">反馈意见</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer {
  background:rgba(239,239,239,1);
  padding-top: 60px;
  padding-bottom: 60px;
}
.logo {
  float: left;
  img {
    width:112px;
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

