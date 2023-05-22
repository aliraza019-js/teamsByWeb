<template lang="pug">
v-container
  v-row(class="mb-3")
    v-col(cols="12" sm="4" v-for="(org, index) in customers" :key="index")
      CommonOrgList(:org="org")
</template>

<script setup>
import {orgs} from "@/@fakeDb/database.json";
import {useCustomerStore} from '~/stores/customers'

// page
definePageMeta({
  activeRoute: 'project'
});

const {getCustomers, customers} = useCustomerStore()


onMounted(async () => {
  await getCustomers()
})



</script>