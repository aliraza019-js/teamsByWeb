<template lang="pug">
v-row(class="overflow-auto h-100")
  v-col(cols="12" class="d-flex justify-end pb-0")
    //- v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Projekt hinzufügen
  v-col(cols="12")
    v-row(class="overflow-auto scroll-container" )
      v-col(v-if="canShowTeamsProjects" class="text-center" cols="12")
        v-img(width="75%" class="mx-auto my-10" style="opacity: 0.5; border-radius: 10px;" src="https://img.team-stage.com/placeholder/new/project1_VlnFvTXmD.webp")
      v-col(v-else cols="12" v-for="item , index in response" :key="index")
        CommonCard
          template(#title)
            div(class="d-flex flex-column")
              span(class="text-body-2") {{item.name}}
              p(class="text-secondary") {{item.projectName}}
            div(class="d-flex px-2 rounded-lg align-center justify-space-around project-status")
              v-icon(:icon="item.icon ? item.icon :'mdi-timer-sand' " class="mr-2" color="primaryTextPale")
              div(class="d-flex text-body-2") {{item.status? item.status:'working'}}
          template(#body)
            v-container(class="px-0")
              v-row
                v-col(cols="12" sm="3")
                  v-img(class="rounded-lg" cover height="200" v-if="item.projectProfileImg && item.projectProfileImg.url" :src="item.projectProfileImg.url" )
                  v-img(class="rounded-lg" cover height="200" v-else src="https://img.team-stage.com/placeholder/new/project1_VlnFvTXmD.webp")
                v-col(cols="12" sm="9" class="d-flex justify-space-evenly flex-column")
                  div(class="d-flex mb-3 justify-space-between")
                    p {{item.dateFrom + " - " + (item.ongoing ? 'Ongoing' : '' ) }}
                    p(class="text-capitalize") {{item.role}}
                  p(class="text-justify") {{ item.desc }}
                v-col(cols="12" class="d-flex justify-space-between")
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" icon="mdi-message-reply-text")
                    p(class="font-weight-bold ml-2 cursor-pointer" @click="navigateToProjectComments(item._id)") {{ item.commentsCount? item.commentsCount: '0'  }} comments
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" :icon="item.userLiked ? 'mdi-thumb-up':'mdi-thumb-up-outline'")
                    p(class="font-weight-bold ml-2" :class="{'cursor-pointer' : !item.userLiked}" @click="addProjectLike(item)") {{ item.likesCount ? item.likesCount+'': '0'}} likes
</template>
      
<script setup>
import { useTeamsStore } from '~/stores/teams'
const response = ref({});
const canShowTeamsProjects = ref(false)
const route = useRoute()
const localePath = useLocalePath()
const canLoadCommentsComponent = ref(false)
const { getProjectsByTeamId } = useTeamsStore()
onMounted(async () => {
  response.value = await getProjectsByTeamId(route.params.id)
  if (response.value?.length) {
    canShowTeamsProjects.value = false
  } else {
    canShowTeamsProjects.value = true
  }
  // console.log(response.value)
})

/**
 * Navigates to the project comments page.
 *
 * @param {number} id - The ID of the project.
 * @return {void} This function does not return anything.
 */
const navigateToProjectComments = (id) => {
  const router = useRouter();
  // console.log('id navigateToProjectComments', id)
  const projectId = id;
  const path = `/d/project/project/${projectId}/comment`;

  router.replace({ path });
};

/**
 * Adds a like to a project.
 *
 * @param {Object} project - The project object to add a like to.
 * @return {Promise<void>} - A promise that resolves when the like is added.
 */
const addProjectLike = async (project) => {
  const payload = {
    oid: route.params.id,
    pid: project._id,
    type: "project"
  }
  const resLikes = await myFetch('/v2/likes/toggle', { method: 'POST', body: { ...payload } })
  if (resLikes) {
    const ProjectData = response.value.find(item => {
      if (item._id === project._id) {
        item.userLiked = true,
          item.likesCount = item.likesCount + 1
      }
    })

  }
}
definePageMeta({
  activeRoute: 'team'
})

</script>
      
      
<style scoped lang="scss">
.cursor-pointer {
  cursor: pointer !important;
}
</style>