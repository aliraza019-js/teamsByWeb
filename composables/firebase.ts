import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged
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
