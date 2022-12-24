import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete';

const Cart = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartActions.deleteItem(item.productId));
  };

  const handleIncrease = () => {
    dispatch(
      cartActions.addToCart({
        productId: item.productId,
        productName: item.productName,

        price: item.price,
      }),
    );
  };
  const handleDecrease = () => {
    dispatch(cartActions.removeFromCart(item.productId));
  };
  return (
    <>
      <div className="w-full bg-white rounded-lg h-44 flex mb-5" key={item.productId}>
        <img className="w-48 h-48  p-5 " src={item.image}></img>
        <div className="w-2/3 pt-5  ">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg ">{item.productName}</h3>

            <span className="text-red-700 text-lg cursor-pointer" onClick={deleteProduct}>
              <AiFillDelete />
            </span>
          </div>
          <div className="text-md my-1.5">{item.des}</div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex justify-between">
              <button
                onClick={handleDecrease}
                className="cursor-pointer items-center justify-center w-8 h-8 border-2 text-xl text-orange-500"
              >
                -
              </button>
              <p className="flex justify-center items-center w-12 h-8  border-2 border-l-0 border-r-0 ">
                {item.quantity}
              </p>
              <button
                onClick={handleIncrease}
                className="cursor-pointer items-center justify-center flex w-8 h-8 border-2 text-xl color text-orange-500 "
              >
                +
              </button>
            </div>

            <p className="font-bold">${item.price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
