import {defineStore} from 'pinia';

export const useCertificationStore = defineStore('certification', () => {

    const defaultState = {
      certifications: []
    }
    const certificationsState = reactive(defaultState)

    // provided states
    const certifications = computed(() => certificationsState)


    const addCertification = (data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/certs', {method: "POST", body: data})
                .then(res => {
                    resolve(res)
                }).catch(()=>{
                    reject()
            })
        })
    }

     const getCertifications = () => {
        return new Promise(async (resolve, reject) => {

            myFetch('/certs', {method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(()=>{
                    reject()
            })
        })
    }





    return {certifications, addCertification, getCertifications}
})