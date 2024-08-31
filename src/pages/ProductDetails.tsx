import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Product from "../assets/product/p-1.webp";
import Button from "../components/Shared/Button";

const ProductDetails = () => {
  return (
    <div className="p-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center gap-4">
          {/* image section  */}
          <div className="flex items-center justify-center p-4">
            <img src={Product} className="align-middle max-w-[400px]" alt="Product" />
          </div>
          {/* details section  */}
          <div className="flex flex-col gap-6 items-start justify-center">
            <p className="text-2xl xl:text-5xl md:text-3xl font-semibold text-brandBlue/70">
              2.5KG Hex Dumbbell 1 pair
            </p>
            <p className="text-lg xl:text-2xl md:text-lg font-bold flex items-center gap-2 px-8 py-2 bg-slate-500/10 rounded-full">
              <span>Price:</span>
              <span className="flex items-center gap-0">
                600
                <FaBangladeshiTakaSign />
              </span>
            </p>
            <div className="flex flex-col gap-2">
              <p className="w-max text-lg font-bold border-b-2 border-red-500">
                Description
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div>
              <p>
                Category: <span className="font-bold">Dumbbell</span>
              </p>
              <p>
                Status:{" "}
                <span className="font-bold text-green-500">In stock</span>
                <span className="font-bold text-red-500">Out of stock</span>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p>Quantity</p>
              <div className="flex items-center gap-0">
                <button
                  type="button"
                  className="w-[32px] px-2 py-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 rounded-l-lg"
                >
                  -
                </button>
                <input
                  type="text"
                  className="w-[80px] text-center text-base dark:bg-gray-500 px-2 py-1 outline-0 border dark:border-gray-500"
                  name="quantity"
                  id="quantity"
                  value={0}
                />
                <button
                  type="button"
                  className="w-[32px] px-2 py-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 rounded-r-lg"
                >
                  +
                </button>
              </div>
            </div>
            <Button
              bgColor="bg-primary"
              textColor="text-white"
              disabled={false}
              handler={() => 0}
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
