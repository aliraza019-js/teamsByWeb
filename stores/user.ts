import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const userObj = reactive({
    givenName: '',
    familyName: '',
    title: '',
    desc: '',
    profileImage: {
      id: '',
      thumbnail: '',
      url: 'https://ik.imagekit.io/teamstage/placeholder/avatar-1606939_1280_qC6Wn0jVd.png?tr=h-50,w-50'
    }
  })

  const user = computed(() => userObj)

  const updateUser = () => {
    getUser()
  }

  const getUser = async () => {
    const localePath = useLocalePath()

    try {
      const res: any = await myFetch('/users', { method: 'GET', server: false })
      console.log('got user', res)

      // handling case, when no family name is set
      if (!res.familyName) {
        return navigateTo(localePath('/init/user'))
      }

      // handling case when no clients are set
      if (!res.clients || res.clients.length < 1) {
        return navigateTo(localePath('/init'))
      }

      // setting user properties
      if (res.givenName) userObj.givenName = res.givenName
      if (res.familyName) userObj.familyName = res.familyName
      if (res.profileImage) userObj.profileImage = res.profileImage
      if (res.title) userObj.title = res.title
      if (res.desc) userObj.desc = res.desc
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

  return { user, updateUser }
})