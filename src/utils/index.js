
import axios from 'axios';
let baseURL = 'http://localhost:3000/'
const $http = axios.create({
    baseURL,
})

export const get = (url,params)=>{
    params = params || {};
    return new Promise((resolve,reject)=>{
    
        $http.get(url,{
            params,
        }).then(res=>{
             resolve(res.data);
        }).catch(error=>{
            alert('网络异常');
        })
    })
}

export const post = (url,params)=>{
    params = params || {};
    return new Promise((resolve,reject)=>{
        $http.post(url,params).then(res=>{
            resolve(res.data);
        }).catch(error=>{
            alert('网络异常');
        })
    })
}