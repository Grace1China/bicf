<template>
  <block
    title="今日行情"
    :hasMore="false"
  >
    <div class="daily-coin">
      <div class="inner">
        <div class="theader">
          <div class="col" @click="setOrder('name')">
            币种
            <br/>
            <span>市值</span>
          </div>
          <div class="col" @click="setOrder('price')">
            价格
            <br/>
            <span>交易量</span>
          </div>
          <div class="col" @click="setOrder('change_24h')">
            涨跌幅
          </div>
        </div>
        <div class="tbody">
          <div v-for="(item, i) in list" :key="i" class="row item" @click="$router.push('/coin/p/' + item.id)">
            <div class="col">
              {{item.name}}
              <br />
              <span>{{item.marketcap | currency('$')}}</span>
            </div>
            <div class="col">
              {{item.price | currency('$')}}
              <br />
              <span>{{item.volume_24h | currency('$')}}</span>
            </div>
            <div class="col">
              <div class="btnx" :class="item.change_24h >= 0 ? 'info': 'danger'">{{item.change_24h}}%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </block>
</template>
<script>
import { mapState } from 'vuex'
import _ from 'underscore'

export default {
  data() {
    return {
      orderBy: '',
      isDesc: true
    }
  },
  computed: {
    ...mapState({
      dailycoin: state => state.page.home.dailycoin
    }),
    list() {
      const isDesc = this.isDesc
      let res
      switch(this.orderBy) {
        case 'name':
          res = _.sortBy(this.dailycoin, i => i.name)
          break;
        case 'price':
          res = _.sortBy(this.dailycoin, i => i.price)
          break;
        case 'change_24h':
          res = _.sortBy(this.dailycoin, i => i.change_24h)
          break;
        case '':
        default:
          return [...this.dailycoin];
      }
      if(isDesc) {
        res.reverse()
      }

      return res

    }
  },
  methods:{
    setOrder(type) {
      if(this.orderBy == type) {
        this.isDesc = !this.isDesc
      } else {
        this.orderBy = type
        this.isDesc = true
      }
    }
  },
}
</script>
<style lang="less" scoped>
.daily-coin {
  width: 100%;
  border:1px solid rgba(241,242,246,1);
  border-radius:10px 10px 0px 0px;
  background: #fff;
}
.theader, .row {
  display: flex;
  .col {
    flex: 1;
    &:first-of-type {
      // padding-left: 15px;
      // flex: 2;
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 30px;
      // width: 110px;
      // text-align: right;
    }
    span {
      color:rgba(153,153,153,1);
      font-size: 12px;
    }
  }
}
.theader {
  background:rgba(241,242,246,1);
  border-radius:10px 10px 0px 0px;
  padding-right: 5px;
  .col {
    padding-top: 16px;
    padding-bottom: 15px;
    cursor: pointer;
  }
}
.row {
  transition: background 200ms;
  margin-left: 10px;
  cursor: pointer;
  &:hover {
    background: #f1f1f1;
  }
  .col {
    font-size: 14px;
    color:rgba(34,34,34,1);
    padding-top: 14px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(241,242,246,1);
  }
}
.tbody {
  max-height: 600px;
  overflow-y: auto;
  margin-right: 5px;
  &::-webkit-scrollbar{
    width: 6px;
    height: 16px;
    background-color: #FFF;
  }
  &::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #FFF;
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: rgba(241,242,246,1);
}
}

.btnx {
  width:110px;
  height:36px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  border-radius:5px;
  margin-left: 6px;
  // float: right;
  &.info {
    background: #13C2C2;
  }
  &.danger {
    background: #FF4D4F;
  }
}
</style>


