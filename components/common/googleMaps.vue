<template lang="pug">
GoogleMap(:api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="15")
    Marker(:options="markerOptions")
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';

const props = defineProps(['placeData', 'apiKey']);
const center = ref({ lat: props.placeData && props.placeData.location.lat, lng: props.placeData && props.placeData.location.lng });
const markerOptions = ref({
    position: center.value,
    title: 'Location',
});
</script>
