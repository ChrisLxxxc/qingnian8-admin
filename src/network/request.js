import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

export function request (obj) {
  const instance = axios.create({
    baseURL: 'https://ku.qingnian8.com/dataApi/vueadmin',
    timeout: 5000,
    headers: { 'X-Token': window.sessionStorage.getItem('token') }
  })
  instance.interceptors.request.use(function (config) {
    NProgress.start()
    config.headers['X-Token'] = window.sessionStorage.getItem('token')
    return config
  })
  instance.interceptors.response.use(function (response) {
    NProgress.done()
    // 对响应数据做点什么
    return response
  })
  return instance(obj)
}

export function request2 (config) {
  const instance = axios.create({
    baseURL: 'https://ku.qingnian8.com/dataApi/vueadmin',
    timeout: 5000
  })
  return instance(config)
}
