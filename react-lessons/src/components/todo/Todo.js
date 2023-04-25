import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Todo = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()} state={{...item}}> 
                {item.userId}<br/>
                {item.id}<br/>
                {item.title}<br/>
                {item.completed}<br/>
                
            </Link>   
        </div>
    );
};

export default Todo;

// "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false