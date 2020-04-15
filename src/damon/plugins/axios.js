// ajax 封装插件, 使用 axios
import axios from 'axios'
import Config from '../../config'
import ErrorCode from '../../config/error-code'
import { getToken, saveAccessToken } from '../../damon/utils/token'
import { message } from 'antd';

// let ERROR_SUCCESS = 0
const config = {
    baseURL: Config.baseURL || process.env.apiUrl || 'http://192.168.1.17:8083/',
    timeout: 5 * 1000, // 请求超时时间设置
    crossDomain: true,
    // withCredentials: true, // Check cross-site Access-Control
    // 定义可获得的http响应状态码
    // return true、设置为null或者undefined，promise将resolved,否则将rejected
    validateStatus(status) {
        return status >= 200 && status < 510
    },
}

// 创建请求实例
const _axios = axios.create(config)

// Add a request interceptor
_axios.interceptors.request.use(originConfig => {
    // Do something before request is sent
    let reqConfig = { ...originConfig }
    // step1: 容错处理
    if (!reqConfig.url) {
        /* eslint-disable-next-line */
        message.info('request need url');
    }
    if (!reqConfig.method) {
        // 默认使用 get 请求
        reqConfig.method = 'get'.toLowerCase()
    }
    // 大小写容错
    reqConfig.method = reqConfig.method.toLowerCase()
    //  参数容错
    if (reqConfig.method === 'get') {
        if (!reqConfig.params) {
            // 防止字段用错
            reqConfig.params = reqConfig.data || {}
        }
    } else if (reqConfig.method === 'post') {
        if (!reqConfig.data) {
            reqConfig.data = reqConfig.params || {}
        }
        //检测是否包含文件类型， 若包含则进行 formDate 封装
        let hasFile = false
        Object.keys(reqConfig.data).forEach(key => {
            if (typeof reqConfig.data[key] === 'object') {
                const item = reqConfig.data[key]
                if (item instanceof FileList || item instanceof File || item instanceof Blob) {
                    hasFile = true
                }
            }
        })

        // 检测到存在文件使用 FormData 提交数据
        if (hasFile) {
            const formData = new FormData()
            Object.keys(reqConfig.data).forEach(key => {
                formData.append(key, reqConfig.data[key])
            })
            reqConfig.data = formData
        }
    } else {
        // TODO: 其他类型请求数据格式处理
        /* eslint-disable-next-line */
        console.warn(`其他请求类型: ${reqConfig.method}, 暂无自动处理`)

    }
    // step2: permission 处理
    if (reqConfig.url === 'cms/user/refresh') {
        const refreshToken = getToken('refresh_token')
        if (refreshToken) {
            // eslint-disable-next-line no-param-reassign
            reqConfig.headers.Authorization = refreshToken
        }
    } else {
        // 有access_token
        const accessToken = getToken('access_token')
        if (accessToken) {
            // eslint-disable-next-line no-param-reassign
            reqConfig.headers.Authorization = accessToken
        }
    }
    return originConfig;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
_axios.interceptors.response.use(async res => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    let { data: { error: { ErrorCode: code, ErrorMsg } } } = res
    console.log(res)
    if (res.status.toString().charAt(0) === '2') {
        console.log(res.data)
        return res.data
    }
    return new Promise(async (resolve, reject) => {
        const { url } = res.config
        // refresh_token 异常  直接登出
        if (code === 10000 || 10100) {
            setTimeout(() => {
                // store.dispatch('loginOut')
                const { origin } = window.location
                window.location.href = origin
            }, 1500)
            return resolve(null)
        }
        // 令牌相关 刷新令牌
        if (code === 10040 || code === 10041 || code === 10050 || code === 10051) {
            const cache = {}
            if (cache.url !== url) {
                cache.url = url
                const refreshResult = await _axios('cms/user/refresh')
                saveAccessToken(refreshResult.access_token)
                //   将上次的请求重发
                const result = await _axios(res.config)
                return resolve(result)
            }
        }
        // 第一种情况：默认直接提示后端返回的异常信息；特殊情况：如果本次请求添加了 handleError: true，用户自己try catch，框架不做处理
        if (res.config.handleError) {
            return reject(res)
        }
        // 第二种情况：采用前端自己的一套异常提示信息；特殊情况：如果本次请求添加了 showBackend: true, 弹出后端返回错误信息。
        if (Config.useFrontEndErrorMsg && !res.config.showBackend) {
            // 弹出前端自定义错误信息
            const errorArr = Object.entries(ErrorCode).filter(v => v[0] === code.toString())
            // 匹配到前端自定义的错误码
            if (errorArr.length > 0 && errorArr[0][1] !== '') {
                ErrorMsg = errorArr[0][1] // eslint-disable-line
            } else {
                ErrorMsg = ErrorCode['777']
            }
        }
        message.info(
            ErrorMsg, 1
        )
        reject()
    })
}, (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (!error.response) {
        message.info({
            content: 'Network Error',
            dangerouslyUseHTMLString: true,
            message: '<strong class="my-notify">请检查 API 是否异常</strong>',
        })
        console.log('error', error)
    }
    // 判断请求超时
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        message.error({
            content: '请求超时',
        })
    }

    return Promise.reject(error);
});

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
    return _axios({
        method: 'post',
        url,
        data,
        params
    })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
    return _axios({
        method: 'get',
        url,
        params
    })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
    return _axios({
      method: 'put',
      url,
      params,
      data,
    })
  }
  
  /**
   * @param {string} url
   * @param {object} params
   */
  export function _delete(url, params = {}) {
    return _axios({
      method: 'delete',
      url,
      params,
    })
  }


export default _axios