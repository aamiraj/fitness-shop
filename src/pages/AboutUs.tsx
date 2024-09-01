const AboutUs = () => {
  return (
    <div className="p-4 md:p-8">
      <div className="container">
        <h1 className="py-4 text-center text-primary font-semibold tracking-widest uppercase text-2xl sm:text-4xl">
          Fitness Shop
        </h1>
        {/* overview section  */}
        <div className="px-2 py-8 md:px-8 shadow-lg">
          <p className="text-center font-bold text-xl sm:text-2xl py-4">
            Overview
          </p>
          <p className="text-center italic">
            "Empowering Fitness Enthusiasts Fitness Shop, an Ecommerce venture,
            is dedicated to enhancing fitness journeys in Bangladesh. We offer
            to provide Ecommerce platform specializing in fitness equipments. We
            have a diverse selection of fitness accessories, which includes
            Dumbbells for strength training and muscle development, Spinning
            Bikes being ideal for high-intensity cardio workouts, Treadmills for
            versatile machines for walking, jogging, or running indoors, Benches
            being essential for weightlifting and bodyweight exercises etc. Our
            company can boast an experienced leadership team comprising 2
            founding members. We have a dedicated team of 10 individuals who
            contribute to its success. Fitness Shop&apos;s commitment to
            quality, customer satisfaction, and fitness excellence positions it
            as a trusted destination for fitness enthusiasts. Whether
            you&apos;re a beginner or a seasoned athlete, Fitness Shop aims to
            equip you with the tools you need to achieve your health and
            wellness goals. Please note that while Fitness Shop has received
            positive feedback from some users, there have also been concerns
            raised by others. As with any online service, it&apos;s essential to
            exercise caution and conduct due diligence. If you&apos;re
            considering engaging with Fitness Shop, we recommend researching
            further and reading additional reviews to make an informed
            decision."
          </p>
        </div>
        {/* our team section  */}
        <div>
          <p className="text-center font-bold text-xl sm:text-2xl py-4">
            Our Team
          </p>
          {/* first founding member  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {/* picture of founder 1 */}
            <div>
              <img src="" alt="" />
            </div>
            {/* roles and bios section   */}
            <div>
              <p>Founding member 1</p>
            </div>
          </div>
          {/* second founding member  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
            {/* roles and bios section   */}
            <div>
              <p>Founding member 2</p>
            </div>
            {/* picture of founder 2 */}
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        {/* testimonials section  */}
        <div>
          <p className="text-center font-bold text-xl sm:text-2xl py-4">
            Testimonials
          </p>
          {/* carousel of testimonials */}
          <div>Testimonials Carousels</div>
        </div>
        {/* contact info section  */}
        <div>
          <p className="text-center font-bold text-xl sm:text-2xl py-4">
            Contact
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <div>
                <p>Form for sending questions or feedbacks</p>
            </div>
            <div>
                <address>Physical address </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
