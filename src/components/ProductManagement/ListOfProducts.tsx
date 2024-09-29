import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { TProduct } from "../../types/product.types";
import { Link } from "react-router-dom";

const ListOfProducts = ({ data }: { data: TProduct[] }) => {
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
            <td className="td">{product?.name}</td>
            <td className="td">{product?.price}</td>
            <td className="td">{product?.stock}</td>
            <td className="td">{product?.category}</td>
            <td className="td">
              <ul className="flex items-center gap-3">
                <li className="p-2">
                  <Link to={`/edit-product/${product?._id}`} title="Edit" className="text-green-500">
                    <FaEdit />
                  </Link>
                </li>
                <li className="p-2">
                  <button type="button" title="Delete" className="text-red-500">
                    <FaTrashAlt />
                  </button>
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
