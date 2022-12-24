import React, { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import products from '../../data/products';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { cartActions } from '../../redux/slices/cartSlice';

const ProductDetail = () => {
  const { productId } = useParams();

  const product = products.find((product) => product.productId === productId);
  const { productName, description, price, imageUrl } = product;
  const dispatch = useDispatch();
  const addItem = () => {
    dispatch(
      cartActions.addToCart({
        productId,
        productName,
        description,
        price,
        imageUrl,
      }),
    );
    toast.success('Product added successfully');
  };

  return (
    <div className="wrapper-products-page pt-5 bg-gray-300 ">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full gap-5">
          <div className="col-span-7 bg-white mt-5 shadow-lg rounded-lg">
            <img className="w-2/4 mx-auto my-40" src={imageUrl}></img>
            <div className="container mt-5  px-10">
              <h3 className="text-3xl font-bold">{productName}</h3>
              <p className="mt-5">{description}</p>

              <div className="mt-20 flex items-center justify-between ">
                <div className="flex items-center">
                  <button className="cursor-pointer items-center justify-center w-8 h-8 border-2 text-xl text-orange-500">
                    -
                  </button>
                  <p className="flex justify-center items-center w-12 h-8  border-2 border-l-0 border-r-0 ">1</p>
                  <button className="cursor-pointer items-center justify-center flex w-8 h-8 border-2 text-xl color text-orange-500">
                    +
                  </button>
                </div>
                <p className="font-bold" style={{ marginLeft: '30rem' }}>
                  ${price}
                </p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded "
                  onClick={addItem}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-5 h-full overflow-auto rounded-lg">
            {products.map((item, index) => (
              <div className="flex bg-white bg-cover w-auto shadow-lg rounded-lg overflow-hidden h-auto mt-5">
                <img className="w-48 h-48" src={item.imageUrl} key={index}></img>
                <div className="w-2/3 p-3">
                  <h3 className="font-bold mt-3">{item.productName}</h3>
                  <p className="mt-3 mb-5">{item.description}</p>
                  <div className="flex justify-between ">
                    <span className="font-bold">${item.price}</span>
                    <NavLink to={`/product/${item.productId}`} className="text-blue-500 cursor-pointer">
                      Details
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
