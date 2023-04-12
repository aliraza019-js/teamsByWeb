<template lang="pug">
v-container
  v-layout.d-flex.align-center.justify-center
    v-card.shadow.ma-3(min-width="450" :loading="loading")
      v-form(ref="form" v-model="valid" lazy-validation)
        v-card-title.text-center.my-5
          h2 {{ $t('init.profileSetup')}}
        v-card-text.d-flex.flex-column.align-center.justify-center.streched
          p.body-1.mb-5 {{ $t('init.pleaseComplete') }}
          v-text-field.streched(
            v-model="formData.givenName"
            :label="t('forms.givenName')" 
            variant="solo"
            prepend-inner-icon="mdi-account"
            :disabled="disabled || loading"
            :rules="rules.required")
          v-text-field.streched(
            v-model="formData.familyName"
            :label="t('forms.familyName')"
            prepend-inner-icon="mdi-account"
            variant="solo"
            :disabled="disabled || loading"
            :rules="rules.required")
          .wrapper.ml-8
            v-avatar.mb-5.primary-gradient.pointer(size="100" icon="mdi-account" theme="dark")
            v-btn.add-btn(icon size="x-small" color="green" theme="dark" flat)
              v-icon mdi-plus
          v-alert.streched(:type="msgType" closable variant="tonal" v-show="msgIsVisible") {{ msgText }}

        v-card-actions.d-flex.align-center.justify-center
          v-btn.bg-primary.px-10(rounded :disabled="disabled || loading" :loading="loading" @click="validate()") {{ $t('forms.next') }}
        
</template>

<script setup>
// imports
// page definition
definePageMeta({
  layout: 'init'
})

// data
const { t } = useI18n()
const localePath = useLocalePath()

// form
const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const disabled = ref(false)
const formData = reactive({
  givenName: '',
  familyName: ''
})
const rules = reactive({
  required: [
    v => !!v || t('forms.required')
  ]
})
const msgText = ref('')
const msgType = ref('error')
const msgIsVisible = ref(false)

// methods
const validate = async () => {
  loading.value = true
  const { valid } = await form.value.validate()
  if (valid) return transfer()
  return loading.value = false

}
const transfer = async () => {
  try {
    await myFetch('users', {
      method: 'PATCH',
      body: formData
    })
    disabled.value = true
    loading.value = false
    msgType.value = 'success'
    msgText.value = t('forms.success')
    msgIsVisible.value = true
    setTimeout(() => {
      navigateTo(localePath('/init'))
    }, 2000)
  }
  catch (err) {
    console.log('error pushing to user', err)
    loading.value = false
    msgType.value = 'error'
    msgText.value = err.message
    msgIsVisible.value = true
  }
}

// hooks
</script>

<style lang="scss" scoped>
.primary-gradient {
  background-image: linear-gradient($secondary, $primary);
}

.add-btn {
  position: relative;
  top: 40px;
  right: 65px;
  border: 1px solid white;
}
</style>