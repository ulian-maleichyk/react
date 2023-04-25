import logo from './logo.svg';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Layout from './components/layout/Layout';
import About from './components/about/About';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';
import UserDitails from './components/user-ditails/UserDitails';
import PostDitails from './components/post-ditails/PostDitails';
import Todos from './components/todos/Todos';
import Dz from './components/dz/Dz';
import Albums from './components/albums/Albums';
import Commentss from './components/commentss/Commentss';
import CommenttDetails from './components/commentt-details/CommenttDetails';

function App() {
  return (
    <div>
      <div>
        <h2>menu</h2>
        <ul>
          <li>
            <Link to={'/'}>home</Link>
          </li>
          <li>
            <Link to={'/layout'}>layout</Link>
          </li>
          <li>
            <Link to={'/about'}>about</Link>
          </li>
          <li>
            <Link to={'/dz'}>dz</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2>view</h2>
        <Routes>
          <Route path={'/'} element={<Home/>}/>

          <Route path={'/layout'} element={<Layout/>}>
            <Route path={'users'} element={<Users/>}>
              <Route path={':id'} element={<UserDitails/>}/> 
            </Route>

            <Route path={'posts'} element={<Posts/>}> 
              <Route path={':id'} element={<PostDitails/>}/>
            </Route>

            <Route path={'comments'} element={<Comments/>}/>
          </Route>

          <Route path={'/dz'} element={<Dz/>}>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'commentss'} element={<Commentss/>}>
              <Route path={':postId'} element={<CommenttDetails/>}/> 
            </Route>
            
          </Route>

          <Route path={'/about'} element={<About/>}/>
          
        </Routes>
      </div>
    </div>
  );
}

export default App;

// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos

// albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums

// comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
// при натисканні на комментар тягнеться пост, до якого належіить цей коментар. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
// id поста взяти з коментаря (postId)

// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.