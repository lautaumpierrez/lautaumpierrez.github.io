<template>
  <div  v-if="data.image" class="diploma has-text-centered">
    <img :src="data.image" class="diploma-image" alt="">
    <p class="subtitle">{{data.title}}</p>
  </div>
</template>
<script>
  export default{
    props:{
      data:{
        type: Object,
        default:{
          image: require('../assets/404-photo.jpg'),
          title: ''
        }
      }
    }
  }
</script>
<style lang="scss">
.diploma{
  background-color: #fff;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 3px solid #2ecc71;
  padding-bottom: 20px;
  box-shadow: 1px 1px 10px rgba(0,0,0,.1);
  img{
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin-bottom: 15px;
  }
}
</style>
