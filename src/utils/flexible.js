import { computed } from 'vue'
import { PC_DERVICE_WIDTH } from '@/constans'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
// 判断当前是否为移动端设备，判断数据为屏幕的宽度是否大于指定值(1280)
export const isMobileTerminal = computed(() => {
  return width.value < PC_DERVICE_WIDTH
})
