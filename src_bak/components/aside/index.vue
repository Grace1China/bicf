<template>
  <div class="aside">
    <div ref="container" class="aside-container" :class="isFreeze ? 'freeze' : ''" :style="style">
      <div class="aside-blocks">
        <slot />
      </div>
      <div ref="bottom"></div>
    </div>
  </div>
</template>
<script>
import _ from 'underscore'
export default {
  props: {
    enableFixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFreeze: false,
      fixed: {
        top: 0,
        width: 0,
      },
    }
  },
  computed: {
    style() {
      return this.isFreeze ? {
        width: this.fixed.width + 'px',
        top: this.fixed.top + 'px',
      } : {}
    }
  },
  methods: {
    checkFix: function(e) {
      if(!this.enableFixed) {
        return
      }
      const scrollTop = document.documentElement.scrollTop

      if (scrollTop < this.clientTop) {
        this.noFreeze()
        return;
      }

      const containerHeight = this.container.scrollHeight + 50

      // console.log(containerHeight)

      const distence = scrollTop - containerHeight - this.clientTop + window.innerHeight
      // console.log(distence)

      // const { top } = this.bottom && this.bottom.getBoundingClientRect && this.bottom.getBoundingClientRect()
      // console.log( top - window.innerHeight)
      // const distence = top - window.innerHeight
      // console.log(distence)
      if (distence >= 0) {
        this.freeze()
      } else {
        this.noFreeze()
      }
    },
    freeze() {
      const height = this.container.offsetHeight + 50
      const innerHeight = window.innerHeight
      const top = height - innerHeight
      this.isFreeze = true
      this.fixed.top = -1 * top 
      // this.$nextTick(() => {
      //   console.log(this.fixed)
      // })
    },
    noFreeze() {
      this.isFreeze = false
    },
  },
  mounted() {
    this.bottom = this.$refs.bottom
    this.container = this.$refs.container
    this.fixed.width = this.$el.clientWidth

    const { top = 430 } = this.container && this.container.getBoundingClientRect && this.container.getBoundingClientRect()
    this.clientTop = top

    window.addEventListener('scroll', this.checkFix)
    window.addEventListener('resize', this.checkFix)
    window.dispatchEvent(new Event('scroll'))
  },
  destroyed() {
    this.bottom = null
    
    window.removeEventListener('scroll', this.checkFix)
    window.removeEventListener('resize', this.checkFix)
  }
}
</script>

<style lang="less" scoped>
  .aside :global(.block) {
    margin-bottom: 50px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  }
  .freeze {
    position: fixed;
    
  }
</style>
