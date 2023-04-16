<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(org, index) in orgs" :key="index")
      CommonOrgList(:org="org")
  v-btn(nuxt :to="localePath('/d/project/org/123')" color="blue" variant="outlined")
    nuxt-icon.mr-2(name="feather/users")
    span detail page
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
})
const orgs = ref([
  {
    name: 'Metrohm AG',
    city: 'Herisau',
    country: "Schweiz",
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925'
  },
  {
    name: 'inTime GmbH',
    city: 'Hannover',
    country: "Deutschland",
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925'
  },
  {
    name: 'Spar ICS',
    city: 'Salzburg',
    country: "Austria",
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925'
  },
  {
    name: 'Volkswagen AG',
    city: 'Wolfsburg',
    country: "Germany",
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925'
  },
  {
    name: 'Deutsche Bank',
    city: 'Frankfurt',
    country: "Germany",
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925'
  },
  {
    name: 'DFB',
    city: 'Frankfurt',
    country: "Germany",
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925'
  },
  {
    name: 'Hannover 96',
    city: 'Hannover',
    country: "Germany",
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925'
  },
]);
</script>