import Vue from 'vue'
import App from './App.vue';
import VueResource from 'vue-resource';
import { MdButton, MdDrawer, MdCard } from 'vue-material/dist/components'; 
import 'vue-material/dist/vue-material.min.css';
import VueScrollReveal from 'vue-scroll-reveal';


//Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(MdButton);
Vue.use(MdDrawer);
Vue.use(MdCard);
Vue.use(VueScrollReveal, {
  duration: 800,
  scale: 1,
  distance: '50px'
});

Vue.http.options.root = 'https://domnoo-9744c.firebaseio.com/';

new Vue({
  render: h => h(App),
}).$mount('#app')
