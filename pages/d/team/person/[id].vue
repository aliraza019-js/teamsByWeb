<template lang="pug">
v-progress-linear( indeterminate v-if="!response" :size="64")
CommonCardContainer(v-else :title="response && response.givenName" :tabRoutes="tabRoutes")
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" to="/team/persons")
      v-icon mdi-arrow-left
  //- template(#titleAtributes)
  //-   v-avatar(size="70" class="user-profile position-absolute")
  //-     v-img(v-if="response.profileImage && response.profileImage.url" :src="response.profileImage.url")
  //-     v-img(v-else src="response.profileImage.url")

  v-container
    NuxtPage
</template>
  
<script setup>
import { useColleaguesStore } from '~/stores/colleages'
const response = ref({});
const route = useRoute()
const { getColleaguesById } = useColleaguesStore()
onMounted(async () => {
  response.value = await getColleaguesById(route.params.id)
})
definePageMeta({
  activeRoute: 'person'
})

const tabRoutes = ref(
  [
    {
      label: "person.general",
      link: `/d/team/person/${route.params.id}/general`
    },
    {
      label: "person.skills",
      link: `/d/team/person/${route.params.id}/skills`
    },
    {
      label: "person.projects",
      link: `/d/team/person/${route.params.id}/projects`
    },
    {
      label: "person.trainings",
      link: `/d/team/person/${route.params.id}/trainings`
    },
    {
      label: "person.certifications",
      link: `/d/team/person/${route.params.id}/certifications`
    },
  ]
);

</script>

<style lang="scss" scoped>
.user-profile {
  right: 0;
  top: 12px;
}
</style>