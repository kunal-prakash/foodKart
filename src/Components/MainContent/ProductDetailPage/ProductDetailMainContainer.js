import { useParams } from 'react-router-dom';
import useProductDetail from '../../../utils/useProductDetail';
import ProductImageContainer from './ProductImageContainer';
import ProductDescriptionContainer from './ProductDescriptionContainer';

export default function ProductDetailMainContainer() {
  const { productId } = useParams();
  const product = useProductDetail(productId);
  return (
    <>
      {product ? (
        <div className="m-2 p-2 grid grid-cols-[45%_55%] gap-2">
          <ProductImageContainer images={product.images} title={product.title} />
          <ProductDescriptionContainer product={product} />
        </div>
      ) : null}
    </>
  );
}
