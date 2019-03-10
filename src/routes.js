import Vue from 'vue';
import VueRouter from 'vue-router';


//Pages
import HomePage from './pages/Home';
Vue.use(VueRouter);



export default new VueRouter({
  routes:[
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
