import React from 'react';
import ProductCard from './ProductCard';
import ShimmerProductCard from './ShimmerProductCard';
import { Link } from 'react-router-dom';

export default function ProductList({ productList, displayedProducts }) {
  return (
    <>
      {productList?.length !== 0 ? (
        <>
          {productList.map((product) => {
            return (
              <Link to={`/product/${product.id}`} key={product.id}>
                <ProductCard product={product} />
              </Link>
            );
          })}
        </>
      ) : (
        <>
          {[...Array(displayedProducts)].map((i, index) => (
            <ShimmerProductCard key={index} />
          ))}
        </>
      )}
    </>
  );
}
