<template>
  <div class="layout">
    <div class="topbar">
      <slot name="topbar" />
    </div>
    <div class="main">
      <div class="inner">
        <slot />
      </div>
      <div class="sidebar">
        <slot name="sidebar" />
      </div>
    </div>
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>
