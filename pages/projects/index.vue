<template lang="pug">
v-container
  v-layout
    v-card
      v-tabs(v-model="tab")
        v-tab(value="one") Projekte
        v-tab(value="two") Kunden
      v-card-text
        v-window(v-model="tab")
          v-window-item(value="one")
            CommonProjectList(v-for="project in projects" :project="project")

          v-window-item(value="two")
            CommonOrgList(v-for="org in orgs" :org="org")
</template>

<script setup>

definePageMeta({
  name: 'projects',
  layout: 'app'
})

// data
const tab = ref(null)
const projects = [
  { title: 'project 1',
    orgName: 'org name 1',
    statusIcon:'mdi-check-circle',
    status: 'initiation',
    time:'01.02.2020-Ongoing',
    catalog:'Tech',
    intro:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
        'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
        'ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.',
    comments:'24',
    likes:'1.3k',
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429'
  },
  { title: 'project 2',
    orgName: 'org name 2',
    status: 'planning',
    time:'01.02.2020-Ongoing',
    catalog:'Tech',
    intro:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
        'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
        'ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.',
    comments:'24',
    likes:'1.3k',
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429' },
  { title: 'project 3',
    orgName: 'org name 3',
    status: 'excecuting',
    time:'01.02.2020-Ongoing',
    catalog:'Tech',
    intro:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
        'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
        'ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.',
    comments:'24',
    likes:'1.3k',
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429'
  },
  { title: 'project 4',
    orgName: 'org name 4',
    status: 'monitoring',
    time:'01.02.2020-Ongoing',
    catalog:'Tech',
    intro:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
        'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
        'ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.',
    comments:'24',
    likes:'1.3k',
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429'
  },
  { title: 'project 5',
    orgName: 'org name 5',
    status: 'done',
    time:'01.02.2020-Ongoing',
    catalog:'Tech',
    intro:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ' +
        'Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ' +
        'ultricies nec, Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. ' +
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.',
    comments:'24',
    likes:'1.3k',
    imgUrl: 'https://ik.imagekit.io/teamstage/image_picker7844532559891803069_gd9EOekZJx.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1671194068429'
  }
]
const orgs = [
  { name: 'org 1', place: 'place 1', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 2', place: 'place 2', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 3', place: 'place 3', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 4', place: 'place 4', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' },
  { name: 'org 5', place: 'place 5', imgUrl: 'https://ik.imagekit.io/teamstage/image_picker_3125430F-511F-43C9-B086-AB64D48351B8-2200-000002773AA5F329_PAgGU5JhU.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1669902515925' }
]
</script>

<style lang="scss" scoped>

</style>