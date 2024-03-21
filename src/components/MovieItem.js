import {Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

    const Movie_Item=({movie})=>{
        return(
          <Container fluid>
              <Card style={{ width: '25rem' }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text> Release Date: {movie.Year}</Card.Text>
                <Card.Text> Movie or Series: {movie.Type}</Card.Text>
              </Card.Body>
              </Card>
          </Container>
        )
    }

    export default Movie_Item;