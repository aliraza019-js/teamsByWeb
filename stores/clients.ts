import {defineStore} from 'pinia';

export const useClientStore = defineStore('client', () => {

   

     const getClientsList = () => {
        return new Promise(async (resolve, reject) => {

            myFetch('/clients', {method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(()=>{
                    reject()
            })
        })
    }

   



    return {getClientsList, }
})