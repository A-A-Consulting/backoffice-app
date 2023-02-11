


// axios.interceptors.response.use(
//   callBack1PaSucces, // si firebase me dio ok, este callBack pide a MS Auth el JWT
//   callBack2PaErro // SI FIREBASE ME PATEA; EJECUTO ESTE CALLBACK PA TIRAR UN ERROR
// )

// const loggearFirebase = ()=> {
//   const promiseResponse = await axios.post(post a firebase)
//   const result = await Promise.all([promiseResponse])
//   if(result[0]){
//     setear el token
//   }else{
//     tirar error
//   }
// }