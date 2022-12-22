<template lang="pug">
v-layout
  v-card(class='mt-4 mb-4 ml-4 mr-4 elevation-1 outlined mx-auto d-flex' width="330" height="72")
   v-row(align="center" justify="center")  
    v-col(class='ml-2' cols="3")  
      v-img(src="../img/team_pic_default.png" alt="Avatar" max-width="100" max-height="72" style="border-radius: 10%;")
    v-col(align="left"  ) 
      div(class="title" ) {{ team.title }}
      div(class="name") {{ team.name  }}
</template>
  
  <script setup>
  const props = defineProps(['team'])
  console.log('team', props.team)
  </script>
  
  <style lang="scss" scoped> 
   @media only screen and (max-width: 600px) {
    .v-card{
    width: 90%;
    }
    .v-layout{
    width: 100%;
    }
  }   
  </style>