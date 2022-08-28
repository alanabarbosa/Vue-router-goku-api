<template>
    <div class="container" id="transforms">
        <div v-if="loading">
          <LoadingComponent />
        </div>
        <Transition>
          <section v-if="api" class="box-container">
            <div class="titulo">
                <h1>Transformações de Goku</h1>    
            </div>             
            <article v-for="transformacao in api" :key="transformacao.id">
                <figure>
                  <img :src="require(`@/assets/transforms/${transformacao.img}.png`)">
                  <figcaption>{{ transformacao.nome }}</figcaption>
                </figure>
                <router-link class="btn" :to="{name: 'transformacao', params: {transformacao: transformacao.id}}">
                  Saiba mais
                </router-link>
            </article>
          </section>
        </Transition>
      </div>
</template>
<script>
import fetchData from '@/mixins/fetchData.js'
export default {
  name: 'TransformsView',
  mixins: [fetchData],
  created() {
    this.fetchData('/transformacoes')
  },

}
</script>
<style lang="scss" scoped>
  .container {
    section{               
        max-width: 800px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
        .titulo {
          grid-column: 1/-1;
        }
        gap: 20px;  
          article {
            border-radius: 4px;
            display: flex;
            flex-wrap: wrap;
            border: 1px solid #ccc;
            justify-content: center;
            padding-bottom: 20px;
            align-self: center;
              figure {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                  figcaption {
                    margin-top: 10px;
                  }
            }
            @media screen and (max-width: 800px) {
              flex-direction: column;
            }
          }

      @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr ;
      }
      @media screen and (max-width: 600px) {
        grid-template-columns: 1fr ;
      }      
    }
  }
</style>