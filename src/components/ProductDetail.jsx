import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Fetch detailed product information
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));

    // Fetch all products to get a list for random selection
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        // Select 6 random products (excluding the current product)
        const shuffledProducts = data.sort(() => 0.5 - Math.random());
        const randomSelection = shuffledProducts.slice(0, 6).filter(p => p.id !== parseInt(id));
        setRandomProducts(randomSelection);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img className="w-full h-auto" src={product.image} alt={product.title} />
        </div>
        <div className="w-1/2 ml-4">
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <div className="flex items-center">
            {renderStars(product.rating.rate)}
            <span className="ml-2 text-gray-600">{product.rating.rate.toFixed(1)}</span>
          </div>
          <p className="mt-4 text-xl font-bold">${product.price}</p>
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-8">You might also like</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {randomProducts.map(randomProduct => (
          <Link key={randomProduct.id} to={`/products/${randomProduct.id}`} className="flex items-stretch">
            <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col">
              <img className="w-full h-40 object-cover" src={randomProduct.image} alt={randomProduct.title} />
              <div className="px-6 py-4 flex-1">
                <div className="font-bold text-xl mb-2">{randomProduct.title}</div>
                <div className="flex items-center">
                  {renderStars(randomProduct.rating.rate)}
                  <span className="ml-2 text-gray-600">{randomProduct.rating.rate.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-6 h-6 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.149c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.84-.197-1.54-1.118l1.287-3.948a1 1 0 00-.364-1.118l-3.36-2.44c-.784-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.286-3.948z" />
      </svg>
    );
  }
  return stars;
};

export default ProductDetail;
