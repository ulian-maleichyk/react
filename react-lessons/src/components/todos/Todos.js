
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Todo from '../todo/Todo';

const Todos = () => {

let [todos, setTodos] = useState([])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(value => value.json())
        .then(value => {
            setTodos([...value])
        });

        return 

},[]);

    return (
        <div>
            {
                todos.map(value => <Todo key={value.id} item={value}/>)
            }

            <h4>todos details</h4>
            <Outlet/>
        </div>
    );
};

export default Todos;