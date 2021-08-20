import Vue from'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state:{

    msg: 'Vuex desde 0',
    logueado: false,

  },
  mutations:{
    loginCorrecto( state ){
      state.logueado = true;
    }
  },
  actions:{
    loginCorrectoAction(context){
      context.commit('loginCorrecto');
    }
  },
  getters: {
    mensaje(state){
      return state.msg;
    }
  }
})
