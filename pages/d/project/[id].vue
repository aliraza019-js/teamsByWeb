<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(:title="'project detail'" flat color="transparent")
    .underline
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    p.text-body-1 some content
</template>

<script setup>
const route = useRoute()
console.log(route.params.id)
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