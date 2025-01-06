

// In _app.tsx (or the entry file of your app if using the App Directory)
import React from 'react';
import { CartProvider } from '../components/CartContext';  // Adjust the path
import CartPage from './cart/page';  // Adjust the path

const App = () => {
  return (
    <CartProvider>
      <CartPage /> {/* Ensure the CartPage is wrapped with CartProvider */}
    </CartProvider>
  );
};

export default App;
