import axios from 'axios';

const SearchImage=async(term)=>{
    const response= await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID 1QLc4jriqbI5fjl55bNard2ROmi9_X_BdzIzrOVOR0A'
        } ,
        params: {
            query: term
        },
    });
    return response.data.results;
}
export default SearchImage;