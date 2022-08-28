<template>
  <div class="container" id="home">
    <div v-if="loading">
      <LoadingComponent />
    </div>
      <div v-if="api" class="box-container">
        <div class="titulo">
            <h1>Son Goku</h1>    
            <div class="about_goku">
              <p>{{ api.descricao }}</p>
              <p>{{ api.descricao_1 }}</p>
            </div>
          <router-link class="btn" to="/sobre">Saiba mais</router-link>
        </div>
        <img :src="require(`@/assets/goku/goku-${img}.png`)" alt="">
      </div>  
  </div>
</template>
<script>
import fetchData from '@/mixins/fetchData.js'
export default {
  name: 'HomeView',
  mixins: [fetchData],
  data () {
    return {
        img: 1,
    }
  },
  methods: {
    imageRandom() { 
        this.img = Math.floor(Math.random() * 13) + 1              
    }
  },
  created() {
    this.fetchData('/home')
    setInterval(this.imageRandom, 2000);
  }
}
</script>
<style lang="scss">
#home {
  .box-container {
    .titulo{
      h1 {
        display: flex;
        align-items: center;
      }
    }    
    .about_goku {
      padding-bottom: 30px;
    }  
    img {
      margin-top: 80px;
    }
  }
}
</style>
