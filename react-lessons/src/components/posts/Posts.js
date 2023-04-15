import React, { useEffect, useState } from 'react';
import Post from '../post/Post';

const Posts = ({lift}) => {

    let [posts,setPosts] = useState([])

useEffect (()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(value => value.json())
    .then(allPosts => {
            setPosts(allPosts);
    })
},[])

    return (
        <>
         {
            posts.map(post => 
            <Post post={post}
            lift={lift}
                 key={post.id}/> )
        }
        </>
       
    );
};

export default Posts;