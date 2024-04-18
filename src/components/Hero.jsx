import React from "react";
import logo from "../assets/images/hero/logo.png";
import gif from "../assets/gif/hero.gif";

const Hero = () => {
  return (
    <div className=" relative overflow-x-hidden">
      {/* Background circles */}
      <div className=" bg-greenish w-[220px] h-[220px] rounded-full blur-3xl pointer-events-none lg:block hidden end-[-8%] top-[25%] absolute"></div>
      <div className=" bg-greenish w-[220px] h-[220px] rounded-full blur-3xl pointer-events-none lg:block hidden start-[-8%] top-[65%] absolute"></div>

      {/* Hero content */}
      <div className="max-w-[1140px] mx-auto xl:px-0 px-3 pt-[31px] text-white">
        {/* Logo */}
        <div className=" flex justify-start items-start">
          <a href="#">
            {" "}
            <img
              src={logo}
              alt="logo"
              className=" sm:max-w-[200px] max-w-[150px] w-full h-full max-h-[36px] mb-[93px]"
            />
          </a>
        </div>

        {/* Headline */}
        <p className=" font-lulo font-bold lg:text-6xl md:text-5xl text-4xl text-white leading-[110%] text-center">
          Stop searching start closing
        </p>

        {/* Subheadline */}
        <p className=" font-proxima font-bold lg:text-2xl text-xl text-center  my-[32px]">
          Helping salespeople connect to their key decision makers,
          automatically.
        </p>

        {/* Call to action button */}
        <div className=" flex flex-col justify-center items-center">
          <button className=" bg-greenish py-4 px-[29px] rounded-lg text-base border border-greenish hover:bg-transparent hover:text-greenish transition-all ease-in-out duration-300">
            Early Access
          </button>

          {/* GIF illustration */}
          <div className=" overflow-hidden h-[600px] relative pointer-events-none bg-[#00FFD7]">
            <img
              src={gif}
              alt="gif"
              className=" h-[1200px] mix-blend-luminosity"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
