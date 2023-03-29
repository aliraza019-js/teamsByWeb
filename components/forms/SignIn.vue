<template lang="pug">
v-form.d-flex.flex-column.align-center.justify-center.text-center(ref="form" v-model="valid" lazy-validation)
  v-row.stretch
    v-text-field.mb-2.stretch(
      v-model="formData.mail"
      type="email" 
      label="Mail" 
      :loading="loading" 
      :disabled="loading"
      :rules="rules.mail"
      prepend-inner-icon="mdi-email"
      variant="solo")

  v-row.stretch
    v-text-field.mb-2.stretch(
      v-model="formData.pwd"
      type="password" 
      label="password" 
      :loading="loading" 
      :disabled="loading"
      :rules="rules.required"
      prepend-inner-icon="mdi-lock"
      variant="solo")

  v-row.align-center.justify-end.pb-5.stretch
    nuxt-link(:to="localePath('/auth/password')") {{ $t('login.forgotPassword') }}

  v-row.align-center.justify-center
    v-alert.mb-3(:type="msgType" variant="tonal" v-show="msgIsVisible" closable) {{msgText}}

  v-row.align-center.justify-center.stretch
    v-btn.stretch(
      max-width="300px"
      :loading="loading" 
      :disabled="loading"
      rounded 
      color="secondary"
      @click="validate()")
      span {{ $t('login.label.login') }}
</template>

<script setup>
const config = useRuntimeConfig()
const localePath = useLocalePath()
const router = useRouter()

// data
let form = ref(null)
let valid = ref(false)
const loading = ref(false)
const formData = reactive({
  mail: '',
  pwd: ''
})
const rules = reactive({
  required: [
    v => !!v || 'required'
  ],
  mail: [
    v => !!v || 'required',
    v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
  ]
})
const msgType = ref('success')
const msgText = ref()
const msgIsVisible = ref(false)

// methods
const validate = async () => {
  loading.value = true
  const { valid } = await form.value.validate()
  if (valid) return signIn()
  loading.value = false
  return
}

const signIn = async () => {
  try {
    await fbSignInWithMail(formData.mail, formData.pwd)
    // await fbInitUser()
    loading.value = false
    navigateTo(localePath('/home'))
    await form.value.reset()
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