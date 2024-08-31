import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

import Product1 from "../../assets/product/p-1.webp";
import Product2 from "../../assets/product/p-2.jpg";
import Product3 from "../../assets/product/p-3.webp";
import Product4 from "../../assets/product/p-4.webp";

const featured = [
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
];

const Featured = () => {
  return (
    <div>
      <div className="container">
        {/* header section  */}
        <Heading
          title={"Featured Products"}
          subtitle={"Explore Our Best Products"}
        />
        {/* body section  */}
        <ProductCard products={featured} />
      </div>
    </div>
  );
};

export default Featured;
