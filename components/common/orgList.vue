<template lang="pug">
v-card(height="65px" rounded="lg" :to="localePath(`/d/project/org/${org._id}/general`)")
  div(class="d-flex w-100 justify-space-between align-center px-4 h-100")
    div(class="d-flex align-start flex-column") 
      div(class="d-flex")
        p(class="place") {{org.location && org.location.address ? getAddressDetails(org.location.address).city + ' | ' + getAddressDetails(org.location.address).country : ''}}
      p(class="orgName") {{org.name}}
    div(class="border rounded-lg pa-2")
      v-img(width="50px" :src="org && org.profileImage ? org.profileImage.url : imageIcon")
</template>

<script setup>
defineProps(['org']);
const imageIcon = 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925" width="30'
const localePath = useLocalePath();
const addressToShow = ref('')

function getAddressDetails(address) {
  console.log('address')
  // Your implementation to extract city and country from the address
  // This is a simple example, and you might need to adjust it based on the structure of your addresses
  const addressParts = address.split(',').map(part => part.trim());
  console.log('addressParts', addressParts)
  const city = addressParts[0] ? addressParts[0] : addressParts[1];
  const country = addressParts[addressParts.length - 1];
  console.log('city', city)
  console.log('country', country)

  return { city, country };
}
</script>
