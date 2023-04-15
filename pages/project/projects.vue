<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(project, index) in projects" :key="index")
      CommonProjectList(:project="project")
  v-btn(nuxt :to="localePath('/d/project/123')") detail page
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
})
const projects = [
  { title: 'Metrohm AG', orgName: 'metrohm.com', status: 'initiation', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'inTime GmbH', orgName: 'Finanzplanung', status: 'planning', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'Spar ICS', orgName: 'Intranet', status: 'excecuting', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'Spar ICS', orgName: 'DAM', status: 'monitoring', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'Volkswagen AG', orgName: 'Marketing Platform', status: 'done', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'Deutsche Bank', orgName: 'What so ever', status: 'excecuting', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'DFB', orgName: 'Fussball.de', status: 'excecuting', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'VHV', orgName: 'Doc Management', status: 'excecuting', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'BMW', orgName: 'Car documentation', status: 'excecuting', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
];
</script>