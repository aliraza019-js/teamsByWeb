<template lang="pug">  
v-card(class="d-flex rounded-l" width="100%" height="70px" elevation="3" style="align-items:center;" :to="localePath(`/d/team/t/${team._id}/about`)")
  v-col(class="imgCol")   
    img(v-if="team.profileImage && team.profileImage.url" :src="team.profileImage.url" class="teamPic")
    img(v-else src="https://img.team-stage.com/placeholder/new/team1_oVhR_PZdI.webp" class="teamPic")
  v-col(class="ml-2")
    v-row() 
      body-2 {{ team.title }}
    v-row()  
      h4 {{ team?.name ? team?.name?.substring(0,15) : 'No title given yet'  }}
</template>
    
<script setup>
const props = defineProps(['team'])
const localePath = useLocalePath();

/**
 * Transforms an image URL by adding a base transformation and modifying the URL structure.
 *
 * @param {string} url - The original URL of the image.
 * @return {string} The transformed URL with the base transformation applied.
 */

const transformImageURL = (url) => {
  const baseTransform = "tr:ar-2-1,w-400";
  const modifiedUrl = url.replace(/\/user\//, '/');
  const [baseUrl, restOfUrl] = modifiedUrl.split('/teamstage/');
  const transformedURL = `${baseUrl}/teamstage/${baseTransform}/${restOfUrl}`;
  console.log('transformedURL', transformedURL)
  return transformedURL
};

/**
 * Handles the error event for an image element.
 *
 * @param {Event} event - The error event object.
 */
const handleImageError = (event) => {
  console.log('handleImageError', event)
  event.target.src = 'https://img.team-stage.com/placeholder/new/tr:ar-4-3,w-400/team1_oVhR_PZdI.webp'; // Replace with your actual fallback image URL
};


onMounted(() => {
  console.log('team.profileImage.url', props.team)
})
// console.log('team', props.team)
</script>
    
<style lang="scss" scoped> .teamPic {
   width: 100%;
   height: 100%;
 }

 .imgCol {
   padding: 0px;
   height: 100%;
   max-width: 100px;
   min-width: 53px;
 }
</style>