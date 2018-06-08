<template>
  <block
    title="今日行情"
    :hasMore="false"
  >
    <div class="daily-coin">
      <div class="theader">
        <div class="col">
          币种
          <br/>
          <span>市值</span>
        </div>
        <div class="col">
          价格
          <br/>
          <span>交易量</span>
        </div>
        <div class="col">
          涨跌幅
        </div>
      </div>
      <div class="tbody">
        <div v-for="(item, i) in list" :key="i" class="row item">
          <div class="col">
            {{item.name}}
            <br />
            <span>${{item.marketcap}}</span>
          </div>
          <div class="col">
            ${{item.price}}
            <br />
            <span>${{item.volume_24h}}</span>
          </div>
          <div class="col">
            <div class="btn" :class="item.change_24h >= 0 ? 'info': 'danger'">{{item.change_24h}}%</div>
          </div>
        </div>
      </div>
    </div>
  </block>
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      list: state => state.page.home.dailycoin
    })
  },
}
</script>
<style lang="less" scoped>
.daily-coin {
  width: 100%;
  border:1px solid rgba(241,242,246,1);
  border-radius:10px 10px 0px 0px;
}
.theader, .row {
  display: flex;
  .col {
    flex: 1;
    &:first-of-type {
      padding-left: 30px;
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
  .col {
    padding-top: 16px;
    padding-bottom: 15px;
  }
}
.row {
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

.btn {
  width:110px;
  height:36px;
  line-height: 36px;
  text-align: center;
  color: #fff;
  border-radius:5px;
  &.info {
    background: #13C2C2;
  }
  &.danger {
    background: #FF4D4F;
  }
}
</style>


