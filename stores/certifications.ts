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

    const updateCertification = (data: any, id: string) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/certs/' + id, {method: "PATCH", body: data})
                .then(res => {
                    resolve(res)
                }).catch(() => {
                reject()
            })
        })
    }

    const deleteCertification = (id: string) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/certs/' + id, {method: "DELETE"})
                .then(res => {
                    resolve(res)
                }).catch(() => {
                reject()
            })
        })
    }




    return {certifications, addCertification, getCertifications, updateCertification, deleteCertification}
})