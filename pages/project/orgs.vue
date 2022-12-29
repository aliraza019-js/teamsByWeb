<template lang="pug">
v-container
  CommonOrgList(v-for="org in orgs" :org="org")
  v-btn(nuxt :to="localePath('/d/project/org/123')" color="blue" variant="outlined")
    nuxt-icon.mr-2(name="feather/users")
    span detail page
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
})
const orgs = [
  { name: 'org 1', place: 'place 1', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 2', place: 'place 2', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 3', place: 'place 3', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 4', place: 'place 4', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 5', place: 'place 5', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' }
]
</script>