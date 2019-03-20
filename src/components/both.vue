<template>
  <div class="bothComponent">
    <div class="activator"  v-if="!iaState.active" @click="toggleIA">
      <i class="fas fa-comments"></i>
    </div>
    <div class="chat animated fadeInRight" v-if="iaState.active">
      <header class="options">
        <div class="cross" @click="toggleIA">
          <i class="fas fa-times"></i>
        </div>
      </header>
      <section class="messagesBox" id="messagesScroll">
        <div class="message" v-for="(message,index) in iaState.messages" :class="[message.both ? 'both' : 'me']">
          {{ message.both ? 'IA: \n ' : ''}}{{message.text}}
        </div>
      </section>
      <section class="textBox has-text-centered">
        <input @keyup.enter="sendMessage" v-model="message" type="text" placeholder="Ingrese el mensaje" class="inputLauti"  name="" value="">
        <a @click="sendMessage" class="button sendMessage is-outline is-outlined is-white">Enviar</a>
      </section>
    </div>
  </div>
</template>
<script>
  export default{
    data:()=>({
      message: ''
    }),
    computed:{
      iaState(){
        return this.$store.getters['getIaState'];
      }
    },
    methods:{
      toggleIA(){
        this.$store.dispatch('toggleIA');
      },
      sendMessage(){
        this.$store.dispatch('addMessage', {message: this.message, callback:()=>{
          this.message= '';
        }});
      }
    }
  }
</script>
<style lang="scss">
@media screen and (max-width: 1024px){
  .bothComponent{
    .chat{
      width: 100% !important;
    }
  }
}
.bothComponent{
  .activator{
    &:hover{
      height: 60px;
      transition-duration: 0.3s;
    }
    transition-duration: 0.3s;
    cursor: pointer;
    width: 50px;
    height: 50px;
    padding: 10px;
    position: fixed;
    bottom: 0;
    z-index: 200;
    right: 0;
    background-color: #00a2ff;
    border-radius: 3px;
    box-shadow: 0px 0px 1px rgba(255,255,255,0.2);
    i{
      font-size: 30px;
      color: #fff;
    }
  }
  .chat{
    background-color: #3498db;
    position: fixed;
    right: 0;
    top: 0;
    width: 33.33%;
    z-index: 1000;
    box-shadow: inset 0px 0px 1em rgba(0,0,0,.2);
    height: 100%;
    transition-duration: 0.3s;
    &:hover{
      transition-duration: 0.3s;
      box-shadow: inset 0px 0px 3em rgba(0,0,0,.3);

    }
    header.options{
      width: 100%;
      height: 7vh;
      background-color: #2980b9;
      .cross{
        cursor: pointer;
        padding: calc(3.5vh - 10px) 20px calc(3.5vh - 10px) 20px;
        float: right;
        i{
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .messagesBox{
      height: 73vh;
      width: 100%;
      padding: 20px;
      overflow-y: auto;
      .message{
        padding: 10px;
        &.me{
          background-color: #ecf0f1;
          color: #333333;
        }
        &.both{
          background-color: #2980b9;
          color: #fff;
        }
      }
    }
    .textBox{
      height: 20vh;
      padding: 14px 10px 0px 10px;
      border-top: 1px solid rgba(255,255,255,0.1);
      .inputLauti{
        color: #fff;
        margin-bottom: 10px;
        background-color: #2980b9 !important;
        &::-webkit-input-placeholder{
          color: #fff;
        }
        &::-moz-placeholder { /* Firefox 19+ */
          color: #fff;
        }
        &:-ms-input-placeholder { /* IE 10+ */
          color: #fff;
        }
        &:-moz-placeholder { /* Firefox 18- */
          color: #fff;
        }
      }
      .button{
        border-radius: 0px;
        transition-duration: 0.3s;
        &:hover{
          transition-duration: 0.3s;
        }
      }
    }
  }
}
</style>
