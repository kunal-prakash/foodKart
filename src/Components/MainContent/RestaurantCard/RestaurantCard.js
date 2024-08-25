import RestaurantDetails from "./RestaurantDetails";

export default function RestaurantCard() {
  return (
    <div className="res-card">
      <div className="res-img">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
          alt="res-image"
        />
      </div>
      <RestaurantDetails />
    </div>
  );
}
