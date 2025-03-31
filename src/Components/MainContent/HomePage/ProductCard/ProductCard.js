import './style/ProductCard.scss';
import ProductDetails from './ProductDetails';

export default function ProductCard(props) {
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={props.product?.images?.[0]} alt="res-image" />
      </div>
      <ProductDetails {...props} />
    </div>
  );
}
