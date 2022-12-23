import { useUsersStore } from '~~/stores/users'

export default defineNuxtRouteMiddleware((to, from) => {
  const userState = useUsersStore()
  const localePath = useLocalePath()
  if (!userState.isLoggedIn) {
    // console.log('to', to)
    return navigateTo(localePath('/auth'))
  }
})