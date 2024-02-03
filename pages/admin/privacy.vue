<template lang="pug">
  v-card(width="100%" flat :loading="loading")
    v-toolbar(:title="$t('admin.privacy')" flat color="transparent")
      .underline
      template(v-slot:prepend)
        v-btn(icon :to="localePath('/admin')")
          v-icon mdi-arrow-left
      template(v-slot:append)
        v-btn(icon @click="htmlIsEditble = true" v-if="!htmlIsEditble")
          v-icon mdi-pencil
        v-btn(icon @click="saveData()" v-if="htmlIsEditble")
          v-icon mdi-content-save
    v-card-text
      ClientOnly
        lazy-editor-simple(v-model="htmlContent" :editable="htmlIsEditble")
  
  </template>
  
  <script setup>
  // imports
  
  // page definition
  definePageMeta({
    activeRoute: 'admin'
  })
  
  // data
  const htmlContent = ref('');
  const htmlIsEditble = ref(false);
  const loading = ref(false);
  
  // methods
  const getData = async () => {
    const res = await myFetch('/pub/corporate/privacy', {method: 'GET'});
    htmlContent.value = res.content;
  }
  const saveData = async () => {
    loading.value = true;
    try {
      await myFetch('/v2/corporate/privacy', { method: 'POST', body: {content: htmlContent.value } })
    } catch (e) {
      console.log('error saving data', e);
    } finally {
      loading.value = false;
      htmlIsEditble.value = false;
    }
  }
  
  // hooks
  onMounted(async () => {
    await getData();
    // htmlContent.value = '<p>some content here</p>'
  })
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