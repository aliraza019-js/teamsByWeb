export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', (to, from) => {
    const localePath = useLocalePath()

    // ignore pages with ignoreAuth
    if (to.meta.ignoreAuth) return
    // ignore path to favicon
    if (to.fullPath === '/favicon.ico') return

    // all other pages, check for userState and redirect if not logged in
    // if (!userState.isLoggedIn) {
    //   return navigateTo(localePath('/auth'))
    // }

  }, { global: true })
})
