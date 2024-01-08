import { defineStore } from 'pinia';

export const useCustomerStore = defineStore('customer', () => {
     // user state
    // const defaultState:any = []
    const customerState:any = ref([])

    // loading state
    const loadingCustomerState = ref(false)

    // provided states
    const customers = computed(() => customerState)

    const loadingCustomer = computed(() => loadingCustomerState)

    const getCustomers = () => {
        return new Promise(async (resolve, reject) => {
            loadingCustomerState.value = true
            myFetch('/v2/orgs', { method: "GET", })
                .then(res => {
                    console.log(res)
                    customerState.value = res.data
                    resolve(res)
                }).catch(() => {
                    reject()
                }).finally(()=>{
                    loadingCustomerState.value = false

                })
        })
    }

    const getCustomertById = (id:any) => {
        return new Promise(async (resolve, reject) => {
            myFetch('/v2/orgs/'+id, { method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(() => {
                    reject()
                })
        })
    }

    const addCustomer = (clientId:string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch(`/v2/orgs?cid=${clientId}`, {method: "POST", body: data})
                .then(() => {
                    getCustomers()
                    resolve(true)
                })
        })
    }

    const updateCustomer = (oid:string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/v2/orgs/'+oid, {method: "PATCH", body: data})
                .then(res => {
                    resolve(res)
                }).catch(err=>{
                    reject(err)
                })
        })
    }

    return { addCustomer, getCustomers, loadingCustomer, customers, getCustomertById, updateCustomer }
})