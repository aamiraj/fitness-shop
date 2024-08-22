import Treadmill from "../../assets/category/treadmill.png";
import Gym from "../../assets/category/gym.png";
import Cycle from "../../assets/category/cycle.png";
import Button from "../Shared/Button";

const CategoryCards = [
  {
    id: 1,
    img: Treadmill,
    name: "Treadmill",
    line: "Run On",
  },
  {
    id: 2,
    img: Gym,
    name: "Gym Machine",
    line: "Chin Up",
  },
  {
    id: 3,
    img: Cycle,
    name: "Cycle",
    line: "Ride On",
  },
];

// to be start from 1:27
const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* first category  */}
            <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-2xl relative h-[320px] flex items-end">
              <div className="z-20">
                <div className="mb-4">
                  <p className="mb-1 text-2xl font-bold text-gray-400">
                    {CategoryCards[0].line}
                  </p>
                  <p className="mb-4 text-3xl xl:text-5xl font-bold">
                    {CategoryCards[0].name}
                  </p>
                  <Button
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                    handler={() => 0}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
              <img
                className="w-[240px] absolute top-0 right-0 z-10"
                src={CategoryCards[0].img}
                alt="category"
              />
            </div>
            {/* second category  */}
            <div className="py-10 pl-5 bg-gradient-to-br from-brandYellow/90 to-brandYellow/70 text-white rounded-2xl relative h-[320px] flex items-end">
              <div className="z-20">
                <div className="mb-4">
                  <p className="mb-1 text-2xl font-bold text-gray-400">
                    {CategoryCards[2].line}
                  </p>
                  <p className="mb-4 text-3xl xl:text-5xl font-bold">
                    {CategoryCards[2].name}
                  </p>
                  <Button
                    bgColor={"bg-white"}
                    textColor={"text-brandYellow"}
                    handler={() => 0}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
              <img
                className="w-[240px] absolute top-0 right-0 z-10"
                src={CategoryCards[2].img}
                alt="category"
              />
            </div>
            {/* third category  */}
            <div className="lg:col-span-2 py-10 pl-5 bg-gradient-to-br from-primary/90 to-primary/70 text-white rounded-2xl relative h-[320px] flex items-end">
              <div className="z-20">
                <div className="mb-4">
                  <p className="mb-1 text-2xl font-bold text-gray-400">
                    {CategoryCards[1].line}
                  </p>
                  <p className="mb-4 text-3xl xl:text-5xl font-bold">
                    {CategoryCards[1].name}
                  </p>
                  <Button
                    bgColor={"bg-white"}
                    textColor={"text-primary"}
                    handler={() => 0}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
              <img
                className="w-[240px] absolute top-1/2 right-0 -translate-y-1/2 z-10"
                src={CategoryCards[1].img}
                alt="category"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
