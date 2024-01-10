<template lang="pug">
div
  ClientOnly
    v-row(class="overflow-auto h-100")
      //- v-col(cols="12" class="d-flex justify-end pb-0")
      //-   v-btn(variant="text" prepend-icon="mdi-plus" density="compact") {{$t('trainings.add')}} //
      v-col(v-if="!response.trainings?.length" class="text-center" cols="12")
        v-img(width="75%" class="mx-auto my-10" style="opacity: 0.5; border-radius: 10px;" src="https://img.team-stage.com/placeholder/new/training1_dNsMAcdoo.png")
      v-col(v-else cols="12")
        v-row(class="overflow-auto scroll-container" )
          v-col(cols="12" v-for="(item , index) in response.trainings" :key="index")
            CommonCard
              template(#title)
                div(class="d-flex flex-column w-100")
                  div(class="d-flex justify-space-between align-center w-100")
                    div(class="text-body-2") {{ formatDateRange(item.dateTo, item.dateFrom) }}
                    //- div(class="d-flex")
                    //-   v-btn(icon size="small" variant="plain")
                    //-     v-icon(icon="mdi-pencil" color="primaryTextPale" )
                    //-   v-btn(icon size="small" variant="plain" )
                    //-     v-icon(icon="mdi-delete" color="red" )
                  p(class="text-secondary") {{item.title}}
              template(#body)
                v-container(class="px-0")
                  v-row
                    v-col(cols="12" sm="3")
                      v-sheet(border height="170" rounded="lg" class="d-flex align-center justify-center")
                        div(class="d-flex justify-center align-center")
                          v-icon(icon="mdi-certificate" color="grey-darken-3" size="90")
                    v-col(cols="12" sm="9")
                      p(class="text-justify" style="min-height: 120px") {{item.desc}}
                      div(class="d-flex justify-space-between flex-wrap pt-4 align-center")
                        div(class="d-flex align-center mb-3")
                          v-icon(icon="mdi-domain" color="grey-darken-1")
                          p(class="pl-2 text-subtitle-2") {{item.provider}}
                        div(class="d-flex align-center mb-3")
                          v-icon(icon="mdi-map-marker-radius" color="grey-darken-1")
                          p(class="pl-2 text-subtitle-2") {{item.place}}
                        div(class="d-flex align-center mb-3")
                          v-icon(icon="mdi-certificate" color="grey-darken-1")
                          p(class="pl-2 text-subtitle-2") {{item.title}}
                    v-col(cols="12" class="d-flex justify-space-between")
                      div(class="d-flex align-center")
                        v-icon(color="primaryTextPale" size="large" icon="mdi-message-reply-text")
                        p(class="font-weight-bold ml-2") {{item.commentsCount}}
                      div(class="d-flex align-center")
                        v-icon(color="primaryTextPale" size="large" icon="mdi-thumb-up-outline")
                        p(class="font-weight-bold ml-2") {{item.likesCount}}
</template>
<script setup>

import { useColleaguesStore } from '~/stores/colleages'
const response = ref({});

const route = useRoute()
const { getColleaguesById } = useColleaguesStore()

const formatDateRange = (dateTo, dateFrom) => {
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  const formattedDateTo = new Intl.DateTimeFormat(undefined, options).format(new Date(dateTo));
  const formattedDateFrom = new Intl.DateTimeFormat(undefined, options).format(new Date(dateFrom));

  return `${formattedDateFrom} - ${formattedDateTo}`;
};


onMounted(async () => {
  response.value = await getColleaguesById(route.params.id)
})

definePageMeta({
  activeRoute: 'team'
})
</script>
      
      
      
      