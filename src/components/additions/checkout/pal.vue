<template>
  <div class="container w-75 mx-auto p-0 mt-5">
    <div class="row w-75 mx-auto ">
      <div class="col ">
        <div class="d-flex flex-column bd-highlight ">
          <div class=" bd-highlight">
            <h5 class="bill">Billing Address</h5>
          </div>
          <div class="mt-3 bd-highlight">
            <form @submit.prevent="submit()">
              <div class="form-group">
                <label for="exampleFormControlInput1" class="billo"
                  >Full Name</label
                >
                <input
                  type="text"
                  class="form-control opt"
                  v-model="fullName"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1" class="billo"
                  >Phone Number</label
                >
                <input
                  type="tel"
                  class="form-control opt"
                  v-model="phoneNumber"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1" class="billo"
                  >Email</label
                >
                <input
                  type="email"
                  class="form-control opt"
                  v-model="email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlInput1" class="billo"
                  >Current Location</label
                >
                <input
                  type="text"
                  class="form-control opt"
                  v-model="currentLocation"
                  required
                />
              </div>

              <div class="form-row">
                <div class="col">
                  <label class="billo">Current State</label>
                  <select
                    class="custom-select my-1 mr-sm-2 opt"
                    id="inlineFormCustomSelectPref"
                    v-model="currentState"
                  >
                    <option selected>Select State</option>
                    <option
                      v-for="(select, i) in options"
                      :key="i"
                      :value="select.value"
                      >{{ select.state }}</option
                    >
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="exampleFormControlInput1" class="billo"
                  >Shipping Location</label
                >
                <input
                  type="text"
                  disabled
                  class="form-control opt"
                  v-model="shippingLocation"
                  required
                />
              </div>

              <div class="form-row">
                <div class="col">
                  <label class="billo">Shipping State</label>
                  <select
                    class="custom-select my-1 mr-sm-2 opt"
                    id="inlineFormCustomSelectPref"
                    v-model="shippingState"
                  >
                    <option selected>Abuja</option>
                    <option
                      disabled
                      v-for="(select, i) in options"
                      :key="i"
                      :value="select.value"
                      >{{ select.state }}</option
                    >
                  </select>
                </div>
              </div>

              <div class="d-flex flex-row bd-highlight justify-content-center">
                <div class="p-2 bd-highlight text-center mt-5">
                  <button class="btn btn-lg butt" @click="cancel()">
                    Cancel
                  </button>
                </div>
                <div class="p-2 bd-highlight text-center mt-5">
                  <button
                    class="btn btn-lg butt turn"
                    type="submit"
                    :disabled="check"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import states from "./states";
import axios from "../../../axios";
export default {
  data() {
    return {
      options: [...states],
      email: "",
      phoneNumber: "",
      fullName: "",
      currentLocation: "",
      currentState: "",
      shippingLocation: "Abuja",
      shippingState: "Abuja",
    };
  },
  methods: {
    authenticate() {
      const {
        email,
        phoneNumber,
        fullName,
        currentLocation,
        currentState,
        shippingLocation,
        shippingState,
      } = this.$data;
      if (
        email !== "" &&
        phoneNumber !== "" &&
        fullName !== "" &&
        currentLocation !== "" &&
        currentState !== "" &&
        shippingState !== "" &&
        shippingLocation !== ""
      )
        return true;
      else return false;
    },
    submit() {
      if (this.authenticate()) {
        console.log("Submit");
        this.createOrder();
      }
    },
    cancel() {
      this.$router.go(-1);
    },
    createOrder() {
      if (this.carts.length) {
        const products = this.carts.map((e) => {
          return { product: e._id, qty: 1 };
        });
        console.log(products);
        debugger;
        let data = {
          products: [...products],
          shippingDetails: {
            fullName: this.fullName,
            location: this.currentLocation,
            email: this.email,
            phoneNumber: this.phoneNumber,
            city: this.currentState,
          },
          shippingLocation: this.shippingState,
        };

        axios.post("api/orders", data).then(
          ({ data }) => {
            console.log(data);
          },
          (error) => {
            console.log(error.message);
          }
        );
      } else {
        alert("cart is empty");
      }
    },
  },
  computed: {
    check() {
      return !this.authenticate();
    },
    carts() {
      return this.$store.state.carts;
    },
  },
};
</script>

<style></style>
