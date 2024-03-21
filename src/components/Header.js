
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    function refreshPage() {
        window.location.reload(false);
      }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="navbartittle" >Streamify Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navbartittle" href="#home" onClick={refreshPage}>Home</Nav.Link>
            <Nav.Link className="navbartittle" href="#link">List of Movies</Nav.Link>
            <NavDropdown title="Sign Up" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;