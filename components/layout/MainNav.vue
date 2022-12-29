<template lang="pug">
div.nav-card
  v-card(flat)
    v-card-text.d-flex.flex-column
      //- nav
      NuxtLink.d-flex.align-center.justify-start.nav-btn.rounded-lg.pointer.mb-2(
        v-for="(item, index) in props.navItems" 
        :key="index" 
        :to="localePath(item.to)"
        :class="{ 'router-link-active': $route.meta.activeRoute == item.routerLink}") 
        icon-feather.mr-2(:icon="item.icon")
        //- v-icon.mr-2 {{item.icon}}
        span.text-subtitle-1 {{ $t(`navLinks.${item.titleRef}`) }} {{ $route.meta.activeRoute }}

      NuxtLink.nav-btn.signout-btn.d-flex.align-center.justify-start.mt-15.pointer(@click="signout()") 
        icon-feather.mr-2(icon="signout")
        //- v-icon.mr-2 mdi-logout-variant
        span.text-subtitle-1 {{ $t('navLinks.signout') }}
</template>

<script setup>
const props = defineProps(['navItems'])
const localePath = useLocalePath()
const i18n = useI18n()
const route = useRoute()

console.log('route', route)

const signout = async () => {
  try {
    await fbSignOut()
    navigateTo(localePath('/auth'))
  }
  catch (err) {
    console.log('err', err)
  }
}
</script>

<style lang="scss" scoped>
.nav-card {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
  border: 1px solid rgba(var(--v-theme-card-border), 0.45);
  width: 320px;
}

.nav-btn {
  height: 60px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  // color: rgb(28, 28, 28);
}

.signout-btn {
  border-radius: 50px;
  border: 1px solid $primary;
  color: $primary;
}

.nav-btn.router-link-active {
  background-image: linear-gradient($secondary, $primary);
  color: #fff;
}

.nav-btn:hover {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
}
</style>