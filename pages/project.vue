<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(title="Projects" color="transparent")
    v-btn(icon)
      v-icon mdi-menu
    template(v-slot:extension)
      .d-flex.flex-column.stretch
        v-divider
        .d-flex.flex-row.my-5
          v-btn.mr-2(nuxt :to="localePath('/project/projects')") Projekte
          v-btn(nuxt :to="localePath('/project/orgs')") Kunden

  NuxtPage
</template>

<script setup>
const localePath = useLocalePath()
onMounted(() => {
  navigateTo(localePath('/project/projects'))
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