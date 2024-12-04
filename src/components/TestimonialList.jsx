import React from "react";

const TestimonialList = ({ testimonial }) => {
  return (
    <div className="flex justify-center items-center lg:flex-row flex-col lg:gap-20 gap-8 w-full lg:px-20 px-2">
      <div className="lg:w-1/2 w-full flex gap-8 items-center">
        <img
          src={testimonial.image}
          alt={testimonial.id}
          className="w-24 h-24 p-1 rounded-full object-contain object-center bg-white"
        />
        <div className="flex flex-col gap-1.5">
          <h5 className="font-bold text-white">{testimonial.name}</h5>
          <span className=" text-gray-100">{testimonial.position}</span>
        </div>
      </div>
      <p className="lg:w-1/2 w-full text-gray-100">{testimonial.testi}</p>
    </div>
  );
};

export default TestimonialList;
