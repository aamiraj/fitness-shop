import { FaFilter } from "react-icons/fa6";
import { ShopFilter } from "../ShopFilter/ShopFilter";
import { useAppDispatch } from "../../redux/hooks";
import { setSort } from "../../redux/features/filter/filterSlice";

const ShopHeader = () => {
  const dispatch = useAppDispatch();

  const handleChangeSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSort(e.target.value));
  };

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
          className="flex xl:hidden items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-xs"
        >
          <FaFilter />
          Filter
        </button>
        <select
          name="sortby"
          id="sortby"
          className="text-xs px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-md"
          defaultValue={""}
          onChange={(e) => handleChangeSort(e)}
        >
          <option value="">Default Sort</option>
          <option value="price">Price Low to High</option>
          <option value="-price">Price High to Low</option>
          <option value="name">Name A to Z</option>
          <option value="-name">Name Z to A</option>
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
          className="absolute top-0 left-0 text-4xl"
        >
          &times;
        </button>

        <div className="w-[250px] p-4">
          <ShopFilter />
        </div>
      </div>
    </div>
  );
};

export default ShopHeader;
