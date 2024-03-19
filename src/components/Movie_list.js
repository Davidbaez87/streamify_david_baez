import Movie_Item from "./Movie_item"


        const Movie_list=({movies})=>{

            return(
            <div>
                <h2>Movies</h2>
                <ul>
                {
                    movies.map((movie)=> (
                        <Movie_Item key={movie.imdbID} movie={movie}/>
                        )
                        )}
                </ul>
            </div>
            )
        }
        export default Movie_list;