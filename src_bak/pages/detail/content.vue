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
          {{post.ctime}}
        </div>
        <div class="meta-item tag" v-if="post.keywords && post.keywords.length">
          <icon type="tag" />
          <router-link v-for="(tag, index) in post.keywords" :to="'/keyword/' + (tag.keyword_id || tag.id)" :key="index">{{tag.keyword}}</router-link>
          
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
      showAll: true,
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
  background: #fff;
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
    a {
      text-decoration: none;
      color: #9b9b9b;
    }
    &.tag {
      :global(.iconfont) {
        position: relative;
        top: 2px;
      }
      a {
        &::after {
          content: '，';
        }
        &:last-of-type::after {
          content: '';
        }
      }
    }
  }
}
.expect {
  font-size: 14px;
  background: #F6F6F6;
  border-left: #E6E6E6 solid 6px;
  padding: 20px 30px 20px 24px;
  margin-left: -30px;
  margin-right: -30px;
  line-height: 26px;
  margin-bottom: 20px;
  color: #222222;
  font-weight: bold;
  > span {
    color: #4264FB;
  }
}
.post-body {
  padding-bottom: 25px;
  font-size: 14px;
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

