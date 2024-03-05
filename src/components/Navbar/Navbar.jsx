import React, { useContext } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../Cart/CartContext';
import './Navbar.css';

const AppNavbar = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Använd useContext för att hämta cartItems och removeFromCart

  return (
    <Navbar className="navbar" expand="lg">
      <Container className="Navcontainer">
        <Navbar.Brand href="/"><img className="logo" src="whitelogo.png" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Home</NavLink>
        <NavLink to="/Shop" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Shop</NavLink>
        <NavLink to="/Contact" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"}>Contact</NavLink>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="cart-dropdown" className="nav-link">
                Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)}) {/* Visar antal produkter */}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ width: "400px" }}> 
                {cartItems.length > 0 ? (
                  cartItems.map((item, index) => (
                    <Dropdown.Item key={index} href="#/action-1">
                      <div className="cart-dropdown-item">
                        <img src={item.imgSrc} alt={item.title} style={{ width: "50px", marginRight: "10px" }} />
                        <div>
                          <div>{item.title}</div>
                          <small>Antal: {item.quantity}</small>
                          <br />
                          <small>Pris: {item.price * item.quantity} SEK</small>
                        </div>
                        <button onClick={() => removeFromCart(item)} style={{ marginLeft: "auto" }}>Ta bort</button>
                      </div>
                    </Dropdown.Item>
                  ))
                ) : (
                  <Dropdown.Item>Inga produkter i varukorgen</Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;

