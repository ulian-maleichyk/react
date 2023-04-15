import React from 'react';
import Launches from '../src/components/launches/Launches'
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
// потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)


const SpaceX = () => {
   

    
    return (
        <div className>
        
        {
          
           
          <div className>
          <Launches/>
        </div>
        }
       </div>
    );
};

export default SpaceX;

