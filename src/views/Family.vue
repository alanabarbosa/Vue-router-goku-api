<template>
  <div class="container">
    <div v-if="loading">
      <LoadingComponent />
    </div>
    <Transition>
      <section v-if="api" class="box-container">
        <div class="titulo">
            <h1>Familia de Goku</h1>    
        </div>  
          <article v-for="item in api" :key="item.nome">
            <figure>
              <img 
              :src="require(`@/assets/familia/${item.img}.png`)" 
              :alt="item.nome"
              width="100"
              >  
               <figcaption><strong>Nome: </strong>{{ item.nome }}</figcaption>
               <figcaption><strong>Parentesco: </strong>{{ item.parentesco }}</figcaption>   
            </figure>    
          </article>
      </section>
    </Transition>
    </div>
</template>
<script>
import fetchData from '@/mixins/fetchData.js'
export default {
  name: 'FamiliaView',
  mixins: [fetchData],
  created() {
    this.fetchData('/familia')
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
                figure {
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                    figcaption {
                      margin-top: 10px;
                    }
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