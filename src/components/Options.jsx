import React from "react";
import pic1 from "../assets/Frame 1.png";
import pic2 from "../assets/Frame 2.png";
import pic3 from "../assets/Frame 3.png";
import pic4 from "../assets/Frame 4.png";
import { Link } from "react-router-dom";

const Options = () => {
  return (
    <div className="flex my-20 w-[80%] mr-auto justify-between z-0 max-md:w-[100%]">
      <Link to="/strawberry" className="h-[10vh] flex items-baseline justify-end overflow-hidden w-[80px] relative scale-150 max-md:scale-110">
        <img
          src={pic2}
          alt="ice-cream2"
          className=" h-[20vh] scale-80 absolute -top-[1.2rem] z-20"
        />
        <span className="w-[42%] h-[40%] rounded-lg border absolute border-t-0 z-10 bottom-1 left-[28px] max-md:left-[24px] scale-[140%]"></span>
      </Link>

      <Link to="/blueberry" className="h-[10vh] flex items-baseline justify-end overflow-hidden w-[80px] relative scale-150 max-md:scale-110">
        <img
          src={pic1}
          alt="ice-cream1"
          className=" h-[20vh] scale-80 absolute -top-[1.2rem] z-20"
        />
        <span className="w-[42%] h-[40%] rounded-lg border absolute border-t-0 z-10 bottom-1 left-[28px] max-md:left-[24px] scale-[140%]"></span>
      </Link>

      <Link to="/chocolate" className="h-[10vh] flex items-baseline justify-end overflow-hidden w-[80px] relative scale-150 max-md:scale-110">
        <img
          src={pic3}
          alt="ice-cream3"
          className=" h-[20vh] scale-80 absolute -top-[1.2rem] z-20"
        />
        <span className="w-[42%] h-[40%] rounded-lg border absolute border-t-0 z-10 bottom-1 left-[28px] max-md:left-[24px] scale-[140%]"></span>
      </Link>

      <Link to="/evergreen" className="h-[10vh] flex items-baseline justify-end overflow-hidden w-[80px] relative scale-150 max-md:scale-110">
        <img
          src={pic4}
          alt="ice-cream4"
          className=" h-[20vh] scale-80 absolute -top-[1.2rem] z-20"
        />
        <span className="w-[42%] h-[40%] rounded-lg border absolute border-t-0 z-10 bottom-1 left-[28px] max-md:left-[24px] scale-[140%]"></span>
      </Link>
    </div>
  );
};

export default Options;
