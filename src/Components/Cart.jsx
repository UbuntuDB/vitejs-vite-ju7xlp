import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item._id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;
