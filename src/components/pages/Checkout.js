import React, { useState } from 'react';
import { cartActions } from '../../redux/slices/cartSlice';
import Cart from './Cart';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

function Checkout({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.itemsList);
  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  const handlePageChange = () => {
    navigate('/product');
  };
  const handlePageChangeCheckout = () => {
    if (window.confirm('Do you want to purchase ?')) {
      dispatch(cartActions.deleteItem(item.productId));
    }
  };
  return (
    <div className="bg-gray-300 h-screen">
      <div className="rounded-lg mx-auto overflow-hidden  container xl:48 h-auto">
        <div className="grid lg:grid-cols-12 pt-5 gap-4 h-full auto-rows-min">
          <div className="lg:col-span-12">
            <div className="p-3 bg-white shadow-lg w-full rounded-lg">
              <div className="w-full text-center font-semibold">My Shopping Cart</div>
            </div>
          </div>
          <div className="lg:col-span-8 ">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                {cartItems.length === 0 ? (
                  <div className="grid grids-col-12 gap-4 w-full h-full rounded-lg ">
                    <h4 className="text-center mt-12 font-bold text-xl">You have no products in cart </h4>
                  </div>
                ) : (
                  cartItems.map((item) => <Cart item={item} />)
                )}
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12">
                <div className="bg-gray-100 px-4 py-2 grid gap-1 grid-cols-12 w-full rounded-lg h-44">
                  <div className="col-span-12">
                    <h6 className="text-lg font-medium">Order Info</h6>
                  </div>
                  <div className="col-span-12 text-lg">
                    <div className="flex items-center justify-between">
                      <p className="font-light  text-gray-700">Subtotal:</p>
                      <p className="font-normal">${total}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="font-light  text-gray-700">Shipping Cost:</p>
                      <p className="font-normal">$10</p>
                    </div>
                    <div className="col-span-12">
                      <div className="flex items-center justify-between font-semibold text-3xl">
                        <p>Total:</p>
                        <p>${total}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12">
                <NavLink
                  to="/product"
                  onClick={() => handlePageChangeCheckout()}
                  className="flex items-center justify-center gap-2 px-4 py-2 text-md rounded-md w-full bg-blue-500 text-white cursor-pointer"
                >
                  Check out
                </NavLink>
              </div>
              <div className="col-span-12">
                <button
                  onClick={handlePageChange}
                  to="/product"
                  className="flex items-center justify-center gap-2 px-4 py-2 text-md rounded-md w-full border-blue-500 border text-blue-500 "
                >
                  Continue shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
