<template lang="pug">
v-card(width="100%" flat)
  v-toolbar(flat color="transparent")
    v-btn(icon class="ml-0" to="/project/projects")
      v-icon mdi-arrow-left
    v-toolbar-title Metrohm.com
    .underline
    v-btn(icon)
      v-icon mdi-menu
    template(v-slot:extension)
      v-tabs(v-for="tab, index in tabs" :key="index" class="my-5")
        v-btn(class="tab-btn ma-2" nuxt :to="localePath(tab.url)") {{ $t(tab.label) }}
  v-card-text
    NuxtPage
</template>

<script setup>
definePageMeta({
  activeRoute: 'project'
})

const route = useRoute();

const localePath = useLocalePath()

const tabs = ref(
  [
    {
      label: "projectdetails.general",
      url: '/d/project/123/general'
    },
    {
      label: "projectdetails.teams",
      url: '',
    },
    {
      label: "projectdetails.comment",
      url: ''
    }
  ]
);


const imgIcon = ref('https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925');
</script>

<style lang="scss" scoped>
.underline {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 56px;
  right: 0px;
  height: 1px;
  background-color: rgb(204, 204, 204);
}

.v-btn.tab-btn {
  border-radius: 24px;
  background-color: rgba(28, 28, 28, 0.03);
}

.v-btn--active.tab-btn {
  background-image: linear-gradient($secondary, $primary);
  color: #fff;
}
</style>