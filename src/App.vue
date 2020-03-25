<template>
<router-view></router-view>
</template>

<script>
import  './assets/css/main.css';
import './assets/css/style.css';
import home from './components/page1/Home.vue'

export default {
  components:{
    'home':home
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
