import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 要根据success的成功与否决定下面的操作
    if (success) {
      return data
    } else {
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
