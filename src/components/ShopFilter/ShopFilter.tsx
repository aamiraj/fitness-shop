import rangeSlider from "range-slider-input";
import "range-slider-input/dist/style.css";
import { useEffect, useState } from "react";

const MIN_PRICE_VALUE = 0;
const MAX_PRICE_VALUE = 100000;

const categories = [
  {
    id: 1,
    name: "All",
    value: "all",
  },
  {
    id: 2,
    name: "Bike",
    value: "bike",
  },
  {
    id: 3,
    name: "Treadmill",
    value: "treadmill",
  },
  {
    id: 4,
    name: "Dumbbell",
    value: "dumbbell",
  },
  {
    id: 5,
    name: "Gym",
    value: "gym",
  },
  {
    id: 6,
    name: "Bench",
    value: "bench",
  },
  {
    id: 7,
    name: "Misc",
    value: "misc",
  },
];

const ShopFilter = () => {
  const [minPrice, setMinPrice] = useState(MIN_PRICE_VALUE);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE_VALUE);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    rangeSlider(document.querySelector("#range-slider") as HTMLInputElement, {
      min: MIN_PRICE_VALUE,
      max: MAX_PRICE_VALUE,
      step: 1,
      value: [MIN_PRICE_VALUE, 100000],
      onInput: (value) => {
        const [min, max] = value;
        setMinPrice(min);
        setMaxPrice(max);
      },
    });
  }, []);

  return (
    <div>
      <div className="w-[300px] p-4">
        <div className="flex flex-col gap-4 mb-4">
          <label htmlFor="searchbyname">Search by name</label>
          <input
            className="rounded-full border-2 px-4 py-2"
            type="text"
            name="searchbyname"
            id="searchbyname"
          />
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <label htmlFor="range-slider">Price range</label>
          <div id="range-slider"></div>
          <div className="w-full flex items-center justify-between gap-3">
            <input
              className="w-1/2 rounded-md border-2 px-4 py-2"
              type="number"
              name="min"
              id="min"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(parseInt(e.target.value))}
            />
            <input
              className="w-1/2 rounded-md border-2 px-4 py-2"
              type="number"
              name="max"
              id="max"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label>Category</label>
          <div className="flex flex-col gap-2 pl-4">
            {categories.map((data) => (
              <div key={data.id} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={data.value}
                  id={data.value}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                <label htmlFor={data.value}>{data.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            type="button"
            className="bg-red-500 text-white uppercase font-semibold hover:bg-red-800 rounded-full px-8 py-2 duration-300"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopFilter;
