<template lang="pug">  
v-card(class="d-flex" width="100%" height="100%" elevation="3" style="align-items:center;")
  v-col(style="padding:0px; height:100%; max-width:100px; min-width:53px")   
      img(class="teamPic" src="./team_pic_default.png" alt="Avatar")
  v-col()
    v-row() 
      body-2 {{ team.title }}
    v-row()  
      h4 {{ team.name  }}
</template>
  
  <script setup>
  const props = defineProps(['team'])
  console.log('team', props.team)
  </script>
  
  <style lang="scss" scoped> 
  
  .teamPic{
    width: 90%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

   
     
  </style>