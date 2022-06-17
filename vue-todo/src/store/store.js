import Vue from 'vue'
import Vuex from 'vuex'
import state from './modules/state.js'
import getters from './modules/getters.js'
import mutations from './modules/mutations.js'
import actions from './modules/actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
  }
})