<template lang="pug">
v-card(width="100%" flat)
  v-layout
    v-app-bar(flat color="transparent")
      v-app-bar-title Home
      v-btn(icon)
        v-icon mdi-menu
    v-main
      v-container
        v-divider.mt--10
        v-card.mt-5(flat)
          p some content
</template>

<script setup>
definePageMeta({
  middleware: ['guard']
})

</script>

<style lang="scss" scoped>

</style>
