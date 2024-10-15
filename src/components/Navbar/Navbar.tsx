import { FaBars, FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "./DarkMode";
import OffCanvasMenu from "./OffCanvasMenu";
import { useAppSelector } from "../../redux/hooks";
import Dropdown from "../Dropdown/Dropdown";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Shop",
    href: "/shop",
  },
  {
    id: 3,
    name: "About",
    href: "/about-us",
  },
  {
    id: 4,
    name: "Blogs",
    href: "#blogs",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, cart } = useAppSelector((state) => state);

  const openNav = () => {
    const canvas = document.getElementById("offcanvas");
    if (canvas) {
      canvas.style.width = "250px";
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 mb-3">
      <OffCanvasMenu menus={MenuLinks} />
      <div className="py-4">
        <div className="container flex justify-between items-center gap-4">
          {/* logo and link sections  */}
          <div className="flex items-center gap-4">
            {/* offcanvas button  */}
            <span
              className="block lg:hidden text-2xl cursor-pointer"
              onClick={openNav}
            >
              <FaBars />
            </span>
            {/* logo  */}
            <Link
              to={"/"}
              className="text-primary font-semibold tracking-widest text-sm uppercase sm:text-3xl"
            >
              Fitness Shop
            </Link>
            {/* menu links  */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.href}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:text-white duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {/* dropdown with dropdown links  */}
                {/* <li className="relative cursor-pointer group">
                  <Link
                    to={"/#"}
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </Link>

                <div className="w-[200px] p-2 absolute z-[9999] hidden group-hover:block text-gray-500 dark:text-white bg-white dark:bg-gray-900 rounded-md shadow-md">
                    <ul className="space-y-2">
                      {DropdownLinks.map((link) => (
                        <li key={link.id}>
                          <Link
                            to={link.href}
                            className="w-full p-2 hover:bg-primary/20 inline-block rounded-md font-semibold text-gray-500 hover:text-black dark:text-white duration-200"
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
          {/* navbar right part  */}
          <div className="flex justify-between items-center gap-4">
            {/* search bar  */}
            {/* <div className="relative group hidden sm:block ">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200" />
            </div> */}
            {/* profile part  */}
            <div>
              {auth.user ? (
                <Dropdown />
              ) : (
                <Link
                  to={"/log-in"}
                  title="Log In"
                  className="hidden md:block rounded-full px-8 py-2 bg-primary text-white text-center uppercase hover:bg-red-900 "
                >
                  Log In
                </Link>
              )}
            </div>
            {/* cart button  */}
            <button
              onClick={() => navigate("/customer/cart")}
              title="Cart"
              className="relative p-3"
            >
              <FaCartShopping className="text-xl text-gray-600 cursor-pointer dark:text-gray-400 hover:text-primary hover:dark:text-primary" />
              <div className="w-4 h-4 bg-primary text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs ">
                {cart.length}
              </div>
            </button>
            {/* dark mode button  */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     href: "/#trending-products",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     href: "/#best-selling",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     href: "/#top-rated",
//   },
// ];
