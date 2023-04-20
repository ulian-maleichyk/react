 import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
 
 const PostDitails = () => {

    let {id} = useParams()

    let [post, setPost] = useState([null])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(value => value.json())
    .then(value => {
        setPost({...value})
    });
    },[id])

    return (
        <div>
            {post && JSON.stringify(post)}
        </div>
    );
 };
 
 export default PostDitails;