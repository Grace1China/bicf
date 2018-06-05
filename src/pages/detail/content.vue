<template>
  <div class="content-body">
    <div class="inner">
      <div class="title">
        <h1>《CryptoKitties》被诉盗窃商业机密、违反保密协议，与库里的合作受影响</h1>
      </div>
      <div class="meta">
        <div class="meta-item" v-if="location">
          <icon type="location" />
          {{location}}
        </div>
        <div class="meta-item" v-if="time">
          <icon type="clock" />
          {{time}}
        </div>
        <div class="meta-item" v-if="tags.length">
          <icon type="tag" />
          {{tags}}
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="expect">
        <span>
          摘要：
        </span>
        {{expect}}
      </div>
      <div class="post-body" v-html="content"></div>
    </div>
    <div class="read-more">
      显示全部
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    location: "人民网",
    time: "2018-05-23 13:58:23",
    tags: ["EOS", "主网", "上线"],
    expect: '然而在5月7日，Axiom Zen却对外公布了库里品牌的加密猫产品；Tradestar表示，Axiom Zen从未告知Tradestar他们正在与库里合作。游戏葡萄5月28日消息，据GamesBeat报道，区块链游戏《CryptoKitties》（国内媒体译作《加密猫》或《以太猫》）开发商Axion Zen在前不久遭到起诉，被指控盗窃商业秘密，并违反了一项与他们和NBA金州勇士队球星斯蒂芬·库里合作相关的保密协议。',
    content: `
    <p>据Feinblatt透露，在今年2月份，Tradestar与Axiom Zen通过电子邮件洽谈合作，其间向后者披露了斯蒂芬·库里的数字收藏交易卡在内的许多产品机密细节。Feinblatt称双方签署了一份保密协议，但Axiom Zen最近宣布，他们创造了自己的库里收藏品。Axiom Zen发言人在一份声明中说：“对我们违反保密协议的指控是错误的，我们相信这起诉讼没有任何价值。Axiom Zen是一家有道德和责任感的公司，重视数据的所有权和对数据的保护。”</p>
    <p>值得注意的是，在宣布推出基于库里的可收藏资产后，Axiom Zen却移除了相关产品。</p>
    <p>这家公司表示：“我们有理由相信，斯蒂芬（库里）不像我们想象中那样参与这次合作。 </p>
    <p>在我们确信他是一位积极的参与者之前，我们决定暂停这次活动。”</p>
    <p>根据媒体早些时候的报道，Axiom Zen宣布将与创作和分销品牌数字资产的AppMoji合作，推出以史蒂芬·库里作为第一个明星品牌的加密猫产品。</p>
    <p>《CryptoKitties》是以太坊上的第一个爆款区块链游戏，去年11月份上架后迅速风靡全球。今年3月份，《CryptoKitties》开发商Axiom Zen游戏工作室独立成为一家公司，并获得了1200万美元的融资。</p>
    <p>硅谷风投公司Andreessen Horowitz和Union Square Ventures是该轮融资的领投方。截止到今年3月份，《CryptoKitties》吸引了超过150万用户，用户总交易量达到4000万次以上，游戏中最受欢迎的虚拟猫售价相当于超过20万美元的实体货币。根据诉讼中披露的信息显示，Tradestar与Axiom Zen运营团队的Sam Gharegozlou签署了一份保密协议。Tradestar被告知在未来几个月，Axiom Zen将不会与他们合作。</p>
    <p>据Feinblatt透露，在今年2月份，Tradestar与Axiom Zen通过电子邮件洽谈合作，其间向后者披露了斯蒂芬·库里的数字收藏交易卡在内的许多产品机密细节。Feinblatt称双方签署了一份保密协议，但Axiom Zen最近宣布，他们创造了自己的库里收藏品。Axiom Zen发言人在一份声明中说：“对我们违反保密协议的指控是错误的，我们相信这起诉讼没有任何价值。Axiom Zen是一家有道德和责任感的公司，重视数据的所有权和对数据的保护。”</p>
    <p>值得注意的是，在宣布推出基于库里的可收藏资产后，Axiom Zen却移除了相关产品。</p>
    <p>这家公司表示：“我们有理由相信，斯蒂芬（库里）不像我们想象中那样参与这次合作。 </p>
    <p>在我们确信他是一位积极的参与者之前，我们决定暂停这次活动。”</p>
    <p>根据媒体早些时候的报道，Axiom Zen宣布将与创作和分销品牌数字资产的AppMoji合作，推出以史蒂芬·库里作为第一个明星品牌的加密猫产品。</p>
    <p>《CryptoKitties》是以太坊上的第一个爆款区块链游戏，去年11月份上架后迅速风靡全球。今年3月份，《CryptoKitties》开发商Axiom Zen游戏工作室独立成为一家公司，并获得了1200万美元的融资。</p>
    <p>硅谷风投公司Andreessen Horowitz和Union Square Ventures是该轮融资的领投方。截止到今年3月份，《CryptoKitties》吸引了超过150万用户，用户总交易量达到4000万次以上，游戏中最受欢迎的虚拟猫售价相当于超过20万美元的实体货币。根据诉讼中披露的信息显示，Tradestar与Axiom Zen运营团队的Sam Gharegozlou签署了一份保密协议。Tradestar被告知在未来几个月，Axiom Zen将不会与他们合作。</p>
    `
  })
};
</script>
<style lang="less" scoped>
.content-body {
  border-radius: 10px;
  border: 1px solid rgba(230, 230, 230, 1);
  .inner {
    padding: 50px 30px 0;
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
.read-more {
  color:rgba(66,100,251,1);
  line-height: 60px;
  text-align: center;
  cursor: pointer;
}
</style>

