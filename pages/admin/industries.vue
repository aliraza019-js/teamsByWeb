<template lang="pug">
v-card(width="100%" flat :loading="loadingIndustries")
  v-toolbar(:title="$t('admin.industries')" flat color="transparent")
    .underline
    template(v-slot:prepend)
      v-btn(icon :to="localePath('/admin')")
        v-icon mdi-arrow-left

  v-card-text
    v-card.ma-5(v-for="(item, index) in industries" :key="index" variant="tonal")
      v-toolbar
        v-toolbar-title {{ getIntTitle(item.code, $i18n.locale) }}
        v-spacer
        v-btn(icon)
          v-icon mdi-pencil
      v-card-text
        v-list
          v-list-item
            v-list-item-title code: {{ item.code }}
          v-list-item(v-for="(lang, index2) in item.intTitle" :key="index2")
            v-list-item-title Title {{ getKeyValues(lang).key  }}: {{ getKeyValues(lang).value }}

    //- v-expansion-panels
      v-expansion-panel(v-for="(item, index) in industries" :kex="index")
        v-expansion-panel-title {{ item.title }} - ({{ item.code }})

        v-expansion-panel-text
          v-list
            v-list-item(v-for="(lang, index2) in item.intTitle" :key="index2")
              v-list-item-subtitle code
              v-list-item-title {{ lang }}

</template>

<script setup>
// imports
import { useMasterIndustriesStore } from '@/stores/master-industries';

// page definition
definePageMeta({
  activeRoute: 'admin'
})

// data
const { industries, loadingIndustries, getIndustries, getIntTitle } = useMasterIndustriesStore();
const localePath = useLocalePath();

const getKeyValues = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    return { key: key, value: value };
  }
}

// hooks
onMounted(async () => {
  await getIndustries();
});
</script>

<style lang="scss" scoped>
.underline {
  position: absolute;
  width: 100%;
  left: 0px;
  top: 56px;
  right: 0px;
  height: 1px;
  background-color: rgb(204, 204, 204);
}
</style>