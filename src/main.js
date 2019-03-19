import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import 'animate.css/animate.css';
import 'bulma/bulma.sass';
import {store} from './store/';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
