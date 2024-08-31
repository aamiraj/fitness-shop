import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Button from "../Shared/Button";
import { useNavigate } from "react-router-dom";

const INIT_AOS_DELAY = "50";

type Featured = {
  _id: number;
  images: string[];
  name: string;
  price: number;
}[];

const ProductCard = ({ products }: { products: Featured }) => {
  const navigate = useNavigate();

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center md:place-items-start ">
        {products.map((data, i) => (
          <div
            className="group p-4 drop-shadow-lg rounded-md bg-brandWhite dark:bg-gray-700 h-full"
            key={data._id}
          >
            <div
              data-aos="fade-up"
              data-aos-delay={`${(i + 1) * parseInt(INIT_AOS_DELAY)}`}
              className="relative"
            >
              <img
                src={data.images[0]}
                className="w-[260px] object-contain rounded-md"
                alt="product"
              />
              <div className="hidden group-hover:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 ">
                <div className="flex flex-col items-center justify-center gap-2">
                  <Button
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    disabled={false}
                    handler={() => 0}
                  >
                    Add To Cart
                  </Button>
                  <Button
                    bgColor={"bg-gray-200"}
                    textColor={"text-black"}
                    disabled={false}
                    handler={() => navigate(`/product/${data._id}`)}
                  >
                    See Details
                  </Button>
                </div>
              </div>
            </div>
            <div className="leading-7 py-2">
              <h2 className="font-semibold">{data.name}</h2>
              <h3 className="font-bold flex items-center gap-1">
                <span>
                  <FaBangladeshiTakaSign />
                </span>
                {data.price.toLocaleString()}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
