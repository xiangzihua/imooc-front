import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // 获取当前路径任意文件下的 index.vue文件
    const components = import.meta.glob('./*/index.vue')

    // 遍历获取到的组件模块
    for (const [key, value] of Object.entries(components)) {
      // 拼接组件注册的name
      const componentName = 'm-' + key.replace('./', '').split('/')[0]
      // 通过defineAsyncComponent 异步导入指定路径下的组件
      app.component(componentName, defineAsyncComponent(value))
    }
  }
}
