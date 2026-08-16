<template>
  <mobile-navigation v-if="isMobileTerminal"></mobile-navigation>
  <pc-navigation v-else></pc-navigation>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigation from './mobile/index.vue'
import pcNavigation from './pc/index.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// 触发category数据获取动作
store.dispatch('category/useCategoryData')
</script>

<style lang="scss" scoped></style>
