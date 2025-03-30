import { RESTAURANT_LIST } from '../../utils/apis';
import React, { Suspense, useEffect, useState } from 'react';
import Search from '../Search';
const RestaurantList = React.lazy(() => import('./RestaurantCard/RestaurantList'));

export default function MainContainer() {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

  useEffect(() => {
    fetch(RESTAURANT_LIST)
      .then((res) => res.json())
      .then((data) => {
        setRestaurantList(data.products);
        setFilteredRestaurantList(data.products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Search setFilteredRestaurantList={setFilteredRestaurantList} restaurantList={restaurantList} />
      <div className="mainContainer">
        <Suspense fallback={<div>Loading...</div>}>
          <RestaurantList restaurantList={filteredRestaurantList} />
        </Suspense>
      </div>
    </>
  );
}
