import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Añadir al carrito</button>
    </div>
  );
};

export default Product;
