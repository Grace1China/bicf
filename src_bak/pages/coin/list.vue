<template>
  <layout fullwidth>
    <topbar slot="topbar" />
    <div class="coin-table">
      <div class="inner">
        <div class="theader">
          <div class="col" @click="setOrder('rank')">
            <div class="btn primary">
              #
              <icon v-if="orderBy === 'rank'" :type="orderAsc ? 'sort-asc' : 'sort-desc'" />
            </div>
          </div>
          <div class="col" @click="setOrder('name')">
            <div class="btn primary">
              币种
              <icon v-if="orderBy === 'name'" :type="orderAsc ? 'sort-asc' : 'sort-desc'" />
            </div>
          </div>
          <div class="col left" @click="setOrder('marketcap')">
            <div class="btn primary">
              市值
              <icon v-if="orderBy === 'marketcap'" :type="orderAsc ? 'sort-asc' : 'sort-desc'" />
            </div>
          </div>
          <div class="col left" @click="setOrder('price')">
            <div class="btn primary">
              价格
              <icon v-if="orderBy === 'price'" :type="orderAsc ? 'sort-asc' : 'sort-desc'" />
            </div>
          </div>
          <div class="col left" @click="setOrder('volume_24h')">
            <div class="btn primary">
              成交量(24h)
              <icon v-if="orderBy === 'volume_24h'" :type="orderAsc ? 'sort-asc' : 'sort-desc'" />
            </div>
          </div>
          <div class="col" @click="setOrder('change_24h')">
            <div class="btn primary">
              涨跌幅(24h)
              <icon v-if="orderBy === 'change_24h'" :type="orderAsc ? 'sort-asc' : 'sort-desc'" />
            </div>
          </div>
          <div class="col">
            <div class="btn primary">
              近期走势(7d)
              <icon v-if="orderBy === 'range'" :type="orderAsc ? 'sort-asc' : 'sort-desc'" />
            </div>
          </div>
        </div>
        <div class="tbody">
          <div v-for="(item) in list" :key="item.id" class="row item" @click="$router.push({path:'/coin/p/' + item.id})">
            <div class="col">
              {{item.rank}}
            </div>
            <div class="col left">
              <div class="col-inner">
                <img :src="item.image" class="coin-logo" width="20" height="20">
                <b>
                  {{item.name}}
                </b>
              </div>
            </div>
            <div class="col left">
              {{item.marketcap | currency}}
            </div>
            <div class="col left">
              {{item.price | currency}}
            </div>
            <div class="col left">
              {{item.volume_24h | currency}}
            </div>
            <div class="col" :class="item.change_24h >= 0 ? 'price-up' : 'price-down'">
              {{item.change_24h}}%
            </div>
            <div class="col">
              <mini-chart :data="item.chart"></mini-chart>
            </div>
          </div>
        </div>
        <loaderror v-if="loaderror" />
        <loading v-if="loading" />
        <div ref="loadMore"></div>
      </div>
    </div>
    <footerBar slot="footer" />
  </layout>
</template>
<script>
import _ from 'underscore'
import { mapState } from 'vuex'
import echarts from "echarts";
import MiniChart from '@/components/miniChart'

const descFirst = ['marketcap', 'price', 'volume_24h', 'change_24h', 'range']

export default {
  data() {
    return {
      orderBy: 'rank',
      orderAsc: true,
      page: 1,
      limit: 100,
      loading: false,
      loaderror: false,
      cacheList: []
    }
  },
  components: {
    MiniChart,
  },
  computed: {
    ...mapState({
      coinlist: state => state.page.coin.list
    }),
    list() {
      let listdata
      if(this.coinlist.length === this.cacheList.length) {
        listdata = this.cacheList
      } else {
        listdata = this.coinlist.map((item, index) => ({
          rank: index + 1,
          chart: (item.coordinate || []).map(i => i.price),
          ...item,
        }))
      }
      let list = listdata
      switch(this.orderBy) {
        case 'rank':
          list = _.sortBy(listdata, i => i.rank)
          break;
        case 'name':
          list = _.sortBy(listdata, (p, n) => p.name.toLowerCase())
          break;
        case 'marketcap':
          list = _.sortBy(listdata, i => i.marketcap)
          break;
        case 'price':
          list = _.sortBy(listdata, i => i.price)
          break;
        case 'volume_24h':
          list = _.sortBy(listdata, i => i.volume_24h)
          break;
        case 'change_24h':
          list = _.sortBy(listdata, i => i.change_24h)
          break;
        case 'range':
          list = _.sortBy(listdata, i => {
            const min = _.min(i.chart)
            const max = _.max(i.chart)
            return max - min
          })
          break;
        default:
      }
      if(!this.orderAsc) {
        list = list.reverse()
      }

      return list
    }
  },
  methods: {
    load() {
      if(this.loading) {
        return
      }
      this.loading = true
      this.$store.dispatch('getCoins', {
        limit: this.limit,
        page: this.page++
      }).then(() => {
        this.loading = false
        // throw new Error('ff')
      }).catch(() => {
        this.loaderror = true
        this.loading = false
      })
    },
    setOrder(name) {
      if(this.orderBy === name) {
        this.orderAsc = !this.orderAsc
      } else {
        this.orderBy = name
        this.orderAsc = !descFirst.includes(name)
      }
    },
    checkLoad(e) {
      if(this.loading) return
      const { top } = this.$refs.loadMore && this.$refs.loadMore.getBoundingClientRect && this.$refs.loadMore.getBoundingClientRect()
      // console.log( top - window.innerHeight)
      const distence = top - window.innerHeight
      if(distence < 1000) {
        // this.loading = true
        this.load()
      }
    },
  },
  mounted() {
    this.$store.commit('setNavbar', 1)
    this.$store.commit('setCoin', {list: []})
    this.load() 
    window.addEventListener('scroll', this.checkLoad)
    window.dispatchEvent(new Event('scroll'))
  },
  destroyed() {
    window.removeEventListener('scroll', this.checkLoad)
  }
}
</script>
<style lang="less" scoped>
.coin-table {
  width: 100%;
  // background: #fff;
}
.theader, .row {
  display: flex;
  .col {
    flex: 1;
    text-align: center;
    &.left {
      text-align: left;
    }
    &:first-of-type {
      max-width: 100px;
      // padding-left: 15px;
      // flex: 2;
      // margin-left: 30px;
    }
    &:last-of-type {
      // margin-right: 30px;
      // width: 110px;
      // text-align: right;
    }
    :global(.iconfont) {
      color: #eaeaea;
      // font-size: 16px;
    }
    span {
      color:rgba(153,153,153,1);
      font-size: 12px;
    }
  }
}
.theader {
  // background:#E9E9E9;
  .btn {
    min-width: 35px;
  }
  .col {
    padding-top: 16px;
    padding-bottom: 15px;
    .btn {
      cursor: pointer;
    }
  }
}
.row {
  transition: background 200ms;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
  .col {
    .coin-logo {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 15px;
      
    }
    // &.left {
    //   text-align: left;
    // }
    &:first-of-type {
      background: #F6F6F6;
    }
    
    .col-inner {
      padding-left: 25px;
    }
    b {
      color: #222222;
      font-weight: normal;
      font-size: 14px;
      display: inline-block;
      line-height: 14px;
      max-width: calc(~"100% - 40px");
      // overflow: hidden;
      // text-overflow: ellipsis;
      vertical-align: middle;
    }
    cursor: pointer;
    font-size: 14px;
    color:rgba(34,34,34,1);
    // padding-top: 14px;
    // padding-bottom: 14px;
    border-bottom: 1px solid #E9E9E9;
    line-height: 60px;
  }
}
.tbody {
  background: #fff;
  // max-height: 600px;
  // overflow-y: auto;
  // margin-right: 5px;
}
</style>


