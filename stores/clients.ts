import {defineStore} from 'pinia';

export const useClientStore = defineStore('client', () => {

   

     const getClientsList = () => {
        return new Promise(async (resolve, reject) => {

            myFetch('/clients', {method: "GET", })
                .then(res => {
                    console.log('asd', res.data)
                    resolve(res)
                }).catch(()=>{
                    reject()
            })
        })
    }

   



    return {getClientsList, }
})