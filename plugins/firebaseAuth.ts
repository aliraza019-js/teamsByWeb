import { initializeApp } from 'firebase/app';

export default defineNuxtPlugin(nuxtApp => {

  const config = useRuntimeConfig();

  console.log('fb key', config.public.firebaseApiKey)

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey,
    authDomain: "teamstage-d05e2.firebaseapp.com",
    projectId: "teamstage-d05e2",
    storageBucket: "teamstage-d05e2.appspot.com",
    messagingSenderId: "633257283147",
    appId: "1:633257283147:web:98c33460c8a25590b387ce",
    measurementId: "G-8S4YW46EE3"
  }

  const app = initializeApp(firebaseConfig);

})