import axios from "axios";



let axiosInstance =  axios.create({
    baseURL:'http://jsonplaceholder.typicode.com/users',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
    
})

const saveUser = (data) =>   axiosInstance.post('',{data})

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

export {saveUser}