<template>
  <div class="aside">
    <div class="aside-container">
      <div class="aside-blocks">
        <slot />
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .aside :global(.block) {
    margin-bottom: 50px;
  }
</style>
