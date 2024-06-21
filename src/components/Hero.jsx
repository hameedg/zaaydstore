import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';



const Hero = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);
  return (
    <>
   <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {products.map(product => (
             <Link key={product.id} to={`/products/${product.id}`}>
         <ProductCard product={product} />
             </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default Hero