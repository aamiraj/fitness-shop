import { FaFilter } from "react-icons/fa6";

const ShopHeader = () => {
  const openNav = () => {
    const canvas = document.getElementById("offcanvas2");
    if (canvas) {
      canvas.style.width = "250px";
    }
  };

  function closeNav() {
    const offcanvas = document.getElementById("offcanvas2");
    if (offcanvas) {
      offcanvas.style.width = "0";
    }
  }

  return (
    <div>
      <div className="flex items-start justify-between gap-2">
        {/* offcanvas button  */}
        <button
          type="button"
          onClick={openNav}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-xs"
        >
          <FaFilter />
          Filter
        </button>
        <select
          name="sortby"
          id="sortby"
          className="text-xs px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md"
          defaultValue={""}
        >
          <option value="">Default</option>
          <option value="lowtohigh">Price Low to High</option>
          <option value="hightolow">Price High to Low</option>
        </select>
      </div>
      {/* offcanvas menus  */}
      <div
        id="offcanvas2"
        className="h-full w-0 fixed z-[9999] top-0 right-0 bg-brandWhite dark:bg-gray-950 overflow-x-hidden duration-500 pt-16"
      >
        <button
          type="button"
          onClick={closeNav}
          className="absolute top-0 left-0 text-4xl ml-12"
        >
          &times;
        </button>
        <ul>
          <li>Search Field</li>
        </ul>
      </div>
    </div>
  );
};

export default ShopHeader;
