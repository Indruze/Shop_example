// @flow

import React from 'react';

import type { $Product } from '../Product';

type $Props ={
  cartItems: $Product,
  removeFromCart: ($Product) => void,
}

const CartView = ({cartItems, removeFromCart}: $Props) => {
  const subtotal =  cartItems
    ? cartItems.reduce((total, product) => {
      return total + product.price * product.count
      }, 0)
    : null;

  const allItemsCount = cartItems
    ? cartItems.reduce((total, product) => {
      return total + product.count
    }, 0)
    : null;

  return cartItems ? (
    <div className="border p-2 mb-4">
      <p>Prekių jūsų krepšelyje: {allItemsCount}</p>
      <hr />
      {cartItems.length > 0 &&
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="border-bottom py-3">
              <b>{item.name}</b>
              <button
                className="btn btn-danger btn-sm py-1 float-right"
                onClick={() => removeFromCart(item)}
              >
                &times;
              </button>
              <p className="mb-0">{item.count} &times; {item.price}</p>
            </div>
            ))}
          <strong>Is viso: {subtotal.toFixed(2)} €</strong>
        </div>
      }
    </div>
  ) : null
}


export default CartView;
