import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { TProduct } from "../../types/product.types";
import { Link } from "react-router-dom";
import { useDeleteProductMutation } from "../../redux/features/products/productsApi";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import toast from "react-hot-toast";

const ListOfProducts = ({ data }: { data: TProduct[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = (id: string) => {
    deleteProduct(id);
    toast.success("You have successfully deleted this product.");
  };

  if (data?.length === 0) {
    return (
      <div className="w-full h-24 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-200 italic text-center">
          No products found.
        </p>
      </div>
    );
  }

  return (
    <table className="w-full table-auto rounded-lg">
      <thead>
        <tr>
          <th className="th">Name</th>
          <th className="th">Price</th>
          <th className="th">Stocks</th>
          <th className="th">Category</th>
          <th className="th">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, idx) => (
          <tr key={idx} className="tr">
            <td className="td">
              <Link
                to={`/admin/edit-product/${product?._id}`}
                className="hover:text-brandBlue"
              >
                {product?.name}
              </Link>
            </td>
            <td className="td">
              <p className="font-semibold flex items-center">
                {product?.price}
                <FaBangladeshiTakaSign />
              </p>
            </td>
            <td className="td">{product?.stock}</td>
            <td className="td">{product?.category}</td>
            <td className="td">
              <ul className="flex items-center gap-3">
                <li className="p-2">
                  <Link
                    to={`/admin/edit-product/${product?._id}`}
                    title="Edit"
                    className="text-green-500 block p-2 rounded-full hover:bg-gray-300"
                  >
                    <FaEdit />
                  </Link>
                </li>
                <li className="p-2">
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    title="Delete"
                    className="text-red-500 p-2 rounded-full hover:bg-gray-300"
                  >
                    <FaTrashAlt />
                  </button>
                  {isOpen && (
                    <Modal
                      setIsOpen={setIsOpen}
                      handleAction={() => handleDeleteProduct(product?._id)}
                    />
                  )}
                </li>
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListOfProducts;
