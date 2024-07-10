import React from 'react'
import ProductCard from '../components/ProductCard';
import useTitle from '../hooks/useTitle';


const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Vegitos Earings", "price": 100, "image": "/assets/vegito_earings.jpg" },
    {"id": 2, "name": "Vegito-energy", "price": 100, "image": "/assets/vegito-energy.jpeg"},
    {"id": 3, "name": "Spiritual energy", "price": 50, "image": "/assets/spiritual_energy.jpeg"},
    {"id": 4, "name": "Vegitos kamehame", "price": 100, "image": "/assets/VegitoFinalKamehameha.gif" },
    {"id": 5, "name": "Vegito-sword", "price": 100, "image": "/assets/spiritual_sword.jpg"},
    {"id": 6, "name": "X2 Spiritual energy", "price": 100, "image": "/assets/spiritual_energy.jpeg"},
  ]

  return (
    <main>
      <section className='products'>
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      
      </section>
    </main>
  )
}

export default Home