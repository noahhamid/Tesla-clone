import { useState } from "react";
import Model3_Data from "../cartypeData.jsx/model3_data";
import Nav from "../navbar";
import MobileNav from "../mobileNav";
import downSvg from "../images/carTypes/model3/downward.svg";
import upSvg from "../images/carTypes/model3/upward.svg";

const Model3 = () => {
  const [imgIndex, setImgIndex] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const toggleImg = () => {
    setIsFading(true);
    setTimeout(() => {
      setImgIndex(!imgIndex);
      setIsFading(false);
    }, 300); // duration of the fade
  };

  const currentImg = imgIndex ? 1 : 0;

  return (
    <section>
      <div className="absolute top-0 left-0 w-full  z-50 lg:hidden">
        <MobileNav />
      </div>
      <div className="absolute top-0 left-0 w-full z-50 hidden lg:block">
        <Nav />
      </div>
      <div className="relative bg-gray-900">
        <div className="w-full h-screen relative bg-gray-900">
          <img
            src={Model3_Data[currentImg].img}
            className={`w-full h-full object-cover  transition-opacity duration-500 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}
            alt="Model 3"
          />

          <div className="absolute top-[350px] text-center lg:top-[240px] lg:left-[210px] text-white font-[550] tracking-tighter">
            <h1
              className={`text-[54px] transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              Model 3
            </h1>
            <h1
              className={`text-[19px] -mt-2 transition-opacity duration-500 ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
            >
              {`${!imgIndex ? "Standard and Long Range" : "Performance"}`}
            </h1>
            <div className="flex flex-col mx-5 space-y-4 mt-8">
              <button className="w-[285px] rounded-[5px] text-[13px] capitalize tracking-normal h-[40px] bg-[#4f4fff]">
                order now
              </button>
              <button className="w-[285px] rounded-[5px] text-[13px] capitalize tracking-normal h-[40px] bg-[#1c1c1c]">
                learn more
              </button>
              <div
                className="fade-animation cursor-pointer"
                onClick={toggleImg}
              >
                <h1
                  className={`capitalize text-[13px] font-bold tracking-normal pt-5 transition-opacity duration-500 ${
                    isFading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="hover:bg-[#807f88] hover:bg-[rgba(128,128,128,0.5)] p-[5px] mr-3 rounded-[3px]">
                    <img
                      src={imgIndex ? upSvg : downSvg}
                      className="w-[18px] inline"
                      alt="Toggle"
                    />
                  </span>
                  {`${
                    !imgIndex ? "switch to performance" : "switch to Model 3"
                  }`}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model3;
