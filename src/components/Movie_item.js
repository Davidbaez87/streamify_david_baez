

    const Movie_Item=({movie})=>{
        return(
            <div>
                <li>
                    <h3>{movie.Title}</h3>
                    <img src={movie.Poster}/>
                    <p>Release Date: {movie.Year}</p>
                    <p>Type: {movie.Type}</p>
                    <p>-----------</p>
                </li>
            </div>
        )
    }

    export default Movie_Item;