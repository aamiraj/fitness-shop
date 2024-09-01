import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ListOfProducts = () => {
  return (
    <table className="w-full table-auto border-collapse">
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
        <tr className="tr">
          <td className="td">2.5KG Hex Dumbbell 1 pair</td>
          <td className="td">600</td>
          <td className="td">30</td>
          <td className="td">Dumbbell</td>
          <td className="td">
            <ul className="flex items-center gap-3">
              <li className="p-2">
                <button type="button" title="Edit" className="text-green-500">
                  <FaEdit />
                </button>
              </li>
              <li className="p-2">
                <button type="button" title="Delete" className="text-red-500">
                  <FaTrashAlt />
                </button>
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ListOfProducts;
