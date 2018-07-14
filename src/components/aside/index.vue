<template>
  <div class="aside">
    <div ref="container" class="aside-container" :class="isFreeze ? 'freeze' : ''" :style="style">
      <div class="aside-blocks">
        <slot />
        <div ref="bottom"></div>
      </div>
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
      const containerHeight = this.container.offsetHeight + 50

      const distence = scrollTop - containerHeight - this.clientTop + window.innerHeight

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
    window.dispatchEvent(new Event('scroll'))
  },
  destroyed() {
    this.bottom = null
    
    window.removeEventListener('scroll', this.checkLoad)
  }
}
</script>

<style lang="less" scoped>
  .aside :global(.block) {
    margin-bottom: 50px;
  }
  .freeze {
    position: fixed;
    
  }
</style>
