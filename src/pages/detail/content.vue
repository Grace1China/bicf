<template>
  <div class="content-body">
    <div class="inner" ref="inner" :style="{maxHeight: post.id && !showAll  ? maxHeight + 'px' : 'initial'}">
      <div class="title">
        <h1>{{post.title}}</h1>
      </div>
      <div class="meta">
        <div class="meta-item" v-if="post.media">
          <icon type="location" />
          {{post.media}}
        </div>
        <div class="meta-item" v-if="post.ctime">
          <icon type="clock" />
          {{relativeTime(post.ctime)}}
        </div>
        <div class="meta-item" v-if="post.keywords && post.keywords.length">
          <icon type="tag" />
          {{post.keywords.map(i => i.keyword).join(', ')}}
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="expect" v-if="post.summary && post.summary.trim()">
        <span>
          摘要：
        </span>
        {{post.summary}}
      </div>
      <div class="post-body" v-html="post.content"></div>
      <div class="post-readorigin" v-if="post.url">
        <a :href="post.url" target="_blank">查看原文</a>
      </div>
    </div>
    <div class="read-more" v-if="!showAll && post.id" @click="showAllHandler">
      显示全部
    </div>
  </div>
</template>
<script>
import time from '@/utils/time'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      maxHeight: 1000,
      currentHeight: 0,
      showAll: false,
    }
  },
  computed: {
    ...mapState({
      post: state => state.page.detail.post
    }),
  },
  updated() {
    if(!this.post.id || this.showAll) return

    this.currentHeight = this.$refs.inner.clientHeight

    if(this.currentHeight < this.maxHeight) {
      this.showAll = true
    }
    // console.log(this.currentHeight)
  },
  methods: {
    showAllHandler() {
      this.showAll = true
    },
    relativeTime(t) {
      return time(t).fromNow()
    }
  }
};
</script>
<style lang="less" scoped>
.content-body {
  border-radius: 10px;
  border: 1px solid rgba(230, 230, 230, 1);
  .inner {
    padding: 50px 30px 0;
    overflow: hidden;
  }
}
.title {
  margin-bottom: 22px;
  h1 {
    margin: 0;
    font-size: 28px;
    color: rgba(34, 34, 34, 1);
    line-height: 40px;
  }
}
.meta {
  margin-bottom: 20px;
  .meta-item {
    float: left;
    font-size: 12px;
    margin-right: 15px;
    color: rgba(155, 155, 155, 1);
    :global(.iconfont) {
      margin-right: 5px;
    }
  }
}
.expect {
  font-size: 14;
  line-height: 26px;
  margin-bottom: 60px;
}
.post-body {
  padding-bottom: 25px;
}
.post-readorigin {
  // line-height: 60px;
  // height: 60px;
  text-align: center;
  padding-bottom: 25px;
  a {
    border: 1px solid rgba(230, 230, 230, 1);
    text-decoration: none;
    color: rgba(66,100,251,1);
    height: 40px;
    line-height: 40px;
    display: inline-block;
    padding: 0 20px;
    border-radius: 5px;
    // padding: 5px 10px;
  }
}
.read-more {
  color:rgba(66,100,251,1);
  line-height: 60px;
  text-align: center;
  cursor: pointer;
}
</style>

