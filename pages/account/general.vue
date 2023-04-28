<template lang="pug">
v-container
  //- AccountGeneralAbout

  //- CommonCard 
    template(#title)
      span(class="text-secondary d-flex align-center") {{$t('personAbout.about')}}
      v-btn(icon size="small" variant="plain" color="#06A69D" @click="editAbout = !editAbout")
        v-icon mdi-pencil
    template(#body)
      p(class="px-0 pt-5 font-weight-medium text-subtitle-1") {{$t('personAbout.title')}}
      p(class="text-h6 font-weight-bold") {{ account.title }}
      p(class="description py-3 text-body-1 font-weight-medium") {{$t('personAbout.description')}}
      p(class="pt-2 text-justify") {{ account.desc }}

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
// import { useAccountStore } from '~~/stores/account';

// page meta
definePageMeta({
  activeRoute: 'account'
});

// data
// const accountStore = useAccountStore()
// const account = computed(() => {
//   return accountStore.account
// })

const contactPerson = ref([
  {
    icon: "mdi-pencil",
    text: "+49 511 123456-0"
  },
  {
    icon: "mdi-email",
    text: "mail@mail.com"
  },
  {
    icon: "mdi-cellphone",
    text: "+49 511 123456-0"
  },
  {
    icon: "mdi-instagram",
    text: "@trusteddecisions.com"
  }
]);

const editAbout = ref(false)
const formData = reactive({
  title: "Senior Product manager",
  description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,"
});


</script>