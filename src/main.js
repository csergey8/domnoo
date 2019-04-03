import Vue from 'vue'
import App from './App.vue';
import { MdButton, MdDrawer } from 'vue-material/dist/components'; 
import 'vue-material/dist/vue-material.min.css';


//Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdDrawer);

new Vue({
  render: h => h(App),
}).$mount('#app')
