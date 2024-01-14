<template lang="pug">
v-row(class="overflow-auto h-100")
  //- v-col(cols="12" class="d-flex justify-end pb-0")
  //-   v-btn(variant="text" prepend-icon="mdi-plus" density="compact" )  {{$t('certifications.addCertification')}}
  v-col(cols="12")
    v-row(class="overflow-auto scroll-container" )
      v-col(v-if="canShowCert" cols="12" v-for="item in response.certs" :key="item._id")
        CommonCard
          template(#title)
            div(class="d-flex flex-column w-100")
              div(class="text-body-2") {{$t('certifications.certificationAssociation')}}
              div(class="d-flex justify-space-between align-center w-100")
                p(class="text-secondary") {{item.title}}
                //- div(class="d-flex")
                //-   v-btn(icon size="small" variant="plain"  )
                //-     v-icon(icon="mdi-pencil" color="primaryTextPale" )
                //-   v-btn(icon size="small" variant="plain"  )
                //-     v-icon(icon="mdi-delete" color="red" )
          template(#body)
            v-container(class="px-0")
              v-row
                v-col(cols="12" sm="3")
                  v-sheet(border height="170" rounded="lg" class="d-flex align-center justify-center")
                    div(class="d-flex justify-center align-center w-100 h-100")
                      v-img(src="/img/badgecertificate.png" eager width="100%" height="100%")
                v-col(cols="12" sm="9")
                  p(class="text-justify") {{item.desc}}
                  div(class="d-flex flex-wrap pt-4 align-center")
                    div(class="d-flex align-center mb-3")
                      v-icon(icon="mdi-clock-check" color="grey-darken-1")
                      p(class="pl-2 text-subtitle-2") {{item.date}} - {{item.validUntil ? item.validUntil : '∞'}}
                    div(class="d-flex align-center pl-3 mb-3")
                      v-icon(icon="mdi-account-circle" color="grey-darken-1")
                      p(class="pl-2 text-subtitle-2") Product owner
                v-col(cols="12" class="d-flex justify-space-between")
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" icon="mdi-message-reply-text")
                    p(class="font-weight-bold ml-2") 24 comments
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" icon="mdi-thumb-up-outline")
                    p(class="font-weight-bold ml-2") 1.2K likes
      v-col(v-else cols="12")
        v-img(width="75%" class="mx-auto my-10" style="opacity: 0.5; border-radius: 10px;" src="https://img.team-stage.com/placeholder/new/cert1_Xr44YXhuo.png" alt="Your Image Alt Text")
</template>
  
<script setup>

import { useColleaguesStore } from '~/stores/colleages'
const response = ref({});
const canShowCert = ref(true)

const route = useRoute()
const { getColleaguesById } = useColleaguesStore()


onMounted(async () => {
  response.value = await getColleaguesById(route.params.id)
  if (response.value.certs?.length) {
    canShowCert.value = true
  } else {
    canShowCert.value = false
  }
})

definePageMeta({
  activeRoute: 'team'
})
</script>
   
   
   