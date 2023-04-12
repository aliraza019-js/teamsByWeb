<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(title="Terms" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    AdminEditTerms(mode="add" size="default")

  v-card-text
    v-list
      v-list-item
        v-list-item-title Term 1
        template(v-slot:append)
          AdminEditTerms(mode="edit")
          //- v-btn(icon size="small" variant="plain")
            v-icon(size="small") mdi-pencil
</template>

<script setup>
// imports
// page definition
definePageMeta({
  activeRoute: 'admin'
})
// data
const terms = ref([])
// methods
const getTerms = async () => {
  console.log('trying to get terms')
}
// hooks
onMounted(() => {
  getTerms()
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