<template lang="pug">
ClientOnly
    v-dialog(:model-value="isDialogVisible" max-width="450px" @update:model-value="$emit('update:isDialogVisible', false)")
        CommonCard(color="lightBlue" :loading="loading")
            template(#title)
                span(class="text-secondary d-flex align-center") {{$t('teams.add')}}
                v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
                    v-icon mdi-close
            template(#body)
                v-form(class="d-flex flex-column" ref="form")
                    v-text-field(density="comfortable" :label="$t('init.tenantName')" variant="solo" v-model="formData.name" :rules="rules.required")
                    div(class="d-flex justify-center mt-5")
                        v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
</template>
    
<script setup>
import { useUserTeamStore } from '~/stores/user-teams'

const props = defineProps({
    isDialogVisible: false,
    clientId: null,
})

const emit = defineEmits(
    ['update:isDialogVisible', 'update:teams']
)

const { addTeam } = useUserTeamStore()
// data
const { t } = useI18n()
const form = ref(null)

const formData = reactive({
    name: '',
})
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

    addTeam(props.clientId, formData).finally(()=>{
        loading.value = false
        disabled.value = false
        emit('update:isDialogVisible', false)
    })
    

};
watch(() => props.isDialogVisible, (newValue) => {
    if (!newValue) {
        formData.name = ''
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
</style>