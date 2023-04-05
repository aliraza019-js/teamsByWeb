<template lang="pug">
v-container
  v-layout.d-flex.flex-column.align-center.justify-center
    v-card.shadow.ma-3.streched(variant="flat" border="1px solid rgb(204,204,204)")
      v-card-title.text-center
        h1.text-h4 {{ $t('init.teamSetup') }}
      v-card-text.d-flex.flex-column.align-center.justify-center
        p {{ $t('init.youAreNot')}}
        v-row.streched.mt-5
          //- first card
          v-col(cols="12" md="6")
            v-card.elevation-5.streched.pb-5.rounded-xl(text :to="localePath('/init/tenant')")
              v-img(src="https://ik.imagekit.io/teamstage/placeholder/tr:ar-16-9,w-600,fo-auto/team1_fcug86jiYv.jpg" max-width="100%" aspect-ratio="1.77" cover)
              v-card-text.d-flex.align-center.justify-space-between
                p.text-h5.text-secondary {{ $t('init.createNew') }}
                v-btn.primary-btn(icon)
                  v-icon mdi-arrow-right
              v-card-text
                span {{ $t('init.useThisToCreate') }}
          //- second card
          v-col(cols="12" md="6")
            v-card.elevation-5.streched.pb-5.rounded-xl(text)
              v-img(src="https://ik.imagekit.io/teamstage/placeholder/tr:ar-16-9,w-600,fo-auto/hands1_UFvOt_w5g.jpg" max-width="100%" aspect-ratio="1.77" cover)
              v-card-text.d-flex.align-center.justify-space-between
                p.text-h5.text-secondary {{ $t('init.joinTeam') }}
                v-btn.primary-btn(icon)
                  v-icon mdi-arrow-right
              v-card-text
                span {{ $t('init.findYourTeam') }}
        
</template>

<script setup>
// imports
// page definition
definePageMeta({
  layout: 'init'
})

// data
const localePath = useLocalePath()
// methods
// hooks
</script>

<style lang="scss" scoped>
.primary-gradient {
  background-image: linear-gradient($secondary, $primary);
}

.replace {
  position: relative;
  top: 18px;
  right: 33px;
}
</style>