<template lang="pug">
v-row(class="overflow-auto h-100")
      v-col(cols="12" class="d-flex justify-end pb-0")
        v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Projekt hinzufügen
      v-col(cols="12")
        v-row(class="overflow-auto scroll-container" )
          v-col(cols="12" v-for="item , index in response.projects" :key="index")
            CommonCard
              template(#title)
                div(class="d-flex flex-column")
                  span(class="text-body-2") {{item.org.name}}
                  p(class="text-secondary") {{item.projectName}}
                div(class="d-flex px-2 rounded-lg align-center justify-space-around project-status")
                  v-icon(:icon="item.icon ? item.icon :'mdi-timer-sand' " class="mr-2" color="primaryTextPale")
                  div(class="d-flex text-body-2") {{item.projectStatus}}
              template(#body)
                v-container(class="px-0")
                  v-row
                    v-col(cols="12" sm="3")
                      v-img(class="rounded-lg" cover height="200" v-if="item.projectProfileImg && item.projectProfileImg.url" :src="item.projectProfileImg.url" )
                      v-img(class="rounded-lg" cover height="200" v-else src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")
                    v-col(cols="12" sm="9" class="d-flex justify-space-evenly flex-column")
                      div(class="d-flex mb-3 justify-space-between")
                        p {{item.dateFrom + " - " + (item.ongoing ? 'Ongoing' : '' ) }}
                        p(class="text-capitalize") {{item.role}}
                      p(class="text-justify") {{ item.projectDesc }}
                    v-col(cols="12" class="d-flex justify-space-between")
                      div(class="d-flex align-center")
                        v-icon(color="primaryTextPale" size="large" icon="mdi-message-reply-text")
                        p(class="font-weight-bold ml-2") {{ item.commentsCount? item.commentsCount: '0'  }} comments
                      div(class="d-flex align-center")
                        v-icon(color="primaryTextPale" size="large" :icon="item.userLiked? 'mdi-thumb-up':'mdi-thumb-up-outline'")
                        p(class="font-weight-bold ml-2") {{ item.likesCount ? item.likesCount+'K': '0K'}} likes
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
    
    
    <style scoped lang="scss">
    
    </style>