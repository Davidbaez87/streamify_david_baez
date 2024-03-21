import Movie_Item from "./MovieItem"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

        const Movie_list=({movies})=>{

            return(
            <div style={{display: 'centre'}}>
                <h2>Movie App</h2>
                <Row xs={1} md={2} lg={3} className="movie-L">
                <ul>
                {
                    movies.map((movie)=> (
                        <Col key={movie.imdbID}>
                        <Movie_Item key={movie.imdbID} movie={movie}/>
                        </Col>
                        )
                        )}
                </ul>
                </Row>
            </div>
            )
        }
        export default Movie_list;