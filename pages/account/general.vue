<template lang="pug">
v-row(class="overflow-auto h-100 scroll-container")
  v-col(cols="12")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('personAbout.about')}}
        v-btn(icon size="small" variant="plain" color="#06A69D" @click="editAbout = !editAbout")
          v-icon mdi-pencil
      template(#body)
        p(class="px-0 pt-5 font-weight-medium text-subtitle-1") {{$t('personAbout.title')}}
        p(class="text-h6 font-weight-bold") {{ user.title }}
        p(class="description py-3 text-body-1 font-weight-medium") {{$t('personAbout.description')}}
        p(class="pt-2 text-justify") {{ user.desc }}
  v-col(cols="12")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('personContact.title')}}
        div(class="d-flex align-center")
          v-btn(icon size="small" variant="plain" color="secondary")
            v-icon(color="") mdi-plus-circle-outline
          v-btn(icon size="small" variant="plain" color="#06A69D")
            v-icon mdi-pencil
      template(#body)
        v-container
          v-row
            v-col(cols="12" sm="6" v-for="item , index in contactPerson" :key="index" class="d-flex gap-10 align-items justify-start")
              v-icon(color="#707070") {{item.icon}}
              p(class="mb-0 font-weight-bold") {{item.text}}
    GeneralEditAboutMe(:persistent="true" v-bind="formData" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = value")
</template>

<script setup>
// imports
import { useUserStore } from '~/stores/user'

// page meta
definePageMeta({
  activeRoute: 'account'
});

// data
const { user, updateUser, setLoadingUser, loadingUser } = useUserStore()
const testing = ref(false)

const editAbout = ref(false)
const formData = reactive({
  title: '',
  description: ''
});

// methods
const updateContacts = async (newContactList) => {
  setLoadingUser()
  await myFetch('/users', { method: 'PATCH', body: { contacts: newContactList } })
  updateUser()
};

</script>