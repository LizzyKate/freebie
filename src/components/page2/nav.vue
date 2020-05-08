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
          <span class="art" @click="modal()">
            <i class="fas fa-search"></i>
          </span>
          <span class="art cle">
            <router-link to="/questions" class="fas fa-question root"></router-link>
          </span>
          <span class="art cat">
            <i class="fas fa-shopping-cart" @click="isCart()" ></i>
          </span>
        </div>
      </div>
    </nav>
     <div id="cart" class="cart" v-if="cart" :class="{'show-cart' : cart === true}">
          <!-- cart item -->
          <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="../../assets/img/blanket_product_03_large@2x.png" class="img-fluid w-25" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price mb-0" >10.99</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
          <!--end of  cart item -->
          <!-- cart item -->
          <div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="../../assets/img/2016-10-16_2048_large.png" class="img-fluid w-25" id="item-img" alt="">
            <div class="cart-item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">cart item</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price mb-0" >10.99</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
          </div>
          <!--end of  cart item -->
          <!-- cart total -->
          <div class="cart-total-container d-flex justify-content-around text-capitalize mt-5">
            <h5>total</h5>
            <h5> $ <strong id="cart-total" class="font-weight-bold">10.00</strong> </h5>
          </div>
          <!--end cart total -->
          <!-- cart buttons -->
          <div class="cart-buttons-container mt-3 d-flex justify-content-between">
            <a href="#" id="clear-cart" class="btn btn-outline-secondary btn-black text-uppercase">clear cart</a>
            <a href="#" class="btn btn-outline-secondary text-uppercase btn-pink">checkout</a>
          </div>
          <!--end of  cart buttons -->
          <!--  -->
        </div>
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
      ],
      cart:false,
      modalPage:false
    };
  },
  methods: {
    changeMe(word) {
      this.choose = word;
    },
    modal(){
      if(this.modalPage === true){
      this.isModalVisible = !this.isModalVisible;
      if(this.isModalVisible === true){
        this.cart = false;
      }
      }
    },
    isCart(){
      if(this.modalPage === true){
      this.cart = !this.cart;
      if(this.cart === true){
        this.isModalVisible = false;
      }
    }
    }
  },
  watch:{
    '$route' (to, from){
      console.log(to)
      this.isModalVisible = false;
      this.cart = false
      if(to.name !== 'home'){
      this.modalPage = false;
      } else {
        this.modalPage = true;
      }
    }
  },
  mounted(){
    let toe= this.$route
      if(toe.name !== 'home'){
      this.modalPage= false
      } else {
        this.modalPage = true;
      }
  }
};
</script>

<style>
</style>