<template lang="pug">
v-row(class="overflow-auto h-100")
  v-col(cols="12" class="d-flex justify-end pb-0")
    v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Training hinzufügen
  v-col(cols="12")
    v-row(class="overflow-auto scroll-container" style="height: 450px")
      v-col(cols="12" v-for="item , index in trainings" :key="index")
        CommonCard
          template(#title)
            div(class="d-flex flex-column")
              span(class="text-body-2") {{item.date}}
              p(class="text-secondary") {{item.certificateTitle}}
          template(#body)
            v-container(class="px-0")
              v-row
                v-col(cols="12" sm="3")
                  v-sheet(border height="170" rounded="lg" class="d-flex align-center justify-center")
                    div(class="d-flex justify-center align-center")
                      v-icon(icon="mdi-certificate" color="grey-darken-1" size="90")
                v-col(cols="12" sm="9")
                  p(class="text-justify") Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.
                  div(class="d-flex justify-space-between flex-wrap pt-4 align-center")
                    div(class="d-flex align-center mb-3")
                      v-icon(icon="mdi-domain" color="grey-darken-1")
                      p(class="pl-2 text-subtitle-2") {{item.agency}}
                    div(class="d-flex align-center mb-3")
                      v-icon(icon="mdi-map-marker-radius" color="grey-darken-1")
                      p(class="pl-2 text-subtitle-2") {{item.location}}
                    div(class="d-flex align-center mb-3")
                      v-icon(icon="mdi-certificate" color="grey-darken-1")
                      p(class="pl-2 text-subtitle-2") {{item.certificate}}
                v-col(cols="12" class="d-flex justify-space-between")
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" icon="mdi-message-reply-text")
                    p(class="font-weight-bold ml-2") 24 comments
                  div(class="d-flex align-center")
                    v-icon(color="primaryTextPale" size="large" icon="mdi-thumb-up-outline")
                    p(class="font-weight-bold ml-2") 1.2K likes
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

const trainings = ref(
  [
    {
      date: '16.05.2019 - 18.05.2019',
      certificateTitle: 'Scrum Product Owner',
      agency: 'Some training agency',
      location: "Bukarest",
      certificate: "Certified Scrum Product Owner"
    },
    {
      date: '16.05.2019 - 18.05.2019',
      certificateTitle: 'NLP Master',
      agency: 'Some training agency',
      location: "Hamburg",
      certificate: "Certified NLP Master"
    }
  ]
);
</script>