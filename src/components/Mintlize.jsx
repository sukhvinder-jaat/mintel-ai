import React from "react";
import { Clock, SaveHand } from "./common/Icon";
import { mintlizeCard } from "./common/Helper";

const Mintlize = () => {
  return (
    <div className=" relative overflow-x-hidden">
      {/* Background circles */}
      <div className=" bg-greenish w-[220px] h-[220px] rounded-full blur-3xl pointer-events-none lg:block hidden end-[-8%] top-[25%] absolute"></div>

      {/* Main content */}
      <div className="max-w-[1140px] mx-auto xl:px-0 px-3 md:mb-[142px] mb-20">
        {/* Title */}
        <p className=" font-lulo font-bold lg:text-4xl md:text-3xl text-2xl text-white text-center mx-auto leading-[110%] mb-[60px] uppercase">
          Mintelize It
        </p>

        {/* Mintlize cards */}
        <div className=" flex flex-wrap gap-y-6">
          {/* First card: Save Time on Prospecting */}
          <div className=" px-3 lg:w-3/12 md:w-4/12 sm:w-6/12 w-full">
            <div className=" py-8 px-5 border-lightGreenish border shadow-[0px_0px_23px_0px_#0BB89D1F] bg-lightBlack rounded-md hover:shadow-[0px_0px_18.5px_0px_#0BB89D4D] hover:bg-burnhamDark hover:border-greenish transition-all ease-in-out duration-300 group h-full flex flex-col items-center relative">
              <span className=" mb-6">
                {" "}
                <SaveHand />
              </span>
              <p className=" text-xxl text-white text-center font-proxima font-bold leading-[110%] mb-4">
                Save Time on Prospecting
              </p>
              {/* Information about time saved */}
              <div className=" border border-[#525252] rounded-xl px-[32px] py-3 flex items-center justify-center gap-5">
                <Clock />
                <p className=" text-3xl text-white font-semibold">100</p>
              </div>
              {/* Green bar on hover */}
              <div className="group-hover:bg-greenish h-[6px] w-full rounded-b-md absolute bottom-0 transition-all ease-in-out duration-300"></div>
            </div>
          </div>

          {/* Mapping through mintlizeCard array to render Mintlize cards */}
          {mintlizeCard.map((content, index) => {
            return (
              <div
                className=" px-3 lg:w-3/12 md:w-4/12 sm:w-6/12 w-full"
                key={index}
              >
                <div className=" py-8 px-4 border-lightGreenish border shadow-[0px_0px_23px_0px_#0BB89D1F] bg-lightBlack rounded-md hover:shadow-[0px_0px_18.5px_0px_#0BB89D4D] hover:bg-burnhamDark hover:border-greenish  transition-all ease-in-out duration-300 group h-full flex flex-col items-center relative">
                  <span className=" mb-6">{content.icon}</span>
                  {/* Card heading */}
                  <p className=" lg:text-xxl text-xl text-white text-center font-proxima font-bold leading-[110%] mb-4">
                    {content.heading}
                  </p>
                  {/* Card description */}
                  <p className="text-[#C3C3C3] font-proxima font-normal lg:text-2xl text-xl text-center">
                    {content.para}
                    <span className=" text-white">{content.whitePara}</span>
                  </p>
                  {/* Green bar on hover */}
                  <div className="group-hover:bg-greenish h-[6px] w-full rounded-b-md absolute bottom-0 transition-all ease-in-out duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mintlize;
