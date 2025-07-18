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
import { useAuthStore } from '~/stores/auth';

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

export const fbResetPassword = async (mail: string): Promise<any> => {
  const auth = getAuth()
  const { signOut } = useAuthStore()
  try {
    signOut()
    return await sendPasswordResetEmail(auth, mail)
  }
  catch (err) {
    console.log('err', err)
    throw err
  }
}
