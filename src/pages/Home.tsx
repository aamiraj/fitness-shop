import React from "react";

import Cycle from "../assets/category/cycle2.png";
import Treadmill from "../assets/category/cycle2.png";

import AOS from "aos";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Category from "../components/Category/Category";
import Category2 from "../components/Category/Category2";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";
import Blogs from "../components/Blogs/Blogs";
import Partners from "../components/Partners/Partners";
import Footer from "../components/Footer/Footer";
import Popup from "../components/Popup/Popup";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Aug to 28 Aug",
  image: Cycle,
  title2: "Wheel As Fast As You Can",
  title3: "Summer Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
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
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
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
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Navbar />
        <Hero />
        <Category />
        <Category2 />
        <Services />
        <Banner data={BannerData} />
        {/* 
        <Products />
        <Banner data={BannerData2} />
        <Blogs />
        <Partners />
        <Footer />
        <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} /> */}
      </div>
    );
}

export default Home