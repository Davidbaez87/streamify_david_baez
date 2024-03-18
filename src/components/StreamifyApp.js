import React,{useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


const StreamifyApp=()=>{

    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(false)
    const [movies, setMovies]=useState([])

    const fetchMovies = async(searchTerm)=>{
        setLoading(true);
        setError(null);

        try {
            const response =await axios.get('https://www.yourmovies.api.com/?apikey=apikey&s=${searchTerm}');
            if(response.data.response === "True"){
                console.log(response.data)
                setMovies(response.data)
            }else {
                setError(response.data.Error);
            }
    
        }catch(error){
                setError('Error while fetching data',error);
        }finally{
            setLoading(false);
        }
    }

    return(
    <div>

        <h1>Streamify</h1>
        <SearchBar/>


    </div>);
}
export default StreamifyApp;