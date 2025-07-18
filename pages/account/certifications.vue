<template lang="pug">
v-row(class="overflow-auto h-100")
  v-col(cols="12" class="d-flex justify-end pb-0")
    v-btn(variant="text" prepend-icon="mdi-plus" density="compact" @click="dialogAddCertification=true")  {{$t('certifications.addCertification')}}
  v-col(cols="12")
    v-row(class="overflow-auto scroll-container" v-if="certifications" )
      v-col(cols="12" v-for="item in certifications" :key="item._id")
        CommonCard
          template(#title)
            div(class="d-flex flex-column w-100")
              div(class="text-body-2") {{$t('certifications.certificationAssociation')}}
              div(class="d-flex justify-space-between align-center w-100")
                p(class="text-secondary") {{item.title}}
                div(class="d-flex")
                  v-btn(icon size="small" variant="plain" @click="editItem(item)" )
                    v-icon(icon="mdi-pencil" color="primaryTextPale" )
                  v-btn(icon size="small" variant="plain" @click="deleteAction(item)" )
                    v-icon(icon="mdi-delete" color="red" )
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
                      p(class="pl-2 text-subtitle-2") {{formatDate(item.date)}} - {{item.validUntil ? formatDate(item.validUntil) : '∞'}}
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
  AccountCertificationForm(:persistent="true" min-height="500" width="500" :isDialogVisible="dialogAddCertification" :edit-item="selectedEditItem" @update:isDialogVisible="closeAddDialog" @update:certifications="(data)=>certifications=data")
  CommonConfirmModal(:persistent="true" min-height="500" width="500" :isDialogVisible="dialogConfirmDelete" @update:isDialogVisible="dialogConfirmDelete = false" @update:confirm="deleteAction(selectedEditItem)")
</template>

<script setup>
import {useCertificationStore} from "~/stores/certifications";

definePageMeta({
  activeRoute: 'account'
});

const {getCertifications, deleteCertification} = useCertificationStore()
const dialogAddCertification = ref(false)
const dialogConfirmDelete = ref(false)
const certifications = ref([])
const selectedEditItem = ref(null)
const selectedDeleteItem = ref(null)


const formatDate = (timestamp)=>{
    if(!timestamp) return  null
    const date = new Date(timestamp)
    return date.toLocaleDateString("de-DE")
    // return timestamp
}

const fetchCertifications = async  ()=>{
  const response = await getCertifications()
  certifications.value = response.data
}
const editItem = (item)=>{
  selectedEditItem.value = item
  dialogAddCertification.value = true
}

const deleteAction = (item)=>{
  if(!dialogConfirmDelete.value){
      dialogConfirmDelete.value = true
      selectedDeleteItem.value = {...item}
      return
  }
  deleteCertification(selectedDeleteItem.value._id).then(()=>{
     fetchCertifications()
  }).finally(()=>{
    dialogConfirmDelete.value = false
    selectedDeleteItem.value = null
  })
}

const closeAddDialog = ()=>{
  dialogAddCertification.value = false
  selectedEditItem.value = null
}

onMounted(() => {
    fetchCertifications()
})

</script>