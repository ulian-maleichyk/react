import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Album from '../album/Album';

const Albums = () => {

let [albums, setAlbums] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(value => value.json())
        .then(value => {
            setAlbums([...value])
        });

        return 

},[]);

    return (
        <div>
            {
                albums.map(value => <Album key={value.id} item={value}/>)
            }

            <h4>albums details</h4>
            <Outlet/>
        </div>
    );
};

export default Albums;