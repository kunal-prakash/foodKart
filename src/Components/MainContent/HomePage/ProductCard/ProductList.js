import React from 'react';
import ProductCard, { withFastSellingLabel } from './ProductCard';
import ShimmerProductCard from './ShimmerProductCard';
import { Link } from 'react-router-dom';

export default function ProductList({ productList, displayedProducts }) {
  const FastSellingProductCard = withFastSellingLabel(ProductCard);
  return (
    <>
      {productList?.length !== 0 ? (
        <>
          {productList.map((product) => {
            if (product?.availabilityStatus === 'Low Stock') {
              return (
                <Link
                  className="transition-transform ease-in-out hover:transform-3d hover:scale-105 hover:opacity-90"
                  to={`/product/${product.id}`}
                  key={product.id}
                >
                  <FastSellingProductCard product={product} />
                </Link>
              );
            }
            return (
              <Link
                className="transition-transform ease-in-out hover:transform-3d hover:scale-105 hover:opacity-90"
                to={`/product/${product.id}`}
                key={product.id}
              >
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
