import React from 'react';

const FullPost = ({value}) => {
    return (
        <div>
            {
                <p>
                userId:{value.userId}<br/>
                id:{value.id} <br/>
                title:{value.title}<br/>
                body:{value.body}<br/>
                </p>
            }
        </div>
    );
};

export default FullPost;