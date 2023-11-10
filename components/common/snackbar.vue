<template lang="pug">
v-snackbar(:color="color" :timeout="timeout" v-model="snackbar" @input="onSnackbarClose") {{ message }}
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        message: String,
        success: Boolean,
    },
    data() {
        return {
            snackbar: true,
            timeout: 1000, // Set your preferred timeout
            color: this.success ? 'success' : 'error',
        };
    },
    mounted() {
        console.log('message', this.message)
    },
    methods: {
        onSnackbarClose() {
            // Optional: You can emit an event or perform some action when the snackbar is closed.
        },
    },
});
</script>
<style>
.message {
    color: white !important;
}
</style>
  