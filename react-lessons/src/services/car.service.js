import { axiosService } from "./axios.service"
import {urls} from "../configs/urls"

const carService = {
    getAll:()=>axiosService.get(urls.cars),
    create:(car)=>axiosService.post(urls.cars, car),
    getByID:(id)=>axiosService.get(`${urls.cars}/${id}`),
    updateByID:(id,car)=>axiosService.put(`${urls.cars}/${id}`, car),
    deleteByID:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}

export {
    carService
}