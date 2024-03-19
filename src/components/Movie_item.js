

    const Movie_Item=({movie})=>{
        return(
            <div>
                <li>
                    <h3>{movie.Title}</h3>
                    <p>Release Date: {movie.Year}</p>
                    <p>Type: {movie.Type}</p>
                </li>
            </div>
        )
    }

    export default Movie_Item;