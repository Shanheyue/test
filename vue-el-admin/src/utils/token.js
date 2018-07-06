import Cookies from 'js-cookie'

const TokenKey = 'User_Token'

export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(TokenValue) {
  return Cookies.set(TokenKey, TokenValue)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}
