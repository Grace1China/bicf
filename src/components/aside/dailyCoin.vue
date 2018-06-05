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
          <span>市场容量</span>
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
        <div v-for="i in 20" :key="i" class="row item">
          <div class="col">
            Bitcoin
            <br />
            <span>$1296.83亿</span>
          </div>
          <div class="col">
            $7610.88
            <br />
            <span>$64.83亿</span>
          </div>
          <div class="col">
            <div class="btn" :class="parseInt(Math.random() * 10) % 2 ? 'info': 'danger'">-4.34%</div>
          </div>
        </div>
      </div>
      <!-- <table cellspacing="0">
        <thead>
          <tr>
            <td>
              币种
              <br/><span>市场容量</span>
            </td>
            <td>
              价格
              <br/><span>交易量</span>
            </td>
            <td>涨跌幅</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 20">
            <td>
              Bitcoin
              <br />
              <span>$1296.83亿</span>
            </td>
            <td>
              $7610.88
              <br />
              <span>$64.83亿</span>
            </td>
            <td>
              <div class="btn" :class="parseInt(Math.random() * 10) % 2 ? 'info': 'danger'">-4.34%</div>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </block>
</template>
<script>
export default {
  
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
  max-height: 300px;
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


