import Vue from 'vue'
import Router from 'vue-router'
// import Login from '../views/login/Login'
// import HelloWorld from '../components/HelloWorld'

Vue.use(Router)
const Login=resolve=>require(['@/views/login/Login'],resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: Login,
      component: Login
    }
  ]
})
