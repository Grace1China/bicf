<template>
  <layout>
    <topbar slot="topbar" />
    <banner />
    <list />
    <sidebar slot="sidebar" />
    <footerBar slot="footer" />
  </layout>
</template>

<script>
import banner from './banner'
import list from './list'

export default {
  name: "home",
  components: {
    banner,
    list,
  }
}
</script>
