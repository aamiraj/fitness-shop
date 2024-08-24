import Slider from "react-slick";
import Tradmill from "../../assets/hero/treadmill.png";
import Dumbbell from "../../assets/hero/dumbell.png";
import Button from "../Shared/Button";

const HeroSlides = [
  {
    id: 1,
    img: Tradmill,
    title1: "Best Brand Motorized",
    title2: "Treadmill",
    subtitle: "Treadmill For Your Home",
  },
  {
    id: 2,
    img: Dumbbell,
    title1: "Premium Quality Heavyweight",
    title2: "Dumbbell",
    subtitle: "Lift Weight, Stay Fit",
  },
];

const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: true,
    cssEase: "ease-in-out",
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-2xl min-h-[550px] sm:h-min-h-[650px] flex justify-center items-center hero-bg-color">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroSlides.map((slide) => (
              <div key={slide.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text part  */}
                  <div className="flex flex-col justify-center items-center sm:items-start gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 z-10 relative">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl lg:text-3xl font-bold"
                    >
                      {slide.title1}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-4xl sm:text-6xl lg:text-7xl font-bold"
                    >
                      {slide.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-4xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px] sm:text-6xl lg:text-7xl font-bold"
                    >
                      {slide.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-offset="0"
                      data-aos-duration="500"
                      data-aos-delay="300"
                    >
                      <Button
                        textColor={"text-white"}
                        bgColor={"bg-primary"}
                        handler={() => 0}
                      >
                        Shop Now
                      </Button>
                    </div>
                  </div>
                  {/* image part  */}
                  <div className="order-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                    >
                      <img
                        className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative z-40"
                        src={slide.img}
                        alt="hero image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
