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
            myFetch('/orgs', { method: "GET", })
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


    const addCustomer = (clientId:string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch(`/orgs?cid=${clientId}`, {method: "POST", body: data})
                .then(() => {
                    getCustomers()
                    resolve(true)
                })
        })
    }





    return { addCustomer, getCustomers, loadingCustomer, customers }
})