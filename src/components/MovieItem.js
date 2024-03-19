import {Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

    const Movie_Item=({movie})=>{
        return(
          <Container fluid>
              <Row>
                <Col xs lg="2">
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text> Release Date: {movie.Year}</Card.Text>
                <Card.Text> Movie/Series: {movie.Type}</Card.Text>
              </Card.Body>
              </Card>
              </Col>
              </Row>
          </Container>
        )
    }

    export default Movie_Item;