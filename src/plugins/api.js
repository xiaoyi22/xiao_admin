import request from './request'

const apilist = {
   login:  (uri, params) => {
    return request.post(uri, params)
  }
};

export default apilist
