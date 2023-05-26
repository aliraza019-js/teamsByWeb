import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
     // user state
    // const defaultState:any = []
    const projectState:any = ref([])

    // loading state
    const loadingProjectState = ref(false)

    // provided states
    const projects = computed(() => projectState)

    const loadingProject = computed(() => loadingProjectState)

    const getProjects = () => {
        return new Promise(async (resolve, reject) => {
            loadingProjectState.value = true
            myFetch('/projects', { method: "GET", })
                .then(res => {
                    console.log(res)
                    projectState.value = res.data
                    resolve(res)
                }).catch(() => {
                    reject()
                }).finally(()=>{
                    loadingProjectState.value = false

                })
        })
    }

    const getProjectById = (id:any) => {
        return new Promise(async (resolve, reject) => {
            myFetch('/projects/'+id, { method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(() => {
                    reject()
                })
        })
    }


    const addProject = (clientId:string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch(`/projects?cid=${clientId}`, {method: "POST", body: data})
                .then(() => {
                    getProjects()
                    resolve(true)
                })
        })
    }





    return { addProject, getProjects, loadingProject, projects, getProjectById }
})