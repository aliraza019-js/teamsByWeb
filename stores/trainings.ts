import {defineStore} from 'pinia';

export const useTrainingStore = defineStore('training', () => {

    const defaultState = {
        trainings: []
    }
    const trainingsState = reactive(defaultState)

    // provided states
    const trainings = computed(() => trainingsState)


    const addTraining = (data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/trainings', {method: "POST", body: data})
                .then(res => {
                    resolve(res)
                }).catch(() => {
                reject()
            })
        })
    }

    const getTrainings = () => {
        return new Promise(async (resolve, reject) => {

            myFetch('/trainings', {method: "GET",})
                .then(res => {
                    resolve(res)
                }).catch(() => {
                reject()
            })
        })
    }

    const updateTraining = (data: any, id: string) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/trainings/' + id, {method: "PATCH", body: data})
                .then(res => {
                    resolve(res)
                }).catch(() => {
                reject()
            })
        })
    }

    const deleteTraining = (id: string) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/trainings/' + id, {method: "DELETE"})
                .then(res => {
                    resolve(res)
                }).catch(() => {
                reject()
            })
        })
    }


    return {trainings, addTraining, getTrainings, updateTraining, deleteTraining}
})