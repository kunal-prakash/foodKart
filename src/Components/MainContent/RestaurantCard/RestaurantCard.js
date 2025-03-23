import './style/RestaurantCard.scss';
import RestaurantDetails from './RestaurantDetails';

export default function RestaurantCard(props) {
  return (
    <div className="res-card">
      <div className="res-img">
        <img src={props.restaurant?.images?.[0]} alt="res-image" />
      </div>
      <RestaurantDetails {...props} />
    </div>
  );
}
