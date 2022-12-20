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
      //_ logo
      v-img.pointer(src="/app/img/logo_sm.png" max-width="190px" contain)

      // navBar buttons
      .d-flex.flex-row
        v-btn(icon)
          v-icon mdi-web

        v-btn(icon @click="drawer = !drawer")
          v-icon mdi-menu



  //- main
  v-main
    //- main navigation
    slot

  //- footer
  v-footer
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