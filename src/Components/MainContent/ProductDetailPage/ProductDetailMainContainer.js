import { useParams } from 'react-router-dom';
import useProductDetail from '../../../utils/useProductDetail';

export default function ProductDetailMainContainer() {
  const { productId } = useParams();
  const product = useProductDetail(productId);
  return (
    <>
      {product ? (
        <div className="mainContainer">
          <h1>{product.title}</h1>
          <h2>{`$${product.price}`}</h2>
        </div>
      ) : null}
    </>
  );
}
