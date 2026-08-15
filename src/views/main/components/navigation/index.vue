<template>
  <mobile-navigation v-if="isMobileTerminal"></mobile-navigation>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import { getCategory } from '@/api/category'

const getCategoryData = async () => {
  const res = await getCategory()
  console.log(res)
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
