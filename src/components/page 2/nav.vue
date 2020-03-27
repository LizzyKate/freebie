<template>
<div class="">
    <nav class="navbar pt-3 navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">
            <h2 class="ex">Ex-</h2>
            <p class="zer">BAZER SHOP</p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav mr-auto ml-5" >
              <li class="nav-item home " v-for ="(link, i) in item" :key="i" v-on:click="changeMe(link.code)">
                <a class="nav-link" href="#" v-bind:class="{'create': link.code === choose}">{{link.list}}</a>
              </li>
            </ul>
            <div>
              <span class="art">
                <i class="fas fa-search"></i>
              </span>
              <span class="art cle">
                <i class="fas fa-question"></i>
              </span>
              <span class="art cat">
                <i class="fas fa-shopping-cart"></i>
              </span>
            </div>
          </div>
        </nav>
        <div class="navLine w-100"></div>
</div>
</template>

<script>



export default {
 
  data () {
    return {
      choose: 'Ho',
      item:[
        {code: 'Ho', list:'Home'},
        {code:'Sh', list:'Shop'},
        {code:'Ab', list:'About'},
        {code:'Bl', list:'Blog'},
        {code:'contact', list:'Contact Us'}
      ]
    }
  },
  methods: {
    changeMe(word){
      this.choose = word;
    }
  },
}
</script>

<style>

</style>