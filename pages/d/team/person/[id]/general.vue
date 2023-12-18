
<template lang="pug">
v-row(class="overflow-auto h-100 scroll-container")
  v-col(cols="12")
    CommonPersonAboutGeneral(:about="response")
    CommonPersonContactInformation(:contactInfo="response")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{ $t('projects.clients.Social') }}
        div(class="d-flex align-center")
          //- v-btn(icon size="small" variant="plain" color="secondary" @click="editSocial = true")
          //-   v-icon(color="") mdi-plus
      template(#body)
        CommonSocialInformation(:data="response")

    CommonPersonTeams(:teams="teams")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{ $t('projects.clients.location') }}
        div(class="d-flex align-center")
          //- v-btn(icon size="small" variant="plain" color="secondary" @click="openLocationDialog")
          //-   v-icon(color="") mdi-plus
      template(#body)
        CommonGoogleMaps(v-if="placeData" :placeData="placeData" :apiKey="apikey")
</template>
  

<script setup>
import { useColleaguesStore } from '~/stores/colleages'
const response = ref({});
const teams = ref({})
const apikey = 'AIzaSyDnyubLPHsExGa9cPVshPJMhBQRjl0BIZs';
const placeData = ref();

// const { getTeamByTeamId } = useTeamsStore()

const route = useRoute()
const { getColleaguesById } = useColleaguesStore()


onMounted(async () => {
  response.value = await getColleaguesById(route.params.id)
  // console.log('teams.value in colleagues', teams.value)
  placeData.value = {
    location: {
      lat: parseInt(response.value.location.latitude),
      lng: parseInt(response.value.location.longitude),
      location_type: "ROOFTOP"
    }
  }
})

definePageMeta({
  activeRoute: 'team'
})



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
</style>