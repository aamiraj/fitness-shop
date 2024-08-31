import ProductCard from "../components/Products/ProductCard";
import ShopFilter from "../components/ShopFilter/ShopFilter";
import ShopHeader from "../components/ShopHeader/ShopHeader";

import Product1 from "../assets/product/p-1.webp";
import Product2 from "../assets/product/p-2.jpg";
import Product3 from "../assets/product/p-3.webp";
import Product4 from "../assets/product/p-4.webp";
import Product5 from "../assets/product/p-5.webp";
import Product6 from "../assets/product/p-6.webp";
import Product7 from "../assets/product/p-7.webp";
import Product8 from "../assets/product/p-8.webp";
import Product9 from "../assets/product/p-9.webp";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    _id: 1,
    images: [Product1],
    name: "2.5KG Hex Dumbbell 1 pair",
    price: 600,
  },
  {
    _id: 2,
    images: [Product2],
    name: "Reebok Electric Motorized Treadmill",
    price: 40000,
  },
  {
    _id: 3,
    images: [Product3],
    name: "Daily Youth Gym Station",
    price: 15000,
  },
  {
    _id: 4,
    images: [Product4],
    name: "KPOWER Elliptical Cycle ",
    price: 10000,
  },
  {
    _id: 5,
    images: [Product5],
    name: "WANQ A-85 Bench",
    price: 8000,
  },
  {
    _id: 6,
    images: [Product6],
    name: "WANQ Commercial Flat Press Bench",
    price: 12000,
  },
  {
    _id: 7,
    images: [Product7],
    name: "KPOWER Magnetic Cycle",
    price: 13500,
  },
  {
    _id: 8,
    images: [Product8],
    name: "Oma Electric Treadmill",
    price: 45000,
  },
  {
    _id: 9,
    images: [Product9],
    name: "10kg Hex Dumbbell",
    price: 900,
  },
];

const Shop = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="flex">
          <div className="hidden xl:block">
            {/* sidebar for filter  */}
            <ShopFilter />
          </div>
          
          <div className="p-4">
            {/* top header for filter and sort button  */}
            <ShopHeader />
            <h1 className="text-3xl lg:text-4xl font-bold py-4">Products</h1>
            {/* all products appeared here  */}
            <ProductCard products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
