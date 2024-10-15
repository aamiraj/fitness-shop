import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { useAppSelector } from "../../redux/hooks";

const calculateDiscount = (price: number, discount: number) => price * discount;

const calculateGrandTotal = (
  price: number,
  shippingCost: number,
  discount: number
) => price + shippingCost - discount;

const CostOverview = ({ subtotal }: { subtotal: number }) => {
  const { global } = useAppSelector((state) => state);

  return (
    <div>
      {/* calculation of the products  */}
      <div className="bg-gray-100 dark:bg-gray-700 h-max p-4 text-lg">
        <p className="font-bold text-xl py-4">Order Overview</p>
        <table className="table-fixed w-full">
          <tbody>
            <tr>
              <td>
                <p>{"Subtotal(+)"}</p>
              </td>
              <td className="">
                <p className="flex justify-end items-center gap-0">
                  <span>{subtotal.toFixed(2)}</span>
                  <FaBangladeshiTakaSign />
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{"Shipping(+60)"}</p>
              </td>
              <td>
                <p className="flex justify-end items-center gap-0">
                  <span>{global.SHIPPING_COST.toFixed(2)}</span>
                  <FaBangladeshiTakaSign />
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>{"Discount(-10%)"}</p>
              </td>
              <td>
                <p className="flex justify-end items-center gap-0">
                  <span>
                    {calculateDiscount(subtotal, global.DISCOUNT_PCTG).toFixed(
                      2
                    )}
                  </span>
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
                  <span>
                    {calculateGrandTotal(
                      subtotal,
                      global.SHIPPING_COST,
                      subtotal * global.DISCOUNT_PCTG
                    ).toFixed(2)}
                  </span>
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
