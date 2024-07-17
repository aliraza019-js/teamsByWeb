import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', () => {
    const state = reactive({
        previousRouteIdData: null,
    });



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

    const setRouteId = async (previousRouteId: any) => {
        state.previousRouteIdData = previousRouteId;
        console.log('previousRouteIdData', state.previousRouteIdData)
    }

    const getPreviousRouteId = () => {
        return state.previousRouteIdData;
    };





    return { getClientsList, getClientById, updateClient, setRouteId, getPreviousRouteId }
})