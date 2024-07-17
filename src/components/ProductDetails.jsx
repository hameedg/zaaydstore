// ProductDetails.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from './useFetch';
import ProductCard from './ProductCard';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const { data, loading, error } = useFetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  const product = data.find(item => item.objectID === id);
  const relatedProducts = data.filter(item => item.categories.some(category => product.categories.includes(category)) && item.objectID !== id);
  const shuffledData = shuffleArray(relatedProducts).slice(0, 6);

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-[#c0c0c5] to-[#7272df]">
      <div className='flex justify-center items-center'>
        <ProductCard product={product} />
      </div>
      <button onClick={() => addToCart(product)} className="mt-2 bg-blue-500 text-white p-2 rounded">Add to Cart</button>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shuffledData.map(relatedProduct => (
          <Link key={relatedProduct.objectID} to={`/products/${relatedProduct.objectID}`}>
            <ProductCard product={relatedProduct} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
