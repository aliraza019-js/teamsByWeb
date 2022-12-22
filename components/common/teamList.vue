<template lang="pug">
v-layout
  v-card(class='mt-4 mb-4 ml-4 mr-4 elevation-2 outlined mx-auto d-flex align-center' width="330" height="72")
   v-row()  
    v-col(class='ml-2' cols="3")  
      v-img(src="../img/profile_pic_default.png" alt="Avatar" max-height="100" max-width="72")
    v-col(align-self="left"  ) 
      div(class="title" ) {{ team.title }}
      div(class="name") {{ team.name  }}
</template>
  
  <script setup>
  const props = defineProps(['team'])
  console.log('team', props.team)
  </script>
  
  <style lang="scss" scoped>    
  </style>