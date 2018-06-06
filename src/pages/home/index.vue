<template>
  <layout>
    <topbar slot="topbar" />
    <banner slot="banner" />
    <block title="币市头条">
      <list />
    </block>
    <sidebar slot="sidebar">
      <hot-key />
      <hot-news />
      <daily-coin />
    </sidebar>
    <footerBar slot="footer" />
  </layout>
</template>

<script>
// import { mapActions } from 'vuex'
import banner from './banner'
import list from './list'

import HotKey from '@/components/aside/hotkey'
import HotNews from '@/components/aside/hotNews'
import dailyCoin from '@/components/aside/dailyCoin'

export default {
  name: "home",
  components: {
    banner,
    list,

    HotKey,
    HotNews,
    dailyCoin,

  },
  mounted() {
    this.$store.dispatch('getBanner')
    this.$store.dispatch('getHotkeys')
    this.$store.dispatch('getHotnews')
    this.$store.dispatch('getDailycoin')
  }
}
</script>
