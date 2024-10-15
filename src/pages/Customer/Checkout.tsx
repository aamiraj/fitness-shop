import { FaArrowLeft } from "react-icons/fa6";
import CostOverview from "../../components/Checkout/CostOverview";
import { CartState, resetCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import DIVISIONS from "../../../public/data/divisions.json";
import DISTRICTS from "../../../public/data/districts.json";
import POSTCODES from "../../../public/data/postcodes.json";
import { useState } from "react";
import { useAddNewOrderMutation } from "../../redux/features/order/orderApi";
import toast from "react-hot-toast";

type TFieldValues = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  paymentMethod: string;
};

type TDivision = {
  id: string;
  name: string;
};

type TDistrict = {
  id: string;
  name: string;
};

type TPostCode = {
  postOffice: string;
  postCode: string;
};

const calculateTotalPrice = (products: CartState[]) => {
  let total = 0;

  for (const prod of products) {
    total = total + prod.totalPrice;
  }

  return total;
};

const Checkout = () => {
  const { cart: products, auth, global } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [addNewProduct] = useAddNewOrderMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFieldValues>();

  const [division, setDivision] = useState<TDivision>({
    id: "3",
    name: "Dhaka",
  });
  const [district, setDistrict] = useState<TDistrict>({
    id: "1",
    name: "Dhaka",
  });
  const [postCode, setPostCode] = useState<TPostCode>({
    postOffice: "Demra",
    postCode: "1360",
  });

  const handleDivision = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const findDiv = DIVISIONS.divisions.find(
      (item) => item.id === e.target.value
    );
    if (findDiv) setDivision(findDiv);
  };

  const handleDistrict = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const findDis = DISTRICTS.districts.find(
      (item) => item.id === e.target.value
    );
    if (findDis) setDistrict(findDis);
  };

  const handlePostCode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const findPost = POSTCODES.postcodes.find(
      (item) => item.postCode === e.target.value
    );
    if (findPost) setPostCode(findPost);
  };

  const productsTotalPrice = parseFloat(
    calculateTotalPrice(products).toFixed(2)
  );

  const onSubmit = async (data: TFieldValues) => {
    const orderedProducts = products.map((prod) => ({
      product: prod.product._id,
      name: prod.name,
      price: prod.price,
      quantity: prod.quantity,
      totalPrice: prod.totalPrice,
    }));

    const discount = parseFloat(
      (productsTotalPrice * global.DISCOUNT_PCTG).toFixed(2)
    );

    const grandTotal = productsTotalPrice + global.SHIPPING_COST - discount;

    const order = {
      user: auth.user?.id,
      customerInfo: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        shippingAddress: `${data.address}, ${postCode.postOffice}, ${postCode.postCode}, ${district.name}, ${division.name}`,
      },
      products: orderedProducts,
      productsTotalPrice: productsTotalPrice,
      shippingCost: global.SHIPPING_COST,
      couponDiscount: discount,
      grandTotal: grandTotal,
      paymentMethod: data.paymentMethod,
    };

    try {
      const res = await addNewProduct(order).unwrap();

      if (!res.success) {
        toast.error("Failed to order.");
        return;
      }

      toast.success("Successfully ordered.");
      navigate("/success");
      dispatch(resetCart());
    } catch (error) {
      toast.error("Failed to order.");
      console.log(error);
    }
  };

  return (
    <div id="cart-page" className="py-8 md:p-8">
      <div className="container">
        <div className="flex items-center gap-4">
          <Link to={"/customer/cart"}>
            <FaArrowLeft className="text-2xl cursor-pointer" />
          </Link>
          <p className="text-2xl lg:text-4xl font-bold py-4">Checkout</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <div className="bg-gray-100 p-4 flex flex-col gap-4">
              <p className="text-lg lg:text-2xl font-bold py-4">User Details</p>
              <div className="flex flex-col gap-2">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  {...register("fullName")}
                  id="fullName"
                  defaultValue={auth.user?.fullName}
                  readOnly
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                />
                {errors.fullName && <p>*{errors.fullName.toString()}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  defaultValue={auth.user?.email}
                  readOnly
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                />
                {errors.email && <p>*{errors.email.toString()}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone</label>
                <input
                  type="phone"
                  {...register("phone", { required: true })}
                  id="phone"
                  required
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                />
                {errors.phone && <p>*{errors.phone.toString()}</p>}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="division">Division</label>
                <select
                  id="division"
                  required
                  onChange={handleDivision}
                  value={division.id}
                  name="division"
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                >
                  {DIVISIONS.divisions.map((div) => (
                    <option key={div.id} value={div.id}>
                      {div.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="districts">Districts</label>
                <select
                  id="districts"
                  required
                  onChange={handleDistrict}
                  value={district.id}
                  name="districts"
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                >
                  {DISTRICTS.districts
                    .filter((item) => division.id === item.division_id)
                    .map((dis) => (
                      <option key={dis.id} value={dis.id}>
                        {dis.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="postCode">Post Code</label>
                <select
                  id="postCode"
                  required
                  onChange={handlePostCode}
                  value={postCode.postCode}
                  name="postCode"
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                >
                  {POSTCODES.postcodes
                    .filter((item) => item.district_id === district.id)
                    .map((post) => (
                      <option key={post.postCode} value={post.postCode}>
                        {post.postOffice}
                      </option>
                    ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address Line</label>
                <textarea
                  {...register("address", { required: true })}
                  id="address"
                  required
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                  rows={1}
                ></textarea>
                {errors.address && <p>*{errors.address.toString()}</p>}
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg dark:text-white">
                  Payment method
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    id="cashOnDeliver"
                    value={"cashOnDeliver"}
                    defaultChecked
                  />
                  <label htmlFor="cashOnDeliver">Cash on delivery</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    {...register("paymentMethod")}
                    value={"stripe"}
                    id="stripe"
                  />
                  <label htmlFor="stripe">Stripe</label>
                </div>
              </div>
            </div>
            <div>
              <CostOverview subtotal={productsTotalPrice} />
              <button type="submit" className="ripple-button w-full my-4">
                Place an order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
