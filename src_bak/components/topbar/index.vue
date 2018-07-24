<template>
  <div id="topbar">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="">
        </router-link>
      </div>
      <navbar />
      <div class="search">
        <input type="text" placeholder="请输入搜索关键字" v-model.trim="keyword" @keyup.enter="onSearch" />
        <icon type="search" />
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import navbar from "./navbar";
import _ from 'underscore'

export default {
  data() {
    return {
      keyword: ''
    }
  },
  components: {
    navbar
  },
  computed: {
    ...mapState({
      word: state => state.page.search.word,
    })
  },
  methods: {
    onSearch: _.debounce(function() {
      // console.log('will search ~~~~')
      if(this.keyword) {
        this.$router.push({ name: 'search', params: { keyword: this.keyword }})
      } else {
        this.$store.commit('setSearch', {
          word: ''
        })
        this.$router.push({ name: 'home' })
      }
      // console.log(e, this.keyword)
    }, 200)
  },
  watch: {
    word(newVal, oldVal) {
      this.keyword = newVal
    }
  },
  mounted() {
    if(this.word) {
      this.keyword = this.word
    }
  }
};
</script>
<style lang="less" scoped>
@import "~@/assets/style/var";

#topbar {
  height: 100px;
  line-height: 100px;
  .container {
    background: @mainBg;
  }
  // background: @mainBg;
  .logo {
    float: left;
    margin-right: 140px;
    img {
      width: 112px;
      // height: 36px;
      vertical-align: middle;
    }
  }
  .search{
    float: right;
    width: 340px;
    height: 50px;
    position: relative;
    input {
      background: rgba(0,0,0,0);
      border: 1px solid #d4d4d4;
      width: 340px - 54px;
      height: 100%;
      line-height: 50px;
      border-radius: 5px;
      padding-left: 54px;
      color: #fff;
      &::-webkit-input-placeholder {
        color: #fff;
      }
    }

    input:focus {
      outline-offset: 0px;
      outline: -webkit-focus-ring-color auto 0px;
      border: 1px solid #fff;
    }

    :global(.iconfont) {
      position: absolute;
      top: 0;
      left: 12px;
      font-size: 26px;
      color: #fff;

    }
  }
}
</style>



