import jwt from "jsonwebtoken";

const Expired = (token) => {
    const payload = jwt.decode(token)
    console.log(payload, "payload")
    if (+payload.exp > new Date() / 1000){
        return true
    }else{
        localStorage.removeItem("auth-token")
        return false
    }
}

export const authenticate = () => {
    const authToken = localStorage.getItem("auth-token" );
    if(authToken && Expired(authToken)){
        return true
    } else {
        return false
    }
}