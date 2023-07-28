import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useUserStore } from "./user";

export const useAuthStore = defineStore('auth', () => {
  const defaultState = {
    isLoggedIn: false,
    uid: undefined,
    accessToken: undefined,
    email: undefined
  }

  const authObj = reactive({...defaultState})

  const auth = computed(() => authObj)

  const setAuth = (obj: any) => {
    if (!obj || !obj.accessToken) {
      return Object.assign(authObj, defaultState)
    }
    if (obj.accessToken) {
      authObj.accessToken = obj.accessToken
      authObj.isLoggedIn = true
    }
    if (obj.uid) authObj.uid = obj.uid
    if (obj.email) authObj.email = obj.email
  }

  const initAuth = async () => {
    const auth = getAuth();
    const { updateUser } = useUserStore()
    const localePath = useLocalePath()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(user)
        updateUser()
        // init firebase messaging
        fcmInit()
      } else {
        setAuth(user)
        navigateTo(localePath('/auth/sign-in'))
      }
    })
    // await fcmInit()
  }

  const signOut = () => {
    const localePath = useLocalePath()
    const auth = getAuth()
    Object.assign(authObj, defaultState)
    auth.signOut()
    navigateTo(localePath('/auth/sign-in'))
  }

  return { auth, setAuth, initAuth, signOut }

})