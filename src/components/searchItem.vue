<template>
  <div class="search-item">
    <div class="wrap">
      <div class="thumbnail">
        <img :src="imgUrl" :alt="main.title">
      </div>
      <div class="info">
        <h1 v-if="main.title">
          <router-link :to="main.link">
            {{main.title}}
          </router-link>
        </h1>
        <div class="meta">
          <div class="meta-item" v-if="main.location">
            <icon type="location" />
            <a target="_blank" :href="main.locationLink || 'javascript:'" @click.stop.capture="false">{{main.location}}</a>
          </div>
          <div class="meta-item" v-if="main.time">
            <icon type="clock" />
            {{main.time | relateTime}}
          </div>
        </div>
        <div class="relate-list">
          <div class="item" v-for="(item, index) in listitems" :key="index" >
            <router-link :to="item.link" class="wrap">
              <h3>{{item.title}}</h3>
              <div class="meta">
                <div class="meta-item" v-if="item.location">
                  <icon type="location" />
                  <a target="_blank" :href="item.locationLink || 'javascript:'" @click.stop.capture="false">{{item.location}}</a>
                </div>
                <div class="meta-item" v-if="item.time">
                  <icon type="clock" />
                  {{item.time | relateTime}}
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="showmore" @click="toggleShowMore">
          查看更多
          <icon type="arrow" :class="{ reverse: showMore }" />
        </div>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      showMore: false,
    }
  },
  computed: {
    listitems() {
      if (this.showMore) {
        return this.list
      }
      return this.list.slice(0, 2)
    }
  },
  props: {
    imgUrl: String,
    main: {
      type: Object,
      default: {}
      /**
       * {
       *    link: '',
       *    title: '',
       *    location: '',
       *    locationLink: '',
       *    time: '',
       * }
       */
    },
    list: {
      type: Array,
      default: [],
    }
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore
    }
  }
}
</script>

<style lang="less" scoped>
.search-item {
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
      margin-bottom: 15px;
      a {
        color: #222;
        text-decoration: none;
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
  }
}
.relate-list {
  margin-top: 40px;
  list-style-type: disc;
  color: #4264FB;
  .item {
    margin-bottom: 20px;
    display: list-item;
    margin-left: 20px;
    // transition: height 500ms;
    a {
      text-decoration: none;
    }
    h3 {
      font-size: 14px;
      color: #222222;
      margin: 0;
      margin-bottom: 15px;
    }
  }
}
.showmore {
  display: inline-block;
  float: right;
  color: #4264FB;
  cursor: pointer;
  font-size: 14px;
  :global(.iconfont) {
    display: inline-block;
    transition: transform 100ms;
  }
  .reverse {
    transform: rotate(180deg);
  }
}
</style>
