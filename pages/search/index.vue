<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(:title="$t('search.search')" flat color="transparent")
    .underline
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    p some content
</template>

<script setup>
definePageMeta({
  activeRoute: 'search'
})
</script>

<style lang="scss" scoped>
.underline {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 56px;
  right: 0px;
  height: 1px;
  background-color: rgb(204, 204, 204);
}
</style>