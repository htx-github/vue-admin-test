import request from '@/utils/requset'

export function loginByUsername(username,password) {
  const data={
    username,
    password
  }
  request({
    url:'/login/login',
    method:'post',
    data
  })
}
