import axios from 'axios'
import { baseURL, usersURl } from '../configs/urls'

 const axiosService = axios.create({baseURL:baseURL})

 


 export {
    axiosService,
 }