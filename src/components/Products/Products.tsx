import { useAppSelector } from "../../redux/hooks";
import { useGetAllProductsQuery } from "../../redux/features/products/productsApi";
import { TProduct } from "../../types/product.types";
import ProductCard from "./ProductCard";
// import { addToCart } from "../../redux/features/cart/cartSlice";
// import toast from "react-hot-toast";

// const calculateTotalPrice = (price: number, quantity: number) =>
//   parseFloat((price * quantity).toFixed(2));

const Products = () => {
  const { searchbyname, minPrice, maxPrice, category, sort, limit } =
    useAppSelector((state) => state.filter);
  // const dispatch = useAppDispatch();

  const { data, isFetching, isError } = useGetAllProductsQuery({
    searchTerm: searchbyname,
    min: minPrice,
    max: maxPrice,
    category: category,
    sort: sort,
    limit: limit,
  });

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

  // const handleAddToCart = (id: string) => {
  //   const foundProduct = data.data.find(
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     (prod: any) => prod._id == id
  //   );

  //   const product = {
  //     product: foundProduct,
  //     name: foundProduct?.name,
  //     price: foundProduct?.price,
  //     quantity: 1,
  //     totalPrice: calculateTotalPrice(foundProduct?.price, 1),
  //   };

  //   dispatch(addToCart(product));
  //   toast.success("Product added to cart.");
  // };

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center md:place-items-start ">
        {data?.data?.map((product: TProduct, i: number) => (
          <ProductCard
            key={product?._id}
            idx={i}
            product={product}
            addToCart={() => 0}
          />
        ))}
        {data?.data.length === 0 && (
          <p className="italic text-gray-500">Sorry, No product found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
