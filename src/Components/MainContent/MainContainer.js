import RestaurantCard from './RestaurantCard/RestaurantCard';
import { RESTAURANT_LIST } from '../../utils/apis';
import { useEffect, useState } from 'react';

export default function MainContainer() {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetch(RESTAURANT_LIST)
      .then((res) => res.json())
      .then((data) => setRestaurantList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mainContainer">
      {restaurantList?.products?.map((restaurant) => {
        const { id, title, price, rating, images } = restaurant;
        return <RestaurantCard restaurant={{ id, title, price, rating, images }} key={id}></RestaurantCard>;
      })}
    </div>
  );
}
