import Heading from "../Shared/Heading";
import Blog1 from "../../assets/blogs/blog-1.webp";
import Blog2 from "../../assets/blogs/blog-2.jpeg";
import Blog3 from "../../assets/blogs/blog-3.jpg";

const INIT_AOS_DELAY = "1000";

const blogsData = [
  {
    title: "Seven Benefits Of Physical Exercise",
    description:
      "You know exercise is good for you, but do you know how good? From boosting your mood to improving your sex life, find out how exercise can improve your life.",
    published: "July 26 2024",
    image: Blog1,
    source:
      "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/exercise/art-20048389",
  },
  {
    title: "Need Motivation? Some Of The Gym Tricks To Follow.",
    description:
      "If you're in the middle of a fitness rut, it can be hard to find the energy you need to head to the gym. Wondering how to find the motivation to work out? Try a few of the 15 tips below to boost your exercise enthusiasm.",
    published: "July 27 2024",
    image: Blog2,
    source:
      "https://www.planetfitness.com/community/articles/lacking-motivation-here-are-15-tricks-get-you-gym",
  },
  {
    title: "Follow Fitness Blog, Who Helps You Through Your Exercise Journey.",
    description:
      "The top fitness blogs have plenty of engaged readers and a growing audience. Here is a list of 12 of the best fitness blogs you need to follow.",
    published: "July 28 2024",
    image: Blog3,
    source: "https://www.glofox.com/blog/fitness-blogs/",
  },
];

const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* header section  */}
        <Heading
          title="Recent Blogs"
          subtitle="Read The Blogs To Stay Motivated"
        />
        {/* blog section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 sm:gap-4 md-gap-6">
          {/* blog cards  */}
          {blogsData.map((blog, id) => (
            <div
              key={id}
              data-aos="fade-up"
              data-aos-duration={`${(id + 1) * parseInt(INIT_AOS_DELAY)}`}
              className="bg-white dark:bg-gray-900"
            >
              {/* image section  */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={blog.image}
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-300"
                  alt=""
                />
              </div>
              {/* content section  */}
              <div className="space-y-3">
                <p className="text-xs text-gray-500">{blog.published}</p>
                <p className="font-bold line-clamp-1">{blog.title}</p>
                <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-400">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
