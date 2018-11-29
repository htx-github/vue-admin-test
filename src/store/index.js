import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'
Vue.use(Vuex)

const store=new Vuex.Store({
  modules:{
    app,
    errorLog,
    permission,
    tagsView,
    user
  },
  getters
})










