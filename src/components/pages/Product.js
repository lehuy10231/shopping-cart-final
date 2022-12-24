import { NavLink } from 'react-router-dom';
import products from '../../data/products';
function Product() {
  return (
    <div className="wrapper-products-page pt-5 bg-gray-300 h-auto">
      <div className="container mx-auto h-full">
        <div className="grid grid-cols-12 h-full gap-5">
          <div className="col-span-7 h-full"></div>
          <div className="col-span-5 h-full  rounded-lg">
            {products.map((item, index) => (
              <div className="flex bg-white w-auto h-auto bg-cover shadow-lg rounded-lg overflow-hidden mt-5">
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
}

export default Product;
