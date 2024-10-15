import { FaBangladeshiTakaSign } from "react-icons/fa6";
import CartProducts from "../../components/Cart/CartProducts";
import CostOverview from "../../components/Checkout/CostOverview";
import { useAppSelector } from "../../redux/hooks";
import { CartState } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const calculateTotalPrice = (products: CartState[]) => {
  let total = 0;

  for (const prod of products) {
    total = total + prod.totalPrice;
  }

  return total;
};

const Cart = () => {
  const products = useAppSelector((state) => state.cart);

  useEffect(() => {
    window.onbeforeunload = function () {
      return "Your cart will be discarded if you reload.";
    };
  });

  return (
    <div className="py-8 md:p-8">
      <div className="container">
        <p className="text-2xl lg:text-4xl font-bold py-4">Shopping Cart</p>
        {/* shopping cart products  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-gray-100 p-4">
            <p className="text-lg lg:text-2xl font-bold py-4">
              Ordered Products
            </p>

            {/* display all the ordered products  */}
            {products.map((prod, idx) => (
              <CartProducts key={idx} product={prod} />
            ))}

            {/* message to show that products are no added  */}
            {products.length === 0 && (
              <p className="text-red-500 text-center text-lg italic">
                No products yet. Please add products to cart.
              </p>
            )}

            {/* if products are not there, then no need to show subtotal  */}
            {products.length > 0 && (
              <p className="py-2 flex justify-end items-center gap-2">
                <span className="font-semibold text-lg">Subtotal:</span>
                <span className="font-bold text-lg flex items-center gap-0">
                  {calculateTotalPrice(products).toFixed(2)}
                  <FaBangladeshiTakaSign />
                </span>
              </p>
            )}
          </div>
          {/* cost overview part  */}
          <div>
            <CostOverview subtotal={calculateTotalPrice(products)} />
            {products.length !== 0 && (
              <Link
                to={"/customer/checkout"}
                className="block text-center w-full my-4 bg-brandBlue text-white cursor-pointer hover:bg-blue-900 duration-300 py-2 px-8 rounded-full relative z-10 uppercase"
              >
                Go To Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
