// import axios from "axios";
import { signIn } from ".";

export const loginManager = async () => {
  const result = await signIn();
  // if(result.user){
  //   const response = await axios.post('/users/login', result.user)
  //   return response
  // }
  return;
}






/*

onFulfilled?: ((value: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>) | null | undefined, 
onRejected?: ((error: any) => any) | ... 1 more ... | undefined, options?: AxiosInterceptorOptions | undefined): number

*/