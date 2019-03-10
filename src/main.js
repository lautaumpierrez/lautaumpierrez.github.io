import Vue from 'vue'
import App from './App.vue'
import router from './routes';
import 'animate.css/animate.css';
import 'bulma/bulma.sass';


new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
