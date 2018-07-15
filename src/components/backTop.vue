<template>
  <div class="backTop" :style="{right: btnRight + 'px'}">
    <ul>
      <li @click="refresh" class="refresh"><icon type="refresh" /></li>
      <li :style="{visibility: showTop ? 'inherit' : 'hidden'}" @click="scrollToTop"><icon type="backtop" /></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    right: Number
  },
  data() {
    return {
      showTop: true
    }
  },
  computed: {
    btnRight() {
      // const ownWidth = (this.$el || {}).offsetWidth || 70
      return this.right - 80
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
      this.$forceUpdate()
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
  bottom: 130px;
  right: 20px;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #555;
      border-radius: 50%;
      margin-bottom: 10px;
      cursor: pointer;
      &.refresh {
        background: #9a9a9a;
      }
      i {
        font-size: 25px;
        color: #fff;
      }
    }
  }
}
</style>
