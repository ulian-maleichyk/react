import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dz = () => {
    return (
        <div>
            <h3>sub page menu</h3>
            <ol>
                <li>
                    <Link to={'todos'}>todos page</Link>
                </li>
                <li>
                    <Link to={'albums'}>albums page</Link>
                </li>
                <li>
                    <Link to={'commentss'}>commentss page</Link>
                </li>
            </ol>

            <div>
                <h3>sub view</h3>
                <Outlet/>
            </div>
        </div>
    );
};

export default Dz;