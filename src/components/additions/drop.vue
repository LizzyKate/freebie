<template>
  <div class="container mt-5">
    <form @submit.prevent="submit()" class="col-md-6 mx-auto">
      <div class="form-group">
        <label class="billor"> Name </label>
        <input
          type="text"
          class="form-control opt"
          placeholder="Product Name"
          v-model="name"
          required
        />
      </div>
      <div class="form-group">
        <label class="billor"> Cost </label>
        <input
          type="number"
          class="form-control opt"
          placeholder="Product Cost"
          v-model="cost"
          required
        />
      </div>
      <div class="form-group mt-5">
        <label class="billor"> Short Description</label>
        <textarea
          class="form-control opt"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Write A Short Description"
          v-model="shortDescription"
          required
        ></textarea>
      </div>
      <div class="form-group mt-5">
        <label class="billor">Attachment</label>
        <div class="input-group mb-3">
          <div class="custom-file opt">
            <input
              type="file"
              class="custom-file-input opt"
              id="inputGroupFile01"
              @change="addedFiles"
              accept="image/*"
              multiple
              required
            />
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row bd-highlight my-5 justify-content-center">
        <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="button" @click="cancel()">Cancel</button>
        <button class="ml-3 p-2 bd-highlight btn btn-lg butt" type="submit" :disabled="check">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { authenticate } from "../../routeGuard";
import axios from "../../authentication.axios"
export default {
  data() {
    return {
      name: "",
      shortDescription: "",
      cost:"",
      files:[]
    };
  },
  methods: {
    addedFiles(e){
      console.log(e.target.files.length)
      let filenumber = e.target.files.length
      for(let i = 0; i < filenumber; i ++){
        this.files.push(e.target.files[i])
      }
      // this.files = e.target.files
    },
    submit() {
      if (this.name !== "" && this.cost !== "" && this.shortDescription !== "" && this.files.length > 0 ){
        let fd = new FormData()

        fd.append("name", this.name);
        fd.append("shortDescription", this.shortDescription);
        fd.append("cost", this.cost);
        for (let i = 0; i < this.files.length; i++){
          fd.append("image[]", this.files[i], this.files[i].name);
        }

        axios.post("api/products", fd).then(res => {
          console.log(res)
        }, err => {
          console.log(err)
        })
      }
    },
    cancel() {
      this.router.go(-1)
    }
  },
  computed: {
    check: function() {
      if (this.select === "" && this.select1 === "") {
        return true;
        console.log("I am disabled");
      } else {
        return false;
        console.log("I am enabled");
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    if (authenticate()) {
      next(true);
      // do something //
    } else {
      next("/login");
    }
  }
};
</script>

<style scoped>
</style>