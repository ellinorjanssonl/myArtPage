import React, { createContext, useState } from 'react';

// Skapar en Context för varukorgen
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Funktion för att lägga till en vara i varukorgen
  const addToCart = (item) => {
    setCartItems(prevItems => {
      // Kontrollera om varan redan finns i varukorgen
      const itemExists = prevItems.find((i) => i.title === item.title);
      if (itemExists) {
        // Öka kvantiteten om varan redan finns
        return prevItems.map((i) => 
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      // Lägg till den nya varan i varukorgen
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  // Funktion för att ta bort en vara från varukorgen
  const removeFromCart = (item) => {
    setCartItems(prevItems => {
      return prevItems.filter((i) => i.title !== item.title);
    });
  };

  // Funktion för att rensa hela varukorgen
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
