<template lang="pug">
v-row(class="overflow-auto h-100 scroll-container")
  v-col(cols="12")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('personAbout.about')}}
        v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="editAbout = !editAbout")
          v-icon mdi-pencil
      template(#body)
        p(class="px-0 pt-5 font-weight-medium text-subtitle-1") {{$t('personAbout.title')}}
        p(class="text-h6 font-weight-bold") {{ user.title }}
        p(class="description pt-3 text-body-1 font-weight-medium text-green") {{$t('personAbout.description')}}
        p(class="pt-2 text-justify") {{ user.desc }}
  v-col(cols="12" v-if="user")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('personContact.title')}}
        div(class="d-flex align-center")
          //v-btn(icon size="small" variant="plain" color="secondary")
          //  v-icon(color="") mdi-plus-circle-outline
          v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="dialogAddContact = true")
            v-icon mdi-pencil
      template(#body)
        v-container
          v-row
              v-col(cols="12" sm="6" )
                div(v-for="(item, index) in user.contacts" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                  v-icon(color="#707070") {{getIcon(item.type)}}
                  p(class="mb-0 font-weight-bold") {{ item.value }}
              v-col(cols="12" sm="6" )
                div(v-for="(item, index) in user.social" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                  v-icon(color="#707070") {{getIcon(item.type)}}
                  p(class="mb-0 font-weight-bold") {{ item.value }}
  GeneralEditAboutMe(:persistent="true" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = value")
  AccountContactInfoForm(:persistent="true" min-height="500" width="500"   :isDialogVisible="dialogAddContact" @update:isDialogVisible="closeDialog" )
</template>

<script setup>
// imports
import { useUserStore } from '~/stores/user'

// page meta
definePageMeta({
  activeRoute: 'account'
});

// data
const { user, updateUser } = useUserStore()

const editAbout = ref(false)
const dialogAddContact = ref(false)

const refresh = async () => {
  await updateUser()
  editAbout.value = !editAbout.value
};

const closeDialog = ()=>{
  dialogAddContact.value = false
}

const getIcon = (type)=>{
  switch (type) {

      case 'phone':
          return 'mdi-phone-classic' ;
       case 'mobile':
          return 'mdi-phone' ;
      case 'mail':
          return 'mdi-email-outline' ;
      case 'web':
          return 'mdi-web' ;
      case 'fax':
          return 'mdi-fax' ;
      case 'linkedin':
          return 'mdi-linkedin' ;
      case 'xing':
          return 'mdi-xing' ;
      case 'facebook':
          return 'mdi-facebook' ;
      case 'instagram':
        return 'mdi-instagram' ;
      case 'tiktok':
          return 'mdi-music-note-eighth' ;
      case 'twitter':
          return 'mdi-twitter' ;
      case 'other':
        return 'mdi-link'
  }
}
</script>