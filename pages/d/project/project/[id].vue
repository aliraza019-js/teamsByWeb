<template lang="pug">
CommonCardContainer(:title="title" :tabRoutes="tabRoutes")
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" to="/project/projects")
      v-icon mdi-arrow-left
  template(#titleAtributes)
    v-btn(icon)
      v-icon mdi-menu

  v-card-text
    NuxtPage(:projectsData="projects" @refresh="fetchproject")
</template>

<script setup>
import { useProjectStore } from '~/stores/projects'

definePageMeta({
  activeRoute: 'project'
})

const route = useRoute();
const title = ref('test');
const projects = ref(null)
const { getProjectById } = useProjectStore()

const tabRoutes = ref(
  [
    {
      label: "projectdetails.general",
      link: `/d/project/project/${route.params.id}/general`
    },
    {
      label: "projectdetails.teams",
      link: `/d/project/project/${route.params.id}/team`,
    },
    {
      label: "projectdetails.comment",
      link: `/d/project/project/${route.params.id}/comment`,
    }
  ]
);

const fetchproject = async () => {
  projects.value = await getProjectById(route.params.id)

}

onMounted(async () => {
  await fetchproject()
});


const imgIcon = ref('https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925');

</script>
