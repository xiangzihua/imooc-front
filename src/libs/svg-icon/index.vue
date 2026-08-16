<template>
  <svg aria-hidden="true">
    <use :class="fillClass" :xlink:href="symbolId" :fill="color"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  // 显示的 svg 图标名称(剔除 icon-)
  name: {
    type: String,
    required: true
  },
  // 直接指定 svg 图标的颜色
  color: {
    type: String
  },
  // 通过 tailwind 指定svg颜色的类名
  fillClass: {
    type: String
  }
})

const symbolId = computed(() => `#icon-${props.name}`)
</script>

<style lang="scss" scoped></style>
