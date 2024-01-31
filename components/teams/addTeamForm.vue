<template lang="pug">
    ClientOnly
        v-dialog(:model-value="isDialogVisible" max-width="450px" @update:model-value="$emit('update:isDialogVisible', false)")
            CommonCard(color="lightBlue" :loading="loading")
                template(#title)
                    span(class="text-secondary d-flex align-center") Add Team
                    v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
                        v-icon mdi-close
                template(#body)
                    v-form(class="d-flex flex-column" ref="form")
                        v-select(v-if="clients.length > 0" :label="$t('projects.selectClient')" item-title="name" item-value="_id" variant="solo" :items="clients" v-model="clientId" :rules="rules.required")
                        v-text-field(density="comfortable" :label="$t('init.tenantName')" variant="solo" v-model="formData.name" :rules="rules.required")
                        div(class="d-flex justify-center mt-5")
                            v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
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
    name: '',
})
const clientId = ref(null)
const loading = ref(false)
const disabled = ref(false)
const clients = ref([])

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
const submitData = () => {
    loading.value = true
    disabled.value = true
    addTeamByClientId(clientId.value, formData).finally(() => {
        loading.value = false
        disabled.value = false
        formData.name = ''
        clientId.value = null
        emit('update:isDialogVisible', false)
    })

};

watch(() => props.isDialogVisible, (newValue) => {
    if (!newValue) {
        formData.name = ''
    }
})

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