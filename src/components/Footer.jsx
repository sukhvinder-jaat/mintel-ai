import React, { useState } from "react";
import linkedIn from "../assets/images/footer/linked-in.png";
import goggle from "../assets/images/footer/goggle.png";
import microsoft from "../assets/images/footer/microsoft.png";
import aws from "../assets/images/footer/aws.png";

const Footer = () => {
  // State for email input and validation
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  // Function to handle email input change
  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true); // Reset validation status on input change
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Regex pattern for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setIsValid(false);
      return;
    }

    setIsValid(true);
    setEmail("");
  };

  return (
    <div className=" relative overflow-x-hidden">
      {/* Background circle */}
      <div className=" bg-greenish w-[220px] h-[220px] rounded-full blur-3xl pointer-events-none lg:block hidden end-[-8%] top-[15%] absolute"></div>
      <div className="max-w-[1140px] mx-auto xl:px-0 px-3 relative z-10">
        <div className=" flex flex-wrap justify-between gap-y-5 mb-[60px]">
          {/* Stay in the Know section */}
          <div className="xl:w-5/12 lg:w-6/12 w-full xl:px-0 lg:px-2">
            <p className=" font-lulo font-bold lg:text-4xl md:text-3xl max-w-[320px] text-2xl text-white leading-[130%] mb-[32px]">
              Stay in the Know
            </p>
            <p className=" md:text-2xl text-xl text-white font-proxima font-semibold mb-4">
              Join the waiting list
            </p>
            {/* Email signup form */}
            <form
              onSubmit={handleSubmit}
              className="w-full border border-[#3D3D3D] rounded flex max-w-[447px]"
            >
              <input
                type="email"
                value={email}
                onChange={handleChange}
                className={`bg-transparent w-full placeholder:font-proxima placeholder:font-normal placeholder:text-base focus-visible:outline-none text-[#B2B2B2] p-4 ${
                  !isValid && "placeholder:text-red-500 text-red-500"
                }`}
                placeholder="Enter your business email"
              />
              <button
                type="submit"
                className="bg-greenish py-4 px-[29px] rounded text-base text-nowrap text-white border border-greenish hover:bg-transparent hover:text-greenish transition-all ease-in-out duration-300"
              >
                Sign Up
              </button>
            </form>
          </div>
          {/* Follow Us and Backed by section */}
          <div className="xl:w-5/12 lg:w-6/12 w-full xl:px-0 lg:px-2">
            <p className=" md:text-2xl text-xl text-white font-proxima font-semibold mb-4">
              Follow Us
            </p>
            {/* Social media icons */}
            <div className=" flex items-start justify-start">
              {" "}
              <a href="https://www.linkedin.com/" target="blank">
                <img
                  src={linkedIn}
                  alt="linkedIn"
                  className=" max-w-20 transition-all ease-in-out duration-300 hover:scale-110"
                />
              </a>
            </div>
            <p className=" md:text-2xl text-xl text-white font-proxima font-semibold mb-4 mt-[32px]">
              Backed by
            </p>
            {/* Logos of supported companies */}
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
      {/* Horizontal line */}
      <div className=" h-[1px] w-full bg-[#3D3D3D]"></div>
      {/* Footer text */}
      <p className=" py-4 text-[#B2B2B2] font-proxima font-normal md:text-lg text-base text-center">
        © All Rights Reserved {new Date().getFullYear()} | Mintel AI
      </p>
    </div>
  );
};

export default Footer;
