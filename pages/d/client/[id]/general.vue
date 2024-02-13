<template lang="pug">
v-container(class="pa-0")
  v-row(style="height: 500px" class="overflow-auto scroll-container")
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{$t('projects.clients.about')}}
          v-btn(v-if="clients?.isAdmin"  icon size="small" variant="plain" color="primaryTextPale" @click="editAbout = true")
            v-icon mdi-pencil
        template(#body)
          p(class="pt-3") {{ clients?.desc }}
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{ $t('projects.clients.contactInfo') }}
          div(class="d-flex align-center")
            v-btn(v-if="clients?.isAdmin" icon size="small" variant="plain" color="secondary" @click="editContact = true")
              v-icon(color="") mdi-plus
        template(#body)
          CommonContactInformation(:data="clients")
    v-col(cols="12")
      CommonCard
        template(#title)
          span(class="text-secondary d-flex align-center") {{ $t('projects.clients.Social') }}
          div(class="d-flex align-center")
            v-btn(v-if="clients?.isAdmin" icon size="small" variant="plain" color="secondary" @click="editSocial = true")
              v-icon(color="") mdi-plus
        template(#body)
          CommonSocialInformation(:data="clients")
  ClientsEditAboutCustomer(:persistent="true" :client="clients" @show-snack-bar="showSnackBar" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = false")
  ClientsCustomerContactForm(:persistent="true" :client="clients" @show-snack-bar="showSnackBar" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editContact" @update:isDialogVisible="(value) => editContact = false")
  ClientsCustomerSocialForm(:persistent="true" :client="clients" @show-snack-bar="showSnackBar" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editSocial" @update:isDialogVisible="(value) => editSocial = false")
  CommonSnackbar(v-if="showSnackbar" :message="snackbarMessage" :success="snackbarSuccess")

</template>
  
<script setup>

import { ref, onMounted, defineProps } from 'vue';



// page
definePageMeta({
  activeRoute: 'team',
});

const emit = defineEmits(
  ['update:isDialogVisible', 'refresh', 'show-snack-bar']
)

const props = defineProps(['clients']);


const editAbout = ref(false);
const editContact = ref(false);
const editSocial = ref(false);
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarSuccess = ref(false)
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


/**
 * Shows a snackbar with the given event data.
 *
 * @param {Object} event - The event data.
 */
const showSnackBar = (event) => {
  // console.log('responseData', event)
  showSnackbar.value = true
  snackbarMessage.value = event.message
  snackbarSuccess.value = false
}

/**
 * Refreshes the data of the component.
 *
 * @param {any} updatedData - The updated data to be displayed.
 * @return {void} This function does not return a value.
 */
const refresh = (updatedData) => {
  // console.log('updatedData', updatedData)
  if (updatedData) {
    placeData.value = updatedData
  }
  emit('refresh');
  editAbout.value = false;
};

</script>
  
<style lang="scss" scoped>
.project-status {
  height: 36px;

  p {
    font-size: 10px;
  }
}
</style>
  