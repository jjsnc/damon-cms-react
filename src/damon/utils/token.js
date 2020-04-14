/**
 * 存储tokens
 * @param {string} assessToken
 * @param {string} refreshToken
 */
export function saveTokens(assessToken, refreshToken){
    localStorage.setItem('access_token',`Bearer ${assessToken}`)
    localStorage.setItem('refresh_token',`Bearer ${refreshToken}`)
}

/**
 * 存储assess_token
 * @param {string} assessToken
 */
export function saveAccessToken(assessToken) {
    localStorage.setItem('access_token',`Bearer ${assessToken}`)
}

/**
 * 获取某个token
 * @param {string} tokenKey
 */
export function getToken(tokenKey) {
    localStorage.getItem(tokenKey)
}

/**
 * 移除token
 */
export function removeToken(){
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}