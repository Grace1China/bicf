<template>
  <div class="news-item">
    <router-link :to="link" class="wrap" :class="metaAlign ? 'meta-align' : ''">
      <div class="thumbnail">
        <img :src="imgUrl" :alt="title">
      </div>
      <div class="info">
        <h1 v-if="title">{{title}}</h1>
        <p v-if="desc || forceDesc" class="description" :style="{marginBottom: location ? '' : '0px'}" v-html="desc"></p>
        <div class="meta">
          <div class="meta-item" v-if="location">
            <icon type="location" />
            <a target="_blank" :href="locationLink || 'javascript:'" @click.stop.capture="false">{{location}}</a>
          </div>
          <div class="meta-item" v-if="time">
            <icon type="clock" />
            {{time | relateTime}}
          </div>
          <div class="meta-item" v-if="false">
            <icon type="notify" />
            传播度({{spread}})
          </div>
          <div class="meta-item tag" v-if="tags.length">
            <icon type="tag" />
            <router-link v-for="(tag, index) in tags" :to="'/keyword/' + (tag.keyword_id || tag.id)" :key="index">{{tag.keyword}}</router-link>

          </div>
        </div>
      </div>
      <div class="clearfix"></div>
    </router-link>
  </div>
</template>
<script>

export default {
  props: {
    title: String,
    link: {
      type: String,
      default: '/'
    },
    imgUrl: String,
    forceDesc: Boolean,
    metaAlign: Boolean,
    description: String,
    location: String,
    locationLink: String,
    time: String,
    spread: [String, Number],
    tags: {
      type: Array,
      default: () => []
    },
  },
  computed: {
    desc() {
      if(this.description && this.description.length > 70) {
        return this.description.substr(0, 70) + '...'
      }
      return this.description
    }
  },
}
</script>

<style lang="less" scoped>
.news-item {
  border-radius:10px;
  background: #fff;
  border:1px solid rgba(230,230,230,1);
  padding: 25px 20px;
  margin-bottom: 20px;
  transition: all 500ms;
  &:hover {
    box-shadow:0px 0px 15px 0px rgba(204,204,204,0.5);
    border-color: #fff;
  }
  .thumbnail {
    width: 90px;
    height: 90px;
    float: left;
    margin-right: 20px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    float: left;
    width: ~"calc(100% - 110px)";
    h1 {
      font-size:16px;
      color:rgba(34,34,34,1);
      line-height:22px;
      margin: 0;
      max-height: 66px;
      overflow: hidden;
    }
    .description {
      margin: 11px 0 32px;
      font-size:14px;
      color:rgba(119,119,119,1);
      line-height:20px;
      height: 40px;
      overflow: hidden;
    }
    .meta {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 100%;
      .meta-item {
        // float: left;
        display: inline;
        font-size: 12px;
        margin-right: 15px;
        color:rgba(34,34,34,1);
        a {
          color:rgba(34,34,34,1);
          text-decoration: none;
        }
        :global(.iconfont) {
          margin-right: 5px;
          color: #597EF7;
        }
        &.tag {
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
  }
  &:after {
    float: none;
    clear: both;
  }
}
.wrap {
  display: block;
  position: relative;
}
.meta-align {
  .meta {
    position: absolute;
    bottom: 0;
  }
}
</style>
