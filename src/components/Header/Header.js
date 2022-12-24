import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Header/header.css';
import { FaCartPlus } from '@react-icons/all-files/fa/FaCartPlus';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaUserCircle } from '@react-icons/all-files/fa/FaUserCircle';
function Header() {
  const nav__links = [
    {
      path: 'home',
      display: 'Home',
    },
    {
      path: 'product',
      display: 'Products',
    },
    {
      path: 'reviews',
      display: 'Reviews',
    },
  ];
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate('/checkout');
  };
  const navigateToSignUp = () => {
    navigate('/login');
  };
  let bagde = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    bagde += item.quantity;
  });

  return (
    <>
      <div className="bg-white shadow-md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-8 w-1/3">
              {nav__links.map((item, index) => (
                <li className="nav__item" key={index}>
                  <NavLink to={item.path} className={(navClass) => (navClass.isActive ? 'nav__active' : ' ')}>
                    {item.display}
                  </NavLink>
                </li>
              ))}
            </div>
            <div className="w-1/3">
              <h2 className="text-2xl text-blue-500 font-bold text-center">Beaty.bd</h2>
            </div>
            <div className="w-1/3">
              <div className="flex items-center justify-end">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-2xl text-blue-500"
                  onClick={navigateToSignUp}
                >
                  <FaUserCircle />
                </span>
                <span
                  className="cart__icon rounded-full relative flex items-center justify-center text-2xl w-10 h-10 text-blue-500 cursor-pointer"
                  onClick={navigateToCart}
                >
                  <FaCartPlus />

                  <span className="badge">{bagde}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
