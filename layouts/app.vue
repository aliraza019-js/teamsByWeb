<template lang="pug">
v-app
  //- navi drawer
  v-navigation-drawer(app location="right" disable-resize-watcher v-model="drawer")
    v-card
      v-card-text
        h5 Navigation

  //- app bar
  v-app-bar(app flat)
    v-container.d-flex.flex-row.align-center.justify-space-between
      //- logo
      v-img.pointer(src="/app/img/logo_sm.png" max-width="190px" contain)

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
          LayoutMainNav
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
</script>

<style lang="scss" scoped>

</style>