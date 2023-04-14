
import './App.css';
import Characters from './components/characters/Characters';


// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів

let characters = [
    {
      id:730,
      name:"Princess Ponietta",
      status:"Alive",
      species:"Animal",
      gender:"Female",
      image:"https://rickandmortyapi.com/api/character/avatar/730.jpeg"
    },
    {
      id:674,
      name:"Bova",
      status:"Dead",
      species:"Humanoid",
      gender:"Female",
      image:"https://rickandmortyapi.com/api/character/avatar/674.jpeg"
    },
    {
      id:515,
      name:"Caterpillar Mr. Goldenfold",
      status:"Dead",species:"Animal",gender:"Male",
      image:"https://rickandmortyapi.com/api/character/avatar/515.jpeg"
    },
    {
      id:243,
      name:"Mr. Needful",
      status:"Alive",
      species:"Humanoid",
      gender:"Male",
      image:"https://rickandmortyapi.com/api/character/avatar/243.jpeg"
    },
    {
      id:212,
      name:"Magma-Q",
      status:"Dead",species:"Alien",
      gender:"Male",
      image:"https://rickandmortyapi.com/api/character/avatar/212.jpeg"
    },
    {id:164,
      name:"Insurance Rick",
      status:"unknown",
      species:"Human",gender:"Male",
      image:"https://rickandmortyapi.com/api/character/avatar/164.jpeg"
    }
    ];

function Rick() {
    return (
      <div>
        <Characters xxx={characters}/>
      </div>     
    );
  }
  
  export default Rick