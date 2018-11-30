import axios from 'axios';
import store from '../store'
import {getToken,setToken,removeToken} from "./auth";

// 全局配置
axios.defaults.headers.post['Content-Type'] = 'application/json';

const service=axios.create({
  baseURL:porcess.env.BASE_API,
  timeout:20000
})
service.interceptors.request.use(config=>{
  //添加token
  const token=getToken();
  if (token){
    config.headers.common['authorization']=token;
  }
  if(store&&store.state.user){
    config.headers.common['username'] = store.state.user.username;
    config.headers.common['deviceType'] = store.state.user.deviceType;
  }
  return config;
},error=>{
  return Promise.reject(error)
}
