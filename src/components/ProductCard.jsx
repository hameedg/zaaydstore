import React from 'react';

const ProductCard = ({ product }) => {
  const { name, description, brand, price, image, rating } = product;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full h-64 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-semibold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">{brand}</div>
          <div className="font-bold text-xl">${price}</div>
        </div>
        <div className="flex items-center">
          <div className="flex">
            {renderStars(rating)}
            <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {product.categories.map((category, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
