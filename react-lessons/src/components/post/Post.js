import React from 'react';

const Post = ({post,lift}) => {

    return (
        <div>
            
            {
                 <p>
                    id:{post.id} <br/>
                    title:{post.title}<br/>
                    <button onClick = {()=>{
                        lift(post)
                    }}>
                        details
                        </button>
                    </p>
            }
        
        </div>
    );
};

export default Post;