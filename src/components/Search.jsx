// components/Search.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import useFetch from './useFetch';
import useDebounce from './useDebounce';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const debouncedQuery = useDebounce(query, 500);
  const { data, loading, error } = useFetch('https://raw.githubusercontent.com/algolia/datasets/master/ecommerce/records.json');

  useEffect(() => {
    if (debouncedQuery && data) {
      setFilteredData(data.filter(product =>
        product.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      ));
    } else {
      setFilteredData([]);
    }
  }, [debouncedQuery, data]);

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
        placeholder="Search for products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {debouncedQuery && filteredData.length === 0 && !loading && (
        <div>No products found</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map(product => (
          <Link key={product.objectID} to={`/products/${product.objectID}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
