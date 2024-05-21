import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: import.meta.env.VITE_APP_BASE_API,
  // baseURL: "http://10.10.223.36:8080",
  baseURL: 'http://192.168.1.174:8080',

  // 超时
  timeout: 30000
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    console.log(error)
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    return Promise.resolve(res.data)
  },
  (error) => {
    console.log('err' + error)
    let { message } = error
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }
    return Promise.reject(error)
  }
)

export default service
