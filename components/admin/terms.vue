<template lang="pug">
div
  v-card(width="100%")
    v-card-title
      .d-flex
        h2.text-h6 Terms
        v-spacer
        v-btn(icon flat @click="editTerm()")
          v-icon mdi-plus
      v-divider
    v-list(density="compact")
      v-list-item
        v-list-item-title Version 1
        template(v-slot:append)
          v-btn(icon flat @click="editTerm()")
            v-icon(icon="mdi-pencil")

  v-dialog(v-model="dialog" max-width="650px" height="100%")
    v-card(height="100%")
      v-card-title Term
      v-divider
      v-card-text
        //- form
        v-form.d-flex-flex-column(ref="form")
          v-text-field(
            v-model="formData.version"
            variant="solo"
            style="width:100%"
            type="text"
            label="Version"
            :loading="loading"
            :disabled="loading"
            :rules="rules.required"
            prepend-inner-icon="mdi-123"
          )
          .picker-wrapper
            Datepicker(v-model="picked")

          // valid from

          // valid until

          // published

      v-divider

      v-card-actions
        v-btn speichern
        v-btn(@click="cancelEdit()") abbrechen

</template>

<script setup>
import Datepicker from 'vue3-datepicker'

// vars
const dialog = ref(false)

// form
const form = ref(null)
const formData = reactive({
  version: ''
})
const loading = ref(null)
const valid = ref(false)
const rules = reactive({
  required: [v => !!v || 'required']
})
const picked = ref(new Date())

// methods
const getTerms = async () => {
  console.log('try to get terms')
}

const editTerm = () => {
  dialog.value = true
}

const cancelEdit = () => {
  dialog.value = false
}

// methods
onMounted(async () => {
  await getTerms()
})
</script>

<style lang="scss" scoped>
.v3dp__datepicker {
  .v3dp__input_wrapper {
    border-radius: 25px;
    border: 1px solid grey;
  }
}
</style>
