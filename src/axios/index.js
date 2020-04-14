
import axios from 'axios'

import {message} from 'antd';

let ERROR_SUCCESS = 0
// import { Modal } from 'antd'
// export default class Axios {
//     static jsonp(options) {
//         return new Promise((resolve, reject) => {
//             JsonP(options.url, {
//                 param: 'callback'
//             }, function (err, response) {
//                 if (response.status === 'success') {
//                     resolve(response);
//                 } else {
//                     reject(response.messsage);
//                 }
//             })
//         })
//     }

//     static ajax(options){
//         let loading;
//         if (options.data && options.data.isShowLoading !== false){
//             loading = document.getElementById('ajaxLoading');
//             loading.style.display = 'block';
//         }
//         let baseApi = 'http://106.12.220.186:4000/api';
//         // let baseApi = '/api';
//         return new Promise((resolve,reject)=>{
//             axios({
//                 url:options.url,
//                 method:'get',
//                 baseURL:baseApi,
//                 timeout:5000,
//                 params: (options.data && options.data.params) || ''
//             }).then((response)=>{
//                 if (options.data && options.data.isShowLoading !== false) {
//                     loading = document.getElementById('ajaxLoading');
//                     loading.style.display = 'none';
//                 }
//                 if (response.status === '200'){
//                     let res = response.data;
//                     if (res.code === '0'){
//                         resolve(res);
//                     }else{
//                         Modal.info({
//                             title:"提示",
//                             content:res.msg
//                         })
//                     }
//                 }else{
//                     reject(response.data);
//                 }
//             })
//         });
//     }
// }


axios.defaults.baseURL = 'http://192.168.1.17:8083/';
axios.defaults.headers.common['Authorization'] = "123";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    let {data: { error: { ErrorCode,ErrorMsg }}} = response
    if(ERROR_SUCCESS===ErrorCode) {
       console.log('成功')
       message.success(ErrorMsg)
    }else {
        console.log('失败')
        message.error(ErrorMsg)
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axios