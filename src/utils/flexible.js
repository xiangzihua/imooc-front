import { computed } from 'vue'
import { PC_DERVICE_WIDTH } from '@/constans'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
// 判断当前是否为移动端设备，判断数据为屏幕的宽度是否大于指定值(1280)
export const isMobileTerminal = computed(() => {
  return width.value < PC_DERVICE_WIDTH
})

// 初始化 rem基准值，最大为40px
export const useREM = () => {
  const MAX_FONT_SIZE = 40

  // 监听html文档被接卸完成的事件
  document.addEventListener('DOMContentLoaded', () => {
    // 获取html标签
    const html = document.querySelector('html')
    // 获取根元素 fontSize标准 ,屏幕宽度 /10 (以 Iphone 为例 Iphone 6 屏幕宽度为 375，则标准 fontSize 为 37.5)
    let fontSize = window.innerWidth / 10
    // 获取到的fontSize 不允许超过我们定义的最大值
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize
    // 定义根元素(html)fontSize的大小(rem)
    html.style.fontSize = `${fontSize}px`
  })
}
