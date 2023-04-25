import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Album = ({item}) => {
    return (
        <div>
            <Link to={item.id.toString()} state={{...item}}> 
                
                {item.id}<br/>
                {item.title}    
            </Link>   
        </div>
    );
};

export default Album;

// "userId": 1,
// "id": 1,
// "title": "quidem molestiae enim"