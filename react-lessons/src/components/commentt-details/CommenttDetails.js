import React from 'react';
import { useLocation } from 'react-router-dom';

const CommenttDetails = () => {

    let {state} = useLocation()

    return (
        <div>
           {JSON.stringify(state)}
           
        </div>
        
    );
};

export default CommenttDetails;