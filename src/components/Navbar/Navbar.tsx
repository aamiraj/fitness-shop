import React from "react";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Shop",
    href: "/#shop",
  },
  {
    id: 3,
    name: "About",
    href: "/#about",
  },
  {
    id: 4,
    name: "Blogs",
    href: "/#blogs",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    href: "/#trending-products",
  },
  {
    id: 2,
    name: "Best Selling",
    href: "/#best-selling",
  },
  {
    id: 3,
    name: "Top Rated",
    href: "/#top-rated",
  },
];

const Navbar = ({ handleOrderPopup }: { handleOrderPopup: () => void }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center gap-4">
          {/* logo and link sections  */}
          <div className="flex items-center gap-4">
            {/* logo  */}
            <Link
              to={"/"}
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
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
                {/* dropdown  */}
                <li className="relative cursor-pointer group">
                  <Link
                    to={"/#"}
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Quick Links
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </Link>
                  {/* dropdown links  */}
                  <div className="w-[200px] p-2 absolute z-[9999] hidden group-hover:block text-gray-500 dark:text-white bg-white dark:bg-gray-900 rounded-md shadow-md">
                    <ul className="space-y-2">
                      {DropdownLinks.map((link) => (
                        <li>
                          <Link to={link.href} className="w-full p-2 hover:bg-primary/20 inline-block rounded-md font-semibold text-gray-500 hover:text-black dark:text-white duration-200">{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* navbar right part  */}
          <div className="flex justify-between items-center gap-4">
            {/* search bar  */}
            <div className="relative group hidden sm:block ">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 group-hover:text-primary duration-200" />
            </div>
            {/* cart button  */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-primary text-white rounded-full absolute top-0 right-0 flec items-center justify-center text-xs ">
                2
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
