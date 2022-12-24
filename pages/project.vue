<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(:title="$t('projects.projects')" color="transparent")
    .underline
    v-btn(icon)
      v-icon mdi-menu
    template(v-slot:extension)
      v-tabs.my-5
        v-btn.tab-btn.mr-2(nuxt :to="localePath('/project/projects')") {{ $t('projects.projects') }}
        v-btn.tab-btn(nuxt :to="localePath('/project/orgs')") {{ $t('projects.clients') }}

  NuxtPage
</template>

<script setup>
const localePath = useLocalePath()
onMounted(() => {
  navigateTo(localePath('/project/projects'))
})
</script>

<style lang="scss" scoped>
.v-btn.tab-btn {
  border-radius: 24px;
  background-color: rgba(28, 28, 28, 0.03);
}

.v-btn--active.tab-btn {
  background-image: linear-gradient($secondary, $primary);
  color: #fff;
}

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