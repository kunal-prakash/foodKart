import ProductDetails from './ProductDetails';

export default function ProductCard(props) {
  return (
    <div className="w-[250px] h-[375px] m-2 bg-gray-100 rounded-md transition-transform ease-in-out hover:transform-3d hover:scale-105 grid grid-rows-[60%_40%] overflow-hidden">
      <img className="w-[100%] h-[100%] object-contain bg-grey-100" src={props.product?.images?.[0]} alt="res-image" />
      <ProductDetails {...props} />
    </div>
  );
}
