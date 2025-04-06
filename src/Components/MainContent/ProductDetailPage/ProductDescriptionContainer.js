import starImage from '../../../../public/images/star.png';

export default function ProductDescriptionContainer(props) {
  const { product } = props;
  return (
    <div className="px-4 flex flex-wrap items-start gap-2">
      <h1 className="w-[100%] font-semibold text-2xl">{product.title}</h1>
      <div className="w-[100%]">
        <img className="inline" src={starImage} /> {product.rating ?? '-'}/5
      </div>
      <div className="w-[100%]">{productPrice(product.discountPercentage, product.price)}</div>
      <div className="w-[100%]">
        <p className="block text-xl">Description:</p>
        {product.description ?? ''}
      </div>
      <div className="w-[100%]">
        <p className="block text-xl">Brand:</p>
        {product.brand ?? ''}
      </div>
      <div className="w-[100%]">
        <p className="block text-xl">Specification:</p>
        <ul className="list-disc marker:text-gray-600 list-inside ">
          <li>
            <span className="font-simibold text-gray-600">Warranty Inforamtion:</span> {product.warrantyInformation}
          </li>
          <li>
            <span className="font-simibold text-gray-600">Shipping Inforamtion:</span> {product.shippingInformation}
          </li>
          <li>
            <span className="font-simibold text-gray-600">Minimum Order Quantity:</span>{' '}
            {product.minimumOrderQuantity ?? 'NA'}
          </li>
          <li>
            <span className="font-simibold text-gray-600">Dimensions:</span>{' '}
            {`${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}
          </li>
          <li>
            <span className="font-simibold text-gray-600">Weight:</span> {product.weight}
          </li>
          <li>
            <span className="font-simibold text-gray-600">SKU:</span> {product.sku}
          </li>
          <li>
            <span className="font-simibold text-gray-600">Return Policy:</span> {product.returnPolicy}
          </li>
        </ul>
      </div>
      <div className="w-[100%]">
        <p className="block text-xl">Reviews:</p>
        {product.description ?? ''}
      </div>
    </div>
  );
}

const productPrice = (discount, price) => {
  if (!price) {
    return '-';
  }
  if (!discount) {
    return <p className="font-semibold text-xl">${price ?? '-'}</p>;
  }
  const discountPrice = (price - (price * discount) / 100).toFixed(2);
  return (
    <div className="flex items-center gap-2">
      <p className="font-semibold text-xl">${discountPrice ?? '-'}</p>
      <p className="text-gray-500 text-sm line-through">${price ?? '-'}</p>
      <p className="text-green-800 text-sm font-semibold">{discount}% off</p>
    </div>
  );
};
