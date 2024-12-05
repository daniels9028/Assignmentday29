import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ArticleCard = (props) => {
  const { image, description, title } = props;

  return (
    <div className="w-[200px] h-[350px] overflow-hidden rounded-2xl bg-white border shadow-lg">
      <img src={image} alt="" className="object-cover w-full h-[150px]" />
      <div className="px-4 py-2 flex flex-col justify-between gap-2 h-[200px]">
        <div className="space-y-2">
          <h3 className="text-[14px] font-bold">{title}</h3>
          <p className="text-[#7D7987] text-[12px] font-semibold">
            {description}
          </p>
        </div>
        <span className="text-[12px] mb-4 text-[#4089ED] font-semibold cursor-pointer flex flex-row items-center gap-2">
          Read More
          <IoIosArrowRoundForward size={18} />
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
