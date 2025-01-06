
// CartComponent.js
import React from 'react';
import { useCart } from './CartContext';


const CartComponent = () => {
  const { cart, addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name: 'bag' }); // Add an item to the cart
  };

  return (
    <div>
      <h2>Cart</h2>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartComponent;
