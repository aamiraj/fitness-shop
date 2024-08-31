import { FaBangladeshiTakaSign } from "react-icons/fa6";

const CostOverview = () => {
  return (
    <div>
      {/* calculation of the products  */}
      <div className="bg-gray-100 dark:bg-gray-700 h-max p-4 text-lg">
        <p className="font-bold text-xl py-4">Order Overview</p>
        <table className="table-fixed w-full">
          <tbody>
            <tr>
              <td>
                <p>{"Subtotal (+)"}</p>
              </td>
              <td className="">
                <p className="flex justify-end items-center gap-0">
                  <span>600</span>
                  <FaBangladeshiTakaSign />
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{"Shipping (+)"}</p>
              </td>
              <td>
                <p className="flex justify-end items-center gap-0">
                  <span>100</span>
                  <FaBangladeshiTakaSign />
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{"Discount (-)"}</p>
              </td>
              <td>
                <p className="flex justify-end items-center gap-0">
                  <span>60</span>
                  <FaBangladeshiTakaSign />
                </p>
              </td>
            </tr>
            <tr className="border-t-2">
              <td>
                <p className="font-bold">Total</p>
              </td>
              <td>
                <p className="flex justify-end items-center gap-0 font-bold">
                  <span>640</span>
                  <FaBangladeshiTakaSign />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CostOverview;
