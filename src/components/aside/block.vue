<template>
  <div class="block">
    <div v-if="title" class="title">
      <span class="color"></span>
      <h3 v-html="title"></h3>
      <a v-if="hasMore" class="more" href="javascript:">更多</a>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'aside-block',
  props: {
    title: {
      type: [String, Boolean],
      default: false
    },
    hasMore: {
      type: Boolean,
      default: true
    }
  },

}
</script>
<style lang="less" scoped>
@import "~@/assets/style/var";
.block {
  width: 100%;
}
.title {
  height: 20px;
  line-height: 20px;
  font-size: 20px;
  padding-bottom: 25px;
  h3 {
    font-size: 20px;
    margin: 0;
    display: block;
    float: left;
    color:rgba(51,51,51,1);
  }
  .more {
    float: right;
    font-size: 14px;
    color: rgba(51,51,51,1);
    text-decoration: none;
  }
  &:after {
    float: none;
    clear: both;
  }
}
.color {
  height: 100%;
  width: 6px;
  margin-right: 8px;
  display: block;
  background: @mainBg;
  border-radius: 5px;
  float: left;
}
.content {
  width: 100%;
}
</style>


