import SearchImage from './api';
import ListImages from './components/ListImages';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App(){
    const [images,setImages]=useState([]);
    const handleSubmit=async(term)=>{
            const results= await SearchImage(term);
            setImages(results);
        };
    
    return (<div>
        <SearchBar onSubmit={handleSubmit}></SearchBar>
        <ListImages images={images}></ListImages>
    </div>);
}


export default App;