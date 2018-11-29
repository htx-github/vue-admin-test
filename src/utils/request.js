import axios from 'axios';
const service=axios.create({
  baseURL:porcess.env.BASE_API,
  timeout:5000
})
service.interceptors.request.use(config=>{
  if (store.getters.token){
    config.headers['X-Token']=getToken()
  }
})
