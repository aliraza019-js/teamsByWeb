<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(title="Account" color="transparent")
    v-btn(icon)
      v-icon mdi-menu
    template(v-slot:extension)
      .d-flex.flex-column.stretch.mt-7.pb-1
        v-divider
        //- .d-flex.flex-row.my-5
        v-tabs.my-5
          v-btn.mr-2(nuxt :to="localePath('/account/general')") General
          v-btn.mr-2(nuxt :to="localePath('/account/teams')") Teams
          v-btn.mr-2(nuxt :to="localePath('/account/skills')") Skills
          v-btn.mr-2(nuxt :to="localePath('/account/projects')") Projects
          v-btn.mr-2(nuxt :to="localePath('/account/trainings')") Trainings
          v-btn(nuxt :to="localePath('/account/certifications')") Certifications

  NuxtPage
</template>

<script setup>
const localePath = useLocalePath()
onMounted(() => {
  navigateTo(localePath('/account/general'))
})
</script>

<style lang="scss" scoped>
.v-btn {
  border-radius: 24px;
  background-color: rgba(28, 28, 28, 0.03);
}

.v-btn--active {
  background-image: linear-gradient($secondary, $primary);
  color: #fff;
}
</style>