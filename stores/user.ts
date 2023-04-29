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
    const res: any = await myFetch('/users', { method: 'GET', server: false })
    console.log('about to update the user store', res)
    if (res.givenName) userObj.givenName = res.givenName
    if (res.familyName) userObj.familyName = res.familyName
    if (res.profileImage) userObj.profileImage = res.profileImage
    if (res.title) userObj.title = res.title
    if (res.desc) userObj.desc = res.desc
  }

  return { user, updateUser }
})