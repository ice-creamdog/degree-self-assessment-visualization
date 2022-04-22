import service from '@/axios'

export function Login(loginData) {
  return service.request({ method: 'post', url: 'api/user/login', data: loginData })
}

export function Logout(id) {
  return service.request({ method: 'post', url: 'api/user/logout', data: id })
}
