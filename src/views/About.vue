<template>
  <div class="container" id="about">
    <div v-if="loading">
      <LoadingComponent />
    </div>
   <transition >
      <div v-if="api" class="box-container">
          <div class="titulo">
            <h1>{{ api.nome}}</h1>
          </div>
            <div class="slide">
              <span class="prev" v-if="slide > 1" @click="prevSlide"><img src="@/assets/prev.svg" alt=""></span>
              <img class="slide_img" :src="require(`@/assets/goku/slide/slide-0${slide}.gif`)">
              <span class="next" v-if="slide < 8" @click="nextSlide"><img src="@/assets/next.svg" alt=""></span>
          </div>
          <div class="about_goku">
            <p>{{ api.descricao }}</p>
            <p>{{ api.descricao_1 }}</p>
          </div>        
      </div>
    </transition>
  </div>
</template>
<script>
import fetchData from '@/mixins/fetchData.js'

export default {
  name: 'HomeView',
  mixins: [fetchData],
  data () {
    return {
        slide: 1,
    }
  },
  methods: {
    prevSlide() { 
        this.slide--
    },
    nextSlide() { 
        this.slide++
    },
  },
  created() {
    this.fetchData('/about')
  },
  
}
</script>
<style lang="scss">
#about {
  .box-container {
    max-width: 800px;
    display: grid;
    grid-template-columns: 1fr;
    .titulo {
      grid-column: 1/-1;
    }

  }
}
</style>
