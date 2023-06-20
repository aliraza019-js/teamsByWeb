<template lang="pug">
v-form.d-flex.flex-column.align-center.justify-center.text-center(ref="form")
  v-text-field.mb-2(
    v-model="formData.mail"
    style="width:100%"
    type="email" 
    label="Mail" 
    :loading="loading" 
    :disabled="loading"
    :rules="rules.mail"
    @keydown.enter.prevent="validate()"
    prepend-inner-icon="mdi-email")

  v-text-field.mb-2(
    v-model="formData.pwd" 
    style="width:100%"
    type="password" 
    label="password" 
    :loading="loading" 
    :disabled="loading"
    :rules="rules.required"
    @keydown.enter.prevent="validate()"
    prepend-inner-icon="mdi-lock")

  v-text-field.mb-2(
    v-model="formData.pwdConf" 
    style="width:100%"
    type="password" 
    label="confirm password" 
    :loading="loading" 
    :disabled="loading"
    :rules="rules.confirmation"
    @keydown.enter.prevent="validate()"
    prepend-inner-icon="mdi-lock")

  v-alert.mb-3(:type="msgType" variant="tonal" v-show="msgIsVisible") {{msgText}}

  v-btn.stretch(
    style="width:100%; maxWidth:300px" 
    :loading="loading" 
    :disabled="loading"
    rounded 
    color="secondary"
    @click="validate()")
    span {{ $t('signUp.label.login') }}
</template>

<script setup>
// imports
import { useAuthStore } from '~/stores/auth';

// data
const { t } = useI18n()
const { initAuth } = useAuthStore()
const config = useRuntimeConfig()
const localePath = useLocalePath()
const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const formData = reactive({
  mail: '',
  pwd: '',
  pwdConf: ''
})
const rules = reactive({
  required: [
    v => !!v || t('forms.required')
  ],
  mail: [
    v => !!v || t('forms.required'),
    v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || t('forms.noValidMail')
  ],
  confirmation: [
    v => !!v || t('forms.required'),
    v => v == formData.pwd || t('forms.passwordMatch')
  ]
})
const msgType = ref('success')
const msgText = ref()
const msgIsVisible = ref(false)

const validate = async () => {
  loading.value = true
  const { valid } = await form.value.validate()
  if (valid) return signUp()
  loading.value = false
  return
}

const signUp = async () => {
  try {
    await fbCreateUser(formData.mail, formData.pwd)
    initAuth()
    navigateTo(localePath('/'))
    loading.value = false
    await form.value.reset()
    msgType.value = 'success'
    msgText.value = 'erfolgreich angemeldet'
    msgIsVisible.value = true
    setTimeout(() => {
      msgIsVisible.value = false
    }, 2000)

  }
  catch (err) {
    console.log('err', err)
    msgType.value = 'error'
    msgIsVisible.value = true
    msgText.value = err.message
  }
  finally {
    loading.value = false
  }
}
</script>

<style lang="scss"></style>