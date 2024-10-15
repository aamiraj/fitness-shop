import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  removeCategory,
  resetCategory,
  setCategory,
  setMaxPrice,
  setMinPrice,
  setSearchbyname,
  setSort,
} from "../../redux/features/filter/filterSlice";

const MIN_PRICE_VALUE = 0;
const MAX_PRICE_VALUE = 1000000;

const categories = [
  {
    id: 2,
    name: "Bike",
    value: "Bike",
  },
  {
    id: 3,
    name: "Treadmill",
    value: "Treadmill",
  },
  {
    id: 4,
    name: "Dumbbell",
    value: "Dumbbell",
  },
  {
    id: 5,
    name: "Gym",
    value: "Gym",
  },
  {
    id: 6,
    name: "Bench",
    value: "Bench",
  },
  {
    id: 7,
    name: "Misc",
    value: "Misc",
  },
];

export const ShopFilter = () => {
  const { minPrice, maxPrice, searchbyname, category } = useAppSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      dispatch(setSearchbyname(e.target.value));
    }, 3000);
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (!e.target.value) return;
      dispatch(setMinPrice(parseInt(e.target.value)));
    }, 3000);
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      if (!e.target.value) return;
      dispatch(setMaxPrice(parseInt(e.target.value)));
    }, 3000);
  };

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (e.target.checked) {
      dispatch(setCategory(value));
    } else {
      dispatch(removeCategory(value));
    }
  };

  // const handleAllCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.checked) {
  //     dispatch(resetCategory());
  //   }
  // };

  const handleReset = () => {
    dispatch(setSearchbyname(""));
    dispatch(setMinPrice(MIN_PRICE_VALUE));
    dispatch(setMaxPrice(MAX_PRICE_VALUE));
    dispatch(resetCategory());
    dispatch(setSort(""));

    // resetting the fields with DOM
    (document.getElementById("searchbyname") as HTMLInputElement).value = "";
    (
      document.getElementById("min") as HTMLInputElement
    ).value = `${MIN_PRICE_VALUE}`;
    (
      document.getElementById("max") as HTMLInputElement
    ).value = `${MAX_PRICE_VALUE}`;
  };

  return (
    <div>
      {/* search by name  */}
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="searchbyname">Search by name</label>
        <input
          className="rounded-full border-2 px-4 py-2 outline-brandBlue"
          type="text"
          placeholder="e.g. dumbbell"
          name="searchbyname"
          id="searchbyname"
          onChange={handleSearchTerm}
          defaultValue={searchbyname}
        />
        {/* <button
        type="button"
        className="bg-red-500 text-white uppercase font-semibold hover:bg-red-800 rounded-full px-8 py-2 duration-300"
      >
        Search
      </button> */}
      </div>
      {/* price range  */}
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="range-slider">Price range</label>
        <div className="w-full flex items-center justify-between gap-3">
          <input
            className="w-1/2 rounded-md border-2 px-4 py-2 dark:text-black outline-brandBlue"
            type="number"
            name="min"
            id="min"
            placeholder="Min Price"
            defaultValue={minPrice}
            onChange={handleMinPrice}
            onWheel={(e) =>
              e.target instanceof HTMLInputElement && e.target.blur()
            }
          />
          <input
            className="w-1/2 rounded-md border-2 px-4 py-2 dark:text-black outline-brandBlue"
            type="number"
            name="max"
            id="max"
            placeholder="Max Price"
            defaultValue={maxPrice}
            onChange={handleMaxPrice}
            onWheel={(e) =>
              e.target instanceof HTMLInputElement && e.target.blur()
            }
          />
        </div>
      </div>
      {/* category part  */}
      <div className="flex flex-col gap-4">
        <label>Category</label>
        <div className="flex flex-col gap-2 pl-4">
          {/* <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name={"All"}
            id={"All"}
            value={""}
            defaultChecked
            onChange={(e) => handleAllCategory(e)}
          />
          <label htmlFor={"All"}>All</label>
        </div> */}
          {categories.map((data) => (
            <div key={data.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={data.name}
                id={data.name}
                value={data.value}
                checked={category.includes(data.value)}
                onChange={(e) => handleCategory(e)}
              />
              <label htmlFor={data.name}>{data.name}</label>
            </div>
          ))}
        </div>
      </div>
      {/* reset button  */}
      <div className="flex items-center justify-center mt-8">
        <button
          type="button"
          onClick={handleReset}
          className="w-full bg-primary text-white uppercase font-semibold hover:bg-red-800 rounded-full px-8 py-2 duration-300"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};
