import star from '../../../../../public/images/star.png';

export default function ProductDetails(props) {
  const { title, rating = '-', description } = props.product;
  return (
    <div className="p-3 bg-cyan-200 grid grid-rows-[20%_20%_60%]">
      <div className="font-bold line-clamp-1">{title}</div>
      <div>
        <img className="inline" src={star} alt="star" /> {rating}/5
      </div>
      <div className="line-clamp-3">{description}</div>
    </div>
  );
}
