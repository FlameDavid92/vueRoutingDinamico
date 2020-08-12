import Vue from 'vue'
import Vuex from 'vuex'
import category from './category.module'

Vue.use(Vuex)
//import moduli

export default new Vuex.Store({
  modules : {
    category
  }
})
