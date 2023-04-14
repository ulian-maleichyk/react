import Simpson from "../simpson/Simpson";

function Simpsons({xxx:simpsons}) {    
      return (
        <div>   
             {
                simpsons.map(value =>  ( <Simpson value={value} /> ))
            }            
        </div>
      );
    }

    export default Simpsons