import React from "react";
import { YouKnowCard } from "./common/Helper";

const YouKnow = () => {
  return (
    <div className=" relative overflow-x-hidden">
      {/* Background circle */}
      <div className=" bg-greenish w-[220px] h-[220px] rounded-full blur-3xl end-[-8%] bottom-[25%] absolute"></div>

      {/* Main content */}
      <div className=" text-white max-w-[1140px] mx-auto xl:px-0 px-3">
        {/* Main title */}
        <p className=" font-lulo font-bold lg:text-4xl md:text-3xl text-2xl mb-[14px] text-center">
          Did you know?
        </p>

        {/* Subtitle */}
        <p className=" font-proxima font-bold md:text-2xl text-xl mb-[88px] text-center">
          Salespeople suffer, instead of selling
        </p>

        {/* YouKnow cards */}
        <div className="flex flex-wrap md:mb-[148px] mb-20 gap-y-6 justify-center">
          {/* Mapping through YouKnowCard array to render cards */}
          {YouKnowCard.map((content, index) => {
            return (
              <div
                className="sm:px-3 lg:w-4/12 sm:w-6/12 w-full"
                data-aos="fade-up"
                data-aos-duration="1000"
                key={index}
              >
                {/* Individual card */}
                <div className="p-[32px] border rounded-xl border-burnham shadow-[0px_0px_23px_0px_#0BB89D1F] bg-lightBlack flex flex-col justify-center items-center hover:shadow-[0px_0px_18.5px_0px_#0BB89D4D] hover:bg-almost hover:sm:scale-105 hover:scale-90 transition-all ease-in-out duration-300 group h-full">
                  {/* Icon */}
                  <span className=" mb-6">{content.icon}</span>
                  {/* Description */}
                  <p className=" font-proxima font-semibold lg:text-2xl text-xl text-center max-w-[271px]">
                    {content.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default YouKnow;
