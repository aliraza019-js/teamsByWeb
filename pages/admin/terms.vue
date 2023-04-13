<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(title="Terms" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left
    AdminEditTerms(mode="add" size="default" @updated="updated()")

  v-card-text
    v-list
      v-list-item(v-for="(item, index) in terms")
        v-list-item-subtitle.d-flex.align-center
          v-icon.mr-2(size="x-small") mdi-arrow-right
          span {{ item.validFrom }}
        v-list-item-title {{ item.version}}
        template(v-slot:append)
          AdminEditTerms(mode="edit", :data-obj="item" @updated="updated()")
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
  const res = await myFetch('/terms', { method: 'GET' })
  terms.value = res
}

const updated = () => {
  getTerms()
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