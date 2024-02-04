<template lang="pug">
    ClientOnly
        v-dialog(
            :model-value="isDialogVisible"
            max-width="450px"
            @update:model-value="$emit('update:isDialogVisible', false)"
        )
            CommonCard(color="lightBlue" :loading="loading")
                template(#title)
                    span(class="text-secondary d-flex align-center") Add Billing Information
                    v-btn(
                        icon
                        size="small"
                        variant="plain"
                        color="primaryTextPale"
                        @click="$emit('update:isDialogVisible', false)"
                    )
                        v-icon mdi-close
                template(#body)
                    v-form(class="d-flex flex-column" ref="form")
                        // Billing Information Subheading
                        v-subheader(class="text-h6 text-primary mb-4") Personal Information

                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.company')"
                            variant="solo"
                            v-model="formData.company"
                            :rules="rules.required"
                        )
                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.firstName')"
                            variant="solo"
                            v-model="formData.personNameFirst"
                            :rules="rules.required"
                        )
                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.lastName')"
                            variant="solo"
                            v-model="formData.personNameFam"
                            :rules="rules.required"
                        )
                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.email')"
                            variant="solo"
                            v-model="formData.email"
                            :rules="rules.email"
                        )

                        v-subheader(class="text-h6 text-primary mb-4") Address Information

                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.street')"
                            variant="solo"
                            v-model="formData.address.street"
                            :rules="rules.street"
                        )
                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.zip')"
                            variant="solo"
                            v-model="formData.address.zip"
                            :rules="rules.zip"
                        )
                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.city')"
                            variant="solo"
                            v-model="formData.address.city"
                            :rules="rules.city"
                        )
                        v-text-field(
                            density="comfortable"
                            :label="$t('billing.countryCode')"
                            variant="solo"
                            v-model="formData.address.countryCode"
                            :rules="rules.countryCode"
                        )

                    div(class="d-flex justify-center mt-5")
                        v-btn(
                            rounded="pill"
                            size="large"
                            color="secondary"
                            width="65%"
                            @click="validate"
                            :disabled="disabled"
                            ) Save
  </template>
<script setup>
import { useClientStore } from '~/stores/clients'
import { useTeamsStore } from '~/stores/teams'
import { useCustomerStore } from '~/stores/customers'

const props = defineProps({
    isDialogVisible: false,
    // clientId: null,
})

const emit = defineEmits(
    ['update:isDialogVisible']
)

const { getClientsList } = useClientStore()
const { addCustomer } = useCustomerStore()
const { addTeamByClientId } = useTeamsStore()
// data
const { t } = useI18n()
const form = ref(null)

const formData = reactive({
    // name: '',
    company: "TestCompany 27Apps",
    email: "billing@27apps.com",
    address: {
        street: "Freundallee 23",
        zip: "30179",
        city: "Hannover",
        countryCode: "DE"
    },
    personNameFirst: "Max",
    personNameFam: "Mustermann"
})
const clientId = ref(null)
const loading = ref(false)
const disabled = ref(false)
const clients = ref([])

// Form Rules
const rules = reactive({
    required: [
        (v) => !!v || t('required')
    ],
    email: [
        (v) => !!v || t('required'),
        (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || t('invalid Email')
    ],
    zip: [
        (v) => !!v || t('required'),
        (v) => /^\d{5}$/.test(v) || t('invalid Zip')
    ],
    street: [
        (v) => !!v || t('required')
    ],
    city: [
        (v) => !!v || t('required')
        // (v) => v && v.split(' ').length <= 2 || t('invalid City')
    ],
    countryCode: [
        (v) => !!v || t('required'),
        (v) => (v && v.split(' ').length <= 3) || t('invalidCountryCode')
    ]
});


// methods
const validate = async () => {
    const { valid } = await form.value.validate()
    if (valid) return submitData()
}
// const submitData = () => {
//     loading.value = true
//     disabled.value = true
//     addTeamByClientId(clientId.value, formData).finally(() => {
//         loading.value = false
//         disabled.value = false
//         formData.name = ''
//         clientId.value = null
//         emit('update:isDialogVisible', false)
//     })

// };

// watch(() => props.isDialogVisible, (newValue) => {
//     if (!newValue) {
//         formData.name = ''
//     }
// })

onMounted(async () => {
    const response = await getClientsList()
    clients.value = response.data
    console.log('clients', clients.value)
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
</style>