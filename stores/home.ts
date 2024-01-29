import { defineStore } from 'pinia';

export const userHomeStore = defineStore('home', () => {
    // user state
    // const defaultState:any = []
    const homenews: any = ref([])

    // loading state
    const homeloadingstate = ref(false)

    // provided states
    const news = computed(() => homenews)

    const loadingHome = computed(() => homeloadingstate)

    const getAllnews = (limit: any, skip: any) => {
        return new Promise(async (resolve, reject) => {
            homeloadingstate.value = true
            myFetch(`/v2/news?limit=${limit}&skip=${skip}`, { method: "GET", })
                .then(res => {
                    console.log('NEWS RES', res.data)
                    homenews.value = res
                    resolve(res)
                }).catch(() => {
                    reject()
                }).finally(() => {
                    homeloadingstate.value = false

                })
        })
    };

    const getCommentsById = (relationalId: any,) => {
        return new Promise(async (resolve, reject) => {
            myFetch(`/v2/comments?rid=${relationalId}&limit=99`, { method: "GET", })
                .then(res => {
                    resolve(res.data)
                }).catch(() => {
                    reject()
                })
        })
    }


    return {
        getAllnews,
        getCommentsById
    }
})