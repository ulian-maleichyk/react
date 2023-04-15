import logo from './logo.svg';
import './App.css';
import Posts from './components/posts/Posts';
import FullPost from './components/fullPost/FullPost';
import { useState } from 'react';

function App() {


let [chosenPost,setChosenPost] = useState(null)

 const lift = (obj) => {
  setChosenPost({...obj})
 }
 
  return (
   <div className='conteiner'>
    <div className='leftSide'>
    <Posts lift={lift}/>
    </div>
    {
      chosenPost
       &&
      <div className='rightSide'>
      <FullPost value={chosenPost}/>
    </div>
    }
   </div>
   
  );
}

export default App;

// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)






// #Advance

// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера

// пости мають виводитись під компонетою Users (в App компоненті)
// Footer