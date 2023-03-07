<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(title="Philipp Wicke" flat color="transparent")
    .underline
    v-btn(icon)
      v-icon mdi-menu
    template(v-slot:extension)
      v-slide-group(show-arrows="false")
        v-slide-group-item(v-slot="{ isSelected }")
          v-btn.ma-2.tab-btn(nuxt :to="localePath('/account/general')") {{ $t('account.general') }}
        v-slide-group-item(v-slot="{ isSelected }")
          v-btn.ma-2.tab-btn(nuxt :to="localePath('/account/teams')") {{ $t('account.teams') }}
        v-slide-group-item(v-slot="{ isSelected }")
          v-btn.ma-2.tab-btn(nuxt :to="localePath('/account/skills')") {{ $t('account.skills') }}
        v-slide-group-item(v-slot="{ isSelected }")
          v-btn.ma-2.tab-btn(nuxt :to="localePath('/account/projects')") {{ $t('account.projects') }}
        v-slide-group-item(v-slot="{ isSelected }")
          v-btn.ma-2.tab-btn(nuxt :to="localePath('/account/trainings')") {{ $t('account.trainings') }}
        v-slide-group-item(v-slot="{ isSelected }")
          v-btn.ma-2.tab-btn(nuxt :to="localePath('/account/certifications')") {{ $t('account.certifications') }}

  NuxtPage
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
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