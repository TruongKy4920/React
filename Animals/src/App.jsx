import 'bulma/css/bulma.css';
import AnimalShows from './AnimalShows';
import { useState } from 'react';
import './App.css';
function GenRanAnimal(){
    const animals=['cow','dog','cat','hourse','bird','gator'];
    return animals[Math.floor(Math.random()*animals.length)];
}
function App(){
    
    const [animals,setAnimal]=useState([]);
    const handleClick=()=>{
        setAnimal([...animals,GenRanAnimal()]);
    }
    const reRendered_animals=animals.map((animal,index)=>{
        return <AnimalShows type={animal} key={index}></AnimalShows>;
    })
    return (<div className='app'>
        <button onClick={handleClick}>Add animals :</button>
        <div>{reRendered_animals}</div>
    </div>);
}
export default App;