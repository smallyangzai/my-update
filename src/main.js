import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import VueTouch from"vue-touch";
import BScroll from "@common/BScroll/BScroll"

Vue.use(VueTouch, {name:'v-touch'})
Vue.use(Vant);
Vue.component("BScroll",BScroll);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
