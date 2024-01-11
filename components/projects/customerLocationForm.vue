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
                            v-text-field(:label="$t('projects.location.address')" variant="solo" v-model="formData.streetName" :rules="rules.required")
                        v-col(cols="12" sm="12" class="pb-0")
                            v-text-field(:label="$t('projects.location.street')" variant="solo" v-model="formData.streetNumber" :rules="rules.required")
                        v-col(cols="12" sm="12" class="pb-0")
                            v-text-field(:label="$t('projects.location.city')" variant="solo" v-model="formData.city" :rules="rules.required")
                        v-col(cols="12" sm="12" class="pb-0")
                            v-text-field(:label="$t('projects.location.country')" variant="solo" v-model="formData.country" :rules="rules.required")
                        v-col(cols="12" sm="12" class="pb-0")
                            v-text-field(:label="$t('projects.location.zip')" variant="solo" v-model="formData.postalCode" :rules="rules.required")
                    v-row( class="mt-0" )
                        v-col(cols="12")
                            div(v-if="error" class="text-center error-text") {{ error }}
                    v-row( class="my-1" )
                        v-expansion-panels(inset class="expansion-panel-current-location")
                            v-expansion-panel(:title="$t('projects.location.currentLocation')" @click="handlePanelToggle")
                                CommonGoogleMaps(v-if="isPanelOpen" :placeData="currentLocation" :apiKey="apikey")
                            //- p {{ currentLocation }}
                            //- <div id="currentMap" style="height: 400px;"></div>
                            //- span(class="text-secondary my-4 d-flex align-center") {{ $t('projects.location.ChooseOnMap') }}
                    div(class="d-flex justify-center mt-5")
                        v-btn(rounded="pill" size="large" color="secondary" width="65%" @click="validate" :disabled="disabled") Save
</template>
        
<script setup>
// import { useCurrentLocation } from '@/pages/d/project/org/currentLocation';

import { useCustomerStore } from '~/stores/customers'
const props = defineProps({
    isDialogVisible: false,
    customer: {},
})
const isPanelOpen = ref(false)


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
const currentLocation = ref({})

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
    let orgUpdate = {
        address: {
            ...formData
        },
        geometry: {
            ...currentLocation.value,
            location_type: "ROOFTOP"
        }
    }
    updateCustomer(props.customer._id, {
        address: {
            source: "manual",
            address: orgUpdate.address,
            geometry: orgUpdate.geometry,
            privacy: "team",
            type: "private",
            isVerified: true,
        }
    }).then(response => {
        // console.log('updatedData', response.address.geometry)
        if (response.status == 400) {
            emit('show-snack-bar', response)
        }
        if (response.address.geometry) {
            emit('refresh', response.address.geometry)
        }
        emit('update:isDialogVisible')
    }).catch(err => {
        if (err.response?._data?.message) {
            const errorType = err.response?._data?.message[0].split('.')[0]
            const errorField = err.response?._data?.message[0].split('.')[1]
            let errorMessage = err.response?._data?.message[0].split('.')[2]
        }
    }).finally(() => {
        loading.value = false
        disabled.value = false
    })
};

function handlePanelToggle() {
    isPanelOpen.value = !isPanelOpen.value
    // console.log(' handlePanelToggle(value) ', isPanelOpen.value)
}

onMounted(() => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let location = {}
                location = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                }
                currentLocation.value = { location: location }
                // console.log('currentLocation', currentLocation.value)

            },
            (error) => {
                console.error('Error getting user location:', error.message);
            }
        );
    } else {
        console.error('Geolocation is not supported by your browser.');
    }
});


</script>
        
<style lang="scss">
.description {
    color: $secondary;
}

.expansion-panel-current-location.v-expansion-panels {
    width: 600px !important;
    margin: 0px auto !important;
    height: 53px !important;

    .v-expansion-panel {
        .v-expansion-panel-title {
            padding: 16px 16px !important;
        }
    }
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