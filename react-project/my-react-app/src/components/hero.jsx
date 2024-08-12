import Data from "./data/data";
import cyberLogo from "./images/svg/cybertruck.svg";
import Nav from "./navbar";
import MobileNav from "./mobileNav";
import "../index.css";
import { Link } from "react-router-dom";

const HeroButtonGroup = ({ index }) => {
  const commonClasses =
    "capitalize tracking-wide  text-sm font-semibold rounded-md transition-all duration-300 lg:w-[264px] h-[40px] w-[132px]";
  if (index === 8) {
    return (
      <button className={`${commonClasses} text-white bg-[#393cff]`}>
        shop now
      </button>
    );
  } else if (index === 4) {
    return (
      <>
        <button
          className={`${commonClasses} text-customDarkGray rounded-none  bg-customLightBlack border-t-2 border-gray-400 hover:bg-customCyber`}
        >
          ORDER NOW
        </button>
        <button
          className={`${commonClasses} text-customDarkGray rounded-none  bg-customLightBlack border border-gray-700 hover:bg-customCyber`}
        >
          LEARN MORE
        </button>
      </>
    );
  } else if (index > 4) {
    return (
      <>
        <button className={`${commonClasses} text-white bg-[#393cff]`}>
          order now
        </button>
        <button className={`${commonClasses} text-[#1c1a1a] bg-[#fff]`}>
          learn more
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className={`${commonClasses} text-white bg-[#393cff]`}>
          order now
        </button>

        <button className={`${commonClasses}  text-[#1c1a1a] bg-[#fff]`}>
          demo drive
        </button>
      </>
    );
  }
};

const HeroItem = ({ item, index }) => {
  const setImage =
    index === 4 ? (
      <div className="absolute left-1/2 transform -translate-x-1/2 xl:top-[-70px] lg:top-[-50px] top-[0px] w-[400px] md:w-[500px] lg:w-[600px]">
        <img src={cyberLogo} alt="Cybertruck" />
      </div>
    ) : null;

  return (
    <div key={index} className="w-full h-full relative">
      {setImage}
      <img
        src={item.img}
        alt={item.type || "image"}
        className="w-full h-full object-cover hidden md:block"
        style={{ objectPosition: "center" }}
      />
      <img
        src={item.mobileImg}
        alt={item.type || "image"}
        className="w-full h-full object-cover lg:hidden"
        style={{ objectPosition: "center" }}
      />
      <div
        className={`absolute left-1/2 lg:tracking-wide font-universal text-white transform -translate-x-1/2 -translate-y-1/2 text-center capitalize font-semibold lg:top-[170px] top-[150px] `}
      >
        <h1 className={`text-[40px] `}>{item.type}</h1>
        <h3 className={`text-[24px] -mt-1`}>{item.pricing}</h3>
        <h3
          className={`lg:text-[20px] w-[270px] lg:w-full underline underline-offset-[3px] `}
        >
          {item.info}
        </h3>
      </div>
      <div className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:space-x-6 flex space-x-3">
        <HeroButtonGroup index={index} />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-auto relative">
      <div className="absolute top-0 left-0 w-full  z-50 lg:hidden">
        <MobileNav />
      </div>
      <div className="absolute top-0 left-0 w-full z-50 hidden lg:block">
        <Nav />
      </div>
      {Data.map((item, index) => (
        <HeroItem key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default Hero;
