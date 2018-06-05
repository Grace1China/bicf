<template>
  <div class="layout">
    <div class="topbar">
      <slot name="topbar" />
    </div>
    <div class="main">
      <div class="banner">
        <slot name="banner" />
      </div>
      <div class="container">
        <div class="content">
          <slot />
        </div>
        <div class="sidebar">
          <slot name="sidebar" />
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "~@/assets/style/var";
.layout {
  width: 100%;
  height: auto;
}
.topbar {
  height: 100px;
  background: @mainBg;
}
.main {
  width: 100%;
}
.content {
  width: 680px;
  margin-right: 40px;
  float: left;
  margin-top: 30px;
}
.sidebar {
  width: 480px;
  float: right;
  margin-top: 30px;
}
.footer {
  margin-top: 60px;
}

</style>

