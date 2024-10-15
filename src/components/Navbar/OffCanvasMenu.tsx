import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut } from "../../redux/features/auth/authSlice";

const OffCanvasMenu = ({
  menus,
}: {
  menus: {
    id: number;
    name: string;
    href: string;
  }[];
}) => {
  function closeNav() {
    const offcanvas = document.getElementById("offcanvas");
    if (offcanvas) {
      offcanvas.style.width = "0";
    }
  }

  const { auth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div
        id="offcanvas"
        className="h-full w-0 fixed z-[9999] top-0 left-0 bg-brandWhite dark:bg-gray-950 overflow-x-hidden duration-500 pt-16"
      >
        <button
          type="button"
          onClick={closeNav}
          className="absolute top-0 right-0 text-4xl ml-12"
        >
          &times;
        </button>
        <ul>
          {menus.map((link) => (
            <li key={link.id}>
              <Link
                to={link.href}
                className="p-2 pr-2 pl-8 text-2xl text-gray-700 hover:text-black dark:hover:text-white dark:text-gray-300 block duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="mt-4">
            {auth.user ? (
              <button
                type="button"
                onClick={() => dispatch(logOut())}
                title="Log In"
                className="ml-8 rounded-full px-8 py-2 bg-primary text-white text-center uppercase hover:bg-red-900 "
              >
                Log Out
              </button>
            ) : (
              <Link
                to={"/log-in"}
                title="Log In"
                className="ml-8 rounded-full px-8 py-2 bg-primary text-white text-center uppercase hover:bg-red-900 "
              >
                Log In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
