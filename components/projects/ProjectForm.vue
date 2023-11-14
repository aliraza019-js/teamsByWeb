<template lang="pug">
ClientOnly
    v-dialog(:model-value="isDialogVisible" max-width="450px" @update:model-value="$emit('update:isDialogVisible', false)")
        CommonCard(color="lightBlue" :loading="loading")
            template(#title)
                span(class="text-secondary d-flex align-center") {{$t('projects.addProject')}}
                v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
                    v-icon mdi-close
            template(#body)
                v-form(class="d-flex flex-column" ref="form")
                    v-select(:label="$t('projects.selectCustomer')" item-title="name" item-value="_id" variant="solo" :items="customers" v-model="clientId" :rules="rules.required")
                    v-text-field(density="comfortable" :label="$t('projects.projectName')" variant="solo" v-model="formData.name" :rules="rules.required")
                    div(class="d-flex justify-center mt-5")
                        v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
        CommonSnackbar(v-if="showSnackbar" :message="snackbarMessage" :success="snackbarSuccess")
</template>
    
<script setup>
import { useCustomerStore } from '~/stores/customers'
import { useProjectStore } from '~/stores/projects'
import { useRouter } from 'vue-router';
const props = defineProps({
    isDialogVisible: false,
    // clientId: null,
})
const showError = ref('')
const router = useRouter();
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarSuccess = ref(false)

const emit = defineEmits(
    ['update:isDialogVisible']
)
const { addProject } = useProjectStore()
const { customers, getCustomers } = useCustomerStore()
// data
const { t } = useI18n()
const form = ref(null)

const formData = reactive({
    name: '',
})
const clientId = ref('')
const loading = ref(false)
const disabled = ref(false)

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
    addProject(clientId.value, formData).then(response => {
        console.log('response addProject', response)
        console.log('response status', response.status)
        if (response.status === 400) {
            showSnackbar.value = true
            snackbarMessage.value = response.message
            snackbarSuccess.value = false
            emit('update:isError', response.message)
        } else {
            router.push(`/d/project/project/${response._id}/general`)
        }
        setTimeout(() => {
            emit('update:isDialogVisible', false)
        }, 1000);
    }).finally(() => {
        loading.value = false
        disabled.value = false
        formData.name = ''
        clientId.value = null
    }).catch(() => {
        console.log('err', err)
    })

};

watch(() => props.isDialogVisible, (newValue) => {
    if (!newValue) {
        showSnackbar.value = false
        snackbarMessage.value = ''
        formData.name = ''
    }
})


onMounted(() => {
    console.log('customers abc', customers)
    getCustomers()
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