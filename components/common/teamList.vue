<template lang="pug">
v-layout  
  v-card(class='mt-4 mb-4 ml-4 mr-4 mx-auto d-flex' elevation="1" width="330" height="67")
   v-row(align="center" justify="center")  
    v-col( cols="4")  
      v-img(class="teamPic" src="../img/team_pic_default.png" alt="Avatar")
    v-col(align-self="center" class="mr-4") 
      div(class="title") {{ team.title }}
      div(class="name") {{ team.name  }}
</template>
  
  <script setup>
  const props = defineProps(['team'])
  console.log('team', props.team)
  </script>
  
  <style lang="scss" scoped> 
  .teamPic{
    max-width: 100px;
    max-height: 67px;
    border-radius: 1%;
  }

   @media only screen and (max-width: 600px) {
    .v-card{
    width: 90%;
    }
    .v-layout{
    width: 100%;
    }
  }   
  </style>