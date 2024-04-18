import React from "react";
import { brandCard } from "./common/Helper";

const Brands = () => {
  return (
    <div className="md:px-[50px] px-7 mb-[100px]">
      <div className="max-w-[1340px] mx-auto rounded-[32px] p-1 bg-gradient-to-tr from-greenBlue to-bluePurple overflow-hidden shadow-[0px_0px_57px_0px_#0BB89D]">
        <div className=" bg-white rounded-[32px] py-[106px] xl:px-[100px] sm:px-10 px-5">
          <p className=" font-lulo font-bold lg:text-4xl md:text-3xl text-2xl text-black text-center mx-auto leading-[110%] mb-10">
            Brands That Trust Us
          </p>
          <div className="flex flex-wrap gap-y-6">
            {/* Mapping through brandCard array to render brand cards */}
            {brandCard.map((content, index) => {
              return (
                <div className=" md:w-4/12 sm:w-6/12 w-full px-3" key={index}>
                  <div className=" border border-pastalGray hover:shadow-xl transition-all ease-in-out duration-300 py-[50px] rounded-md flex items-center justify-center h-full">
                    <img
                      src={content.img}
                      alt="brand"
                      className={`${content.width}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
