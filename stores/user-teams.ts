import { defineStore } from 'pinia';

export const useUserTeamStore = defineStore('user-teams', () => {
     // user state
    // const defaultState:any = []
    const teamState:any = ref([])

    // loading state
    const loadingUserState = ref(false)

    // provided states
    const userTeams = computed(() => teamState)

    const loadingTeams = computed(() => loadingUserState)

    const getUserTeams = () => {
        return new Promise(async (resolve, reject) => {
            loadingUserState.value = true
            myFetch('/users-teams', { method: "GET", })
                .then(res => {
                    // console.log(res)
                    teamState.value = res
                    resolve(res)
                }).catch(() => {
                    reject()
                }).finally(()=>{
                    loadingUserState.value = false

                })
        })
    }


    const addTeam = (clientId:string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch(`/teams?cid=${clientId}`, {method: "POST", body: data})
                .then(() => {
                    getUserTeams()
                    resolve(true)
                })
        })
    }





    return { getUserTeams, userTeams, addTeam, loadingTeams }
})