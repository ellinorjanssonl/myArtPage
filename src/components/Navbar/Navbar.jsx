import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const AppNavbar = () => {
  return (
    <Navbar className="navbar" expand="lg"> {/* Lägg till expand="lg" för att definiera när hamburgermenyn ska visas */}
      <Container className="Navcontainer">
        <Navbar.Brand href="/"><img className="logo" src="whitelogo.png" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Lägg till hamburgerikon */}
        <Navbar.Collapse id="basic-navbar-nav"> {/* Innehåller elementen som ska döljas på mindre skärmar */}
          <Nav className="me-auto">
            <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Home</NavLink>
            <NavLink to="/Shop" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Shop</NavLink>
            <NavLink to="/Cart" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Cart</NavLink>
            <NavLink to="/Contact" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;


