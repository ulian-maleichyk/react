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
          <Route path={'/about'} element={<About/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
