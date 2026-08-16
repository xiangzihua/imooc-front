<template>
  <div class="">
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="w-screen h-screen bg-zinc-900/80 z-40 fixed top-0 left-0"
          @click="isOpen = false"
        ></div>
      </transition>
      <Transition name="popup-down-up">
        <div
          v-if="isOpen"
          v-bind="$attrs"
          class="w-screen bg-white z-50 fixed bottom-0"
        >
          <slot />
        </div>
      </Transition>
    </teleport>
  </div>
</template>

<script setup>
import { useScrollLock, useVModel } from '@vueuse/core'
import { watch } from 'vue'

const props = defineProps({
  modelValue: {
    required: true,
    type: Boolean
  }
})

// 不需要主动触发了
// const emits = defineEmits(['update:modelValue'])

// 通过useVModel 获取响应式数据 isOpen, 当isOpen改变时, 会自动触发update:modelValue事件
const isOpen = useVModel(props)

// ------ 滚动锁定 ------
const isLocked = useScrollLock(document.body)
watch(
  isOpen,
  (val) => {
    isLocked.value = val
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
// fade 展示动画
.fade-enter-active {
  // 进入动画
  transition: all 0.3s; // 过渡时间
}

.fade-leave-active {
  // fade-leave-active和fade-enter-from为什么分开写了
  // 离开动画
  transition: all 0.3s; // 过渡时间
}

.fade-enter-from,
.fade-leave-to {
  // 进入动画、离开动画
  opacity: 0; // 透明度 0
}

// popup-down-up 展示动画
.popup-down-up-enter-active {
  transition: all 0.3s; // 过渡时间
}

.popup-down-up-leave-active {
  transition: all 0.3s; // 过渡时间
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  // 进入动画、离开动画
  // 弹窗从底部弹出
  // 离开时从底部弹出
  transform: translateY(100%); // translateY 100%
}
</style>
