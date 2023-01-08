import { initializeApp } from 'firebase/app';

export default defineNuxtPlugin(nuxtApp => {

  const config = useRuntimeConfig();
  console.log('fb api key', config.public.firebaseApiKey)

  const firebaseConfig = {
    apiKey: config.public.firebaseApiKey
  }

  const app = initializeApp(firebaseConfig);

})