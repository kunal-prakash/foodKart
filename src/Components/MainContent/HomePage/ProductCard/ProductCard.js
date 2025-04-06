import ProductDetails from './ProductDetails';

export default function ProductCard(props) {
  return (
    <div className="w-[250px] h-[375px] m-2 bg-gray-100 rounded-md grid grid-rows-[60%_40%] overflow-hidden">
      <img className="w-[100%] h-[100%] object-contain bg-grey-100" src={props.product?.images?.[0]} alt="res-image" />
      <ProductDetails {...props} />
    </div>
  );
}

export const withFastSellingLabel = (ProductCard) => {
  const WrappedComponent = (props) => {
    return (
      <>
        <label className="absolute bg-black text-stone-400 m-2 px-2 rounded-b-md">Selling Fast</label>
        <ProductCard {...props} />
      </>
    );
  };

  //displayName for better debugging
  WrappedComponent.displayName = `WithFastSellingLabel(${ProductCard.title || 'Component'})`;

  return WrappedComponent;
};
