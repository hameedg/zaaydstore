import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';



const   Hero = () => {


  const { data, loading, error } = useFetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  // Shuffle and slice the data
  const shuffledData = shuffleArray(data).slice(0, 29);


  return (
    <>
   <div className="container mx-auto px-4 py-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {shuffledData.slice(0, 20).map(product => (
          <Link key={product.objectID} to={`/products/${product.objectID}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
    </>
  )
}

export default Hero