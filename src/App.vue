<template>
  <div id="app">
    <Navbar />
    
    <router-view></router-view>
    <!-- checkoutArea -->
    
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }  
}
</script>

<style lang="scss">
@import '@/assets/scss/main';

</style>
