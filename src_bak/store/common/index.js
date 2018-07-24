

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
        link: '/coin/list',
        text: '行情',
      }],
      active: 0,
    },
    footer: [{
      link: '/',
      text: '关于我们',
    }, {
      link: '/',
      text: '服务条款',
    }, {
      link: '/',
      text: '联系我们',
    }, {
      link: '/',
      text: '投稿须知',
    }, {
      link: '/',
      text: '反馈意见',
    }],
    res: [{nomore: '呦呵，数据被您加载完了！',
    }],
  },
  mutations: {
    setNavbar(state, index) {
      state.navbar.active = index
    }
  }
}