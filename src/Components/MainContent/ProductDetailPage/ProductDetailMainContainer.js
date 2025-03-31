import React, { useEffect, useState } from 'react';
import { ALL_PRODUCTS_API } from '../../../utils/apis';
import { useParams } from 'react-router-dom';

export default function ProductDetailMainContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${ALL_PRODUCTS_API}/${productId}`);
    const data = await response.json();
    setProduct(data);
  };
  return <>{product ? product.title : 'Loading...'}</>;
}
