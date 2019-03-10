<template>
  <div id="app">
    <loader><router-view></router-view></loader>

  </div>
</template>

<script>
import './assets/global.scss';
import loader from './components/loader';
export default {
  name: 'app',
  components:{loader},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
