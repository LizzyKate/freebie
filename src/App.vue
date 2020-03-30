<template>
<section>
  <Nav></Nav>
  <!-- firstly components that are common to every page like the nav and the footer be here in one file -->
  <router-view></router-view>
  <Footer></Footer>
</section>

</template>

<script>
import  './assets/css/main.css';
import './assets/css/style.css';
import Nav from './components/page 2/nav'
import home from './components/page1/home.vue'
// always use initial caps when dealing with componnets
import Footer from './components/page1/footer'

export default {
  components:{
    'home':home,
    // use string only when there is space
    Nav:Nav,
    Footer:Footer
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
