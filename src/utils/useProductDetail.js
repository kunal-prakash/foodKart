import { useEffect, useState } from 'react';
import { ALL_PRODUCTS_API } from './apis';

export default function useProductDetail(prodId) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${ALL_PRODUCTS_API}/${prodId}`);
      const data = await response.json();
      setProduct(data);
    })();
  }, []);

  return product;
}
