import { FaPlus } from "react-icons/fa6";
import ListOfProducts from "../components/ProductManagement/ListOfProducts";
import { useGetAllProductsQuery } from "../redux/features/products/productsApi";
import { Link } from "react-router-dom";

const ProductManagement = () => {
  const { data, isLoading, isError } = useGetAllProductsQuery(undefined);

  if (isError) {
    return <p>Error occured while loading products.</p>;
  }

  return (
    <div className="py-4 lg:p-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg md:text-2xl lg:text-4xl">
            Product Management
          </p>
          <Link
            to={"/add-product"}
            type="button"
            title="Add a product"
            className="flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 bg-brandBlue/90 text-white text-lg font-bold cursor-pointer hover:bg-brandBlue duration-300 rounded-full relative z-10 uppercase"
          >
            <FaPlus />
          </Link>
        </div>
        {/* table of products list  */}
        {isLoading ? (
          <div className="w-full h-24 flex items-center justify-center">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="overflow-x-auto py-8">
            <ListOfProducts data={data?.data} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;
