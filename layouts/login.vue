<template lang="pug">
v-app
  v-app-bar.app-bar(app flat)
    v-container.d-flex.flex-row.align-center.justify-space-between
      //- logo
      v-img.pointer(src="/app/img/logo_sm.png" max-width="190px" contain)
      v-spacer
      v-btn(nuxt :to="switchLocalePath($i18n.locale == 'de' ? 'en' : 'de')")
        v-icon.mr-2 mdi-web
        span {{ $i18n.locale == 'de' ? 'EN' : 'DE' }}
  //- main
  v-main
    slot
  //- footer
  v-footer(app height="45px" color="#f1f1f1")
    v-container
      .d-flex.flex-row
        span.text-caption copyright &copy; TeamStage {{new Date().getFullYear()}}
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-bar {
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
}
</style>