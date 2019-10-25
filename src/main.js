import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './router';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Buefy);

const router = new VueRouter({ 
	routes: routes,
	mode: 'history' 
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
