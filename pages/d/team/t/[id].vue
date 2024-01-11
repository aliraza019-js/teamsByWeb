<template lang="pug">
CommonCardContainer(:title="response.name" :tabRoutes="tabRoutes" )
  template(#prependTitleAtributes)
    v-btn(icon class="ml-0" to="/team/teams")
      v-icon mdi-arrow-left
  template(#titleAtributes)
    v-avatar(size="70" class="user-profile position-absolute")
      v-img(v-if="response.profileImage && response.profileImage.url" :src="response.profileImage.url")
      v-img(v-else src="response.profileImage.url")
    
  v-container
    NuxtPage
</template>
    <script setup>
    import {useTeamsStore} from '~/stores/teams'
      const response = ref({});
      const route = useRoute()
      const {getTeamsById} = useTeamsStore()
      onMounted(async () => {
          response.value = await getTeamsById(route.params.id)

      })
    definePageMeta({
      activeRoute: 't'
    })

    // console.log(route.params.id);


    const tabRoutes = ref(
    [

      {
        label: "About",
        link: `/d/team/t/${route.params.id}/about`
      },
      {
        label: "Team",
        link: `/d/team/t/${route.params.id}/team`
      },
      {
        label: "Projects",
        link: `/d/team/t/${route.params.id}/projects`
      },
   
    ]
  );


    </script>
    
    <style lang="scss" scoped>

    .user-profile {
      right: 0;
      top: 12px;
    }
    </style>