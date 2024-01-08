export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }

  // ignore pages with ignoreAuth
    if (to.meta.ignoreAuth) return
    // ignore path to favicon
    if (to.fullPath === '/favicon.ico') return


  // all other pages, check for userState and redirect if not logged in
    // if (!userState.isLoggedIn) {
    //   return navigateTo(localePath('/auth'))
    // }

  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }
  return
})