<template lang="pug">
v-container
  v-card(class="rounded-lg")
    v-row(class="rounded-xl" justify="space-between") 
      v-col(cols="12" sm="4" class="d-flex rounded-xl")
        div(class="d-flex w-100 align-center justify-space-between rounded-lg") 
          div(class="rounded-s-lg company" :style="{height: '65px', width: '47%', backgroundImage: `url(${companyImg})`}")
          p(class="font-weight-bold mx-2") Computacenter
          v-icon(icon="mdi-plus")
      v-col(cols="12" sm="4" class="d-flex align-center justify-end")
        div(class="d-flex w-100 pr-2 align-center justify-space-between rounded-lg")
          v-icon(icon="mdi-web")
          p(class="font-weight-bold mx-2") computacenter.com
          v-icon(icon="mdi-arrow-right")
  v-row(class="mt-3")
    v-col(cols="12" sm="4" v-for="item ,index in teams" :key="index") 
      v-card(height="65px" rounded="lg")
        div(class="d-flex h-100 align-center")
          div(class="rounded-s-lg company h-100" :style="{ width: '41%', backgroundImage: `url(${item.img})`}")
          p(class="font-weight-bold mx-2") {{item.text}}
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

const companyImg = 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80';

const teams = ref(
  [
    {
      img: 'https://images.unsplash.com/photo-1588064643233-49210b27b82e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3BlY2lhbGlzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
      text: 'AEM Specialists'
    },
    {
      img: 'https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      text: 'App-Development'
    },
    {
      img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      text: 'KI-Service'
    }
  ]
);
</script>

<style lang="scss" scoped>
.company {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>