<template lang="pug">
v-card(height="65px" rounded="lg" :to="localePath(`/d/project/org/${org._id}/general`)")
  div(class="d-flex w-100 justify-space-between align-center px-4 h-100")
    div(class="d-flex align-start flex-column") 
      div(class="d-flex")
        p(class="place") Herisau | Schweiz
      p(class="orgName") {{org.name}}
    div(class="border rounded-lg pa-2")
      v-img(src="https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925" width="30")
</template>

<script setup>
defineProps(['org']);
const localePath = useLocalePath();
</script>
