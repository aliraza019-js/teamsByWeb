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

    CommonCard
      template(#title)
        span.text-secondary.d-flex.align-center Master
      template(#body)
        v-list
          v-list-item(:to="localePath('/admin/langs')")
            v-list-item-title Supported Languages
            template(v-slot:append)
              v-icon mdi-arrow-right
          v-list-item(:to="localePath('/admin/industries')")
            v-list-item-title Industries
            template(v-slot:append)
              v-icon mdi-arrow-right
          v-list-item(:to="localePath('/admin/skill-cats')")
            v-list-item-title Categories
            template(v-slot:append)
              v-icon mdi-arrow-right
          v-list-item(:to="localePath('/admin/skills')")
            v-list-item-title Skills
            template(v-slot:append)
              v-icon mdi-arrow-right

    CommonCard
      template(#title)
        span.text-secondary.d-flex.align-center Corporate
      template(#body)
        v-list
          v-list-item(:to="localePath('/admin/help')")
            v-list-item-title Help
            template(v-slot:append)
              v-icon mdi-arrow-right
          v-list-item(:to="localePath('/admin/about')")
            v-list-item-title About TeamStage
            template(v-slot:append)
              v-icon mdi-arrow-right
          v-list-item(:to="localePath('/admin/privacy')")
            v-list-item-title Privacy
            template(v-slot:append)
              v-icon mdi-arrow-right

</template>


<script setup>
// imports
import { useUserStore } from '~/stores/user';
// page
definePageMeta({
  activeRoute: 'admin'
})
// data
const localePath = useLocalePath();
const { user, updateUser } = useUserStore()
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
