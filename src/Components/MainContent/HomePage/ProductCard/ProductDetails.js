import star from '../../../../../public/images/star.png';

export default function ProductDetails(props) {
  const { title, rating = '-', description } = props.product;
  return (
    <div className="res-details">
      <div className="res-name">{title}</div>
      <div className="res-review">
        <div className="res-rating">
          <img src={star} alt="star" />
          {rating}/5
        </div>
      </div>
      <div className="res-cuisine">{description}</div>
    </div>
  );
}
