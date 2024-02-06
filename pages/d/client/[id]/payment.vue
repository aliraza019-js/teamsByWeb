<template lang="pug">
v-container(class="pa-0")
    v-row(style="height: 500px" class="overflow-auto scroll-container")
        v-col(cols="12")
            CommonCard
                template(#title)
                    span(class="text-secondary d-flex align-center") {{$t('billing.billingInfo')}}
                    v-btn(icon size="small" variant="plain" color="primaryTextPale" @click="showBillingDailog")
                        v-icon {{payments?.billing ? 'mdi-pencil' : 'mdi-plus'}}
                template(#body)
                    div(v-if="payments?.billing")
                        v-container(class="px-0")
                            span(class="text-primary font-weight-bold text-green font-15 d-flex align-center mt-2 mb-4") {{'Personal Information'}}
                            v-row
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-account")
                                        span(class="text-secondary") First Name
                                        p(class="font-weight-bold mt-2 ml-6 ml-6") {{ payments?.billing?.master?.personNameFirst }}
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-account")
                                        span(class="text-secondary") Last Name
                                        p(class="font-weight-bold mt-2 ml-6") {{ payments?.billing?.master?.personNameFam }}
                            v-row
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-domain")
                                        span(class="text-secondary") Company Name
                                        p(class="font-weight-bold mt-2 ml-6") {{ payments?.billing?.master?.company }}
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-email")
                                        span(class="text-secondary") Email
                                        p(class="font-weight-bold mt-2 ml-6") {{ payments?.billing?.master?.email }}
                        v-container(class="px-0")
                            span(class="text-primary font-weight-bold d-flex font-15 text-green align-center mt-2 mb-4") {{'Address Information'}}
                            v-row
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-city")
                                        span(class="text-secondary") City
                                        p(class="font-weight-bold mt-2 ml-6") {{ payments?.billing?.master?.address?.city }}
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-flag")
                                        span(class="text-secondary") Country Code
                                        p(class="font-weight-bold mt-2 ml-6") {{ payments?.billing?.master?.address?.countryCode }}
                            v-row
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-road-variant")
                                        span(class="text-secondary") Street
                                        p(class="font-weight-bold mt-2 ml-6") {{ payments?.billing?.master?.address?.street }}
                                v-col(cols="6" class="d-flex justify-space-between")
                                    div()
                                        v-icon(color="primaryTextPale" size="small" class="mr-2" icon="mdi-map-marker-radius")
                                        span(class="text-secondary") Zip Code
                                        p(class="font-weight-bold mt-2 ml-6") {{ payments?.billing?.master?.address?.zip }}
                    div(v-else class="d-flex")
                        v-icon(color="primaryTextPale" size="small" class="mt-2 mr-2" icon="mdi-credit-card")
                        p(class="font-weight-bold mt-2") No Billing info added yet
    PaymentsAddOrUpdateBillingInfo(:persistent="true" min-height="500" width="500" :clientId="payments?._id" @show-snack-bar="emitSnackBar" :canUpdate="payments?.billing ? true : false" :payments="payments?.billing?.master" @refresh="fetchPayments"   :isDialogVisible="dialogAddOrUpdateBillingInfo" @update:isDialogVisible="closeBillingDailog")
    CommonSnackbar(v-if="showSnackbar" :message="snackbarMessage" :success="snackbarSuccess")
</template>
      
<script setup>
import { usePaymentStore } from "~/stores/payment";

import { ref, onMounted, defineProps } from 'vue';


const { getPaymentById } = usePaymentStore()
// page
definePageMeta({
    activeRoute: 'team',
});

const emit = defineEmits(
    ['update:isDialogVisible', 'refresh', 'show-snack-bar']
)

const props = defineProps(['clients']);


const localePath = useLocalePath();
const payments = ref([])
const dialogAddOrUpdateBillingInfo = ref(false)
const showSnackbar = ref(false)
const snackbarMessage = ref('')
const snackbarSuccess = ref(false)


/**
 * Shows a snackbar with the given event data.
 *
 * @param {Object} event - The event data.
 */
const emitSnackBar = (event) => {
    // console.log('responseData', event)
    showSnackbar.value = true
    snackbarMessage.value = event.message
    snackbarSuccess.value = event.success
}

const fetchPayments = async () => {
    payments.value = await getPaymentById(props.clients?._id)

}

onMounted(async () => {
    await fetchPayments()
});

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
    showSnackbar.value = false
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
      