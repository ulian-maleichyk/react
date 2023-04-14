

function Character({value}) {
    return (
       <div>     
  <img src = {value.image}></img> 
  <div>id = {value.id}</div>   
  <div>name is {value.name}</div> 
  <div>species is {value.species }</div> 
  <div>gender is {value.gender}</div> 
  <div></div> 
  </div>
  )
  }

  export default Character