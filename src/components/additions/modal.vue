<template>
<div  class="">
    <!-- Search form -->
<input class="form-control" type="text" placeholder="Search" aria-label="Search" @keyup.enter="rect()" v-model=search>
</div>
</template>

<script>


export default {
  
  data () {
    return {
      search:""
    }
  },
  methods:{
   rect(){
     console.log("I entered")
     if(this.search === 'home'){
       this.$router.push({name: "home"})
     } else if(this.search === 'shop'){
       this.$router.push({name: "shop-general"})
     } else if(this.search === "products"){
       this.$router.push({name: "shop-general"})
     } else if(this.search === "about"){
       this.$router.push({name: "about"})
     } else if (this.search === "blog"){
       this.$router.push({name: "blog"})
     } else if (this.search === "update"){
       this.$router.push({name: "info"})
     } else if(this.search === "Your Product"){
       this.$router.push({name:"cart"})
     } else if(this.search === "contact"){
       this.$router.push({name:"contact"})
     } else if(this.search === "payment"){
       this.$router.push({name:"check"})
     } else {
       alert("Page Not Found")
     }
     this.search = '';
   }
  }
}
</script>

<style>

</style>
