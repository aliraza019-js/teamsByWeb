<template lang="pug">
component(:is="icons[icon]")
</template>

<script setup>
const props = defineProps(['icon'])
const Home = resolveComponent('IconFeatherHome')
const Users = resolveComponent('IconFeatherUsers')
const FileText = resolveComponent('IconFeatherFileText')
const Search = resolveComponent('IconFeatherSearch')
const User = resolveComponent('IconFeatherUser')
const Settings = resolveComponent('IconFeatherSettings')
const Signout = resolveComponent('IconOtherSignout')

const icons = {
  users: Users,
  home: Home,
  filetext: FileText,
  search: Search,
  user: User,
  settings: Settings,
  signout: Signout
}
</script>