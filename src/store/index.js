import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'
import other from './other'
import home from './home'
import more from './more'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    city,
    other,
    home,
    more
  }
})
