export const authenticate = () => {
    const authToken = localStorage.getItem("auth-token" );
    if(authToken){
        return true
    } else {
        return false
    }
}

// beforeRouteEnter(to, from, next) {
//     if (to.query.redirectFrom) {
//         next(false)
//       // do something //
//     } next
//   }