import Gallery1 from "../../assets/gallery/gallery_1.jpg";
import Gallery2 from "../../assets/gallery/gallery_2.jpg";
import Gallery3 from "../../assets/gallery/gallery_3.jpg";
import Gallery4 from "../../assets/gallery/gallery_4.jpg";
import Gallery5 from "../../assets/gallery/gallery_5.webp";
import Gallery6 from "../../assets/gallery/gallery_6.jpeg";
import Gallery7 from "../../assets/gallery/gallery_7.jpg";
import Gallery8 from "../../assets/gallery/gallery_8.jpeg";
import Gallery9 from "../../assets/gallery/gallery_9.jpg";
import Heading from "../Shared/Heading";

const Gallery = () => {
  return (
    <div className="p-8 my-12">
      <div className="container">
        <Heading
          title="Image Gallery"
          subtitle="Our Equipements Used By Individuals"
        />
        <div className="w-[70%] mx-auto flex gap-5">
          {/* first col  */}
          <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-5">
            <div className="">
              <img
                src={Gallery1}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={Gallery2}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={Gallery3}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
          </div>
          {/* second col  */}
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col gap-5">
            <div className="">
              <img
                src={Gallery4}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={Gallery9}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={Gallery6}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
          </div>
          {/* third col  */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-5">
            <div className="">
              <img
                src={Gallery5}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={Gallery8}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
            <div className="">
              <img
                src={Gallery7}
                className="w-full h-full object-cover rounded-md"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
