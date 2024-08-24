import React from "react";

import Cycle from "../assets/category/cycle2.png";
import Treadmill from "../assets/category/treadmill2.png";

import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Featured from "../components/Products/Featured";
import Gallery from "../components/Gallery/Gallery";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Aug to 28 Aug",
  image: Cycle,
  title2: "Wheel Faster",
  title3: "Summer Sale",
  title4:
    "Now the time to order, get a stationary cycle at a low price, and enjoy riding.",
  bgColor: "#ffc800",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Aug to 28 Aug",
  image: Treadmill,
  title2: "Run Like A Speadstar",
  title3: "Summer Sale",
  title4:
    "Order an electric treadmill at the all time low price, time is limited, run to order.",
  bgColor: "#4758d6",
};

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Featured />
      <Banner data={BannerData2} />
      <Blogs />
      <Gallery />
    </>
  );
};

export default Home;
