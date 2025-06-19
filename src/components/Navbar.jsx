import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between text-white poppins max-md:border-b-2 max-md:pb-2">
      <div className="w-full">
        <img src={logo} alt="logo" />
      </div>
      <div className="flex justify-around items-center w-full font-[600] text-2xl max-md:hidden">
        <Link>Home</Link>
        <Link>Shop</Link>
        <Link>Delivery</Link>
        <Link>Contact</Link>
      </div>
      <div className="w-full flex justify-center max-md:justify-end items-center">
        <button className="border-white border-[2px] rounded-[5px] px-16 max-md:px-2 max-md:py-1 max-md:font-[400] max-md:text-sm max-md:tracking-tighter py-4 font-[700] text-center">
          Order <span className="md:hidden">Here</span> <span className=" max-md:hidden"> Your Ice-Cream</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
