<template lang="pug">
v-container(class="pa-0")
  v-row(style="height: 500px" class="overflow-auto scroll-container")
    v-col(cols="12" v-for="item , index in projects" :key="index")
      CommonCard(height="250px")
        template(#title)
          div(class="d-flex flex-column")
            p(class="text-secondary") {{item.org && item.org.name}}
            span(class="text-body-2") {{item.name}}
          div(v-if="item.status" class="d-flex px-2 rounded-lg align-center justify-space-around project-status")
            v-img(class="image_width" :src="item.status == 'done' ? done : timer")
            div(class="d-flex text-capitalize text-start text-body-2") {{item.status}}
        template(#body)
          v-container(class="px-0")
            v-row 
              v-col(cols="12" sm="3")
                v-img(class="rounded-lg" cover height="200" :src="item.profileImage ? item.profileImage.url : projectImage")
              v-col(cols="12" sm="9" class="d-flex justify-space-evenly flex-column")
                div(class="d-flex mb-3 justify-space-between")
                  p {{item.dateFrom}}
                  //- p(class="text-capitalize") {{item.category ? item.category : 'No Category Found'}}
                p(class="text-justify") {{item.desc ? item.desc : projectDesc}}
              v-col(cols="12" class="d-flex justify-space-between")
                div(class="d-flex align-center")
                  v-icon(style="color: primaryTextPale" size="large" icon="mdi-message-reply-text")
                  p(class="font-weight-bold ml-2") {{item.commentsCount}}
                div(class="d-flex align-center")
                  v-icon(style="color: primaryTextPale" size="large" icon="mdi-thumb-up-outline")
                  p(class="font-weight-bold ml-2") {{item.likesCount}} likes
</template>

<script setup>
import done from '@/assets/icons/project/done.svg';
import timer from '@/assets/icons/project/timer.svg';
import { useProjectStore } from "~/stores/projects";

definePageMeta({
  activeRoute: 'project'
});
const { getProjectsByOrgId } = useProjectStore()
const route = useRoute();
const projectDesc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
const projectImage = 'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
// const teams = ref([])


const projects = ref(
  [
    // {
    //   company: '27apps',
    //   projectTitle: 'TeamStage',
    //   category: 'tech',
    //   timeFrame: '01.01.2020 - Ongoing',
    //   icon: 'mdi-timer-sand',
    //   projectStatus: "Project Started"
    // },
    // {
    //   company: 'DFB',
    //   projectTitle: 'FUSSBALL.DE',
    //   category: 'Sports / Association',
    //   timeFrame: '01.01.2020 - 28.02.2022',
    //   icon: 'mdi-check-circle',
    //   projectStatus: "Project Finished"
    // }
  ]);

onMounted(async () => {
  const projectsData = await getProjectsByOrgId(route.params.id);
  projects.value = projectsData
  console.log('projects projects', projectsData)
})
</script>
<style lang="scss">
.project-status {
  height: 36px;
  width: 103px;
}

.image_width.v-img {
  .v-img__img {
    width: 12px !important;
  }
}
</style>
