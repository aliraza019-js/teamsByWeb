<template lang="pug">
v-form.d-flex-flex-column.align-center.justify-center.text-center(ref="form")
  v-text-field.mb-2(
    v-model="formData.mail"
    style="width:100%"
    type="email" 
    label="Mail" 
    :loading="loading" 
    :disabled="loading"
    :rules="rules.mail"
    prepend-inner-icon="mdi-email")

  v-text-field.mb-2(
    v-model="formData.pwd" 
    style="width:100%"
    type="password" 
    label="password" 
    :loading="loading" 
    :disabled="loading"
    :rules="rules.required"
    prepend-inner-icon="mdi-lock")

  v-alert.mb-3(:type="msgType" variant="tonal" v-show="msgIsVisible") {{msgText}}

  v-btn.stretch(
    style="width:100%; maxWidth:300px" 
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
let form
let valid
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
  const { valid } = await form.validate()
  if (valid) return signUp()
  loading.value = false
  return
}

const signUp = async () => {
  try {
    await fbSignInWithMail(formData.mail, formData.pwd)
    await fbInitUser()
    navigateTo(localePath('/'))
    loading.value = false
    await form.reset()
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

<style lang="scss">

</style>