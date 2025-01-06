import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'; // Optional: for runtime prop validation

// Create the context with a default value
const CartContext = createContext({
  cart: [], // Default value for cart (empty array)
  addToCart: () => {},
  removeFromCart: () => {},
});

// CartProvider component to manage state
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Initialize cart as an empty array

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to access cart data
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Optional: PropTypes validation (for runtime checks)
CartProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensure that children are passed in the provider
};
