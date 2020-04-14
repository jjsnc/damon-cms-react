import cookies from 'js-cooke'

/**
 * 存储tokes
 * @param {string} accessToken
 * @param {string} refreshToken
*/

export function saveTokens(accessToken, refreshToken) {
    // 存储tokens tokens 只进入cookies， 不进入redux 全局管理
    cookies.set('access_token', `Bearer ${accessToken}`)
    cookies.set('refresh_token', `Bearer ${refreshToken}`)
}

/**
 * 存储assess_token
 * @param {string} accessToken
 */

export function saveAccessToken(accessToken) {
    cookies.set('assess_token', `Bearer ${accessToken}`)
}

/**
 * 获取某个token
 * @param {string} tokenKey
 */
export function getToke(tokenKey) {
    return cookies.get(tokenKey)
}

/**
 * 移除token 
 */
export function removeToken() {
    cookies.remove('access_token')
    cookies.remove('refresh_token')
    sessionStorage.removeItem('flag')
    sessionStorage.clear()
    localStorage.clear()
}