import React from 'react';
import { useSelector } from 'react-redux';

export default function CartLogo() {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return <>🛒{cartItems?.length ? <sup>{cartItems.length}</sup> : null}</>;
}
