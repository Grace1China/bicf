<template>
  <div class="layout">
    <div class="topbar">
      <slot name="topbar" />
    </div>
    <div class="main">
      <div class="banner">
        <slot name="banner" />
      </div>
      <div class="container" ref="container">
        <div class="content" :class="{ fullwidth }">
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
    <back-top :right="right"></back-top>
  </div>
</template>
<script>
import backTop from './backTop'
export default {
  data() {
    return {
      right: 0
    }
  },
  props: {
    fullwidth: Boolean
  },
  components: {
    backTop
  },
  mounted() {
    this.$refs.container
    const { left } = this.$refs.container && this.$refs.container.getBoundingClientRect && this.$refs.container.getBoundingClientRect()
    this.right = left
  }
}
</script>

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
  &.fullwidth {
    width: 100%;
  }
}
.sidebar {
  width: 480px;
  float: right;
  margin-top: 30px;
}
.footer {
  margin-top: 20px;
}

</style>

