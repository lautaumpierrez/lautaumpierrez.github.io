<template>
  <div>

    <div v-if="loader" class="loader__comp">
      <div class="loader__content">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
    <slot v-else></slot>
  </div>
</template>

<script>
  export default{
    mounted(){
      this.onLoad();
    },
    data:()=>({
      loader: true,
    }),
    methods:{
      onLoad(){
        window.addEventListener('load',()=>{
          this.closeLoader();
        });
      },
      closeLoader(){
        window.setTimeout(()=>{
          this.loader = false;
        },2000);
      }
    }
  }
</script>

<style>
.loader__comp{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(51,51,51);
}
.loader__comp .loader__content{
  width: 210px;
  height: 210px;
  margin-top: calc(50vh - 105px);
  margin-left: calc(50% - 105px);
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 184px;
  height: 184px;
  margin: 6px;
  border: 16px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
