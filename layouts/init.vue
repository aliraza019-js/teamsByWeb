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
        //- LayoutHeadUserComp
        //- v-btn.d-flex.d-md-none(icon @click="drawer = !drawer")
          v-icon mdi-menu
  //- main
  v-main
    v-container.d-flex.flex-row
      slot

  //- footer
  v-footer.d-none.d-md-flex.my-footer(app height="45px")
    v-container
      .d-flex.flex-row
        span.text-caption copyright &copy; TeamStage {{new Date().getFullYear()}}
</template>

<script setup>
// imports
import { useAuthStore } from '~/stores/auth'

// data
const { initAuth } = useAuthStore()
const drawer = ref(false)
const localPath = useLocalePath()

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
onMounted(async () => {
  initAuth()
})

</script>

<style lang="scss" scoped>
.app-bar {
  background-image: linear-gradient($secondary, $primary);
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.my-footer {
  bottom: 0px !important;
}
</style>