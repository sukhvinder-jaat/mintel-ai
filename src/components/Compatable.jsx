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
        <div className=" flex flex-wrap gap-y-4 items-center justify-center">
          {/* First compatibility */}
          <div
            className="md:w-4/12 w-6/12 flex lg:justify-start justify-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <a
              href="https://www.linkedin.com/"
              target="blank"
              className="flex items-center  gap-1"
            >
              <LinkedIn />
              <p className=" font-proxima font-bold md:text-3xl text-2xl text-white">
                Recruiter
              </p>
            </a>
          </div>
          {/* Second compatibility */}
          <div
            className="md:w-4/12 w-6/12 flex lg:justify-start justify-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {" "}
            <a
              href="https://www.linkedin.com/"
              target="blank"
              className="flex items-center  gap-1"
            >
              <p className=" font-proxima font-bold md:text-3xl text-2xl text-white">
                Linked
              </p>
              <LinkedIn />
            </a>
          </div>{" "}
          {/* Third compatibility */}
          <div
            className="md:w-4/12 w-6/12 flex lg:justify-start justify-center"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <a
              href="https://www.linkedin.com/"
              target="blank"
              className="flex items-center  gap-1"
            >
              <LinkedIn />
              <p className=" font-proxima font-bold md:text-3xl text-2xl text-white text-nowrap">
                Sales Navigator
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compatable;
