<template>
  <block title="相关人物和事件" :hasMore="false">
    <div class="relate-obj">
      <ul>
        <li><a href="#">BM</a></li>
        <li><a href="#">空投</a></li>
        <li><a href="#">主网上线</a></li>
      </ul>
    </div>
  </block>
</template>
<style lang="less" scoped>
.relate-obj {
  border-radius: 10px;
  border: 1px solid rgba(230, 230, 230, 1);
  color: #4264FB;

  ul {
    li {
      line-height: 50px;
    }
    a {
      font-size: 14px;
      color: #333333;
      text-decoration: none;
    }
  }
}
</style>
