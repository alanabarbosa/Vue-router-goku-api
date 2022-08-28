<template lang="">
    <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>        
    </div>
</template>
<script>
export default {
    name: 'LoadingComponent'
}
</script>
<style lang="scss" scoped>
   .loading {
    background: rgba(28,69,149, 0.8);
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999999;
    span {
        display: inline-block;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #fbbc42;
        margin: 4px;
        animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;        
    }
    span:nth-child(1) {
        animation-delay: 0.1s
    }
    span:nth-child(2) {
        animation-delay: 0.2s
    }
    span:nth-child(3) {
        animation-delay: 0.3s
    }
    span:nth-child(4) {
        animation-delay: 0.4s
    }  
    @keyframes dots {
        from {
            transform: translate3d(0,0,0)
        }
        to {
            transform: translate3d(0,30px,0)
        }
    }
   } 
</style>