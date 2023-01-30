<template lang="pug">
v-container
    v-row
      v-col(cols="12" sm="4" v-for="(person, index) in persons" :key="index")
        CommonPersonList(:person="person")
    v-row.my-5
      v-divider
      v-btn.mt-5(nuxt :to="localePath('/d/team/person/123')") detail page
  
    v-row.my-5
      v-divider
      v-btn.mt-5(color="primary" @click="getPdf()")
        v-icon.mr-2 mdi-file-pdf
        span get pdf
</template>
  
  <script setup>
  definePageMeta({
    activeRoute: 'team'
  })
  
  // data
  const persons = [
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Amy Lee', title: 'Senior Project Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Frank Werner', title: 'Dynamic Optimatization Manager', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Flo Eutert', title: 'Chief Mobility Strategist', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Anne Winkler', title: 'Teamlead | CPM', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' },
  { name: 'Danny Crane', title: 'Global Communications Supervisor', imgUrl: '../../img/profile_pic_default.png' }
]
  
  // methods
  const getPdf = async () => {
    try {
      const res = await myFetch('https://intg.team-stage.com/api/users-pdfs')
      const fileURL = URL.createObjectURL(res)
      window.open(fileURL)
    }
    catch (err) {
      console.log('err', err)
    }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>