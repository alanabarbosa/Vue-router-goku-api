<template>
    <main>
        <Header />
        <router-view class="container"></router-view>
    </main>
</template> 

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #234;
  background: #e7e5e8;
}
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}
h1 {
  padding-top: 80px;
  &::before {
    content: '';
    display: inline-block;
    background: #e76a24;
    width: 12px;
    height: 8px;
    transition: width 0.2s;
  } 
  &:hover:before {
    color: red;
    width: 24px;      
  }
}

img {
  max-width: 100%;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.box-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-content: start;
  @media screen and (max-width: 800px) {
    display: block;
  }
}

.btn {
  border: none;
  background: #e76a24;
  color: #e7e5e8;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 4px 2px rgba(0,0,0, 0.1);
  padding: 15px 40px;
  font-size: 1rem;
  &:hover {
    background: #d66320;
  }
}
.v-enter {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}

.v-enter-active {
  transition: all 0.3s;
}
.slide {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  span {
    width: 50px;
    cursor: pointer;
    @media (max-width: 800px){
       position:absolute;
    }
  }
  .next {
    @media (max-width: 800px) {       
      right: 28px;
    }
  } 
  .prev {
    @media (max-width: 800px) {       
      left: 28px;;
    }
  }    
  .slide_img {
    height: 315px;
  }
  @media (max-width: 800px) {
    position: relative;
  }
}
</style>
