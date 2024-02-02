<template lang="pug">
    ClientOnly
        v-dialog(:model-value="isDialogVisible" max-width="450px" @update:model-value="$emit('update:isDialogVisible', false)")
            CommonCard(color="lightBlue" :loading="loading")
                template(#title)
                    span(class="text-secondary d-flex align-center") Add Team Member
                    v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
                        v-icon mdi-close
                template(#body)
                    span(class="text-black d-flex align-center") Invite Team Member
    </template>
        
<script setup>

const props = defineProps({
    isDialogVisible: false,
    // clientId: null,
})

const emit = defineEmits(
    ['update:isDialogVisible']
)

const { t } = useI18n()

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