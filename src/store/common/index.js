

export default {
  state: {
    logo: {
      url: 'http://via.placeholder.com/112x36?text=logo'
    },
    navbar: {
      list: [{
        link: '/',
        text: '首页',
      }, {
        link: '/post/1',
        text: '详情页',
      }],
      active: 0,
    },
    footer: [{
      link: '/post/1',
      text: '关于我们',
    }, {
      link: '/post/2',
      text: '服务条款',
    }, {
      link: '/post/1',
      text: '联系我们',
    }, {
      link: '/post/1',
      text: '投稿须知',
    }, {
      link: '/post/1',
      text: '反馈意见',
    }]
  }
}