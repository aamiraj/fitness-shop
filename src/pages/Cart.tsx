import CartProducts from "../components/Cart/CartProducts";
import CostOverview from "../components/Checkout/CostOverview";

const Cart = () => {
  return (
    <div className="py-8 md:p-8">
      <div className="container">
        <p className="text-2xl lg:text-4xl font-bold py-4">Shopping Cart</p>
        {/* shopping cart products  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="py-4">
            <p className="text-lg font-bold pb-2">Ordered Products</p>
            <CartProducts />
            <CartProducts />
            <CartProducts />
            <CartProducts />
          </div>
          <CostOverview />
        </div>
      </div>
    </div>
  );
};

export default Cart;
