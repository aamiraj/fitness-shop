import { FaCheckCircle, FaHeadphonesAlt } from "react-icons/fa";
import { FaCarSide, FaWallet } from "react-icons/fa6";

const OurServices = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Save Money",
    description: "30 Days Money Back",
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Support 24/7",
    description: "Online Support All Anytime",
  },
];

const Services = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
          {OurServices.map((service) => (
            <div key={service.id} className="flex flex-col items-start gap-4 sm:flex-row">
              <span>{service.icon}</span>
              <div>
                <p className="lg:text-xl font-bold">{service.title}</p>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
