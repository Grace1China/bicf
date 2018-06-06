import Vue from 'vue'

import Aside from './aside'
import AsideBlock from './aside/block'
import Topbar from './topbar'
import Footer from './footer'
import Layout from './layout'
import Icon from './Icon'

Vue.component('sidebar', Aside)
Vue.component('block', AsideBlock)
Vue.component('topbar', Topbar)
Vue.component('footerBar', Footer)
Vue.component('layout', Layout)
Vue.component('icon', Icon)
