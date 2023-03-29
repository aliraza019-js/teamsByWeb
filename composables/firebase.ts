import { fbSignInWithFb } from './firebase';
import { fbSignInWithMail } from './../../ts_web/composables/firebase';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithPopup
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

export const fbSignInWithFb = () => {
  const auth = getAuth()
  const provider = new FacebookAuthProvider()

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user
      console.log('fb user', user)

      const credential = FacebookAuthProvider.credentialFromResult(result)
      console.log('fb credentials', credential)
      const accessToken = credential?.accessToken
      console.log('accessToken', accessToken)
      return user
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);
      console.log('fb error', errorCode, errorMessage, email, credential)
    })
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
  onAuthStateChanged(auth, (user) => {
    if (user) {
      userStore.setUser(user)
    } else {
      userStore.reset()
    }
  })
}
