import catimg from './animal_img/cat.svg';
import cowimg from './animal_img/cow.svg';
import dogimg from './animal_img/dog.svg';
import gatorimg from './animal_img/gator.svg';
import horseimg from './animal_img/horse.svg';
import heartimg from './animal_img/heart.svg';
import './AnimalShows.css';
import { useState } from 'react';
const svgMapping={ //object tập hợp các ảnh thành Key
    cat: catimg,
    dog: dogimg,
    gator: gatorimg,
    cow: cowimg,
    horse: horseimg
};
function AnimalShows({type}){
    const [click,setClick]=useState(0);
    const handleClick=()=>{
        setClick(click+1);
    }
    return (<div onClick={handleClick}>
        <img alt="animal pic" src={svgMapping[type]}></img>
        <img alt="heart pic" src={heartimg} style={{width: 10+10*click+'px'}}></img>
    </div>);
}
export default AnimalShows;