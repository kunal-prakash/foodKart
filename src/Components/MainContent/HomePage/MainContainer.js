import { PRODUCTS_LIST_API } from '../../../utils/apis';
import React, { useEffect, useState } from 'react';
import ProductList from './ProductCard/ProductList';
import Search from '../../Search';

export default function MainContainer() {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState(30);

  useEffect(() => {
    fetch(PRODUCTS_LIST_API)
      .then((res) => res.json())
      .then((data) => {
        setProductList(data.products);
        setFilteredProductList(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Search setFilteredProductList={setFilteredProductList} productList={productList} />
      <div className="mainContainer">
        <ProductList productList={filteredProductList} displayedProducts={displayedProducts} />
      </div>
    </>
  );
}
