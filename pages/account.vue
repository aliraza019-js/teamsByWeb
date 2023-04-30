<template lang="pug">
CommonCardContainer(:title="username" :tabRoutes="tabRoutes")
  template(#titleAtributes)
    v-avatar(size="70" class="user-profile position-absolute")
      v-img(:src="user.profileImage.url + '?tr=h-50,w-50,fo-face'")
  NuxtPage
</template>

<script setup>
// imports
import { useUserStore } from '~/stores/user';
// page
definePageMeta({
  activeRoute: 'account'
});
// data
const localePath = useLocalePath();
const { user } = useUserStore();
const username = computed(() => `${user.givenName} ${user.familyName}`)
const tabRoutes = ref(
  [
    {
      label: 'account.general',
      link: '/account/general'
    },
    {
      label: 'account.teams',
      link: '/account/teams'
    },
    {
      label: 'account.skills',
      link: '/account/skills'
    },
    {
      label: 'account.projects',
      link: '/account/projects'
    },
    {
      label: 'account.trainings',
      link: '/account/trainings'
    },
    {
      label: 'account.certifications',
      link: '/account/certifications'
    }
  ]
);
</script>

<style lang="scss" scoped>

.user-profile {
  right: 0;
  top: 12px;
}
</style>