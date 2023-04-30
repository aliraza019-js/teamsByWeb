<template lang="pug">
div
  v-btn(icon @click="openDialog()" variant="text" size="small" :disabled="loadingUser")
    v-icon(size="small") mdi-pencil

  //- modal to edit
  v-dialog(v-model="showDialog" max-width="450px")
    v-card(:loading="loading")
      v-card-title {{ $t('account.aboutMe') }}

      v-card-text
        v-form(ref="form")
          v-text-field(
            variant="solo"
            v-model="formData.title"
            :rules="rules.required"
            :label="t('account.title')"
          )
          v-textarea.mt-5(
            variant="solo"
            v-model="formData.desc"
            :label="t('account.desc')"
          )

        v-alert(:type="msgType" v-show="showMsg") {{ msgText }}

      v-card-actions
        v-btn(@click="showDialog = false" :disabled="loading") abbrechen
        v-btn(@click="validateForm()" :loading="loading" :disabled="loading") speichern
</template>

<script setup>
// imports
import { useUserStore } from '~/stores/user';

// data - common
const { t } = useI18n()
// data - user
const { user, loadingUser, updateUser } = useUserStore()

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
  updateUser()
  showDialog.value = false
};

const openDialog = () => {
  Object.assign(formData, { title: user.title, desc: user.desc })
  showDialog.value = true
}

// hooks
</script>