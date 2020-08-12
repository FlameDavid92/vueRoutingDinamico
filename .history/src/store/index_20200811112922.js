import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//import moduli
import category from './category.module'

export default new Vuex.Store({
  modules : {
    category
  }
})
