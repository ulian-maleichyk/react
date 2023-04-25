import { Cars } from "./components/Cars/Cars";
import Users from "./components/users/Users";
import { useForm } from "react-hook-form";
import { savePost } from "./services/post.service";
import { saveComent } from "./services/comments.service";
import { saveUser } from "./services/user.service";



function App() {
  // Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом
  //  на http://jsonplaceholder.typicode.com/users
  // Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом
  //  на http://jsonplaceholder.typicode.com/comments
  let {register,handleSubmit} = useForm({defaultValues: {title:'title defolt'}})
  const onSubmit1 = (data) => {
    
   savePost(data).then(({data}) => console.log(data))
   console.log(data);
  }      
  const onSubmit2 = (data) => {
    
    saveComent(data).then(({data}) =>console.log(data))
    console.log(data);
   }      

   const onSubmit3 = (data) => {
    
    saveUser(data).then(({data}) =>console.log(data))
    console.log(data);
   }      
  
  

  return (
    <div>
      
      <div>
        <form onSubmit={handleSubmit(onSubmit1)}>
          <input {...register('title',{required:true})}/>
          <input {...register('body')}/>
          <input type="submit" value={'save post'}/>

          <select {...register('userId')}>
                  <option value='1'></option>
                  <option value='2'></option>
                  <option value='3'></option>
                  <option value='4'></option>
            </select>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit2)}>
          <input {...register('postId',{required:true})}/>
          <input {...register('name')}/>
          <input {...register('email')}/>
          <input {...register('body')}/>
          <input type="submit" value={'save coment'}/>

          {/* <select {...register('id')}>
                  <option value='1'></option>
                  <option value='2'></option>
                  <option value='3'></option>
                  <option value='4'></option>
            </select> */}
        </form>
        </div>
        <div>
        <form onSubmit={handleSubmit(onSubmit3)}>
          <input {...register('name',{required:true})}/>
          <input {...register('username')}/>
          <input {...register('email')}/>
          <input {...register('address')}/>
          <input {...register('phone')}/>
          <input {...register('website')}/>
          <input {...register('company')}/>
          <input type="submit" value={'save user'}/>
         
          {/* <select {...register('id')}>
                  <option value='1'></option>
                  <option value='2'></option>
                  <option value='3'></option>
                  <option value='4'></option>
            </select> */}
        </form>
        </div>
      <div><Cars/></div>
      
    </div>
  );
}

export default App;
