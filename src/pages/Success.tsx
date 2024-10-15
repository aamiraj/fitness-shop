import { Link } from "react-router-dom";
import Check from "../assets/website/check.gif";
import { FaHome } from "react-icons/fa";

const Success = () => {
  return (
    <div className="container">
      <div className="w-full my-8 flex items-center justify-center">
        <div>
          <img src={Check} alt="success" />
          <div className="-mt-16">
            <h1 className="py-2 text-4xl font-bold text-gray-500 text-center">
              Success
            </h1>
            <h2 className="py-2 text-2xl font-bold text-gray-500 text-center">
              Order Confirmed
            </h2>
            <Link to={"/"} className="py-2 text-sm text-primary text-center flex items-center justify-center gap-3">
              <FaHome />
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
