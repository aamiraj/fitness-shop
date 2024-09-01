import { FaPlus } from "react-icons/fa6";
import ListOfProducts from "../components/ProductManagement/ListOfProducts";

const ProductManagement = () => {
  return (
    <div className="py-4 lg:p-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg md:text-2xl lg:text-4xl">
            Product Management
          </p>
          <button
            type="button"
            title="Add a product"
            className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-brandBlue/90 text-white text-lg font-bold cursor-pointer hover:bg-brandBlue duration-300 rounded-full relative z-10 uppercase"
          >
            <FaPlus />
          </button>
        </div>
        {/* table of products list  */}
        <div className="overflow-x-auto py-8">
          <ListOfProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
