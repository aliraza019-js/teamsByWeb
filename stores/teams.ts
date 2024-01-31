import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('Teams', () => {
  const TeamsState = ref([]);
  const loadingTeamsState = ref(false);

  const teams = computed(() => TeamsState);
  const loadingTeams = computed(() => loadingTeamsState);

  const getTeams = (limit: any, skip: any) => {
    return new Promise(async (resolve, reject) => {
      loadingTeamsState.value = true;
      myFetch(`/v2/teams?limit=${limit}&skip=${skip}`, { method: 'GET' })
        .then(res => {
          TeamsState.value = res;
          resolve(res);
        })
        .catch(() => {
          reject();
        })
        .finally(() => {
          loadingTeamsState.value = false;
        });
    });
  };
  const getTeamsById = (id: any) => {
    return new Promise(async (resolve, reject) => {
      myFetch('/v2/teams/' + id, { method: "GET", })
        .then(res => {
          resolve(res)
        }).catch(() => {
          reject()
        })
    })

  };
  const getProjectsByTeamId = (id: any) => {
    return new Promise(async (resolve, reject) => {
      myFetch(`/v2/projects?tid[]=${id}`, { method: "GET", })
        .then(res => {
          resolve(res.data)
        }).catch(() => {
          reject()
        })
    })

  };
  const addTeamByClientId = (id: any, data: any) => {
    return new Promise(async (resolve, reject) => {
      myFetch(`/v2/teams?cid=${id}`, { method: "POST", body: data })
        .then(res => {
          resolve(res.data)
        }).catch(() => {
          reject()
        })
    })

  };
  const getTeamByTeamId = (id: any) => {
    return new Promise(async (resolve, reject) => {
      myFetch(`/v2/users?tid[]=${id}`, { method: "GET", })
        .then(res => {
          resolve(res.data)
        }).catch(() => {
          reject()
        })
    })

  };

  const updateTeam = (id:string, data: any) => {
    return new Promise(async (resolve, reject) => {

        myFetch('/v2/teams/'+id, {method: "PATCH", body: data})
            .then(res => {
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
    })
}


  return {
    addTeamByClientId,
    getTeams,
    updateTeam,
    teams,
    loadingTeams,
    getTeamsById,
    getProjectsByTeamId,
    getTeamByTeamId
  };
});
