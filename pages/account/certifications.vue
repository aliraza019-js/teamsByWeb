<template lang="pug">
v-row(class="overflow-auto h-100")
  v-col(cols="12" class="d-flex justify-end pb-0")
    v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Zertifikat hinzufügen
  v-col(cols="12")
    v-row(class="overflow-auto scroll-container" style="height: 450px")
      v-col(cols="12" v-for="index in 2" :key="index")
        CommonCard
          template(#title)
            div(class="d-flex flex-column")
              span(class="text-body-2") Certification Association
              p(class="text-secondary") Certified Scrum Product Owner
          template(#body)
            v-container(class="px-0")
              v-row
                v-col(cols="12" sm="3")
                  v-sheet(border height="170" rounded="lg" class="d-flex align-center justify-center")
                    div(class="d-flex justify-center align-center")
                      v-img(src="/img/badgecertificate.png" eager width="150px")
                v-col(cols="12" sm="9")
                  p(class="text-justify") Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.
                  div(class="d-flex flex-wrap pt-4 align-center")
                    div(class="d-flex align-center mb-3")
                      v-icon(icon="mdi-clock-check" color="grey-darken-1")
                      p(class="pl-2 text-subtitle-2") 17.05.2017 - ∞
                    div(class="d-flex align-center pl-3 mb-3")
                      v-icon(icon="mdi-account-circle" color="grey-darken-1")
                      p(class="pl-2 text-subtitle-2") Product owner
                v-col(cols="12" class="d-flex justify-space-between")
                  div(class="d-flex align-center")
                    v-icon(style="color: primaryTextPale" size="large" icon="mdi-message-reply-text")
                    p(class="font-weight-bold ml-2") 24 comments
                  div(class="d-flex align-center")
                    v-icon(style="color: primaryTextPale" size="large" icon="mdi-thumb-up-outline")
                    p(class="font-weight-bold ml-2") 1.2K likes
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});
</script>