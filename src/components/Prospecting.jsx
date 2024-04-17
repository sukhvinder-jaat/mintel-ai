import React from "react";
import { autoCard } from "./common/Helper";
import { AutoArrow } from "./common/Icon";

const Prospecting = () => {
  return (
    <div className="md:px-[50px] px-7 md:mb-[146px] mb-20">
      <div className="max-w-[1340px] mx-auto rounded-[32px] p-1 bg-gradient-to-tr from-[#15AEA6] to-[#7D4EFF] overflow-hidden shadow-[0px_0px_57px_0px_#0BB89D]">
        <div className=" bg-white rounded-[32px] py-20 xl:px-[100px] sm:px-10 px-5">
          <p className=" font-lulo font-bold lg:text-4xl md:text-3xl text-2xl text-black max-w-[485px] text-center mx-auto leading-[110%] mb-[14px]">
            Prospecting on auto-pilot
          </p>
          <p className=" font-proxima font-bold md:text-2xl text-xl text-black text-center mb-[60px]">
            Find buyers while you sleep
          </p>
          <div className=" flex flex-wrap gap-y-10 justify-between relative">
            <span className=" absolute lg:top-[20%] top-[15%] lg:start-[30%] start-[50%] lg:block hidden">
              <AutoArrow />
            </span>
            <span className=" absolute top-[20%] end-[30%] lg:block hidden">
              <AutoArrow />
            </span>
            {autoCard.map((content, index) => {
              return (
                <div
                  className=" lg:w-4/12 md:w-6/12 w-full flex flex-col items-center text-center lg:max-w-[293px] xl:px-0 px-3"
                  key={index}
                >
                  <span className="min-h-[135px] flex items-center">
                    {content.icon}
                  </span>
                  <p className=" mt-[38px] font-proxima font-semibold lg:text-2xl text-xl text-black">
                    {content.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prospecting;
