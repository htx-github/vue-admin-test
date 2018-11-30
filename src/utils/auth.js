import Cookies from 'js-cookie';
import md5 from 'js-md5';

const salt='Kit-Admin';
const tokenKey=md5(salt+'-token')

export function getToken() {
  return Cookies.get(tokenKey)

}

export function setToken(token) {
  //保存15分钟
  Cookies.set(tokenKey,token,{
    expires:15/1488
  })
}

export function removeToken() {
  return Cookies.remove(tokenKey);
}

