<template lang="pug">
div
  //- card
  CommonCard
    template(#title)
      span.text-secondary.d-flex.align-center {{$t('personAbout.about')}}
      v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="showDialog = !showDialog")
        v-icon mdi-pencil
    template(#body)
      p.px-0.pt-5.font-weight-medium.text-subtitle-1 {{$t('personAbout.title')}}
      p.text-h6.font-weight-bold {{ user.title }}
      p.description.pt-3.text-body-1.font-weight-medium {{$t('personAbout.description')}}
      p.pt-2.text-justify {{ user.desc }}

  //- modal to edit
  v-dialog(v-model="showDialog" max-width="450px")
    v-card
      v-card-title edit about me

      v-card-text
        v-form(ref="form")
          v-text-field(
            density="comfortable"
            variant="outlined"
            v-model="formData.title"
            :rules="rules.required"
            :label="t('required')"
          )
          v-textarea.mt-5(
            density="comfortable"
            variant="outlined"
            v-model="formData.desc"
          )

        v-alert(:type="msgType" v-show="showMsg") {{ msgText }}

      v-card-actions
        v-btn(@click="showDialog = false") abbrechen
        v-btn(@click="validateForm()") speichern
</template>

<script setup>
// imports
import { useUserStore } from '~/stores/user';

// data - common
const { t } = useI18n()

// data - account
const { user } = useUserStore()

// data - dialog
const showDialog = ref(false)
const form = ref(null)
const formData = reactive({
  title: '',
  desc: ''
})
const loading = ref(false)
const rules = reactive({
  required: [
    v => !!v || t('required')
  ]
})
const msgType = ref('success')
const showMsg = ref(false)
const msgText = ref('some msg here')


// methods
const validateForm = async () => {
  const { valid } = await form.value.validate()
  if (valid) {
    updateData()
  }
}

const updateData = async () => {
  let obj = {
    title: formData.title
  }
  if (formData.desc) obj.desc = formData.desc
  const res = await myFetch('/users', {
    method: 'PATCH',
    body: formData
  })
  // console.log('got res', res)
  accountStore.fetchData()
  showDialog.value = false
};

// hooks
</script>