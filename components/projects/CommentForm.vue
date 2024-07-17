<template lang="pug">
ClientOnly
v-dialog(:model-value="props.isCommentDialog" :max-width="`${width}px`" :min-height="`${minHeight}px`" @update:modelValue="$emit('update:isCommentDialog', false)")
    CommonCard(color="lightBlue" :loading="loading")
        template(#title)
            span(class="text-secondary d-flex align-center") {{$t('projects.addComment')}}
            v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isCommentDialog', false)")
                v-icon mdi-close
        template(#body)
            v-form(class="d-flex flex-column" ref="form")
                v-textarea(density="comfortable" :label="$t('account.desc')" variant="solo" :rules="rules.required" v-model="formData.desc")
                div(class="d-flex justify-center mt-5")
                    v-btn(rounded="pill" size="large" color="secondary" width="65%" :loading="loading" :disabled="disabled" @click="validate") Save
</template>
    
<script setup>
import { useProjectStore } from '~/stores/projects'
const props = defineProps({
    isCommentDialog: false,
    persistent: true,
    editItem: {},
    projectId: null,
    relId: null,
    minHeight: 500,
    width: 500
})


const emit = defineEmits(
    ['update:isCommentDialog']
)

const { addComment } = useProjectStore()
// data
const { t } = useI18n()
const form = ref(null)
const modalDialog = ref(props.isCommentDialog)
const formData = reactive({
    desc: '',
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
    let commentsPayload = {
        text: formData.desc,
        relId: props.relId,
        type: 'person'
    }
    addComment({ ...commentsPayload }).then(response => {
        emit('update:comments', response)
        emit('update:isCommentDialog')
    }).finally(() => {
        loading.value = false
        disabled.value = false
    })
}


// };
watch(() => props.isCommentDialog, (newValue, oldValue) => {
    formData.desc = ''
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