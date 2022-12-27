<template lang="pug">
v-layout  
  v-card(class='mt-4 mb-4 ml-4 mr-4 mx-auto d-flex' elevation="1" width="330" height="67")
   v-row(align="center" justify="center")  
    v-col( cols="4")  
      v-img(class="teamPic" :src="team.imgUrl" alt="Avatar")
    v-col(align-self="center" class="mr-4") 
      div(class="title") {{ team.title }}
      div(class="name") {{ team.name  }}
</template>
  
  <script setup>
  const props = defineProps(['team'])
  console.log('team', props.team)
  </script>
  
  <style lang="scss" scoped> 
  @import url('https://fonts.googleapis.com/css?family=Nunito');
  .title {
    text-align: left;
    font: normal normal normal 12px/16px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
  }
  .name {
    text-align: left;
    font: normal normal bold 16px/22px Nunito;
    letter-spacing: 0px;
    color: #1C1C1C;
    opacity: 1;
  }
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