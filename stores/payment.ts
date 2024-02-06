import { defineStore } from 'pinia';

export const usePaymentStore = defineStore('payment', () => {



    const getPaymentById = (id: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/v2/billing/master/' + id, { method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(() => {
                    reject()
                })
        })
    }

    const addPaymentByClientId = (id: any, data: any) => {
        return new Promise(async (resolve, reject) => {
            myFetch(`/v2/billing/master/` + id, { method: "POST", body: data })
                .then(res => {
                    resolve(res.data)
                }).catch(() => {
                    reject()
                })
        })

    };

    const updatePaymentByClientId = (id: string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/v2/billing/master/' + id, { method: "PUT", body: data })
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    }





    return { getPaymentById, addPaymentByClientId, updatePaymentByClientId }
})