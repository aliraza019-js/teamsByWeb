<template lang="pug">
v-container
  div(class="d-flex py-4 justify-end")
    v-btn(variant="text" prepend-icon="mdi-plus" density="compact") Training hinzufügen
  v-row
    v-col(cols="12")
      CommonCard
        template(#title)
          div(class="d-flex flex-column")
            span(class="text-body-2") 16.05.2019 - 18.05.2019
            p(class="text-secondary") Scrum Product Owner
        template(#body)
          v-container(class="px-0")
            v-row
              v-col(cols="6" sm="3")

              v-col(cols="6" sm="9")
                p Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.
                v-row(class="pt-4")
                  v-col(cols="6" sm="4" class="d-flex align-center")
                    v-icon(icon="mdi-domain" color="grey-darken-1")
                    p(class="pl-2 text-subtitle-2") Some training agency
                  v-col(cols="6" sm="4" class="d-flex align-center")
                    v-icon(icon="mdi-map-marker-radius" color="grey-darken-1")
                    p(class="pl-2 text-subtitle-2") Bukarest
                  v-col(cols="6" sm="4" class="d-flex align-center")
                    v-icon(icon="mdi-certificate" color="grey-darken-1")
                    p(class="pl-2 text-subtitle-2") Certified Scrum Product Owner
              v-col(cols="12" class="d-flex justify-space-between")
                div(class="d-flex align-center")
                  v-icon(style="color: #06A69D" size="large" icon="mdi-message-reply-text")
                  p(class="font-weight-bold ml-2") 24 comments
                div(class="d-flex align-center")
                  v-icon(style="color: #06A69D" size="large" icon="mdi-thumb-up-outline")
                  p(class="font-weight-bold ml-2") 1.2K likes

</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});
</script>