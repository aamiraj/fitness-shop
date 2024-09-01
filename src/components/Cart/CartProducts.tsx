import { FaTrashAlt } from "react-icons/fa";
import Product from "../../assets/product/p-1.webp";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CartProducts = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-2 py-4 border-b-2">
      <div className="flex gap-2">
        {/* image part  */}
        <div className="flex items-center justify-center">
          <img
            src={Product}
            className="align-middle max-w-[100px]"
            alt="Product"
          />
        </div>
        {/* text part  */}
        <div className="flex flex-col gap-2">
          <p>2.5KG Hex Dumbbell 1 pair</p>
          <p className="flex items-center gap-0 text-lg font-bold">
            <span>600</span>
            <FaBangladeshiTakaSign />
          </p>
        </div>
      </div>
      <div className="relative left-[100px] flex items-center justify-start gap-8">
        {/* increase decrease button  */}
        <div className="flex items-center gap-0">
          <button
            type="button"
            className="w-[24px] p-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 "
          >
            -
          </button>
          <input
            type="text"
            className="w-[48px] p-1 text-center text-base dark:bg-gray-500 outline-0 border dark:border-gray-500"
            name="quantity"
            id="quantity"
            value={0}
          />
          <button
            type="button"
            className="w-[24px] p-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 "
          >
            +
          </button>
        </div>
        {/* remove button  */}
        <button type="button" className="font-bold text-red-500">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
