import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Commentt = ({item}) => {
    return (
        <div>
            <Link to={item.postId.toString()} state={{...item}}> 
            {item.postId}
                {item.id} <br/>
                {item.name}  <br/>
                {item.email}<br/>
                {item.body}  <br/>
            </Link>   
        </div>
    );
};

export default Commentt;

// "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam
//      eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"