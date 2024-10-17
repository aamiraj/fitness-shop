import {
  FaBangladeshiTakaSign,
  FaRegStar,
  FaStar,
  FaStarHalfStroke,
} from "react-icons/fa6";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import { TProduct } from "../../types/product.types";

const INIT_AOS_DELAY = "50";

const ProductCard = ({
  idx,
  product,
}: {
  idx: number;
  product: TProduct;
  addToCart: (id: string) => void;
}) => {
  const navigate = useNavigate();

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
    <div
      className="p-4 drop-shadow-lg rounded-md bg-brandWhite dark:bg-gray-700 h-full"
      key={product?._id}
    >
      <div
        data-aos="fade-up"
        data-aos-delay={`${(idx + 1) * parseInt(INIT_AOS_DELAY)}`}
        className="relative group"
      >
        <img
          src={product?.images[0]}
          className="object-contain rounded-md"
          alt="product"
        />
        <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 ">
          <div className="flex flex-col items-center justify-center gap-2">
            {/* <Button
              bgColor={"bg-primary"}
              textColor={"text-white"}
              disabled={false}
              handler={() => addToCart(product?._id)}
            >
              Add To Cart
            </Button> */}
            <Button
              bgColor={"bg-brandBlue"}
              textColor={"text-white"}
              disabled={false}
              handler={() => navigate(`/product/${product?._id}`)}
            >
              See Details
            </Button>
          </div>
        </div>
      </div>
      <div className="leading-7 py-2">
        <h2 className="font-semibold">{product?.name}</h2>
        <h3 className="font-bold flex items-center gap-1">
          <span>
            <FaBangladeshiTakaSign />
          </span>
          {product?.price?.toLocaleString()}
        </h3>
      </div>
      <div className="text-warning flex items-center gap-2">
        <FaStar />
        <FaStar />
        <FaStarHalfStroke />
        <FaRegStar />
        <FaRegStar />
        <span className="text-gray-500 font-bold text-sm">3.50/5.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
