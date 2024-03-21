import Movie_Item from "./MovieItem"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

        const Movie_list=({movies})=>{

            return(
            <div style={{display: 'block'}}>
                <Row xs={1} md={2} lg={3} className="g-4">         
                {
                    movies.map((movie)=> (
                        <Col key={movie.imdbID}>
                        <Movie_Item key={movie.imdbID} movie={movie} class="movie-L"/>
                        </Col>
                        )
                        )}
                </Row>
                
            </div>
            )
        }
        export default Movie_list;