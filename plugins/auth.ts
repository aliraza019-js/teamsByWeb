import { useUsersStore } from '~~/stores/users';

export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', (to, from) => {
    const userState = useUsersStore()
    const localePath = useLocalePath()

    // ignore pages with ignoreAuth
    if (to.meta.ignoreAuth) return

    // all other pages, check for userState and redirect if not logged in
    if (!userState.isLoggedIn) {
      return navigateTo(localePath('/auth'))
    }

  }, { global: true })
})