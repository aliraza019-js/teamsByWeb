<template lang="pug">
CommonCard(:loading="loading")
  template(#title)
    span(class="text-secondary d-flex align-center") {{ $t('contacts.contacts') }}
    div(class="d-flex align-center")
      v-btn(icon size="small" variant="plain" color="secondary" @click="openEditDialog()")
        v-icon(color="") mdi-plus-circle-outline
      v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="editMode =!editMode")
        v-icon(size="small") mdi-pencil
  template(#body)
    //- v-container
    v-list.d-flex.flex-wrap
      //- v-row
      //-   v-col(cols="12" md="6" )
      v-list-item(@click="testing = true" v-for="(item, index) in contactList" :key="index" :class="mobile ? 'w-100' : 'w-50'")
        template(v-slot:prepend)
          v-icon {{ getContactTypes(item.type) }}
        v-list-item-title {{ item.value }}
        template(v-slot:append)
          v-btn(icon size="small" variant="text" v-show="editMode" color="primaryTextPale" @click="openEditDialog(index)")
            v-icon(size="small") mdi-pencil
          v-btn(icon size="small" variant="text" v-show="editMode" color="primaryTextPale" @click="confirmDeleteItem(index)")
            v-icon(size="small") mdi-delete


    // editDialog
    v-dialog(v-model="editDialog" max-width="440")
      v-card(:loading="loading")
        v-card-title 
          h3 {{ editDialogTitle }}
        v-card-text 
          v-form.d-flex.flex-column.align-center.justify-center.text-center(ref="form")
            v-select.stretch(
              :label="t('contacts.type')"
              v-model="formData.type"
              :items="typeEnums"
              :rules="rules.required"
              variant="solo")
            v-text-field.stretch.mt-3(
              :label="t('contacts.value')"
              v-model="formData.value"
              :rules="formData.type == 'mail' ? rules.mail : rules.required"
              variant="solo")
            v-select.stretch.mt-3(
              :label="t('contacts.privacy')"
              v-model="formData.privacy"
              :items="privacyEnums"
              :rules="rules.required"
              variant="solo")
        v-card-actions
          v-btn(@click="editDialog = false") {{ $t('forms.cancel') }}
          v-btn(@click="validateForm()" :disabled="loading" :loading="loading") {{ $t('forms.save')  }}

    // deleteDialog
    v-dialog(v-model="deleteDialog" max-width="740")
      v-card
        v-alert(
          color="warning" 
          icon="$warning" 
          variant="tonal"
          :title="t('forms.warning')" 
          :text="t('forms.reallyDelete')"
          rounded)
        v-card-actions
          v-btn(@click="deleteDialog = false" color="primaryTextPale") {{ $t('forms.cancel')}}
          v-btn(color="warning" variant="outlined" @click="deleteItem()") {{ $t('forms.delete') }}
</template>

<script setup>
// imports
import { useDisplay } from 'vuetify'

// props
const props = defineProps({ contactList: Array, loading: Boolean, updateFkt: Function })

// data
const { mobile } = useDisplay()
const { t } = useI18n()
const editMode = ref(false)
const editDialog = ref(false)
const editDialogTitle = computed(() => {
  if (newItemIndex.value || newItemIndex.value === 0) {
    return t('contacts.editContact')
  } else {
    return t('contacts.newContact')
  }
})
const deleteDialog = ref(false)
const delIndex = ref(null)
const typeEnums = [
  { title: 'Web', value: 'web' },
  { title: 'Mail', value: 'mail' },
  { title: 'Mobile', value: 'mobile' },
  { title: 'Phone', value: 'phone' },
  { title: 'Fax', value: 'fax' }
]
const privacyEnums = [
  { title: 'Hidden', value: 'hidden' },
  { title: 'Team', value: 'team' },
  { title: 'Client', value: 'client' },
  { title: 'Public', value: 'public' }
]

// edit form
const form = ref(null)
const valid = ref(false)
const formData = reactive({
  type: '',
  value: '',
  privacy: ''
})
const newItemIndex = ref(undefined)
const rules = reactive({
  required: [
    v => !!v || t('forms.required')
  ],
  mail: [
    v => !!v || t('forms.required'),
    v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || t('forms.noValidMail')
  ]
})

// methods
const getContactTypes = (type) => {
  switch (type) {
    case 'mobile':
      return 'mdi-cellphone'
      break;
    case 'phone':
      return 'mdi-phone'
      break;
    case 'web':
      return 'mdi-web'
      break;
    case 'mail':
      return 'mdi-email'
      break;
    case 'fax':
      return 'mdi-fax'
      break;
    default:
      return ''
  }
}
const openEditDialog = (index) => {
  index ? newItemIndex.value = index : newItemIndex.value = undefined
  if (index || index === 0) {
    formData.type = props.contactList[index].type
    formData.value = props.contactList[index].value
    formData.privacy = props.contactList[index].privacy
  } else {
    formData.type = ''
    formData.value = ''
    formData.privacy = ''
  }
  editDialog.value = true
}

const confirmDeleteItem = (index) => {
  // console.log('del item with index', index)
  delIndex.value = index
  deleteDialog.value = true
}

const deleteItem = () => {
  if (delIndex) {
    const newContactList = [...props.contactList]
    newContactList.splice(delIndex.value, 1)
    props.updateFkt(newContactList)
  }
  deleteDialog.value = false
}

const validateForm = async () => {
  const { valid } = await form.value.validate()
  const newContactList = [...props.contactList]
  if (valid) {
    if (newItemIndex.value || newItemIndex.value === 0) {
      newContactList[newItemIndex.value] = { ...formData }
    } else {
      newContactList.push(formData)
    }
    props.updateFkt(newContactList)
    return editDialog.value = false
  }
}
</script>

<style lang="scss" scoped></style>