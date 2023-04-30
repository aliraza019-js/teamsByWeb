import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {

  // user state
  const defaultState = {
    givenName: '',
    familyName: '',
    title: '',
    desc: '',
    profileImage: {
      id: '',
      thumbnail: '',
      url: 'https://ik.imagekit.io/teamstage/placeholder/avatar-1606939_1280_qC6Wn0jVd.png?tr=h-50,w-50'
    },
    contacts: []
  }
  const userState = reactive(defaultState)

  // loading state
  const loadingUserState = ref(false)

  // provided states
  const user = computed(() => userState)
  const loadingUser = computed(() => loadingUserState)

  // provided methods
  const updateUser = () => {
    getUser()
  }

  const setLoadingUser = () => {
    loadingUserState.value = true
  }

  const getUser = async () => {
    const localePath = useLocalePath()

    try {
      loadingUserState.value = true
      const res: any = await myFetch('/users', { method: 'GET', server: false })
      console.log('got the user', res)
      loadingUserState.value = false

      // handling case, when no family name is set
      if (!res.familyName) {
        return navigateTo(localePath('/init/user'))
      }

      // handling case when no clients are set
      if (!res.clients || res.clients.length < 1) {
        return navigateTo(localePath('/init'))
      }

      // setting user properties
      userState.givenName = res.givenName || ''
      userState.familyName = res.familyName
      userState.profileImage = res.profileImage || {
        id: '',
        thumbnail: '',
        url: 'https://ik.imagekit.io/teamstage/placeholder/avatar-1606939_1280_qC6Wn0jVd.png?tr=h-50,w-50'
      }
      userState.title = res.title || ''
      userState.desc = res.desc || ''
      userState.contacts = res.contacts || []
    }

    catch (err: any) {
      // if the users registers, there is no user in the ts database, therefor the server responses with 404
      // by calling /auth/register the user is initially created in the ts db
      if (err.status == 404) {
        await myFetch('/auth/register', { method: 'GET', server: false })
        return navigateTo(localePath('/init/user'))
      }
    }
  }

  return { user, loadingUser, setLoadingUser, updateUser }
})