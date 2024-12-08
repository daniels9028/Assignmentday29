import React from "react";

const Banner = ({ banner }) => {
  return (
    <section className="my-24 max-w-[1444px] mx-auto lg:px-20 px-10" id="home">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 place-items-center">
        <div className="order-last space-y-6 lg:order-first">
          <h3 className="text-4xl font-semibold">Virtual Healthcare For You</h3>
          <p className="text-[#7D7987]">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </p>
          <button className="bg-[#458FF6] text-white py-3 px-6 rounded-full font-medium hover:bg-white hover:text-[#458FF6] transition-all duration-500 border hover:border-[#458FF6]">
            Consult Today
          </button>
        </div>
        <img
          src={banner}
          className="order-first object-cover lg:order-last"
          alt="banner"
        />
      </div>
    </section>
  );
};

export default Banner;
