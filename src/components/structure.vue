<template>
  <div class="columns is-multiline" style="padding-bottom: 0px !important; margin-bottom: 0px !important;">
    <div class="column is-8 is__fullheight__project lauti__project animated fadeInLeft" :style="{backgroundImage: 'url('+require('../assets/projects/lautiflix.png')+')'}">
      <div class="project__content" @click="goTo('https://lautaumpierrez.github.io/lautiflix')">
        <div class="project__info">
          <div class="title is-3 is-marginless has-text-white">
            Lautiflix
          </div>
          <br>
          <p class="subtitle has-text-white">
            Clon de netflix (solo front end)
          </p>
        </div>
      </div>
    </div>
    <div class="column is-4">
      <div class="columns is-multiline">
        <div class="column is-12 lauti__project" :style="{backgroundSize: 'cover',backgroundImage: 'url('+require('../assets/projects/mathquestionary.png')+')'}">
          <div class="project__content" @click="goTo('https://mathquestionary.github.io')">
            <div class="project__info">
              <div class="title is-3 is-marginless has-text-white">
                MathQuestionary
              </div>
              <br>
              <div class="subtitle has-text-white">
                Juego estilo Preguntados,<br> version matematicas
              </div>
            </div>
          </div>
        </div>
        <div class="column is-12 lauti__project animated fadeInUp" :style="{backgroundImage: 'url('+require('../assets/projects/tania-landing.png')+')'}">
          <div class="project__content" @click="alerta('Este proyecto aun esta en desarrollo')">
            <div class="project__info">
              <div class="title is-3 is-marginless has-text-white">
                Landing Page
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-8 is__fullheight__addon">
      <slot name="contenido"></slot>
    </div>
    <div style="padding-bottom: 0px !important; margin-bottom: 0px !important;" class="column is-4 is__fullheight__addon is-black-bg__special has-text-white">
      <slot name="personal-info"></slot>
    </div>
    <div class="column is-12 is-paddingless is-marginless">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
  import slider from '../components/slider.vue';
  export default{
    components:{slider},
    methods:{
      goTo(url){
        window.open(url);
      },
      alerta(message){
        alert(message);
      }
    }
  }
</script>
