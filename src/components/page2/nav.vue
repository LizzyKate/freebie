<template>
  <div class="abs">
    <nav class="navbar pt-3 navbar-expand-lg navbar-light" >
      <router-link to="/" class="navbar-brand soft" >
        <h2 class="ex">Ex-</h2>
        <p class="zer">BAZER SHOP</p>
      </router-link>
      <button
        class="navbar-toggler tog"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto ml-5">
          <li
            class="nav-item home"
            v-for="link in item"
            :key="link.id"
           
          >
            <router-link :to="`${link.page}`"
              class="nav-link"
              href="#"
              active-class="create" exact
            >{{link.list}}</router-link>
          </li>
        </ul>
        <div class="adjust">
          <span class="art" @click="isModalVisible = !isModalVisible">
            <i class="fas fa-search"></i>
          </span>
          <span class="art cle">
            <router-link to="/questions" class="fas fa-question root"></router-link>
          </span>
          <span class="art cat">
            <i class="fas fa-shopping-cart"></i>
          </span>
        </div>
      </div>
    </nav>
    <div class="navLine w-100"></div>
    <modal class="pop" v-show="isModalVisible"></modal>
  </div>
</template>

<script>

import modal from '../additions/modal'
import questions from '../additions/questions'

export default {
  components:{
    modal:modal,
    questions:questions
  },
  data() {
    return {
      isModalVisible:false,
      choose: "Ho",
      item: [
        {
          code: "Ho",
          id:0,
          page:'/',
          list: "Home"
        },
        {
          code: "Sh",
          id:1,
          page:'/shop',
          list: "Shop"
        },
        {
          code: "Ab",
          id:2,
          page:'/about',
          list: "About"
        },
        {
          code: "Bl",
          id:3,
          page:'/blog',
          list: "Blog"
        },
        {
          code: "update",
          id:4,
          page:'/info',
          list: "Update"
        },
        {
          code:"product",
          id:5,
          page:'/cart',
          list: "Your Product"
        },
        {
          code:'contact',
          id:6,
          page:'/contact',
          list:'Contact Us'
        }
      ]
    };
  },
  methods: {
    changeMe(word) {
      this.choose = word;
    },
    showModal(){
      this.isModalVisible = true;
    },
     closeModal(){
      this.isModalVisible= false
    }
  }
};
</script>

<style>
</style>