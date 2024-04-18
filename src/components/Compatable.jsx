import React from "react";
import { LinkedIn } from "./common/Icon";

const Compatable = () => {
  return (
    <div className=" relative overflow-x-">
      {/* Background circle */}
      <div className=" bg-greenish w-[220px] h-[220px] rounded-full blur-3xl pointer-events-none lg:block hidden start-[-8%] top-[25%] absolute"></div>
      <div className="xl:max-w-[855px] mx-auto md:mb-[150px] mb-20 xl:px-0 px-3 relative z-10">
        <p className=" font-lulo font-bold lg:text-4xl md:text-3xl text-2xl text-white text-center mx-auto leading-[110%] md:mb-[60px] mb-10">
          COMPATIBLE WITH
        </p>
        <div className=" flex flex-wrap items-center">
          {/* First compatibility */}
          <div className="lg:w-4/12 sm:w-6/12 w-full flex items-center gap-1">
            <LinkedIn />
            <p className=" font-proxima font-bold text-3xl text-white">
              Recruiter
            </p>
          </div>
          {/* Second compatibility */}
          <div className=" lg:w-4/12 sm:w-6/12 w-full flex items-center gap-1">
            <p className=" font-proxima font-bold text-3xl text-white">
              Linked
            </p>
            <LinkedIn />
          </div>{" "}
          {/* Third compatibility */}
          <div className=" lg:w-4/12 sm:w-6/12 w-full flex items-center gap-1">
            <LinkedIn />
            <p className=" font-proxima font-bold text-3xl text-white text-nowrap">
              Sales Navigator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compatable;
