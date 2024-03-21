import {Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

    const Movie_Item=({movie})=>{
        return(
          <div className="space">
          <Container fluid>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text> Release Date: {movie.Year}</Card.Text>
                <Card.Text> Movie or Series: {movie.Type}</Card.Text>
              </Card.Body>
              </Card>
          </Container>
          </div>
        )
        
    }

    export default Movie_Item;