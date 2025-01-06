"use client"

import React from 'react';
import { useCart } from '../components/CartContext';  // Adjust path
import { CartProvider } from '../components/CartContext';  // Adjust path





const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6 ">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>




      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item:any, index:any) => (
            <li key={item.id} className="flex justify-between items-center mb-4">
              <span>{item.name}</span>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                type='button'
                onClick={() => removeFromCart()}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" type="button">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const CartPageWrapper = () => (
  <CartProvider>  {/* Wrap CartPage with CartProvider */}
    <CartPage />
  </CartProvider>
);

export default CartPageWrapper;