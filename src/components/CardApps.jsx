import React from "react";

const CardApps = (props) => {
  const { title, description, image, id } = props.app;

  return (
    <div
      className={`flex justify-center items-center gap-12 ${
        id % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col`}
    >
      <img src={image} alt="" />
      <div className="space-y-8">
        <h3 className="font-bold text-2xl">{title}</h3>
        <hr className="border border-black w-[50px]" />
        <p className="text-[#7D7987] text-lg">{description}</p>
        <button className="mt-8 rounded-full bg-white text-[#458FF6] border border-[#458FF6] px-8 py-2 text-sm hover:bg-[#458FF6] hover:text-white transition-all duration-500">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default CardApps;
