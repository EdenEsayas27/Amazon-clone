import axios from "axios"
const axiosInstance = axios.create({
    //localversion
   // baseURL: "http://127.0.0.1:3000"
   //deployed version  of amazon server on render.com
   baseURL:"https://amazon-api-deploy-1-dfxs.onrender.com/"
})
export {axiosInstance};

