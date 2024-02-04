<template lang="pug">
v-container(class="pa-0")
    v-row(style="height: 500px" class="overflow-auto scroll-container")
        v-col(cols="12")
            CommonCard
                template(#title)
                    span(class="text-secondary d-flex align-center") {{$t('billing.billingInfo')}}
                    v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="showBillingDailog")
                        v-icon mdi-plus
                template(#body)
                    p(class="pt-3") {{ clients?.desc }}
    PaymentsAddOrUpdateBillingInfo(:persistent="true" min-height="500" width="500"   :isDialogVisible="dialogAddOrUpdateBillingInfo" @update:isDialogVisible="closeBillingDailog")
</template>
      
<script setup>

import { ref, onMounted, defineProps } from 'vue';



// page
definePageMeta({
    activeRoute: 'team',
});

const emit = defineEmits(
    ['update:isDialogVisible', 'refresh', 'show-snack-bar']
)

const props = defineProps(['clients']);


const localePath = useLocalePath();

const dialogAddOrUpdateBillingInfo = ref(false)
const editAbout = ref(false);
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarSuccess = ref(false)


/**
 * Shows a snackbar with the given event data.
 *
 * @param {Object} event - The event data.
 */
const showSnackBar = (event) => {
    // console.log('responseData', event)
    showSnackbar.value = true
    snackbarMessage.value = event.message
    snackbarSuccess.value = false
}

/**
 * Refreshes the data of the component.
 *
 * @param {any} updatedData - The updated data to be displayed.
 * @return {void} This function does not return a value.
 */
const refresh = (updatedData) => {
    emit('refresh');
    dialogAddOrUpdateBillingInfo.value = false
};


const showBillingDailog = () => {
    dialogAddOrUpdateBillingInfo.value = true
}

const closeBillingDailog = () => {
    dialogAddOrUpdateBillingInfo.value = false
}

</script>
      
<style lang="scss" scoped>
.project-status {
    height: 36px;

    p {
        font-size: 10px;
    }
}
</style>
      