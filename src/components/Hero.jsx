import React from "react";
import logo from "../assets/images/hero/logo.png";
import gif from "../assets/gif/hero.gif";
const Hero = () => {
  return (
    <div className="max-w-[1140px] mx-auto xl:px-0 px-3 pt-[31px] text-white">
      <img
        src={logo}
        alt="logo"
        className=" sm:max-w-[200px] max-w-[150px] w-full h-full max-h-[36px] mb-[93px]"
      />
      <p className=" font-lulo font-bold lg:text-6xl md:text-5xl text-4xl text-white leading-[110%] text-center">
        Stop searching start closing
      </p>
      <p className=" font-proxima font-bold lg:text-2xl text-xl text-center  my-[32px]">
        Helping salespeople connect to their key decision makers, automatically.
      </p>
      <div className=" flex flex-col justify-center items-center">
        <button className=" bg-greenish py-4 px-[29px] rounded-lg text-base border border-greenish hover:bg-transparent hover:text-greenish transition-all ease-in-out duration-300">
          Early Access
        </button>
        <div className=" overflow-hidden h-[600px] relative pointer-events-none">
          <img src={gif} alt="gif" className=" h-[1200px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
