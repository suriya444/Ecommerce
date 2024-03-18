import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductListItem from '../components/ProductListItem';
import { useNavigate, useParams } from 'react-router-dom';

export default function Checkout() {
  const params = useParams();
  const list = useSelector((state) => state.cart.list);
  const [state, setState] = useState(
    params.id
      ? (Array.isArray(ProductListItem) ? [{ ...ProductListItem.find((element) => element.id === parseInt(params.id)), count: 1 }] : [])
      : list
  );
  
  const navigate = useNavigate();

  const incrementItem = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((state) => [
      ...state.slice(0, index),
      { ...item, count: item.count + 1 },
      ...state.slice(index + 1),
    ]);
  };

  const decrementItem = (item) => {
    if (item.count === 1) {
      removeItemfromCart(item);
    } else {
      const index = state.findIndex((product) => product.id === item.id);
      setState((state) => [
        ...state.slice(0, index),
        { ...item, count: item.count - 1 },
        ...state.slice(index + 1),
      ]);
    }
  };

  const removeItemfromCart = (item) => {
    const index = state.findIndex((product) => product.id === item.id);
    setState((state) => [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ]);
  };

  return (
    <>
      {state.length > 0 ? (
        <>
          {state.map((item) => (
            <ProductListItem
              {...item}
              key={item.id}
              incrementItem={() => incrementItem(item)}
              decrementItem={() => decrementItem(item)}
              removeItem={() => removeItemfromCart(item)}
            />
          ))}
          <button className='btn btn-success' onClick={() => navigate('/success')}>
            Place Order
          </button>
        </>
      ) : (
        <h3>No items to Checkout</h3>
      )}
    </>
  );
}
