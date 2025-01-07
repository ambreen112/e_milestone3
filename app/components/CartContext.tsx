import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the cart items and context value
interface CartItem {
  id: string;
  name: string;
  price: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;  // Ensure removeFromCart expects an id argument
}

// Create the context with a default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to manage state
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]); // Initialize cart as an empty array

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id)); // Remove the item by id
  };

  const value = {
    cart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to access cart data
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
