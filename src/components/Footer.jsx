import React from "react";
import linkedIn from "../assets/images/footer/linked-in.png";
import goggle from "../assets/images/footer/goggle.png";
import microsoft from "../assets/images/footer/microsoft.png";
import aws from "../assets/images/footer/aws.png";
const Footer = () => {
  return (
    <div className=" relative overflow-x-hidden">
      <div className=" bg-greenish w-[220px] h-[220px] rounded-full blur-3xl pointer-events-none lg:block hidden end-[-8%] top-[15%] absolute"></div>
      <div className="max-w-[1140px] mx-auto xl:px-0 px-3 relative z-10">
        <div className=" flex flex-wrap justify-between gap-y-5 mb-[60px]">
          <div className="xl:w-5/12 lg:w-6/12 w-full xl:px-0 lg:px-2">
            {" "}
            <p className=" font-lulo font-bold lg:text-4xl md:text-3xl max-w-[320px] text-2xl text-white leading-[130%] mb-[32px]">
              Stay in the Know
            </p>
            <p className=" md:text-2xl text-xl text-white font-proxima font-semibold mb-4">
              Join the waiting list
            </p>
            <div className=" border border-[#3D3D3D] rounded flex max-w-[447px]">
              <input
                type="email"
                required
                className=" bg-transparent w-full placeholder:font-proxima placeholder:font-normal placeholder:text-base text-[#B2B2B2] p-4"
                placeholder="Enter your business email"
              />
              <button className=" bg-greenish py-4 px-[29px] rounded text-base text-nowrap text-white border border-greenish hover:bg-transparent hover:text-greenish transition-all ease-in-out duration-300">
                Sign Up
              </button>
            </div>
          </div>
          <div className="xl:w-5/12 lg:w-6/12 w-full xl:px-0 lg:px-2">
            <p className=" md:text-2xl text-xl text-white font-proxima font-semibold mb-4">
              Follow Us
            </p>

            <a href="www.linkedIn.com" target="blank">
              <img
                src={linkedIn}
                alt="linkedIn"
                className=" max-w-20 transition-all ease-in-out duration-300 hover:scale-110"
              />
            </a>
            <p className=" md:text-2xl text-xl text-white font-proxima font-semibold mb-4 mt-[32px]">
              Backed by
            </p>
            <div className=" flex gap-4 sm:flex-row flex-col">
              <img
                src={goggle}
                alt="goggle"
                className=" max-w-[100px] hover:scale-95  transition-all ease-in-out duration-300"
              />
              <img
                src={microsoft}
                alt="microsoft"
                className=" max-w-[130px] hover:scale-95  transition-all ease-in-out duration-300"
              />
              <img
                src={aws}
                alt="microsoft"
                className=" max-w-[183px] hover:scale-95  transition-all ease-in-out duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[1px] w-full bg-[#3D3D3D]"></div>
      <p className=" py-4 text-[#B2B2B2] font-proxima font-normal md:text-lg text-base text-center">
        © All Rights Reserved {new Date().getFullYear()} | Mintel AI
      </p>
    </div>
  );
};

export default Footer;
