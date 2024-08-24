import ShopHeader from "../components/ProductHeader/ShopHeader";

const Shop = () => {
  return (
    <div>
      <div className="container">
        {/* top header  */}
        <ShopHeader />
        {/* main content on products   */}
        <div>
          <h1>Products</h1>
        </div>
      </div>
    </div>
  );
};

export default Shop;
