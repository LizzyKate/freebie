<template>
  <div class="container mt-5">
    <form @submit.prevent="submit()" class="col-md-6 mx-auto">
      <div class="form-group">
        <label class="billor">Full Name</label>
        <input type="text" class="form-control opt" placeholder="John Doe" v-model="name" required />
      </div>
      <div class="form-group">
        <label class="billor">Email</label>
        <input
          type="email"
          class="form-control opt"
          placeholder="john@doe.com"
          v-model="email"
          required
        />
      </div>
      <div class="form-group">
        <label class="billor">Password</label>
        <input
          type="password"
          class="form-control opt"
          placeholder="*************"
          v-model="password"
          required
        />
      </div>
      <div class="d-flex flex-row bd-highlight my-5 justify-content-center">
        <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" @click="cancel()">Cancel</button>
        <button class="p-2 bd-highlight btn btn-lg butt" :disabled="authenticate">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "../../axios";
import { authenticate } from "../../routeGuard";
export default {
  data() {
    return {
      email: "",
      password: "",
      name: ""
    };
  },
  methods: {
    submit() {
      let data = {
        email: this.email,
        password: this.password,
        name: this.name
      };
      axios.post("signup", data).then(
        ({ data }) => {
          console.log(data);
          localStorage.setItem("auth-token", data.data);
          this.$router.push("/login");
        },
        err => {
          console.log(err.response);
          if (err.response.data.error === "email already exists") {
            alert("Email is Already Registered");
          }
        }
      );
	},
	
	cancel(){
		this.name = ""
		this.email = ""
		this.password = ""
	}
  },
  computed: {
    authenticate() {
      if (this.name !== "" && this.password !== "" && this.email !== "") {
        return false;
      } else return true;
    }
  },

  beforeRouteEnter(to, from, next) {
    if (authenticate()) {
      alert("You are already authenticated")
        next("/")
      // do something //
    } else {
      next(true)
    }
  }
};
</script>

<style></style>
