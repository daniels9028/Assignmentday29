import React from "react";
import CardServices from "./CardServices";

const Services = (props) => {
  const { services } = props;

  return (
    <section
      className="my-20 max-w-[1444px] mx-auto lg:px-20 px-10"
      id="services"
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-3xl font-semibold">Our Services</h3>
        <hr className="border border-black w-[50px]" />
        <p className="text-center text-[#7D7987] text-lg">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
        <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 place-items-center">
          {services.map((service) => (
            <CardServices service={service} key={service.id} />
          ))}
        </div>
        <button className="mt-8 rounded-full bg-white text-[#458FF6] border border-[#458FF6] px-6 py-2 text-sm hover:bg-[#458FF6] hover:text-white transition-all duration-500">
          Learn more
        </button>
      </div>
    </section>
  );
};

export default Services;
