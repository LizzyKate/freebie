<template>
<section class="mt-5">
  <Form></Form> 
  <!-- u can notice that am reusing this components  -->
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm return" v-for="(list, i) in item" :key="i">
        <!-- <div v-for="(val, key) in list" :key="i">{{key.toUpperCase()}}</div> -->
          {{list.name.toUpperCase()}}
        <!-- u used i for key but did not use it in the variable -->
        <!-- <div v-for="(val, i) in list" :key="i">{{key.toUpperCase()}}</div> -->
        <!-- then here you will lope through the values of each list -->
        <div class="d-flex flex-column bd-highlight mb-3">
          <router-link :to="`${val.page}`" class="p-2 bd-highlight tactic" v-for="(val, i) in list.values" :key="i">{{val.place}}</router-link>
        </div>
      </div>
      <div class="col-sm return">
        PAYMENT ACCEPT
        <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight mr-3">
    <router-link to="/checkout">
      <i class="fab fa-cc-mastercard cardo"></i>
    </router-link>
  </div>
  <div class="p-2 bd-highlight">
    <router-link to="/checkout">
      <i class="fab fa-cc-visa cardo"></i>
    </router-link>
  </div>
   <div class="p-2 bd-highlight ml-3">
    <router-link to="/checkout">
     <i class="fab fa-paypal cardo"></i>
    </router-link>
  </div>
        </div>
      </div>
    </div>
    <footer class="mt-3 right">Copyright @ 2017 l All Right Reserved</footer>
  </div>
</section>

</template>

<script>
import Form from "./form"
export default {
  components:{
    Form:Form
  },
  data() {
    return {
      item: [
        // plus ypu data structure is trash
        { name: 'Company' , 
        values: [
            { place: "Home", page: "/" , id:0},
            { place: "About Us", page: "/about", id:1 },
            { place: "Shop", page: "/shop", id:3 },
            { place: "Blog", page: "/blog", id:4 },
            { place: "Contact Us", page: "/contact", id:5 }
          ]
        },
        {
          name: 'Service', 
        values: [
            { place: "Support", page: "/support", id:6 },
            { place: "Faq", page: "/questions", id:7 },
            { place: "Warranty", page: "/warranty", id:8 },
            { place: "Live Chat", page: "/live", id:9 },
            { place: "Privacy Policy", page: "/privacy", id:10 }
          ]
        },
        {
          name: "Orders & Returns", 
          values:  [
            { place: "Order", page: "/shop", id:11 },
            { place: "Status", page: "/drop", id:12 },
            { place: "Shipping", page: "/shipping", id:13 },
            { place: "Policy & Services", page: "/policy", id:14 },
            { place: "Cart", page: "/checkout", id:15 }
          ]
        }
        // { name: "Payment Accept", 
        // values : [] 
        // }
      ]
    };
  }
};
</script>

<style>
</style>