import axios from "axios";
import { date } from "joi";

let axiosInstance =  axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/posts',
        headers: {'Content-type': 'application/json; charset=UTF-8'}
        
})

const savePost = (data) =>   axiosInstance.post('',{data})

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

export  {axios, savePost}