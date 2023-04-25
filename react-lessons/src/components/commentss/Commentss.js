import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Commentt from '../commentt/Commentt';

const Commentss = () => {

let [commentss, setCommentss] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
        .then(value => {
            setCommentss([...value])
        });

        return 

},[]);

    return (
        <div>
            {
                commentss.map(value => <Commentt key={value.postId} item={value}/>)
            }

            <h4>albums details</h4>
            <Outlet/>
        </div>
    );
}
    export default Commentss;