<template>
  <div>
    <div  v-for="(slide,index) in slides" v-show="slide.active" :key="index">
      <div class="project__content">
        <div class="project__info">
          <div class="title is-3 is-marginless has-text-white">
            Projecto 1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slidesData from '../data/slides.data';
const slides = slidesData;
export default{
  mounted(){
    this.slides = slides;
    let thisObj=this;
    this.initialize();
  },
  data:()=>({
    slides:[],
    slide: 0,
  }),
  methods:{
    initialize(){
      document.getElementById('column-slider').style['background-image'] = `url("${this.slides[this.slide].image}")`;
      console.log(`url("${this.slides[this.slide].image}")`)
      const thisObj = this;
      window.setInterval(()=>{
        thisObj.next();
      },10000);
    },
    next(){
      if(this.slide >= (this.slides.length-1))
      {
          this.slide = 0;
          document.getElementById('column-slider').style['background-image'] = `url("${this.slides[this.slide].image}")`;

      }else{
        document.getElementById('column-slider').style['background-image'] = `url("${this.slides[this.slide].image}")`;
        this.slide = this.slide + 1;
      }
      console.log(`url("${this.slides[this.slide].image}")`)
     }
  }
}
</script>

<style lang="scss">

</style>
