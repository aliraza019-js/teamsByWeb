<template lang="pug">
v-container
  CommonCard
    template(#title)
      span.text-secondary.d-flex.align-center Projekt / Agile
      v-btn(icon size="small" variant="plain" color="#06A69D" )
        v-icon mdi-pencil
    template(#body)
      v-container 
        v-row 
          v-col(cols="12" sm="6" class="px-0 d-flex justify-space-between")
            div(class="d-flex flex-column") 
              span Agile
              p(class="font-weight-bold text-h6") Agile Coach
            v-rating(bg-color="orange-lighten-1" density="compact" v-model="rating" color="blue")
</template>

<script setup>
definePageMeta({
  activeRoute: 'account'
});

const rating = ref(3);
</script>