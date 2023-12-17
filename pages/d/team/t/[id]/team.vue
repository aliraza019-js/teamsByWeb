<template lang="pug">
v-container
  v-row
    v-col(cols="12" sm=4 v-for="(team, index) in response" :key="index")
      v-card(class="d-flex flex-row rounded-l" width="100%" height="100%" elevation="3" style="align-items:center;" :to="localePath(`${user._id == team._id ? `/account/general`: `/d/team/person/${team._id}/general` }`)" )  
        v-col(class="imgCol")
          v-avatar(size=56)
            img(:src="team && team.pprofileImage && team.profileImage.url" class="profilePic") 
        v-col()
          v-row()
            div(class="text-caption") {{ team && team.title }}
          v-row()
            h4 {{ team && team.givenName }}
</template>
    
<script setup>
import { useUserStore } from "~/stores/user";
import { useTeamsStore } from '~/stores/teams'
const { user } = useUserStore()
const response = ref({});
const route = useRoute()
const { getTeamByTeamId } = useTeamsStore()
onMounted(async () => {
  response.value = await getTeamByTeamId(route.params.id)
  console.log(response.value)
})
// page
definePageMeta({
  activeRoute: 'team'
})

// data
const localePath = useLocalePath()




// const teams = [
//   { name: 'Amy Lee', title: 'Sales', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Frank Werner', title: 'Design', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Flo Eutert', title: 'Quality Management', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Anne Winkler', title: 'Development', imgUrl: '../img/team_pic_default.png' },
//   { name: 'Danny Crane', title: 'Testing', imgUrl: '../img/team_pic_default.png' }
// ]
</script>
    
<style lang="scss" scoped>
.profilePic {
  max-width: 60px;
  max-height: 60px;
}

.imgCol {
  max-width: 65px;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 2px;
  padding: 0;
}
</style>