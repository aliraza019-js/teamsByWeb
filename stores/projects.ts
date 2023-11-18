import { defineStore } from 'pinia';

export const useProjectStore = defineStore('project', () => {
    // user state
    // const defaultState:any = []
    const projectState: any = ref([])

    // loading state
    const loadingProjectState = ref(false)

    // provided states
    const projects = computed(() => projectState)

    const loadingProject = computed(() => loadingProjectState)

    const getProjects = (limit: any, skip: any) => {
        return new Promise(async (resolve, reject) => {
            loadingProjectState.value = true
            myFetch(`/v2/projects?limit=${limit}&skip=${skip}`, { method: "GET", })
                .then(res => {
                    console.log(res)
                    projectState.value = res
                    resolve(res)
                }).catch(() => {
                    reject()
                }).finally(() => {
                    loadingProjectState.value = false

                })
        })
    }

    const getProjectById = (id: any) => {
        return new Promise(async (resolve, reject) => {
            myFetch('/v2/projects/' + id, { method: "GET", })
                .then(res => {
                    resolve(res)
                }).catch(() => {
                    reject()
                })
        })
    }

    const getCommentsByProjectId = (projectId: any) => {
        return new Promise(async (resolve, reject) => {
            myFetch(`/v2/comments?pid=${projectId}&limit=99`, { method: "GET", })
                .then(res => {
                    resolve(res.data)
                }).catch(() => {
                    reject()
                })
        })
    }


    const addProject = (clientId: string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch(`/v2/projects?oid=${clientId}`, { method: "POST", body: data })
                .then((res) => {
                    console.log('res.data._id', res)
                    // getProjects(10)
                    resolve(res)
                }).catch((err) => {
                    console.log('err', err)
                    reject()
                })
        })
    }

    const addComment = (data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch(`/v2/comments`, { method: "POST", body: data })
                .then(() => {
                    resolve(true)
                })
        })
    }

    const updateProjectDescription = (oid: string, data: any) => {
        return new Promise(async (resolve, reject) => {

            myFetch('/v2/projects/' + oid, { method: "PATCH", body: data })
                .then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
        })
    }





    return { addProject, getProjects, loadingProject, projects, getProjectById, updateProjectDescription, getCommentsByProjectId, addComment }
})