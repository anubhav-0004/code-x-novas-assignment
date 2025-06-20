import React from "react";
import Navbar from "../components/Navbar";
import icecream4 from "../assets/Frame 4.png";
import Options from "../components/Options";

const EverGreen = () => {
  return (
    <div className="bg-gradient-to-br from-[#2A9949] to-[#47F66E] pt-12 max-md:pt-6 max-md:px-[18px] max-xl:px-[60px] max-lg:px-[40px] px-[126px] w-full flex flex-col">
      <Navbar />
      <div className="flex text-white poppins mt-5 max-md:mt-0 max-md:flex-col">
        <div className="flex flex-col flex-3/4 text-start max-md:w-[95%] max-md:mx-auto">
          <h1 className="font-[400] text-[175px] pacifico w-fit text-center max-md:font-[300] max-md:text-[80px] max-xl:text-[160px] max-lg:text-[130px]">
            icecream
          </h1>
          <h4 className="font-[800] text-[66px] w-fit -mt-[3rem] max-md:text-[32px] max-md:font-[600] max-md:-mt-4 max-xl:text-[55px] max-lg:text-[45px]">
            EverGreen cone
          </h4>
          <p className="font-[500] text-[19px] w-[88%] max-md:font-[300] max-md:w-[100%] max-md:leading-6 max-md:text-[16px] max-lg:font-[400] max-lg:text-[17px]">
            Embark on a culinary journey of Delight as You Immerse Yourself in
            Our Artisan-Crafted Ice Cream Collection—Each Flavor a Story, Each
            Scoop an Unforgettable Chapter in Your Sweet Odyssey! <br />
            Indulge in a World of Imagination, Where Every Scoop Unveils a New
            Taste Adventure! Choose your favorite
          </p>
          <div className="h-[35vh] flex items-baseline justify-end overflow-hidden mt-5 md:hidden">
            <img
              src={icecream4}
              alt="ice-cream"
              className="h-[40vh] mx-auto rotate-12"
            />
          </div>
          <Options />
        </div>
        <div className="h-[88vh] flex items-baseline justify-end overflow-hidden w-[590px] mt-5 max-md:hidden">
          <img src={icecream4} alt="ice-cream" className="flex-1/4 h-[100vh]" />
        </div>
      </div>
    </div>
  );
};

export default EverGreen;
