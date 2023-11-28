<template lang="pug">
ClientOnly
    v-dialog(:model-value="isDialogVisible" max-width="650px" @update:modelValue="$emit('update:isDialogVisible', false)")
        CommonCard(color="lightBlue" :loading="loading")
            template(#title)
                span(class="text-secondary d-flex align-center") {{ $t('projects.addLocation')}}
                v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
                    v-icon mdi-close
            template(#body)
                v-form(class="d-flex flex-column" ref="form")
                    v-row
                        v-col(cols="12" sm="12" class="pb-0")
                            v-text-field(:label="$t('projects.location.address')" variant="solo" v-model="formData.address" :rules="rules.required")
                        v-col(cols="12" sm="12" class="pb-0")
                            v-text-field(:label="$t('projects.location.street')" variant="solo" v-model="formData.street" :rules="rules.required")
                        v-col(cols="12" sm="12" class="pb-0")
                            v-text-field(:label="$t('projects.location.zip')" variant="solo" v-model="formData.zip" :rules="rules.required")
                    v-row( class="mt-0" )
                        v-col(cols="12")
                            div(v-if="error" class="text-center error-text") {{ error }}
                    v-row( class="mt-0" )
                        v-col(cols="12")
                            label(class="text-center text-secondary") {{ $t('projects.location.ChooseOnMap') }}
                            <div id="map" style="height: 400px;"></div>
                    div(class="d-flex justify-center mt-5")
                        v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
</template>
        
<script setup>
import { useGoogleMap } from '@/pages/d/project/org/googleMap';
import { useCustomerStore } from '~/stores/customers'
const props = defineProps({
    isDialogVisible: false,
    customer: {}
})

const { updateCustomer } = useCustomerStore()

const emit = defineEmits(
    ['update:isDialogVisible', 'refresh']
)
// const {user, updateUserInfo, updateUser}  = useUserStore()
// data
const apikey = 'AIzaSyDnyubLPHsExGa9cPVshPJMhBQRjl0BIZs';
const { t } = useI18n()
const form = ref(null)
const formData = reactive({})
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
const submitData = () => {
    loading.value = true
    disabled.value = true
    error.value = ''
    const social_types = ['linkedin', 'xing', 'facebook', 'instagram', 'tiktok', 'twitter', 'other',]
    const social = formData.social.filter(item => social_types.includes(item.type))
    updateCustomer(props.customer._id, { social }).then(response => {
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
    if (props.customer) {
        const social = JSON.parse(JSON.stringify(props.customer.social))
        formData.social = [
            ...social
        ]
    } else {
        formData.social = [
            { type: null, value: '', privacy: null }
        ]
    }
})
const { map } = useGoogleMap(apikey);
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