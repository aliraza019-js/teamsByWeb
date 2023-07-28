
<template lang="pug">
v-row(class="overflow-auto h-100 scroll-container")
    v-col(cols="12")
      CommonPersonAboutGeneral(:about="response")
      CommonPersonContactInformation(:contactInfo="response")
      CommonPersonTeams(:teams="response")
</template>
  

<script setup>
import {useColleaguesStore} from '~/stores/colleages'
const response = ref({});

const route = useRoute()
const {getColleaguesById} = useColleaguesStore()


onMounted(async () => {
    response.value = await getColleaguesById(route.params.id)
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