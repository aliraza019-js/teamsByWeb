<template lang="pug">
ClientOnly
  v-row(class="overflow-auto h-100")
      v-col(cols="12" class="d-flex justify-end pb-0")
        v-btn(variant="text" prepend-icon="mdi-plus" density="compact"  @click="dialogAddTraining = true") {{$t('trainings.add')}}
      v-col(cols="12")
        v-row(class="overflow-auto scroll-container" )
          v-col(cols="12" v-for="(item , index) in trainings" :key="index")
            CommonCard
              template(#title)
                div(class="d-flex flex-column w-100")
                  div(class="d-flex justify-space-between align-center w-100")
                    div(class="text-body-2") {{formatDate(item.dateTo)}}-{{formatDate(item.dateFrom)}}
                    div(class="d-flex")
                      v-btn(icon size="small" variant="plain" @click="editItem(item)" )
                        v-icon(icon="mdi-pencil" color="primaryTextPale" )
                      v-btn(icon size="small" variant="plain" @click="deleteTrainingAction(item)" )
                        v-icon(icon="mdi-delete" color="red" )
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
                        p(class="font-weight-bold ml-2") 24 comments
                      div(class="d-flex align-center")
                        v-icon(color="primaryTextPale" size="large" icon="mdi-thumb-up-outline")
                        p(class="font-weight-bold ml-2") 1.2K likes
      AccountTrainingForm(:persistent="true" min-height="500" width="500" :edit-item="selectedEditItem"  :isDialogVisible="dialogAddTraining" @update:isDialogVisible="closeDialog" @update:trainings="fetchTrainings")
      CommonConfirmModal(:persistent="true" min-height="500" width="500" :isDialogVisible="dialogConfirmDelete" @update:isDialogVisible="dialogConfirmDelete = false" @update:confirm="deleteTrainingAction(selectedEditItem)")
</template>
<script setup>
import {useTrainingStore} from "~/stores/trainings";

definePageMeta({
  activeRoute: 'account'
});

const {getTrainings, deleteTraining} = useTrainingStore()
const dialogAddTraining = ref(false)
const dialogConfirmDelete = ref(false)
const selectedEditItem = ref(null)
const selectedDeleteItem = ref(null)
const trainings = ref([])

const formatDate = (timestamp)=>{
    if(!timestamp) return  null
    const date = new Date(timestamp)
    return date.toLocaleDateString("de-DE")
    // return timestamp
}
const editItem = (item)=>{
  selectedEditItem.value = item
  dialogAddTraining.value = true
}

const fetchTrainings = async  ()=>{
  const response = await getTrainings()
  trainings.value = response.data
}
const closeDialog = ()=>{
  dialogAddTraining.value = false
  selectedEditItem.value = null
}


const deleteTrainingAction = (item)=>{
  if(!dialogConfirmDelete.value){
      dialogConfirmDelete.value = true
      selectedDeleteItem.value = {...item}
      return
  }
  deleteTraining(selectedDeleteItem.value._id).then(()=>{
      fetchTrainings()
  }).finally(()=>{
    dialogConfirmDelete.value = false
    selectedDeleteItem.value = null
  })
}

onMounted(() => {
  fetchTrainings()
})

</script>



