import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', () => {



    const getClientsList = () => {
        return new Promise(async (resolve, reject) => {

            myFetch('/v2/clients', { method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(() => {
                    reject()
                })
        })
    }

    const getClientById = (id: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/v2/clients/' + id, { method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(() => {
                    reject()
                })
        })
    }

    const updateClient = (id: string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/v2/clients/' + id, { method: "PATCH", body: data })
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    }





    return { getClientsList, getClientById, updateClient }
})