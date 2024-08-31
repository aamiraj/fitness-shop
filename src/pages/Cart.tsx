import { FaBangladeshiTakaSign } from "react-icons/fa6";
import CartProducts from "../components/Cart/CartProducts";

const Cart = () => {
  return (
    <div className="p-0 md:p-8">
      <div className="container">
        <p className="text-2xl lg:text-4xl font-bold py-4">Shopping Cart</p>
        {/* shopping cart products  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="py-4">
            <CartProducts />
            <CartProducts />
            <CartProducts />
            <CartProducts />
          </div>
          {/* calculation of the products  */}
          <div className="p-4 text-lg">
            <div className="grid grid-cols-2 gap-2">
              <div className="flex flex-col items-start gap-2">
                <p>{"Subtotal (+)"}</p>
                <p>{"Shipping Cost (+)"}</p>
                <p>{"Discount (-)"}</p>
                <p className="font-bold">Total</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="flex items-center gap-0">
                  <span>600</span>
                  <FaBangladeshiTakaSign />
                </p>
                <p className="flex items-center gap-0">
                  <span>100</span>
                  <FaBangladeshiTakaSign />
                </p>
                <p className="flex items-center gap-0">
                  <span>60</span>
                  <FaBangladeshiTakaSign />
                </p>
                <p className="flex items-center gap-0 font-bold">
                  <span>640</span>
                  <FaBangladeshiTakaSign />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
