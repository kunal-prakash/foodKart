import React from 'react';
import { useSelector } from 'react-redux';

export default function CartLogo() {
  const cartItems = useSelector((store) => store.cart.items);
  return <>🛒{cartItems?.length ? <sup data-testid="cart_items">{cartItems.length}</sup> : null}</>;
}
