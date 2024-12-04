import React from "react";

const CardServices = ({ service }) => {
  return (
    <div className="w-[250px] h-[250px] bg-white rounded-xl shadow-md p-6 space-y-4 overflow-hidden border">
      <img
        src={service.icon}
        alt={service.title}
        className="w-10 h-10 bg-contain"
      />
      <h4 className="font-semibold text-lg">{service.title}</h4>
      <p className="text-[#7D7987] text-sm">{service.description}</p>
    </div>
  );
};

export default CardServices;
