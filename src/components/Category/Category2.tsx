import Dumbbell from "../../assets/category/dumbbell.png";
import Bench from "../../assets/category/bench.png";
import Misc from "../../assets/category/misc.png";
import Button from "../Shared/Button";

const CategoryCards = [
  {
    id: 1,
    img: Dumbbell,
    name: "Dumbbell",
    line: "Lift Up"
  },
  {
    id: 2,
    img: Bench,
    name: "Bench",
    line: "Strech On"
  },
  {
    id: 3,
    img: Misc,
    name: "Misc",
    line: "Want More"
  },
];

const Category2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* first category  */}
            <div className="lg:col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/90 to-gray-300/70 text-white rounded-2xl relative h-[320px] flex items-end">
              <div className="z-20">
                <div className="mb-4">
                  <p className="mb-1 text-2xl font-bold text-gray-400">
                    {CategoryCards[0].line}
                  </p>
                  <p className="mb-4 text-3xl xl:text-5xl font-bold">
                    {CategoryCards[0].name}
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
                className="w-[320px] absolute top-0 right-0 z-10"
                src={CategoryCards[0].img}
                alt="category"
              />
            </div>
            {/* second category  */}
            <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-2xl relative h-[320px] flex items-end">
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
                    textColor={"text-brandGreen"}
                    handler={() => 0}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
              <img
                className="w-[240px] absolute right-0 bottom-0 z-10"
                src={CategoryCards[1].img}
                alt="category"
              />
            </div>
            {/* third category  */}
            <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue/90 to-brandBlue/70 text-white rounded-2xl relative h-[320px] flex items-end">
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
                    textColor={"text-brandBlue"}
                    handler={() => 0}
                  >
                    Browse Now
                  </Button>
                </div>
              </div>
              <img
                className="w-[240px] absolute top-1/2 right-0 -translate-y-1/2 z-10"
                src={CategoryCards[2].img}
                alt="category"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category2;
