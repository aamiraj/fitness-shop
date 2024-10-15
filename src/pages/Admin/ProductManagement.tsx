import { FaPlus } from "react-icons/fa6";
import ListOfProducts from "../../components/ProductManagement/ListOfProducts";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";

const ProductManagement = () => {
  const { searchbyname, minPrice, maxPrice, category, sort, limit } =
    useAppSelector((state) => state.filter);

  const { data, isLoading, isError } = useGetAllProductsQuery({
    searchTerm: searchbyname,
    min: minPrice,
    max: maxPrice,
    category: category,
    sort: sort,
    limit: limit,
  });

  if (isError) {
    return (
      <div className="w-full h-24 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-200 italic text-center">
          Error occured while loading products.
        </p>
      </div>
    );
  }

  return (
    <div className="py-4 lg:p-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg md:text-2xl lg:text-4xl">
            Product Management
          </p>
          <Link
            to={"/admin/add-product"}
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
