<template>
  <i class="iconfont" :class="'icon-' + iconType"></i>
</template>
<script>
export default {
  props: ['type'],
  computed: {
    iconType() {
      return this.type || ''
    }
  }
}
</script>

