import { useAuthStore } from '~/stores/auth'

export const myFetch = async (url: string, options: any) => {
  const config = useRuntimeConfig()
  const { auth } = useAuthStore()

  // const { data, pending, error, refresh }

  // return await useFetch(url, {
  //   ...options,

  //   onRequest({ request, options }) {
  //     options.baseURL = config.public.API_URL
  //     // Set the request headers
  //     if (userState && userState.accessToken) {
  //       options.headers = {
  //         'Authorization': `Bearer ${userState.accessToken}`
  //       }
  //     }
  //   },
  //   onRequestError({ request, options, error }) {
  //     console.log('request error')
  //     // Handle the request errors
  //   },
  //   onResponse({ request, response, options }) {
  //     console.log('response', response._data)
  //     // Process the response data
  //   },
  //   onResponseError({ request, response, options }) {
  //     console.log('response error')
  //     // Handle the response errors
  //   }
  // })

  return await $fetch(url, {
    ...options,

    onRequest() {
      console.log('about to fetch', auth)
      options.baseURL = config.public.API_URL
      if (auth && auth.accessToken) {
        options.headers = {
          'Authorization': `Bearer ${auth.accessToken}`
        }
      }
    }

    //   // onRequestError({ request, options, error }) {
    //   //   // Handle the request errors
    //   // },

    //   // onResponse({ request, response, options }) {
    //   //   // Process the response data
    //   //   return response._data
    //   // },

    //   // onResponseError({ request, response, options }) {
    //   //   // Handle the response errors
    //   // }
  })
}
