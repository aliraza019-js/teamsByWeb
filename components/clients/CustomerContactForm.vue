<template lang="pug">
ClientOnly
    v-dialog(:model-value="isDialogVisible" max-width="650px" @update:modelValue="$emit('update:isDialogVisible', false)")
        CommonCard(color="lightBlue" :loading="loading")
            template(#title)
                span(class="text-secondary d-flex align-center") {{ $t('personContact.title')}}
                v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
                    v-icon mdi-close
            template(#body)
                v-form(class="d-flex flex-column" ref="form")
                    v-row(v-for="(contact, index) in formData.contacts" :key="contact.type")
                        v-col(cols="12" sm="1" class="pb-0")
                            v-btn(icon size="small" variant="plain" class="mt-2" @click="removeRow(index)")
                                v-icon mdi-close
                        v-col(cols="12" sm="3" class="pb-0")
                            v-select( :items="contactTypes" item-title="text" item-value="value" :label="$t('personContact.type')" variant="solo" v-model="contact.type" :rules="rules.required")
                        v-col(cols="12" sm="5" class="pb-0")
                            v-text-field(:label="$t('personContact.value')" variant="solo" v-model="contact.value" :rules="rules.required")
                        v-col(cols="12" sm="3" class="pb-0")
                            v-select( :items="contactVisibility" item-title="text" item-value="value" :label="$t('personContact.visibility')" variant="solo" v-model="contact.privacy"  :rules="rules.required")
                    v-row(justify="end" class="mt-0" )
                        v-col(cols="2" class="d-flex justify-end")
                            v-btn(color="secondary" @click="addRow")
                                v-icon mdi-plus
                    v-row( class="mt-0" )
                        v-col(cols="12")
                            div(v-if="error" class="text-center error-text") {{ error }}
                    div(class="d-flex justify-center mt-5")
                        v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
    </template>
    
<script setup>
import { useClientStore } from '~/stores/clients'
const props = defineProps({
    isDialogVisible: false,
    client: {}
})

const { updateClient } = useClientStore()

const emit = defineEmits(
    ['update:isDialogVisible', 'refresh']
)
// const {user, updateUserInfo, updateUser}  = useUserStore()
// data
const { t } = useI18n()
const form = ref(null)
const contactTypes = ref([
    { type: 'contact', value: 'phone', text: t('base.phone') },
    { type: 'contact', value: 'mobile', text: t('base.mobile') },
    { type: 'contact', value: 'mail', text: t('base.mail') },
    { type: 'contact', value: 'web', text: t('base.web') },
    { type: 'contact', value: 'fax', text: t('base.fax') },
])
const contactVisibility = ref([
    { value: 'hidden', text: t('base.hidden') },
    { value: 'client', text: t('base.client') },
    { value: 'client', text: t('base.client') },
    { value: 'public', text: t('base.public') },
])
const formData = reactive({
    contacts: [
        { type: null, value: '', privacy: null }
    ],
})
const loading = ref(false)
const disabled = ref(false)
const error = ref('')


// Form Rules
const rules = reactive({
    required: [
        v => !!v || t('required')
    ]
})

// methods
const validate = async () => {
    const { valid } = await form.value.validate()
    if (valid) return submitData()
}
const addRow = (type) => {
    formData.contacts.push({ type: null, value: '', privacy: null })
}
const removeRow = (index) => {
    formData.contacts.splice(index, 1)
}
const submitData = () => {
    loading.value = true
    disabled.value = true
    error.value = ''
    const contacts_types = ['phone', 'mobile', 'mail', 'web', 'fax']
    const contacts = formData.contacts.filter(item => contacts_types.includes(item.type))
    updateClient(props.client._id, { contacts }).then(response => {
        emit('refresh')
        emit('update:isDialogVisible')
    }).catch(err => {
        if (err.response?._data?.message) {
            const errorType = err.response?._data?.message[0].split('.')[0]
            const errorField = err.response?._data?.message[0].split('.')[1]
            let errorMessage = err.response?._data?.message[0].split('.')[2]

            if (errorType === 'social') {
                errorMessage = social[errorField].type + ' ' + errorMessage
                error.value = errorMessage
            }
        }
    }).finally(() => {
        loading.value = false
        disabled.value = false
    })
};
watch(() => props.isDialogVisible, () => {
    if (props.client) {
        const contacts = JSON.parse(JSON.stringify(props.client.contacts))
        formData.contacts = [
            ...contacts,
        ]
    } else {
        formData.contacts = [
            { type: null, value: '', privacy: null }
        ]
    }
})
</script>
    
<style lang="scss" scoped>
.description {
    color: $secondary;
}

.v-input__control {
    border-radius: 25px;
}

:deep(.v-text-field) {

    .v-input__control {
        box-shadow: none;
        border: none;
        background: transparent;
        border-radius: 10px;
    }

    .v-field {
        background-color: #fff !important;
        border-radius: 10px;
    }
}

.error-text {
    color: rgb(183, 28, 28);
}
</style>