<template>
  <div class="diplomas-container">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-6" v-for="(diploma, index) in diplomas"><diploma :data="diploma"></diploma></div>
      </div>
    </div>
  </div>

</template>

<script>
  import diploma from './diploma';
  const {getDiplomas} = require('../data/diplomas');
  export default{
    components:{diploma},
    mounted(){
      getDiplomas().then((diplomas)=>{
        this.diplomas = diplomas;
      })
    },
    data:()=>({
      diplomas: [],
    })
  }
</script>

<style lang="scss">
.diplomas-container{
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  background-color: rgb(240,240,240);
  background: repeating-linear-gradient(
    45deg,
    rgb(240,240,240),
    rgb(240,240,240) 10px,
    rgb(236,236,236) 10px,
    rgb(236,236,236) 20px
  );
  box-shadow: inset 0px 0px 10px rgba(0,0,0,0.2);
}
</style>
