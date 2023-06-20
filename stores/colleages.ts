import { defineStore } from 'pinia';

export const useColleaguesStore = defineStore('colleagues', () => {
  const colleaguesState = ref([]);
  const loadingColleaguesState = ref(false);

  const colleagues = computed(() => colleaguesState);
  const loadingColleagues = computed(() => loadingColleaguesState);

  const getColleagues = () => {
    return new Promise(async (resolve, reject) => {
        loadingColleaguesState.value = true;
      myFetch('/v2/users/', { method: 'GET' })
        .then(res => {
     
            colleaguesState.value = res.data;
          resolve(res.data);
        })
        .catch(() => {
          reject();
        })
        .finally(() => {
            loadingColleaguesState.value = false;
        });
    });
  };

  const getColleaguesById = (id:any) => {
    return new Promise(async (resolve, reject) => {
        myFetch('/v2/users/'+id, { method: "GET", })
            .then(res => {
                resolve(res)
            }).catch(() => {
                reject()
            })
    })
}


  return {

    getColleagues,
    colleagues,
    loadingColleagues,
    getColleaguesById
  };
});
