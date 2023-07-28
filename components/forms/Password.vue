<template lang="pug">
v-form.d-flex.flex-column.align-center.justify-center.text-center(ref="form" v-model="valid" lazy-validation)
  v-row.stretch.mt-10
    v-text-field.mb-2(
      v-model="formData.mail"
      type="email"
      label="Mail"
      :loading="loading"
      :disabled="loading"
      :rules="rules.mail"
      prepend-inner-icon="mdi-email"
      variant="plain"
    )

  v-row.align-center.justify-center
    v-alert.mb-3(:type="msgType" variant="tonal" v-show="msgIsVisible") {{ msgText }}

  v-row.align-center.justify-center
    v-btn.stretch(
      style="width:100%; maxWidth:300px"
      :loading="loading"
      :disabled="loading"
      rounded
      color="secondary"
      @click="validate()"
    )
      span {{ $t('password.resetPassword') }}

</template>

<script setup>
const localePath = useLocalePath()
const router = useRouter()

// data
const form = ref(null)
const valid = ref(false)
const loading = ref(false)
const formData = reactive({
  mail: ''
})
const rules = reactive({
  mail: [
    v => !!v || 'required',
    v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
  ]
})
const msgType = ref('success')
const msgText = ref()
const msgIsVisible = ref(false)

//methods
const validate = async () => {
  loading.value = true
  const { valid } = await form.value.validate()
  if (valid) return resetPassword()
  return loading.value = false
}

const resetPassword = async () => {
  try {
    await fbResetPassword(formData.mail)
    loading.value = false
    await form.value.reset()
    msgType.value = 'success'
    msgText.value = 'send reset mail'
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