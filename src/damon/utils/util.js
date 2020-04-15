import { cloneDeep, throttle, debounce } from 'lodash'

/* eslint-disable */
let Utils = {}

/** 参数说明：
 * 根据长度截取先使用字符串，超长部分追加…
 * str 对象字符串
 * len 目标字节长度
 * 返回值： 处理结果字符串
 */
Utils.cutString = (str, len) => {
    if (str.len * 2 <= len) {
        return str
    }
    let strlen = 0
    let s = ''
    for (let i = 0; i < str.length; i++) {
        s += str.charAt(i)
        if (str.charCodeAt(i) > 128) {
            strlen += 2
            if (strlen >= len) {
                return `${s.substring(0, s.length - 1)}...`
            }
        } else {
            strlen += 1
            if (strlen >= len) {
                return `${s.substring(0, s.length - 2)}...`
            }
        }
    }
    return s
}

/**
 * 简单数组的交集
 * @param {Array} a
 * @param {Array} b
 */
Utils.geIntersect = (a,b)=>{
    if(a.constructor ===Array && b.constructor === Array){
       const set1 = new Set(a)
       const set2 = new Set(b)
       return Array.from(new Set([...set1].filter(x=> set2.has(x))))
    }
    return null 
}

/**
 * 防抖函数
 * @param {*} func 函数体
 * @param {*} wait 延时
 */
Utils.debounce = (func, wait = 50)=> debounce(func, wait)

/**
 * 节流函数
 * @param {*} func 函数体
 * @param {*} wait 延时
 */
Utils.throttle = (func, wait = 50)=> throttle(func, wait)

/**
 * 返回 n 位的随即字符
 * @param {Number} n
 */

 Utils.getRandomStr = (n = 6)=> {
     let str = ''
     const chars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
     for(let i = 0; i< n; i+=1){
         str+=chars.charAt(Math.floor(Math.random() * 62))
     }
     return str
 }

 /**
  * 获取类型
  * @param {*} obj
  */
function getType(obj){
    const {toString} = Object.prototype
    const map = {
        '[object Boolean]':'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefned',
        '[object Null]': 'null',
        '[object Object]': 'object',
        '[object Symbol]': 'symbol',
    }
    return map[toString.call(obj)]
}

/**
 * 深度遍历， 深拷贝
 * @param {*} data
 */
Utils.deepClone = data=> cloneDeep(data)

export default Utils

