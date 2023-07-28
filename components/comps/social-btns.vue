<template lang="pug">
v-card(flat)
  v-card-text
    .d-flex.flex-column.align-center.justify-center.pa-8.shadow.rounded
      v-btn.bg-google.mb-3.social-btn(rounded prepend-icon="mdi-google" @click="googleSignIn()")
        span {{ $t('login.signInWithGoogle') }}
      v-btn.bg-facebook.mb-3.text-white.social-btn(rounded prepend-icon="mdi-facebook" @click="facebookSignIn()")
        span {{ $t('login.signInWithFacebook') }}
      v-btn.bg-apple.mb-3.text-white.social-btn(rounded prepend-icon="mdi-apple" @click="appleSignIn()")
        span {{ $t('login.signInWithApple') }}
      v-alert.rounded.streched(:type="msgType" v-show="msgIsVisable" closable variant="tonal") {{ msgText }}
</template>

<script setup>
// imports

// data
const localePath = useLocalePath()
const msgText = ref('')
const msgType = ref('error')
const msgIsVisable = ref(false)

// methods
const googleSignIn = async () => {
  try {
    const res = await fbSignInWithGoogle()
    navigateTo(localePath('/home'))
  }
  catch (err) {
    console.log('err fb signin', err)
    msgType.value = 'error'
    msgText.value = err.code
    msgIsVisable.value = true
  }
}

const facebookSignIn = async () => {
  try {
    const res = await fbSignInWithFb()
    navigateTo(localePath('/home'))
  }
  catch (err) {
    console.log('err fb signin', err)
    msgType.value = 'error'
    msgText.value = err.code
    msgIsVisable.value = true
  }
}

const appleSignIn = async () => {
  try {
    const res = await fbSignInWithApple()
    navigateTo(localePath('/home'))
  }
  catch (err) {
    console.log('err fb signin', err)
    msgType.value = 'error'
    msgText.value = err.code
    msgIsVisable.value = true
  }
}

// hooks
</script>

<style lang="scss" scoped>
.social-btn {
  width: 100%;
  // max-width: 300px;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 4px 8px 0 rgba(0, 0, 0, 0.09);
  background-color: white;
}
</style>