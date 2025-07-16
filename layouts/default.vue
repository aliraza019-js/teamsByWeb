<template lang="pug">
v-app
  //- navi drawer
  //- v-navigation-drawer(app location="right" disable-resize-watcher v-model="drawer")
    v-card
      v-card-text
        h5 Navigation
  v-app-bar.app-bar(app flat theme="dark")
    v-container.d-flex.flex-row.align-center.justify-space-between
      //- logo
      v-img(src="/app/img/logo-white_sm.png" max-width="190px" contain)
      v-spacer
      v-btn(nuxt :to="switchLocalePath($i18n.locale == 'de' ? 'en' : 'de')")
        v-icon.mr-2 mdi-web
        span {{ $i18n.locale == 'de' ? 'EN' : 'DE' }}

      ClientOnly
        LayoutHeadUserComp
      //- v-btn.d-flex.d-md-none(icon @click="drawer = !drawer")
        v-icon mdi-menu
  //- main
  v-main
    v-container.d-flex.flex-row.layout-container-team-stage
      .d-none.d-md-flex.layout-navbar-container
        LayoutMainNav.mr-5(:nav-items="navItems")
      slot(v-if="auth.isLoggedIn")

  LayoutFooterNav.d-flex.d-lg-none.footer-layout-mobile(:navItems="navItems")
  //- footer
  v-footer.d-none.d-md-flex.my-footer(height="45px")
    v-container
      .d-flex.flex-row
        span.text-caption copyright &copy; TeamStage {{new Date().getFullYear()}}
  </template>
  
<script setup>
// imports
import { useUserStore } from '~/stores/user'
import { useAuthStore } from '~/stores/auth'

// data
const drawer = ref(false)
const localPath = useLocalePath()
const { updateUser } = useUserStore()
const { initAuth, auth } = useAuthStore()

// data
const navItems = [
  { titleRef: 'home', icon: 'home', to: '/home', routerLink: 'home' },
  { titleRef: 'team', icon: 'users', to: '/team/persons', routerLink: 'team' },
  { titleRef: 'projects', icon: 'filetext', to: '/project/projects', routerLink: 'project' },
  { titleRef: 'search', icon: 'search', to: '/search', routerLink: 'search' },
  { titleRef: 'account', icon: 'user', to: '/account/general', routerLink: 'account' },
  { titleRef: 'settings', icon: 'settings', to: '/settings', routerLink: 'settings' },
  { titleRef: 'admin', icon: 'settings', to: '/admin', routerLink: 'admin' }
]

// methods
const checkUser = async () => {
  const user = await userGetUser()
}

// hooks
onMounted(async () => {
  await initAuth()
  // await fcmInit()
});

</script>
  
<style lang="scss" scoped>
.app-bar {
  background-image: linear-gradient($secondary, $primary);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.v-main {
  padding-bottom: 0;
  padding-top: 64px;
}

@media (min-width: 1030px) and (max-width: 1279px) {
  .v-container.layout-container-team-stage {
    max-width: 1250px !important;
  }

  .footer-layout-mobile {
    display: none !important;
  }
}

@media (min-width: 960px) and (max-width: 1029px) {
  .layout-navbar-container {
    display: none !important;
  }
}

.my-footer {
  bottom: 0px !important;
}
</style>