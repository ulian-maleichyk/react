import React from 'react';

const Launche = ({launche}) => {

    return (
        <div>
            
            {
                 <p>
                    {launche.mission_name} <br/>
                    {launche.launch_year}<br/>
                    
                    <img src = {launche.links.mission_patch_small}></img><br/>
                    </p>
            }
        
        </div>
    );
};

export default Launche;