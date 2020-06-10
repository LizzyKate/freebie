import axios from "axios"

axios.defaults.baseURL = "https://freebie-app.herokuapp.com/";

const token = localStorage.getItem('auth-token')

axios.header = "Bearer " + token

export default axios;