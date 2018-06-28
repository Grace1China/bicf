<template>
  <layout fullwidth>
    <topbar slot="topbar" />
    <div class="coin-table">
      <div class="inner">
        <div class="theader">
          <div class="col" @click="setOrder('rank')">
            <div class="btn primary">
              #
            </div>
          </div>
          <div class="col" @click="setOrder('name')">
            <div class="btn primary">
              币种
            </div>
          </div>
          <div class="col" @click="setOrder('price')">
            <div class="btn primary">
              市值
            </div>
          </div>
          <div class="col" @click="setOrder('price')">
            <div class="btn primary">
              价格
            </div>
          </div>
          <div class="col" @click="setOrder('price')">
            <div class="btn primary">
              成交量(24h)
            </div>
          </div>
          <div class="col" @click="setOrder('change_24h')">
            <div class="btn primary">
              涨跌幅(24h)
            </div>
          </div>
          <div class="col" @click="setOrder('change_24h')">
            <div class="btn primary">
              近期走势(7d)
            </div>
          </div>
        </div>
        <div class="tbody">
          <div v-for="(i) in 100" :key="i" class="row item" @click="$router.push({path:'/coin/p/1'})">
            <div class="col">
              {{i}}
            </div>
            <div class="col">
              <img src="http://via.placeholder.com/350?text=B" class="coin-logo" width="20" height="20">比特币
            </div>
            <div class="col">
              $10000000000.00
            </div>
            <div class="col">
              $7000.00
            </div>
            <div class="col">
              $7000.00
            </div>
            <div class="col">
              5.56%
            </div>
            <div class="col">
              走势图表
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerBar slot="footer" />
  </layout>
</template>
<script>
export default {
  
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
    cursor: pointer;
  }
}
.row {
  .col {
    .coin-logo {
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 15px;
    }
    &:first-of-type {
      background: #F6F6F6;
    }
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


