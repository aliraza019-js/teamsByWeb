
<template lang="pug">
v-row(class="overflow-auto h-100 scroll-container")
  v-col(cols="12")
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center" ) {{$t('personAbout.about') +" "+ (response.name ? response.name : '')}}
        v-btn(v-if="response.isAdmin" icon size="small" variant="plain" color="primaryTextPale" @click="editAbout = true") 
          v-icon mdi-pencil
      template(#body)
        p(class="description pt-3 text-body-1 font-weight-medium text-green") {{$t('personAbout.description')}}
        p(class="pt-2 text-justify") {{response.desc ? response.desc :'description......'}}
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{ $t('personContact.title') }}
        v-btn(v-if="response.isAdmin" icon size="small" variant="plain" color="primaryTextPale" @click="editContact = true") 
          v-icon mdi-pencil
      template(#body)
        v-container
          v-row
            v-col(cols="12" sm="6" )
              div(v-for="(item, index) in response.contacts" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
                v-icon(color="#707070") {{getIcon(item.type)}}
                p(class="mb-0 font-weight-bold") {{ item.value }}
    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center") {{ $t('personContact.social') }}
        v-btn(v-if="response.isAdmin" icon size="small" variant="plain" color="primaryTextPale" @click="editSocial = true") 
          v-icon mdi-pencil
      template(#body)
        v-container
          v-row
          v-col(cols="12" sm="6" )
            div(v-for="(item, index) in response.social" :key="index" class="d-flex my-4 gap-10 align-items justify-start")
              v-icon(color="#707070") {{getIcon(item.type)}}
              p(class="mb-0 font-weight-bold") {{ item.value }}

    CommonCard
      template(#title)
        span(class="text-secondary d-flex align-center" :class="{'cursor-pointer' : response.client}" @click="response.client && redirectUrl(response.client?._id)") {{ $t('projects.clients.group') }}: {{response.client?.name}}
        div(class="d-flex align-center")
      template(#body)
        v-img(:src="response.client?.profileImage ? imageSource : imageUrl" @error="handleImageError" width="100%" height="300px")
  TeamsEditAboutCustomer(:persistent="true" :team="response" @show-snack-bar="showSnackBar" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editAbout" @update:isDialogVisible="(value) => editAbout = false")
  TeamsCustomerContactForm(:persistent="true" :team="response" @show-snack-bar="showSnackBar" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editContact" @update:isDialogVisible="(value) => editContact = false")
  TeamsCustomerSocialForm(:persistent="true" :team="response" @show-snack-bar="showSnackBar" @refresh="refresh" min-height="500" width="500" :isDialogVisible="editSocial" @update:isDialogVisible="(value) => editSocial = false")
  CommonSnackbar(v-if="showSnackbar" :message="snackbarMessage" :success="snackbarSuccess")
</template>
  
<script setup>
import { useClientStore } from "~/stores/clients";
import { useTeamsStore } from '~/stores/teams'

const response = ref({});
const route = useRoute()
const { getTeamsById } = useTeamsStore()
const { setRouteId } = useClientStore()

const fetchTeams = async () => {
  response.value = await getTeamsById(route.params.id)
}

const imageUrl = ref('https://img.team-stage.com/placeholder/new/tenant1_IzzN5idxS.webp')
const imageSource = ref('')

onMounted(async () => {
  await fetchTeams()
  imageSource.value = response.value.client?.profileImage?.url
})


definePageMeta({
  activeRoute: 'team'
})

const emit = defineEmits(
  ['update:isDialogVisible', 'refresh', 'show-snack-bar']
)

const handleImageError = () => {
  imageSource.value = imageUrl.value
};


const editAbout = ref(false);
const editContact = ref(false);
const editSocial = ref(false);
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarSuccess = ref(false)

/**
 * Navigates to the teams details page.
 *
 * @param {number} id - The ID of the project.
 * @return {void} 
 */
const redirectUrl = (id) => {
  const router = useRouter();

  const clientId = id;
  const path = `/d/client/${clientId}/general`;
  setRouteId(router.currentRoute.value.params?.id)

  router.push({
    path: path,
    params: {
      id: clientId,
      RouteId: router.currentRoute.value.params?.id
    }
  });
};

/**
 * Returns the corresponding icon for the given type.
 *
 * @param {string} type - The type of icon to retrieve.
 * @return {string} The icon class for the given type.
 */
const getIcon = (type) => {
  switch (type) {

    case 'phone':
      return 'mdi-phone-classic';
    case 'mobile':
      return 'mdi-phone';
    case 'mail':
      return 'mdi-email-outline';
    case 'web':
      return 'mdi-web';
    case 'fax':
      return 'mdi-fax';
    case 'linkedin':
      return 'mdi-linkedin';
    case 'xing':
      return 'mdi-xing';
    case 'facebook':
      return 'mdi-facebook';
    case 'instagram':
      return 'mdi-instagram';
    case 'tiktok':
      return 'mdi-music-note-eighth';
    case 'twitter':
      return 'mdi-twitter';
    case 'other':
      return 'mdi-link'
  }
}


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
const refresh = () => {
  fetchTeams()
  emit('refresh');
  editAbout.value = false;
  editContact.value = false,
    editSocial.value = false
};

</script>
  
<style lang="scss" scoped>
.underline {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 56px;
  right: 0px;
  height: 1px;
  background-color: rgb(204, 204, 204);
}

.cursor-pointer {
  cursor: pointer !important;
}
</style>