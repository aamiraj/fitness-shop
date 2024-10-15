import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TProduct } from "../../types/product.types";
import Button from "../Shared/Button";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import { resetCategory } from "../../redux/features/filter/filterSlice";

const Featured = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { searchbyname, minPrice, maxPrice, category } = useAppSelector(
    (state) => state.filter
  );

  const { data, isFetching, isError } = useGetAllProductsQuery({
    searchTerm: searchbyname,
    min: minPrice,
    max: maxPrice,
    category: category,
    sort: "-createdAt",
    limit: 4,
  });

  const handleExploremore = () => {
    dispatch(resetCategory());
    navigate("/shop");
  };

  if (isFetching) {
    return (
      <div className="w-full h-24 flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

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
    <div>
      <div className="container">
        {/* header section  */}
        <Heading
          title={"Featured Products"}
          subtitle={"Explore Our Best Products"}
        />
        {/* body section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center md:place-items-start ">
          {data?.data?.map((product: TProduct, i: number) => (
            <ProductCard
              key={product?._id}
              idx={i}
              product={product}
              addToCart={() => 0}
            />
          ))}
        </div>
        <div className="my-8 flex justify-center items-center">
          <Button
            bgColor="bg-primary"
            textColor="text-white"
            handler={() => handleExploremore()}
            disabled={false}
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

// import Product1 from "../../assets/product/p-1.webp";
// import Product2 from "../../assets/product/p-2.jpg";
// import Product3 from "../../assets/product/p-3.webp";
// import Product4 from "../../assets/product/p-4.webp";

// const featured = [
//   {
//     _id: 1,
//     images: [Product1],
//     name: "2.5KG Hex Dumbbell 1 pair",
//     price: 600,
//   },
//   {
//     _id: 2,
//     images: [Product2],
//     name: "Reebok Electric Motorized Treadmill",
//     price: 40000,
//   },
//   {
//     _id: 3,
//     images: [Product3],
//     name: "Daily Youth Gym Station",
//     price: 15000,
//   },
//   {
//     _id: 4,
//     images: [Product4],
//     name: "KPOWER Elliptical Cycle ",
//     price: 10000,
//   },
// ];
