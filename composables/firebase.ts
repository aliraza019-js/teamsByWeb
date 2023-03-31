import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
  OAuthProvider,
} from 'firebase/auth';
import { useUsersStore } from '~~/stores/users'

export const fbCreateUser = async (mail: string, pwd: string): Promise<any> => {
  const auth = getAuth();
  try {
    return await createUserWithEmailAndPassword(auth, mail, pwd);
  }
  catch (err) {
    console.log('err', err);
    throw err;
  }
}

export const fbSignInWithMail = async (mail: string, pwd: string): Promise<any> => {
  const auth = getAuth();
  try {
    return await signInWithEmailAndPassword(auth, mail, pwd);
  }
  catch (err) {
    console.log('err', err);
    throw err;
  }
}

export const fbSignInWithGoogle = async (): Promise<any> => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  try {
    const res = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(res)
    const token = credential?.accessToken
    const user = res.user;
    return user
  }
  catch (err) {
    console.log('got error logging in with google', err)
    throw err
  }
}

export const fbSignInWithFb = async (): Promise<any> => {
  const auth = getAuth()
  const provider = new FacebookAuthProvider()

  try {
    const res = await signInWithPopup(auth, provider)
    const user = res.user
    const credential = FacebookAuthProvider.credentialFromResult(res)
    const token = credential?.accessToken
    return user
  }
  catch (err) {
    console.log('err fb login', err, err.code, err.message, err.customData.email)
    throw err
  }
}

export const fbSignInWithApple = async (): Promise<any> => {
  const auth = getAuth()
  const provider = new OAuthProvider('apple.com')

  try {
    const res = await signInWithPopup(auth, provider)
    const user = res.user
    const credential = OAuthProvider.credentialFromResult(res)
    const token = credential?.accessToken
    const idToken = credential?.idToken
    return user
  }
  catch (err) {
    console.log('err apple login', err, err.code, err.message, err.customData.email)
    throw err
  }
}

export const fbSignOut = async (): Promise<any> => {
  const auth = getAuth()
  const userStore = useUsersStore()
  try {
    await auth.signOut()
    await userStore.$reset()
    return
  }
  catch (err) {
    console.log('err', err);
    throw err;
  }
}

export const fbResetPassword = async (mail: string): Promise<any> => {
  const auth = getAuth()
  const userStore = useUsersStore()
  console.log('mail', mail)
  try {
    await userStore.$reset()
    return await sendPasswordResetEmail(auth, mail)
  }
  catch (err) {
    console.log('err', err)
    throw err
  }
}

export const fbInitUser = async (): Promise<any> => {
  const auth = getAuth();
  const userStore = useUsersStore()
  const localePath = useLocalePath()

  const checkUser = async () => {
    const res: any = await myFetch('/auth/register', { method: 'GET' })
    console.log('res', res)
    if (!res.familyName) {
      navigateTo(localePath('/init/user'))
    }
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      userStore.setUser(user)
      checkUser()
    } else {
      userStore.reset()
      navigateTo(localePath('/auth/sign-in'))
    }
  })
}
