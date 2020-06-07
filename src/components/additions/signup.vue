<template>
	<div class="container mt-5">
		<form @submit.prevent="submit()" class="col-md-6 mx-auto">
			<div class="form-group">
				<label class="billor">Full Name</label>
				<input
					type="text"
					class="form-control opt"
					placeholder="John Doe"
					v-model="name"
					required
				/>
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

			<button
				class=" p-2 bd-highlight btn btn-lg butt"
				:disabled="authenticate"
			>
				Submit
			</button>
		</form>
	</div>
</template>

<script>
import axios from "../../axios";
export default {
	data() {
		return {
			email: "",
			password: "",
			name: "",
		};
	},
	methods: {
		submit() {
			let data = {
				email: this.email,
				password: this.password,
				name: this.name,
			};
			axios.post("signup", data).then(
				({ data }) => {
					console.log(data);
					localStorage.setItem("auth-token", data.data);
					this.$router.push("/");
				},
				(err) => {
					console.log(err.response);
					if (err.response.data.error === "email already exists") {
						alert("Email is Already Registered");
					}
				}
			);
		},
	},
	computed: {
		authenticate() {
			if (this.name !== "" && this.password !== "" && this.email !== "") {
				return false;
			} else return true;
		},
	},
};
</script>

<style></style>
