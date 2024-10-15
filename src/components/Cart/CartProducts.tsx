import { FaTrashAlt } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import {
  CartState,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import Modal from "../Modal/Modal";
import toast from "react-hot-toast";

const CartProducts = ({ product }: { product: CartState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDeleteFromCart = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success("Product deleted from the cart.");
  };

  return (
    <>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          handleAction={() => handleDeleteFromCart(product.product?._id)}
        />
      )}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 py-4 border-b-2">
        <div className="flex gap-2">
          {/* image part  */}
          <div className="flex items-center justify-center">
            <img
              src={product.product?.images[0]}
              className="align-middle max-w-[100px]"
              alt="Product"
            />
          </div>
          {/* text part  */}
          <div className="flex flex-col gap-2">
            <Link
              to={`/product/${product.product?._id}`}
              className="text-indigo-500 hover:underline cursor-pointer"
            >
              {product.name}
            </Link>
            <p className="flex items-center gap-0 text-lg font-bold">
              <span>{product.totalPrice}</span>
              <FaBangladeshiTakaSign />
            </p>
          </div>
        </div>
        <div className="relative left-[100px] flex items-center justify-start gap-8">
          {/* increase decrease button  */}
          <div className="flex items-center gap-0">
            <button
              type="button"
              onClick={() => dispatch(decreaseQuantity(product.product?._id))}
              className="w-[24px] p-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 disabled:cursor-not-allowed"
              disabled={product.quantity <= 1}
            >
              -
            </button>
            <input
              type="text"
              className="w-[48px] p-1 text-center text-base dark:bg-gray-500 outline-0 border dark:border-gray-500"
              name="quantity"
              id="quantity"
              value={product.quantity}
              readOnly
            />
            <button
              type="button"
              onClick={() => dispatch(increaseQuantity(product.product?._id))}
              className="w-[24px] p-1 font-bold bg-gray-200 dark:bg-gray-600 border dark:border-gray-600 disabled:cursor-not-allowed"
              disabled={product.quantity >= product.product.stock}
            >
              +
            </button>
          </div>
          {/* remove button  */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-full hover:bg-gray-200 font-bold text-red-500"
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProducts;
