<template>
<section >
  <Nav></Nav>
  <!-- firstly components that are common to every pagelike the nav and the footer be here in one file -->
  <router-view></router-view>
  <Footer></Footer>
</section>

</template>

<script>
import  './assets/css/main.css';
import './assets/css/style.css';
import Nav from './components/page2/nav';
// always use initial caps when dealing with componnets
import Footer from './components/page1/footer'

export default {
  components:{
    // use string only when there is space
    Nav:Nav,
    Footer:Footer
  },
  data () {
    return {
    }
  },
  mounted(){
    let Items = localStorage.getItem("darts");
    let iteminLocalStorage = JSON.parse(Items);
    this.$store.commit("updateCartsOnAppMounted", iteminLocalStorage);
  }
}
</script>

<style>

</style>
