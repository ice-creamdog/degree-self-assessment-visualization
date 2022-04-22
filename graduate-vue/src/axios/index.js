import axios from 'axios'
import { showMessage } from '@/status'
import { ElMessage } from 'element-plus'

const service = axios.create({
  // baseURL: 'api',
  timeout: 1000
})

service.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('token')
    if (token !== undefined) {
      config.headers['Authorization'] = token
      // config.headers['Content-type'] = 'application/json;charset=UTF-8'
      return config
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  function (response) {
    const data = response.data
    if (response.status !== 200) {
      ElMessage.error(data.message)
      return Promise.resolve(data)
    }
    return response
  },
  function (error) {
    const { response } = error
    if (response) {
      ElMessage.error(showMessage(response.status))
      return Promise.reject(response.data)
    } else {
      ElMessage.warning('网络连接异常,请稍后再试!')
    }
  }
)

export default service
