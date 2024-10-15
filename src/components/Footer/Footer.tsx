import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobile,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "Shop",
    href: "/shop",
  },
  {
    id: 3,
    title: "About",
    href: "/about-us",
  },
];
const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details  */}
          <div className="py-8 px-4">
            {/* logo  */}
            <Link
              to={"/"}
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Fitness Shop
            </Link>
            <p className="text-gray-600 dark:text-white/70 lg:pr-24 pt-3">
              Fitness Shop is there to help you stay fit. Providing you with
              premium quality equipements and accessories. Stay with us, stay
              fit.
            </p>
            <p className="text-gray-500 mt-4">
              Made by Fitness Shop Developer Team
            </p>
          </div>
          {/* footer links  */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul>
                {footerLinks.map((link, id) => (
                  <li key={id}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* second important links  */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul>
                {footerLinks.map((link, id) => (
                  <li key={id}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:dark:text-white hover:text-black duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* company details  */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <div>
                    <address>Gulshan, Dhaka</address>
                    <address>Bangladesh</address>
                  </div>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobile />
                  <p>+88 017XX XXX XXX</p>
                </div>
                {/* social links  */}
                <div className="flex items-center gap-3 mt-6">
                  <Link to={"/#insta"}>
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </Link>
                  <Link to={"/#face"}>
                    <FaFacebook className="text-3xl hover:text-primary duration-300" />
                  </Link>
                  <Link to={"/#twit"}>
                    <FaTwitter className="text-3xl hover:text-primary duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
