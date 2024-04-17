import React from "react";
import pipeDrive from "../assets/images/one-click/pipe.png";
import { oneClickSponser } from "./common/Helper";
const OneClick = () => {
  return (
    <div className="max-w-[1140px] mx-auto xl:px-0 px-3 mb-[100px]">
      <p className=" font-lulo font-bold lg:text-4xl md:text-3xl text-2xl text-white text-center mx-auto leading-[120%] mb-[60px] uppercase max-w-[705px]">
        One-click install on any crm & sep
      </p>
      <div className=" flex flex-wrap gap-y-6 mb-[44px]">
        {oneClickSponser.map((content, index) => {
          return (
            <div className=" lg:w-2/12 md:w-3/12 sm:w-4/12 w-6/12 px-3">
              <div className="border-lightGreenish border shadow-[0px_0px_30px_0px_#0BB89D4D] bg-lightBlack rounded-full hover:shadow-[0px_0px_18.5px_0px_#0BB89D4D] hover:bg-burnhamDark hover:border-greenish transition-all ease-in-out duration-300 group h-full flex items-center  py-[22px] px-[18px] gap-3 justify-center">
                <img
                  src={content.img}
                  alt="pipeDrive"
                  className=" max-h-[36px] max-w-[36px] rounded-md object-cover"
                />
                <p className=" text-white font-proxima font-bold md:text-xl text-base">
                  {content.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className=" text-white font-proxima font-bold md:text-2xl text-xl text-center">
        +25 other GTM systems
      </p>
    </div>
  );
};

export default OneClick;
