<template lang="pug">
v-container
  v-layout.d-flex.align-center.justify-center
    v-card.shadow.ma-3(min-width="450")
      v-form
        v-card-title.text-center.my-5
          h2 Set up tenant

        v-window(v-model="step")
          v-window-item(:value="1")
            v-card-text.d-flex.flex-column.align-center.justify-center.streched
              v-text-field.streched(label="tenant name" variant ="solo")
          v-window-item(:value="2")
            v-card-text.d-flex.flex-column.align-center.justify-center.streched
              v-text-field.streched(label="team name" variant="solo")
              v-btn(icon)
                v-icon mdi-plus
          v-window-item(:value="3")
            v-card-text.d-flex.flex-column.align-center.justify-center.streched
              v-select.streched(variant="solo" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas']")

        v-card-actions.d-flex.align-center
          v-btn.px-10(rounded variant="outlined" @click="step--" v-show="step > 1") zurück
          v-spacer
          v-btn.bg-primary.px-10(rounded @click="step++" v-show="step < 3") weiter
          v-btn.bg-primary.px-10(rounded v-show="step > 2") abschließen
        
</template>

<script setup>
// imports
// page definition
definePageMeta({
  layout: 'init'
})

// data
const step = ref(1)
const msgText = ref('')
const msgType = ref('error')
const msgIsVisible = ref(true)
// methods
// hooks
</script>

<style lang="scss" scoped>
.primary-gradient {
  background-image: linear-gradient($secondary, $primary);
}

.replace {
  position: relative;
  top: 18px;
  right: 33px;
}
</style>