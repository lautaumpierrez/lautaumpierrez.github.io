<template>
  <div>
    <structure>
      <div slot="contenido" class="content__page_section">
        <div class="content has-text-justify">
          <p class="title is-3 has-text-weight-bold">
            Lautaro Umpiérrez
          </p>
          <p class="subtitle">
            Soy un apasionado programador, comprometido con la facilitación de soluciones en el área web a posibles clientes, disfruto del trabajo en equipo pero logro ser autosuficiente a la hora de
            programar de forma individual.
            <br>
            Tengo 5 años de trayectoria en esta área y participo de multiples proyectos de forma colaborativa.
            Hago sitios web desde 0 a medida respetando siempre las necesidades y preferencias de mis clientes y siendo 100% flexible a la hora de desarrollar dicha solución.
          </p>
          <hr>
          <p class="title is-3 has-text-semibold">
            Contacto
          </p>
          <p class="subtitle">
            Email > <a href="mailto:lauta.guillermo@gmail.com">lauta.guillermo@gmail.com</a>
          </p>
          <div class="social-networks">
            <a href="http://twitter.com/lautaumpierrez" class="socialNetwork" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="personal__info__section" slot="personal-info">
        <div class="contenido__personal">
          <center>
            <img src="../assets/coding.svg" style="width: 200px;" alt="">
            <br>
            <p class="subtitle has-text-white is-marginless">Dominio de tecnologías como </p>
            <br>
            <span v-for="(tech, index) in technologies">
              <span :key="index" :class="tech.color"  style="margin-top: 15px;" class="tag is-medium">{{tech.text}}</span>
              &nbsp;
            </span>
          </center>
        </div>
      </div>
    </structure>
  </div>
</template>

<script>
  import structure from '../components/structure.vue';
  export default{
    components:{structure },
    data:()=>({
      technologies:[
        {text: "VueJs", color: 'is-warning'},
        {text: "ReactJS", color: 'is-link'},
        {text: "NodeJS", color: 'is-danger'},
        {text: "Firebase", color: 'is-warning'},
        {text: "ElectronJS", color: 'is-info'},
        {text: "Android - Cordova", color: 'is-success'},
        {text: "ExpressJS", color: 'is-warning'}

      ]
    })
  }
</script>
<style lang="scss">
.personal__info__section{
  display: table;
  width: 100%;
  height: 100vh !important;
  cursor: pointer;
  transition-duration: 0.3s;

  .contenido__personal{
    display: table-cell;
    vertical-align: middle;
    padding: 5px;
  }
}
.content__page_section{
  padding: 20px;
  width: 100%;
  display: table;
  height: 100vh !important;
  .content{
    display: table-cell;
    height: calc(100vh - 40px);
    vertical-align: middle;
  }
}
.social-networks{
  .socialNetwork{
    font-size: 30px;
  }
}
</style>
