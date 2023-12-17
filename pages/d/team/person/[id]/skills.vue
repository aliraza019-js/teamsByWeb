<template lang="pug">
v-row(class="overflow-auto h-100")
      //- v-col(cols="12" class="d-flex justify-end pb-0")
      //-   v-btn(variant="text" prepend-icon="mdi-plus" density="compact" @click="dialogSkills = true") {{$t('skills.add')}}
      v-col(cols="12")
        v-row
          v-col(cols="12") {{ loadingUserState }}
        v-row(class="overflow-auto scroll-container" v-if="response")
          v-col(cols="12" v-for="(item, index) in response.skills" :key="index")
            CommonCard
              template(#title)
                span.text-secondary.d-flex.align-center {{item.title}}
                //- div(class="d-flex")
                //-   v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="editSkill(index)" )
                //-     v-icon(icon="mdi-pencil" color="primaryTextPale" )
                //-   v-btn(icon size="small" variant="plain" @click="deleteAction(index)" )
                //-     v-icon(icon="mdi-delete" color="red" )
              template(#body)
                v-container
                  v-row
                    v-col(cols="12" sm="6" class="d-flex justify-space-between align-center" v-for="(skill, skillIndex) in item.items" :key="skillIndex")
                      div(class="d-flex flex-column")
                        span {{item.title}}
                        p(class="font-weight-bold ") {{skill.title}}
                      v-rating(bg-color="orange-lighten-1" size="medium" density="compact" readonly v-model="skill.rating" color="blue")
      
    
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