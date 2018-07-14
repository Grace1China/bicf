<template>
  <div class="backTop">
    <ul>
      <li @click="refresh">刷新</li>
      <li v-if="showTop" @click="scrollToTop">顶部</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showTop: true
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({top: 0})
    },
    refresh() {
      window.location.reload()
    },
    checkTop() {
      const scrollTop = document.documentElement.scrollTop

      if(scrollTop > 500) {
        this.showTop = true
      } else {
        this.showTop = false
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.checkTop)
    window.dispatchEvent(new Event('scroll'))
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkTop)
  }
}
</script>


<style lang="less" scoped>
.backTop {
  position: fixed;
  bottom: 320px;
  right: 0;
}
</style>
