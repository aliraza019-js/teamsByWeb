<template lang="pug">
v-container
  v-row
    v-col(cols="12" sm="4" v-for="(project, index) in projects" :key="index")
      CommonProjectList(:project="project")
  v-btn(nuxt :to="localePath('/d/project/123')") detail page
</template>

<script setup>
// page
definePageMeta({
  activeRoute: 'project'
})

// data
const localePath = useLocalePath()

const projects = [
  { title: 'project 1', orgName: 'org name 1', status: 'initiation', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 2', orgName: 'org name 2', status: 'planning', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 3', orgName: 'org name 3', status: 'excecuting', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 4', orgName: 'org name 4', status: 'monitoring', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 5', orgName: 'org name 5', status: 'done', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' }
]
</script>