<template lang="pug">
CommonCardContainer(:title="title" :tabRoutes="tabRoutes")
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" to="/project/orgs")
      v-icon mdi-arrow-left
  template(#titleAtributes)
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    NuxtPage
</template>

<script setup>
import {orgs} from "@/@fakeDb/database.json";

definePageMeta({
  activeRoute: 'project'
})

const route = useRoute();
const title = ref()


const tabRoutes = ref(
  [
    {
      label: "projectdetails.general",
      link: `/d/project/org/${route.params.id}/general`
    },
    {
      label: "projectdetails.teams",
      link: `/d/project/org/${route.params.id}/team`,
    },
    {
      label: "projectdetails.projects",
      link: `/d/project/org/${route.params.id}/project`,
    }
  ]
);


onMounted(() => {
  let getData = orgs.find(item => item.id == route.params.id)
  title.value = getData.name
});
</script>
