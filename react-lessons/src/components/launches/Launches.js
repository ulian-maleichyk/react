import React, {useState,useEffect} from "react";
import Launche from "../launche/Launche";

const Launches = ({lift}) => {

    let [launches,setLaunches] = useState([])

useEffect (()=>{
    fetch(`https://api.spacexdata.com/v3/launches/`)
    .then(value => value.json())
    .then(allLaunches => {
        setLaunches(allLaunches);
    })
},[])

    return (
        <>
         {
            launches.filter(launche =>launche.launch_year != 2020).map(launche => 
            <Launche launche={launche}/> )
        }
        </>
       
    );
};

export default Launches;