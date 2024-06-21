import React from 'react';

const ProductCard = ({ product }) => {
  const { title, image, rating,price } = product;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.149c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.948c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.84-.197-1.54-1.118l1.287-3.948a1 1 0 00-.364-1.118l-3.36-2.44c-.784-.57-.38-1.81.588-1.81h4.149a1 1 0 00.95-.69l1.286-3.948z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-[28rem] object-fit" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-medium text-xl mb-2">{title}</div>
        <div className="flex items-center justify-between">
            <div className='flex'>

          {renderStars(rating.rate)}
          <span className="ml-2 text-gray-600">{rating.rate.toFixed(1)}</span>
            </div>
            <div className='font-bold text-xl mb-2'>
                ${price}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
