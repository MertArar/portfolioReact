import React from "react";
import { bannerImg } from "../../assets";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="hidden lg:flex flex-1 max-w-[320px] lgl:min-w-[482px] mx-auto z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="hidden lg:flex flex-1 max-w-[320px] lgl:min-w-[482px] mx-auto absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
