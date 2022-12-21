<template lang="pug">
v-app
  //- navi drawer
  v-navigation-drawer(app location="right" disable-resize-watcher v-model="drawer")
    v-card
      v-card-text
        h5 Navigation

  //- app bar
  v-app-bar.app-bar(app flat theme="dark")
    v-container.d-flex.flex-row.align-center.justify-space-between
      //- logo
      v-img.pointer(src="/app/img/logo-white_sm.png" max-width="190px" contain)

      //- navBar buttons
      .d-flex.flex-row
        v-btn(icon)
          v-icon mdi-web

        v-btn.d-flex.d-md-none(icon @click="drawer = !drawer")
          v-icon mdi-menu



  v-main
    v-container
      .d-flex.flex-row
        div(style="width:350px")
          LayoutMainNav(:navItems="navItems")
        slot

  //- footer
  v-footer(app height="45px" color="#f1f1f1")
    v-container
      .d-flex.flex-row
        span copyright &copy; TeamStage 2022
  
</template>

<script setup>
// data
const drawer = ref(false)
const navItems = [
  { titleRef: 'home', icon: 'mdi-home', to: '/' },
  { titleRef: 'teams', icon: 'mdi-home', to: '/team' },
  { titleRef: 'projects', icon: 'mdi-home', to: '/projects' },
  { titleRef: 'search', icon: 'mdi-home', to: '/search' },
  { titleRef: 'account', icon: 'mdi-home', to: '/account' },
  { titleRef: 'settings', icon: 'mdi-home', to: '/settings' }
]
</script>

<style lang="scss" scoped>
.app-bar {
  background-image: linear-gradient($secondary, $primary);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
</style>