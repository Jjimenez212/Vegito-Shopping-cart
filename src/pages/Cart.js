import React from 'react'
import CartCard from '../components/CartCard';
import useTitle from '../hooks/useTitle';

const Cart = () => {
  useTitle("Cart");
  
  const products = [
    {"id": 1, "name": "Vegitos Earings", "price": 100, "image": "/assets/vegito_earings.jpg" },
    {"id": 2, "name": "Vegito-energy", "price": 100, "image": "/assets/vegito-energy.jpeg"},
  ]

  return (
    <main>
      <section className='cart'>
        <h1>Cart Items: {products.length}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  )
}

export default Cart