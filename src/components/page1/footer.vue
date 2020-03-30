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
          <div class="p-2 bd-highlight tactic" v-for="(val, i) in list.values" :key="i">{{val}}</div>
        </div>
      </div>
      <div class="col-sm return">
        PAYMENT ACCEPT
        <div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight mr-3">
    <a href="#">
      <i class="fab fa-cc-mastercard card"></i>
    </a>
  </div>
  <div class="p-2 bd-highlight">
    <a href="#">
      <i class="fab fa-cc-visa card"></i>
    </a>
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
          "Home", 
          "About Us", 
          "Shop", 
          "Blog", 
          "Contact Us"
          ] 
        },
        {
          name: 'Service', 
          values: [
            "Support", 
            "Faq", 
            "Warranty", 
            "Live Chat", 
            "Privacy Policy"
            ]
        },
        {
          name: "Orders & Returns", 
          values: [
            "Order",
            "Status",
            "Shipping",
            "Policy & Services",
            "Cart"
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