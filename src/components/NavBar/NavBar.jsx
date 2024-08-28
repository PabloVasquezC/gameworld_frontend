import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';
import { Link, BrowserRouter } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-purple navbar ">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>GameWorld</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link" className='text-white'>Productos</Nav.Link>
            <Nav.Link href="#link" className='text-white'>Ofertas</Nav.Link>
            <NavDropdown title="Más" id="basic-nav-dropdown">
              <div className='action-style'>
              <NavDropdown.Item href="#action/3.1" className='action-style'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='action-style'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='action-style'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              </div> 
            </NavDropdown>
            <Nav.Link>
              Log in
            </Nav.Link>
            <Nav.Link>
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;