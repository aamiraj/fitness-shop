import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaCaretDown } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const AdminDropdownLinks = [
  {
    id: 1,
    name: "Profile",
    href: "/#profile",
  },
  {
    id: 2,
    name: "Manage Products",
    href: "/admin/product-management",
  },
];

const CustomerDropdownLinks = [
  {
    id: 1,
    name: "Profile",
    href: "/#profile",
  },
  {
    id: 2,
    name: "Orders",
    href: "/#orders",
  },
];

const Dropdown = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/log-in");
    toast.success("You are logged out.");
  };
  return (
    <div>
      <ul>
        <li className="relative cursor-pointer group">
          <Link
            to={"/#"}
            className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
          >
            <FaUserCircle className="text-xl text-gray-600 cursor-pointer dark:text-gray-400 hover:text-primary hover:dark:text-primary" />
            <span>
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </span>
          </Link>
          <div className="w-[200px] p-2 absolute top-[32px] right-[-72px] z-[9999] hidden group-hover:block text-gray-500 dark:text-white bg-white dark:bg-gray-900 rounded-md shadow-md">
            <ul className="space-y-2">
              {/* dropdown when admin and superAdmin  */}
              {(user?.role === "superAdmin" || user?.role === "admin") &&
                AdminDropdownLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="w-full p-2 hover:bg-primary/20 inline-block rounded-md font-semibold text-gray-500 hover:text-black dark:text-white duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              {/* dropdown when customer  */}
              {user?.role === "customer" &&
                CustomerDropdownLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="w-full p-2 hover:bg-primary/20 inline-block rounded-md font-semibold text-gray-500 hover:text-black dark:text-white duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              <li>
                <button
                  type="button"
                  onClick={handleLogOut}
                  title="Log In"
                  className="w-full block rounded-full px-8 py-2 bg-primary text-white text-center uppercase hover:bg-red-900 "
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
