<template lang="pug">
v-container
  v-card(class="rounded-lg relative py-3 px-6 mb-3")
    v-card-title(class="align-center d-flex justify-space-between px-0 font-weight-bold")
      div(class="left-rounded position-absolute rounded-lg")
      span(class="text-secondary d-flex align-center") {{$t('account.tabs.general.headline')}}
      v-btn(icon size="small" variant="plain" color="#06A69D")
        v-icon mdi-pencil
    p(class="px-0 pt-5 font-weight-medium text-subtitle-1") {{$t('account.tabs.general.title')}}
    p(class="text-h6 font-weight-bold") Senior Product manager
    v-card-text(class="px-0") 
      p(class="description text-body-1 font-weight-medium") {{$t('account.tabs.general.desc')}}
      p(class="pt-5 text-justify") Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 

  v-card(class="rounded-lg relative py-3 px-6")
    v-card-title(class="align-center d-flex justify-space-between px-0 font-weight-bold")
      div(class="left-rounded position-absolute rounded-lg")
      span(class="text-secondary d-flex align-center") {{$t('account.tabs.general.contactInfo')}}
      div(class="d-flex align-center")
        v-btn(icon size="small" variant="plain" color="secondary")
          v-icon(color="") mdi-plus-circle-outline
        v-btn(icon size="small" variant="plain" color="#06A69D")
          v-icon mdi-pencil 
    v-card-text(class="px-0 pb-0")
      v-container
        v-row
          v-col(cols="12" sm="6" class="d-flex gap-10 align-items justify-start")
            v-icon(color="#707070") mdi-pencil
            p(class="mb-0 font-weight-bold") +49 511 123456-0
          v-col(cols="12" sm="6" class="d-flex gap-10 align-items justify-start")
            v-icon(color="#707070") mdi-email
            p(class="mb-0 font-weight-bold") mail@gmail.com
          v-col(cols="12" sm="6" class="d-flex gap-10 align-items justify-start")
            v-icon(color="#707070") mdi-cellphone
            p(class="mb-0 font-weight-bold") +49 511 123456-0
          v-col(cols="12" sm="6" class="d-flex gap-10 align-items justify-start")
            v-icon(color="#707070") mdi-instagram
            p(class="mb-0 font-weight-bold") @trusteddecisions.com
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

try {
  const res = await myFetch('/api/users')
  console.log(res)
} catch (err) {
  console.log(err)
}
</script>

<style lang="scss" scoped>
.v-card-title {
  border-bottom: 1px solid #E2E2E2;
}

.description {
  color: $secondary;
}

.left-rounded {
  background: #06A69D;
  width: 30px;
  height: 48px;
  left: -17px;
}


</style>