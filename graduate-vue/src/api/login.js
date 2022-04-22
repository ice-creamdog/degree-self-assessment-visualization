import service from '@/axios'

export function Login(loginData) {
  return service.request({ method: 'post', url: 'api/user/login', data: loginData })
}
