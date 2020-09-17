import axios from 'axios'

let baseURL;
if (process.env.NODE_ENV == 'development') {
  baseURL = 'http://127.0.0.1:4000/public'
} else {
  baseURL = "xxxx"
}
const $http = axios.create({
  baseURL
})

const get = (url, params,token) => {
  params = params || {};

  return new Promise((resolve, reject) => {
    $http.get(url, {
      params,
      headers:{'Authorization':token}
    }).then(res => {
      if (res.data.status === 0) {
        resolve(res.data)
      } else {
        reject(res.data.msg)
      }
    }).catch(error => {
      
    })
  })
}
const post = (url, params,token) => {
  console.log(url)
  params = params || {};
  return new Promise((resolve, reject) => {
    $http.post(url, {
      params
    },{
      headers:{'Authorization':token}      //请求消息头上加上Authorization 值为token
    }).then(res => {
      console.log(res.data);
      if (res.data.status === 0) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(error => {

    })
  })
}
export default {
  get,
  post
}
