import star from '../../../../public/images/star.png';

export default function RestaurantDetails(props) {
  const { title, rating = '-', resTime, resCuisine } = props.restaurant;
  return (
    <div className="res-details">
      <div className="res-name">{title}</div>
      <div className="res-review">
        <div className="res-rating">
          <img src={star} alt="star" />
          {rating}/5
        </div>
        <div className="res-time">{resTime}</div>
      </div>
      <div className="res-cuisine">{resCuisine}</div>
    </div>
  );
}
