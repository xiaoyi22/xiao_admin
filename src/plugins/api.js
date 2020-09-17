import request from './request'

const apilist = {
   login:  (uri, params) => {
    return request.post(uri, params)
  },
  getUserList:(uri,params,token) =>{
    return request.post(uri,params,token)
  }
};

export default apilist
