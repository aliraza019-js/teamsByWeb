<template lang="pug">  
v-card(class="d-flex rounded-l" width="100%" height="100%" elevation="3" style="align-items:center;" :to="localePath(`/d/team/t/${team._id}/about`)")
  v-col(class="imgCol")   
    img(v-if="team.profileImage && team.profileImage.url" :src="team.profileImage.url" class="teamPic")
    img(v-else src="https://picsum.photos/640/360" class="teamPic")
  v-col()
    v-row() 
      body-2 {{ team.title }}
    v-row()  
      h4 {{ team.name  }}
</template>
    
<script setup>
const props = defineProps(['team'])
const localePath = useLocalePath();
console.log('team', props.team)
</script>
    
<style lang="scss" scoped> 
    
  .teamPic{
    width: 90%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
    
  .imgCol{
    padding:0px; 
    height:100%; 
    max-width:100px; 
    min-width:53px
  }
       
</style>