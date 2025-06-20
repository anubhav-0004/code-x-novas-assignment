import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const clickHandler = () => {
    setIsShow(true);
  };
  return (
    <div className="flex items-center justify-between text-white poppins max-md:border-b-2 max-md:pb-2 relative">
      <div className="w-full">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-around items-center w-full font-[600] text-2xl max-sm:hidden max-xl:font-[400] max-xl:gap-2 max-xl:text-xl max-lg:mx-2">
        <Link>Home</Link>
        <Link>Shop</Link>
        <Link>Delivery</Link>
        <Link>Contact</Link>
      </div>
      <div className="w-full flex justify-center max-md:justify-end items-center max-sm:hidden">
        <button className="border-white border-[2px] rounded-[5px] px-16 max-md:px-2 max-md:py-1 max-md:font-[400] max-md:text-sm max-md:tracking-tighter max-lg:tracking-tighter max-lg:px-2 max-lg:py-1.5 max-xl:px-4 max-xl:py-3 py-4 max-lg:font-[500] font-[700] text-center">
          Order <span className="md:hidden">Here</span>{" "}
          <span className=" max-md:hidden"> Your Ice-Cream</span>
        </button>
      </div>
      <button
        className="sm:hidden font-bold text-xl mr-2"
        onClick={clickHandler}
      >
        <i className="fas fa-ellipsis-vertical"></i>
      </button>
      {isShow && (
        <div className="absolute right-1 top-0.5 bg-[#ffffffd0] px-3 py-1 rounded-lg border-2 text-gray-600">
          <i
            className="fas fa-circle-xmark text-red-700 w-full text-end p-1 text-lg"
            onClick={() => setIsShow(false)}
          ></i>

          <div className="flex flex-col justify-center items-start w-full font-[400] text-xl ">
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>Delivery</Link>
            <Link>Contact</Link>
          </div>
          <div className="w-full flex justify-center items-center my-3">
            <button className="border-black border-[1px] rounded-[5px] px-6 py-0.5 tracking-tighter max-lg:font-[500] font-[700] text-center">
              Order Here
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
