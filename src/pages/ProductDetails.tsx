import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Button from "../components/Shared/Button";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../redux/features/products/productsApi";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/features/cart/cartSlice";
import toast from "react-hot-toast";
import useScrollTop from "../hooks/useScrollTop";

const calculateTotalPrice = (price: number, quantity: number) =>
  parseFloat((price * quantity).toFixed(2));

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching, isError } = useGetSingleProductQuery(id);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const foundCartProduct = cart.find(
    (cartProduct) => cartProduct.product._id === data?.data?._id
  );

  const decreaseProductQuantity = () => {
    setQuantity((prev) => {
      if (prev <= 1) return 1;
      else return prev - 1;
    });

    if (foundCartProduct) {
      dispatch(decreaseQuantity(data?.data?._id));
    }
  };

  const increaseProductQuantity = () => {
    setQuantity((prev) => {
      if (prev >= data?.data?.stock) return data?.data?.stock;
      else return prev + 1;
    });

    if (foundCartProduct) {
      dispatch(increaseQuantity(data?.data?._id));
    }
  };

  const handleAddToCart = () => {
    if (foundCartProduct) {
      setQuantity((prev) => {
        if (prev >= data?.data?.stock) return data?.data?.stock;
        else return prev + 1;
      });

      dispatch(increaseQuantity(data?.data?._id));
      toast.success("Increased product quantity by One.");
    } else {
      const product = {
        product: data?.data,
        name: data?.data?.name,
        price: data?.data?.price,
        quantity: quantity,
        totalPrice: calculateTotalPrice(data?.data?.price, quantity),
      };

      dispatch(addToCart(product));
      toast.success("Product added to the cart.");
    }
  };

  useEffect(() => {
    if (!data) return;

    if (foundCartProduct) setQuantity(foundCartProduct?.quantity as number);
  }, [foundCartProduct, data]);

  useScrollTop();

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
    <div className="p-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-4">
          {/* image section  */}
          <div className="flex items-center justify-center p-4">
            <img
              src={data?.data?.images[0]}
              className="align-middle w-[400px] max-w-full"
              alt="Product"
            />
          </div>
          {/* details section  */}
          <div className="flex flex-col gap-6 items-start justify-center">
            {/* name part  */}
            <p className="text-2xl xl:text-5xl md:text-3xl font-semibold text-brandBlue/70">
              {data?.data?.name}
            </p>
            {/* price part  */}
            <p className="text-lg xl:text-2xl md:text-lg font-bold flex items-center gap-2 px-8 py-2 bg-slate-500/10 rounded-full">
              <span>Price:</span>
              <span className="flex items-center gap-0">
                {data?.data?.price}
                <FaBangladeshiTakaSign />
              </span>
            </p>
            <div className="flex items-center justify-start gap-4 flex-wrap">
              {/* category part  */}
              <p className="text-sm xl:text-xl md:text-lg font-bold flex items-center gap-2 px-8 py-2 bg-blue-500/10 rounded-full">
                <span>Category:</span>
                <span className="flex items-center gap-0">
                  {data?.data?.category}
                </span>
              </p>
              {/* stock part  */}
              <p className="text-sm xl:text-xl md:text-lg font-bold flex items-center gap-2 px-8 py-2 bg-purple-500/10 rounded-full">
                <span>Stock:</span>
                <span className="flex items-center gap-0">
                  {data?.data?.stock}
                </span>
              </p>
              {/* status part  */}
              <p
                className={`text-sm xl:text-xl md:text-lg font-bold flex items-center gap-2 px-8 py-2 rounded-full ${
                  data?.data?.stock > 0 ? "bg-green-500/10" : "bg-red-500/10"
                } `}
              >
                <span>Status:</span>
                <span className="flex items-center gap-0">
                  {data?.data?.stock > 0 ? (
                    <span className="font-bold text-green-500">In stock</span>
                  ) : (
                    <span className="font-bold text-red-500">Out of stock</span>
                  )}
                </span>
              </p>
            </div>
            {/* description part  */}
            <div className="flex flex-col gap-2">
              <p className="w-max text-lg font-bold border-b-2 border-red-500">
                Description
              </p>
              <p>{data?.data?.description}</p>
            </div>
            {/* quantity part with increase and decrese button */}
            <div className="flex flex-col gap-2">
              <p>Quantity</p>
              <div className="flex items-center gap-0">
                <button
                  type="button"
                  onClick={decreaseProductQuantity}
                  className="w-[32px] px-2 py-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 rounded-l-lg"
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-[80px] text-center text-base dark:bg-gray-500 px-2 py-1 outline-0 border dark:border-gray-500"
                  name="quantity"
                  id="quantity"
                  value={quantity}
                  readOnly
                />
                <button
                  type="button"
                  onClick={increaseProductQuantity}
                  className="w-[32px] px-2 py-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 rounded-r-lg"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-xs italic text-indigo-800">
              &#40;*Please at first specify the quantity and then click "ADD TO
              CART" button.&#41;
            </p>
            {/* button to add to cart  */}
            <Button
              bgColor="bg-primary"
              textColor="text-white"
              disabled={!data?.data?.stock}
              handler={() => handleAddToCart()}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
