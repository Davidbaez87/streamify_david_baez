import React,{useState} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Movie_list from './MovieList';


const StreamifyApp=()=>{

    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(false)
    const [movies, setMovies]=useState([])

    const API_KEY=process.env.REACT_IMDB_API_KEY;
    

    const fetchMovies = async(searchTerm)=>{
        setLoading(true);
        setError(null);

        try {
            const response =await axios.get(`https://www.omdbapi.com/?apikey=508387f9&s=${searchTerm}`);
            if(response.data.Response === "True"){
                // console.log(response.data)
                setMovies(response.data.Search);
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
        <SearchBar onSearch={fetchMovies }/>
        {loading && <p>Loading.....</p>}
        {error && <p>{error}</p>}

        <Movie_list movies={movies}/>
    </div>);
}
export default StreamifyApp;