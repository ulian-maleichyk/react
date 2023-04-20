import React, { useEffect } from 'react';
import {useForm} from "react-hook-form"
import { carService } from '../../services/car.service';
import {joiResolver} from '@hookform/resolvers/joi'
import { carValidator } from '../../validators/car.validator';
const CarForm = ({setAllCars,carForUpdate}) => {

    const {register,handleSubmit,reset,formState:{errors,isValid},setValue} = useForm({mode:'onChange', resolver:joiResolver(carValidator)})
    useEffect(() => {
        if(carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    },[carForUpdate])

    const save = async (car) => {
       const {data} = await carService.create(car);
       setAllCars(prev=>!prev)
        reset()
    }

    const update = async (car) => {

    }

    return (
        // <form onSubmit={handleSubmit(carForUpdate?update:save)}>
        //     <input type='text' placeholder='brand' {...register('brand',
        //     {
        //         pattern: {
        //         value:/^[a-zA-Za-яА-яёЁіІїЇ]{1,20}$/,
        //          messege:'помилка'},
        //          required: {value:true, message:'required'}
        //          })}/>
        //     {errors.brand&&<span>{errors.brand.messege}</span>}
        //     <input type='text' placeholder='price' {...register('price',{
        //         valueAsNumber:true, 
        //         min:{value:0,message:'min 0'},
        //         max:{value:1000000,message:'man 1000000'}
        //         })}/>
        //         {errors.price&&<span>{errors.price.message}</span>}
        //     <input type='text' placeholder='year' {...register('year',{
        //         valueAsNumber:true,
        //         min:{value: 1990,message:'min 1990'},
        //         max:{value: new Date().getFullYear(),message:'current year'}
        //         })}/>
        //         {errors.year&&<span>{errors.year.message}</span>}
        //     <button disabled={!isValid}>{carForUpdate?'Update':'Create'}</button>
        // </form>

<form onSubmit={handleSubmit(carForUpdate?update:save)}>
<input type='text' placeholder='brand' {...register('brand')}/>
{errors.brand&&<span>{errors.brand.messege}</span>}
<input type='text' placeholder='price' {...register('price')}/>
    {errors.price&&<span>{errors.price.message}</span>}
<input type='text' placeholder='year' {...register('year')}/>
    {errors.year&&<span>{errors.year.message}</span>}
<button disabled={!isValid}>{carForUpdate?'Update':'Create'}</button>
</form>
    );
};

export default CarForm;