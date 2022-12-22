<template lang="pug">
v-app
  //- navi drawer
  v-navigation-drawer(app location="right" disable-resize-watcher v-model="drawer")
    v-card
      v-card-text
        h5 Navigation
  v-app-bar.app-bar(app flat theme="dark")
    v-container.d-flex.flex-row.align-center.justify-space-between
      //- logo
      v-img.pointer(src="/app/img/logo-white_sm.png" max-width="190px" contain)
      v-spacer
      v-btn(nuxt :to="switchLocalePath('en')") en
      v-btn(nuxt :to="switchLocalePath('de')") de
      v-btn(icon)
        v-icon mdi-web
      v-btn.d-flex.d-md-none(icon @click="drawer = !drawer")
        v-icon mdi-menu
  //- main
  v-main
    slot
  //- footer
  v-footer(app height="45px" color="#f1f1f1")
    v-container
      .d-flex.flex-row
        span.text-caption copyright &copy; TeamStage 2022
</template>