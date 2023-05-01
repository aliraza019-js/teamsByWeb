<template lang="pug">
v-container

  //- AccountGeneralAbout
  CommonCard(:loading="loadingUser")
    template(#title)
      span(class="text-secondary d-flex align-center") {{ $t('personAbout.about') }}
      AccountGeneralEditAbout
    template(#body)
      p.px-0.pt-5.font-weight-medium.text-subtitle-1 {{$t('personAbout.title')}}
      p.text-h6.font-weight-bold {{ user.title }}
      p.description.pt-3.pb-1.text-body-1.font-weight-medium {{$t('personAbout.description')}}
      p.text-justify {{ user.desc }}

  // contact list
  CommonContacts(:contactList="user.contacts" :loading="loadingUser" :updateFkt="updateContacts")


  //- GeneralEditAboutMe(:persistent="true" v-bind="formData" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = value")
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

const formData = reactive({
  title: '',
  description: ''
});

// methods
const updateContacts = async (newContactList) => {
  setLoadingUser()
  await myFetch('/users', { method: 'PATCH', body: { contacts: newContactList } })
  updateUser()
}

</script>