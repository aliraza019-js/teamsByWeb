import { useUsersStore } from '~~/stores/users';

export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', (to, from) => {
    const userState = useUsersStore()
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


// import { useUsersStore } from '~~/stores/users';
// import { UserDTO } from '~/model/UserDTO';
// import { ClientDTO } from '~/model/ClientDTO';

// export default defineNuxtPlugin(() => {
//   addRouteMiddleware('auth', (to, from) => {
//     const userState = useUsersStore();
//     const localePath = useLocalePath();

//     // ignore pages with ignoreAuth
//     if (to.meta.authInit) {
//       return;
//     }

//     if (to.fullPath === '/favicon.ico') {
//       return;
//     }

//     if (!userState.isInitialized) {
//       return navigateTo(localePath({
//         path: '/auth/init-auth',
//         query: {
//           redirect: to.fullPath
//         }
//       }));
//     }

//     // ignore pages with ignoreAuth
//     if (to.meta.ignoreAuth) {
//       return;
//     }

//     // all other pages, check for userState and redirect if not logged in
//     if (!userState.isLoggedIn) {
//       return navigateTo(localePath({
//         path: '/auth/sign-in',
//         query: {
//           redirect: to.fullPath
//         }
//       }));
//     }

//     if (to.meta.ignoreRedirectWhenLoggedIn) {
//       return;
//     }

//     const backendUser: UserDTO = userState.backendUser;

//     if (!backendUser || !backendUser.givenName || !backendUser.familyName) {
//       return navigateTo(localePath({
//         name: 'profile-setup',
//         query: {
//           toast: 'true'
//         }
//       }));
//     }

//     const clients: ClientDTO[] = userState.clients;

//     if (!clients || clients.length < 1) {
//       return navigateTo(localePath({
//         name: 'team-setup',
//         query: {
//           toast: 'true'
//         }
//       }));
//     }


//   }, { global: true });
// });