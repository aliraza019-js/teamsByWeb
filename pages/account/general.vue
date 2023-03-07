<template lang="pug">
v-container
  v-card(class="rounded-lg py-3 px-6")
    v-card-title(class="align-items-center d-flex justify-space-between px-0 font-weight-bold")
      span(class="text-secondary") {{$t('account.tabs.general.headline')}}
      v-btn(icon size="small" variant="plain" color="greenSecondary")
        v-icon(color="") mdi-pencil
    p.px-0.pt-5.font-weight-medium.text-subtitle-1 {{$t('account.tabs.general.title')}}
    p.text-h6.font-weight-bold Senior Product manager
    v-card-text.px-0
      p.description.text-body-1.font-weight-medium {{$t('account.tabs.general.desc')}}
      p.pt-5.text-justify Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, 
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});
</script>

<style lang="scss" scoped>
.v-card-title {
  border-bottom: 1px solid #E2E2E2;
}

.description {
  color: $secondary;
}


</style>