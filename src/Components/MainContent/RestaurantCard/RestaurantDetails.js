import star from "../../../../public/images/star.png";

export default function RestaurantDetails() {
  return (
    <div className="res-details">
      <div className="res-name">Chinese Wok</div>
      <div className="res-review">
        <div className="res-rating">
          <img src={star} alt="star" />
          4.3
        </div>
        <div className="res-time">20-25 mins</div>
      </div>
      <div className="res-cuisine">Chinese, Asian, Tibetan, Desserts</div>
    </div>
  );
}
