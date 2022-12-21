<template lang="pug">
v-layout.nav-card
  v-card(flat width="100%")
    v-card-text.d-flex.flex-column
      //- nav
      NuxtLink.d-flex.align-center.justify-start.nav-btn.rounded.pointer(v-for="item in props.navItems" :to="`/${$i18n.locale}${item.to}`")
        v-icon.mr-2 {{item.icon}}
        span {{item.titleRef}}

      NuxtLink(to="/de/settings") setting
</template>

<script setup>
const props = defineProps(['navItems'])
</script>

<style lang="scss" scoped>
.nav-card {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
  border: 1px solid rgba(226, 226, 226, 0.45);
  width: 100%;
}

.nav-btn {
  height: 60px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
}

.nav-btn:hover {
  background-color: #f1f1f1;
}
</style>