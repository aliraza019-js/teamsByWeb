<template lang="pug">
v-card(width="100%" flat)
  div(class="d-flex align-center justify-space-between")
    v-btn(v-if="showTitle" icon elevation="0" class="ml-0 float-left" @click="dynamicComponentData = false")
      v-icon mdi-arrow-left
    v-toolbar(:title="showTitle ? title :$t('home.home')" flat color="transparent")
      .underline
    //- v-btn(icon)
    //-   v-icon mdi-menu

  v-card-text
    HomeNews(@comments-data="getCommentsTitle" :dynamicComponentValue="dynamicComponentData" @get-back-previous-state="goBackToPreviousSate")
</template>

<script setup>
definePageMeta({
  activeRoute: 'home'
});

const dynamicComponentData = ref(false)

const title = ref('')
const showTitle = ref(false)
const dynamicComponent = ref(false)

const getCommentsTitle = (event) => {
  title.value = event
  showTitle.value = true
  dynamicComponentData.value = true
  // console.log('responseData', event)

}

const goBackToPreviousSate = () => {
  title.value = ''
  showTitle.value = false
  dynamicComponentData.value = false
}

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
</style>
