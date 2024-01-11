<template lang="pug">  
v-card(class="d-flex rounded-l" width="100%" height="90%" elevation="3" style="align-items:center;" :to="localePath(`/d/team/t/${team._id}/about`)")
  v-col(class="imgCol")   
    img(v-if="team.profileImage && team.profileImage.url" :src="transformImageURL(team.profileImage.url)" class="teamPic")
    img(v-else src="https://img.team-stage.com/placeholder/new/tr:ar-4-3,w-400/team1_oVhR_PZdI.webp" class="teamPic")
  v-col()
    v-row() 
      body-2 {{ team.title }}
    v-row()  
      h4 {{ team.name  }}
</template>
    
<script setup>
const props = defineProps(['team'])
const localePath = useLocalePath();

const transformImageURL = (url) => {
  const baseTransform = "tr:ar-0-1,w-1200";
  const [baseUrl, restOfUrl] = url.split('/teamstage/');
  const transformedURL = `${baseUrl}/teamstage/${baseTransform}/${restOfUrl}`;
  return transformedURL

};
// console.log('team', props.team)
</script>
    
<style lang="scss" scoped> .teamPic {
   width: 70px;
   height: 50px;
 }

 .imgCol {
   padding: 0px;
   height: 100%;
   max-width: 100px;
   min-width: 53px
 }
</style>