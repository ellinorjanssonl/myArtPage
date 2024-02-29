import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <div className="cart-header">
        <h2>Din Varukorg</h2>
        {cartItems.length > 0 ? (
          <>
            <div className="cart-container">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.imgSrc} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>Antal: {item.quantity}</p>
                  {/* Uppdaterad för att visa totalpriset baserat på kvantitet */}
                  <p>Pris: {item.price * item.quantity} SEK</p> 
                  <button onClick={() => removeFromCart(item)}>Ta bort</button>
                </div>
              ))}
            </div>
            <div className='ClearCart'>
              <button onClick={clearCart} className="clear-cart-button">Töm varukorgen</button>
            </div>
          </>
        ) : (
          <p>Varukorgen är tom.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;


