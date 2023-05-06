<template lang="pug">
ClientOnly
  v-dialog(:model-value="props.isDialogVisible" max-width="450px" @update:modelValue="$emit('update:isDialogVisible', false)")
    CommonCard(color="lightBlue")
      template(#title)
        span(class="text-secondary d-flex align-center") {{$t('base.areYouSureToDelete')}}
        v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="$emit('update:isDialogVisible', false)")
          v-icon mdi-close
      template(#body)
        div(class="d-flex justify-space-between mt-5")
          v-btn(rounded="pill" size="large" variant="text" color="secondary"  @click="cancel" ) {{$t('base.cancel')}}
          v-btn(rounded="pill" size="large" color="secondary"  @click="confirm")  {{$t('base.confirm')}}
</template>

<script setup>

const props = defineProps({
    isDialogVisible: false,
})

const emit = defineEmits(
    ['update:isDialogVisible', 'update:confirm']
)
const cancel = ()=>{
    emit('update:isDialogVisible', false)
}
const confirm = ()=>{
    emit('update:confirm')
    emit('update:isDialogVisible', false)

}
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