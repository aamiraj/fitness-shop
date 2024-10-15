import { MdEmail } from "react-icons/md";
import Model1 from "../assets/models/model-1.jpg";
import Model2 from "../assets/models/model-2.jpg";
import { FaPhone, FaShop } from "react-icons/fa6";
import { BsSend } from "react-icons/bs";
import Slider from "react-slick";
import Profile from "../assets/profile-pic/profile-1.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useScrollTop from "../hooks/useScrollTop";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 1000,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "ease-in-out",
};

const testimonials = [
  {
    id: 1,
    img: Profile,
    name: "Alif Hasan",
    message:
      "I have bought a motorized treadmill from Fitness Shop. I got a discount of 25%. Best deal I have made.",
  },
  {
    id: 2,
    img: Profile,
    name: "Zabir Mahmud",
    message:
      "Their imported products are original. Anyone can buy equipments reliably. I myself bought a pair of dumbbell. Looking for a spinning bike.",
  },
  {
    id: 3,
    img: Profile,
    name: "Ali Hosain",
    message:
      "I just got a bench. I use this for my workout. It is heavy duty. I will buy a pair of dumbbell from them.",
  },
];

const AboutUs = () => {
  useScrollTop();

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
    <div className="">
      <div className="container">
        <Overview />
        <OurTeam />
        <TestimonialSection />
        <Contact />
      </div>
    </div>
  );
};

export default AboutUs;

/* overview section  */
const Overview = () => (
  <div
    className="flex flex-col items-center justify-center px-2 py-8 md:px-8"
    data-aos="fade-down"
    data-aos-duration="1000"
    data-aos-easing="linear"
    data-aos-delay="500"
  >
    <h1 className="py-4 text-center text-primary font-semibold tracking-widest uppercase text-2xl sm:text-4xl">
      Fitness Shop
    </h1>
    <p className="text-center font-bold text-xl sm:text-2xl py-4">Overview</p>
    <p className="text-center italic">
      "Empowering Fitness Enthusiasts Fitness Shop, an Ecommerce venture, is
      dedicated to enhancing fitness journeys in Bangladesh. We offer to provide
      Ecommerce platform specializing in fitness equipments. We have a diverse
      selection of fitness accessories, which includes Dumbbells for strength
      training and muscle development, Spinning Bikes being ideal for
      high-intensity cardio workouts, Treadmills for versatile machines for
      walking, jogging, or running indoors, Benches being essential for
      weightlifting and bodyweight exercises etc. Our company can boast an
      experienced leadership team comprising 2 founding members. We have a
      dedicated team of 10 individuals who contribute to its success. Fitness
      Shop&apos;s commitment to quality, customer satisfaction, and fitness
      excellence positions it as a trusted destination for fitness enthusiasts.
      Whether you&apos;re a beginner or a seasoned athlete, Fitness Shop aims to
      equip you with the tools you need to achieve your health and wellness
      goals. Please note that while Fitness Shop has received positive feedback
      from some users, there have also been concerns raised by others. As with
      any online service, it&apos;s essential to exercise caution and conduct
      due diligence. If you&apos;re considering engaging with Fitness Shop, we
      recommend researching further and reading additional reviews to make an
      informed decision."
    </p>
  </div>
);

/* our team section  */
const OurTeam = () => (
  <div className="px-2 py-8 md:px-8">
    <h2 className="text-center font-bold text-xl sm:text-2xl py-4">Our Team</h2>
    {/* first founding member  */}
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-start xl:items-center">
      {/* picture of founder 1 */}
      <div
        className="p-4 flex items-center justify-center md:justify-end"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <img
          src={Model1}
          alt="model1"
          className="max-w-[300px] object-contain"
        />
      </div>
      {/* roles and bios section   */}
      <div
        className="py-4 flex flex-col gap-2 items-start text-justify"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <p className="font-bold text-2xl lg:text-4xl text-brandBlue">
          Ted Rich
        </p>
        <p className="font-semibold italic text-xl lg:text-2xl">
          Founder, Fitness Shop
        </p>
        <p className="font-semibold italic text-xl lg:text-2xl">
          Chief Officer, Marketing, HR, and Logistics
        </p>
        <p className="text-base font-normal">
          Ted Rich is one of the founding member of the company. His new ideas
          and skills inspires the whole team. He is enthusiasts and hard-working
          person. Academically he is one of the topper in his University. He
          likes to debate and always likes to ask questions. Currently he is in
          the position of handling Marketing, Human Resource and Logistics
          departments. He is responsible for 20% growth of the company last
          year. He tries to find out the right person for the company. He
          recruites 4 valuable members who helped him achieve the growth. He has
          a marvelous skill to handle the logistics efficiently. All in all he
          is one of the key members in our team.
        </p>
      </div>
    </div>
    {/* second founding member  */}
    <div
      className="py-4 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-start xl:items-center"
      data-aos="fade-right"
      data-aos-duration="800"
    >
      {/* roles and bios section   */}
      <div className="py-4 order-2 md:order-1 flex flex-col gap-2 items-end text-justify">
        <p className="font-bold text-2xl lg:text-4xl text-brandBlue">
          John Doe
        </p>
        <p className="font-semibold italic text-xl lg:text-2xl">
          Founder, Fitness Shop
        </p>
        <p className="font-semibold italic text-xl lg:text-2xl">
          Chief Officer, IT, Accounting and Finance
        </p>
        <p className="text-base font-normal">
          John Doe is also one of the founding memeber. He is mainly a tech guy
          in our company. Also he knows how to handle accounts and finance. As
          our main shop is digital, a lot of the transactions happen digitally.
          He can handle them all with his custom built software. In his academic
          life he was very bright. He became fond of coding and problem solving
          at an early age, and since then he is working remarkably. He is the
          reason we have a digital shop, otherwise we have to go for a
          traditional shop. He always motivates our team by his hard-working
          personality. He tells the team that this company is a big problem and
          we need to work hard to solve this problem. As a consequence, everyone
          loves him and seek guidance from him.
        </p>
      </div>
      {/* picture of founder 2 */}
      <div
        className="order-1 md:order-2 p-4 flex items-center justify-center md:justify-start"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <img
          src={Model2}
          alt="model2"
          className="max-w-[300px] object-contain"
        />
      </div>
    </div>
  </div>
);

// testimonials section
const TestimonialSection = () => (
  <div className="px-2 py-8 md:px-8" data-aos="zoom-in" data-aos-duration="500">
    <p className="text-center font-bold text-xl sm:text-2xl py-4">
      Testimonials
    </p>
    {/* carousel of testimonials */}
    <div>
      <Slider {...settings}>
        {testimonials.map((data) => (
          <Testimonials
            key={data.id}
            img={data.img}
            name={data.name}
            message={data.message}
          />
        ))}
      </Slider>
    </div>
  </div>
);

const Testimonials = ({
  img,
  name,
  message,
}: {
  img: string;
  name: string;
  message: string;
}) => {
  return (
    <div>
      <div className="w-full h-[300px] flex flex-col gap-2 items-center justify-center">
        <div className="">
          <img
            src={img}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
        <div className="space-y-2">
          <p className="font-bold text-2xl text-center">{name}</p>
          <p className="font-normal text-lg italic text-center">"{message}"</p>
        </div>
      </div>
    </div>
  );
};

// contact section
const Contact = () => (
  <div className="px-2 py-8 md:px-8" data-aos="zoom-in" data-aos-duration="500">
    <p className="text-center font-bold text-xl sm:text-2xl py-4">Contact</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      <form className="max-w-full p-4 flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            name="feedback"
            id="feedback"
            rows={3}
            className="px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-800 outline-1 outline-sky-500 border rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="gradient-btn w-full my-4 text-white cursor-pointer duration-300 py-2 px-8 rounded-full relative z-10 uppercase flex items-center gap-2 justify-center"
        >
          Submit
          <BsSend />
        </button>
      </form>
      <div className="py-4 lg:p-4 flex flex-col gap-3">
        <p className="flex items-center gap-2">
          <MdEmail />
          <span>Email:</span>
          <span>fitness.shop@email.com</span>
        </p>
        <p className="flex items-center gap-2">
          <FaPhone />
          <span>Phone:</span>
          <span>+88017XX-XXXXXX</span>
        </p>
        <p className="flex items-center gap-2">
          <FaShop />
          <span>Address:</span>
          <span>Gulshan, Dhaka, Bangladesh</span>
        </p>
      </div>
    </div>
  </div>
);
