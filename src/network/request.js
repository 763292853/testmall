import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000,
  });
  
//   instance.interceptors.request.use((config)=>{
   
   
//     return config
//   },(err)=>{
//     console.log(err,12);
//   })
  instance.interceptors.response.use((config)=>{
      return config.data
  })


  return instance(config);
}


