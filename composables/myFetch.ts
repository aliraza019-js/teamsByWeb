import { useUsersStore } from '~~/stores/users'
import { NitroFetchRequest, TypedInternalResponse } from "nitropack"
import { FetchOptions } from "ofetch"





export const myFetch = async (url: string, options: FetchOptions) => {
  const userState = useUsersStore()
  const config = useRuntimeConfig()

  return await $fetch(url, {
    ...options,

    onRequest({ request, options }) {
      options.baseURL = config.public.API_URL
      if (userState && userState.accessToken) {
        options.headers = {
          'Authorization': `Bearer ${userState.accessToken}`
        }
      }
    },

    onRequestError({ request, options, error }) {
      // Handle the request errors
    },

    onResponse({ request, response, options }) {
      // Process the response data
      return response._data
    },

    onResponseError({ request, response, options }) {
      // Handle the response errors
    }
  })

}
