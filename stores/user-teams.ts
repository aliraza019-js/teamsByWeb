import {defineStore} from 'pinia';

export const useUserTeamStore = defineStore('user-teams', () => {

     const getUserTeams = () => {
        return new Promise(async (resolve, reject) => {

            myFetch('/users-teams', {method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(()=>{
                    reject()
            })
        })
    }





    return { getUserTeams}
})