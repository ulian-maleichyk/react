

function Simpson({value}) {    
    return (
      <div>   
           {
             <div>     
             <img src = {value.photo}></img>    
             <div>name is {value.name}</div> 
             <div>surname is {value.surname }</div> 
             <div>age is {value.age}</div> 
             <div>{value.info}</div> 
             </div>
          }            
      </div>
    );
  }

  export default Simpson