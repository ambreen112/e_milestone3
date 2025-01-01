import React, { createContext, useState, useContext } from "react";

// Create the CartContext
const CartContext = createContext(null);

// CartProvider component to wrap around the app and provide cart context
export const CartProvider = ({ children }) => { // Remove TypeScript type annotations
  const [cart, setCart] = useState([]); // Cart state will hold the products

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Adds the product to the cart
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId)); // Removes a product by its ID
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children} {/* Makes cart context available to child components */}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context in any component
export const useCart = () => useContext(CartContext);
