import React from 'react';
import RestaurantCard from './RestaurantCard';

export default function RestaurantList({ restaurantList }) {
  return (
    <>
      {restaurantList?.map((restaurant) => {
        const { id, title, price, rating, images, description } = restaurant;
        return (
          <RestaurantCard restaurant={{ id, title, price, rating, images, description }} key={id}></RestaurantCard>
        );
      })}
    </>
  );
}
