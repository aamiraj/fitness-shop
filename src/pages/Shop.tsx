import ShopFilter from "../components/ShopFilter/ShopFilter";
import ShopHeader from "../components/ShopHeader/ShopHeader";

const Shop = () => {
  return (
    <div>
      <div className="container">
        {/* main content on products   */}
        <div className="flex">
          <div className="hidden xl:block">
            <ShopFilter />
          </div>
          {/* all products appeared here  */}
          <div className="p-4">
            {/* top header  */}
            <ShopHeader />
            <h1 className="text-4xl font-bold py-4">Products</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
