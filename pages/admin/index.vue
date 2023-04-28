<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(:title="$t('admin.admin')" flat color="transparent")
    .underline
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    CommonCard
      template(#title)
        span.text-secondary.d-flex.align-center Agreements
      template(#body)
        v-list
          v-list-item(:to="localePath('/admin/terms')")
            v-list-item-title Terms
            template(v-slot:append)
              v-icon mdi-arrow-right
    //- AdminTerms
</template>


<script setup>
// page
definePageMeta({
  activeRoute: 'admin'
})
// data
const localePath = useLocalePath();
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
