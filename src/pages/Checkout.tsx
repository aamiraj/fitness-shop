import CostOverview from "../components/Checkout/CostOverview";

const Checkout = () => {
  return (
    <div className="py-8 md:p-8">
      <div className="container">
        <p className="text-2xl lg:text-4xl font-bold py-4">Checkout</p>
        <div>
          <p className="text-lg lg:text-2xl font-bold py-4">User Details</p>
          <form className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-4 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone">phone</label>
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <textarea
                  name="address"
                  id="address"
                  className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg dark:text-white">
                  Payment method
                </p>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id="cashOnDeliver"
                    defaultChecked
                  />
                  <label htmlFor="cashOnDeliver">Cash on delivery</label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="radio" name="paymentMethod" id="stripe" />
                  <label htmlFor="stripe">Stripe</label>
                </div>
              </div>
            </div>
            <div>
              <CostOverview />
              <button
                type="submit"
                className="w-full my-4 bg-brandBlue text-white cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 uppercase"
              >
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
