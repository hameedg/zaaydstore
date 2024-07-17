// components/Cart.jsx
import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item.objectID} className="flex justify-between items-center mb-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item.objectID)} className="text-red-500">Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
