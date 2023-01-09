import { initializeApp } from 'firebase/app';

export default defineNuxtPlugin(nuxtApp => {

  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey
  }

  const app = initializeApp(firebaseConfig);

})