<template>
      <div class="container" id="transform">
          <div v-if="loading">
            <LoadingComponent />
          </div>
          <Transition>
            <section v-if="api" class="box-container">
              <div class="titulo">
                <h1>{{ api.nome }}</h1>
                <router-link class="btn" to="/transformacoes">Voltar</router-link>
              </div> 
              <div class="slide">
                <span class="prev" v-if="slide > 1" @click="prevSlide"><img src="@/assets/prev.svg" alt=""></span>           
                <img class="slide_img" :src="require(`@/assets/transforms/${this.transformacao}/slide-0${slide}.gif`)">
                <span class="next" v-if="slide < 5" @click="nextSlide"><img src="@/assets/next.svg" alt=""></span>
              </div>  
             <p>{{ api.descricao }}</p>
            </section>
          </Transition>
        </div>
</template>
<script>
import fetchData from '@/mixins/fetchData.js'
export default {
  name: 'TransformView',
  props: ["transformacao"],
  mixins: [fetchData],
  data() {
    return {
        slide: 1,
    }
  },
  created() {
    this.fetchData(`/transformacao/${this.transformacao}`)
  },
  methods: {
    prevSlide() { 
        this.slide--
    },
    nextSlide() { 
        this.slide++
    },
  }, 
}
</script>
<style lang="scss" scoped>
#transform {
  .box-container {
    grid-template-columns: 1fr;
    .titulo {
      display: flex;
      justify-content: space-between;
      grid-column: 1 / -1;
      align-items: center;  
      a {
        margin-top:80px;
      }    
    }
  }
}
</style>