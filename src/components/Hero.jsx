import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Hero = ({ addToCart }) => {
  const [finalData, setFinalData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [addedProductId, setAddedProductId] = useState(null);
  const { data, loading, error } = useFetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json');

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  useEffect(() => {
    if (data) {
      const shuffledData = shuffleArray(data).slice(0, 29);
      setFinalData(shuffledData);
    }
  }, [data]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductId(product.objectID);
    setTimeout(() => setAddedProductId(null), 2000); // Clear message after 2 seconds
  };

  const filteredData = finalData.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.slice(0, 20).map(product => (
          <div key={product.objectID}>
            <Link to={`/products/${product.objectID}`}>
              <ProductCard product={product} />
            </Link>
            <div className='flex justify-center items-center'>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-2 bg-blue-500 text-white p-2 rounded"
              >
              Add to Cart
            </button>
            {addedProductId === product.objectID && (
              <div className="text-green-500 mt-2">Item added</div>
            )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
