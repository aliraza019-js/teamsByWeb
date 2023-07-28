import { defineStore } from 'pinia';

export const useTeamsStore = defineStore('Teams', () => {
  const TeamsState = ref([]);
  const loadingTeamsState = ref(false);

  const teams = computed(() => TeamsState);
  const loadingTeams = computed(() => loadingTeamsState);

  const getTeams = () => {
    return new Promise(async (resolve, reject) => {
        loadingTeamsState.value = true;
      myFetch('/v2/teams/', { method: 'GET' })
        .then(res => {
            TeamsState.value = res.data;
          resolve(res.data);
        })
        .catch(() => {
          reject();
        })
        .finally(() => {
            loadingTeamsState.value = false;
        });
    });
  };
  const getTeamsById = (id:any) => {
    return new Promise(async (resolve, reject) => {
        myFetch('/v2/teams/'+id, { method: "GET", })
            .then(res => {
                resolve(res)
            }).catch(() => {
                reject()
            })
    })
    
  };
  const getProjectsByTeamId = (id:any) => {
    return new Promise(async (resolve, reject) => {
        myFetch(`/v2/projects?tid[]=${id}`, { method: "GET", })
            .then(res => {
                resolve(res.data)
            }).catch(() => {
                reject()
            })
    })
    
  };
  const getTeamByTeamId = (id:any) => {
    return new Promise(async (resolve, reject) => {
        myFetch(`/v2/users?tid[]=${id}`, { method: "GET", })
            .then(res => {
                resolve(res.data)
            }).catch(() => {
                reject()
            })
    })
    
  };


  return {

    getTeams,
    teams,
    loadingTeams,
    getTeamsById,
    getProjectsByTeamId,
    getTeamByTeamId
  };
});
