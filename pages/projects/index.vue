<template lang="pug">
v-card(width="100%" flat)
  v-layout
    v-app-bar(flat color="transparent")
      v-app-bar-title Projects
      v-btn(icon)
        v-icon mdi-menu
    v-main
      v-container
        v-divider.mt--10
        v-card.mt-5(flat)
          v-tabs(v-model="tab" height="35px")
            v-tab(value="one") Projekte
            v-tab(value="two") Kunden
          v-card-text
            v-window(v-model="tab")
              v-window-item(value="one")
                CommonProjectList(v-for="project in projects" :project="project")

              v-window-item(value="two")
                CommonOrgList(v-for="org in orgs" :org="org")
</template>

<script setup>

// data
const tab = ref(null)
const projects = [
  { title: 'project 1', orgName: 'org name 1', status: 'initiation', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 2', orgName: 'org name 2', status: 'planning', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 3', orgName: 'org name 3', status: 'excecuting', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 4', orgName: 'org name 4', status: 'monitoring', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 5', orgName: 'org name 5', status: 'done', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' }
]
const orgs = [
  { name: 'org 1', place: 'place 1', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 2', place: 'place 2', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 3', place: 'place 3', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 4', place: 'place 4', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 5', place: 'place 5', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' }
]
</script>

<style lang="scss" scoped>

</style>