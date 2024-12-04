import React from "react";
import TestimonialList from "./TestimonialList";

const Testimonials = (props) => {
  const { testimonials } = props;
  return (
    <section className="max-w-[1444px] mx-auto lg:px-20 px-10 my-20">
      <div className="bg-gradient-to-r from-[#67C3F3] to-[#5A98F2] rounded-xl p-10 flex flex-col justify-center items-center">
        <h3 className="text-white font-semibold text-2xl text-center">
          What our customer are saying
        </h3>
        <hr className="border border-white w-[50px] mt-4" />

        <div className="grid grid-cols-1 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialList key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
