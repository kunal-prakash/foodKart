import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../../utils/cartSlice';

export default function CartMainContainer() {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center">
      <h1 className="font-bold text-xl m-2 p-2">Cart</h1>
      {cartItems?.length !== 0
        ? cartItems.map((item) => <CartItem item={item} key={item.id} />)
        : 'No items in the cart'}
    </div>
  );
}

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleItemModification = (item, type) => {
    if (type == 'add') {
      dispatch(addItem(item));
    }
    if (type == 'remove') {
      dispatch(removeItem(item));
    }
  };
  return (
    <div className="h-20 flex justify-between border border-gray-300 m-2 p-2 rounded-lg shadow-md">
      <img className="inline" src={item.image} alt={`${item.name} image`} />
      <div className="text-center my-4">{item.name}</div>
      <div className="text-center m-2">
        <button
          className="px-2 m-2 bg-gray-300"
          onClick={() => {
            handleItemModification(item, 'remove');
          }}
        >
          -
        </button>
        {item.quantity}
        <button
          className="px-2 m-2 bg-gray-300"
          onClick={() => {
            handleItemModification(item, 'add');
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
