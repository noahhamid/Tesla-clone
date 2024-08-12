import { Link } from "react-router-dom";

import teslalogo from "./images/carTypes/teslaLogo.svg";
import blacklogo from "./images/svg/blacktesla.svg";

import worldWide from "./images/svg/worldWide.svg";
import blackworld from "./images/svg/blackworld.svg";

import userIcon from "./images/svg/userIcon.svg";
import blackuser from "./images/svg/blackuser.svg";

import questionMark from "./images/svg/questionMark.svg";
import blackmark from "./images/svg/blackmark.svg";

import Energy from "./dropDowns/energy.jsx";
import DropDown from "./dropDowns/vehicle.jsx";
import Charging from "./dropDowns/charging.jsx";
import Discover from "./dropDowns/discover.jsx";
import Shop from "./dropDowns/shop.jsx";
import { useState } from "react";

const Nav = () => {
  const [openVehicles, setOpenVehicles] = useState(false);
  const [openEnergy, setOpenEnergy] = useState(false);
  const [openCharging, setOpenCharging] = useState(false);
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openShop, setOpenShop] = useState(false);

  const anyDropdownOpen =
    openVehicles || openEnergy || openCharging || openDiscover || openShop;

  const handleMouseEnter = (setOpen) => setOpen(true);
  const handleMouseLeave = (setOpen) => setOpen(false);

  const navStyle = "cursor-pointer py-[7px] px-[16px] text-[13px] ";
  const activeNavStyle = "bg-[#f6f5f5] rounded-[4px]";

  return (
    <div className="relative">
      <div
        className={`flex justify-between ml-12 mr-8 mt-3 font-semibold capitalize items-start ${
          anyDropdownOpen ? "text-black" : "text-white"
        }`}
      >
        <div className="z-10">
          
          <Link to={'/'}>
            {anyDropdownOpen ? (
              <img src={blacklogo} className="w-[100px] mt-[-35px]" />
            ) : (
              <img src={teslalogo} className="w-[100px] mt-[-35px]" />
            )}
          </Link>
        </div>
        <div className="flex list-none mr-8 text-[14px] font-[550] z-10">
          <li
            className={`${navStyle} ${openVehicles ? activeNavStyle : ""}`}
            onMouseEnter={() => handleMouseEnter(setOpenVehicles)}
            onMouseLeave={() => handleMouseLeave(setOpenVehicles)}
          >
            vehicles
          </li>
          <li
            className={`${navStyle} ${openEnergy ? activeNavStyle : ""}`}
            onMouseEnter={() => handleMouseEnter(setOpenEnergy)}
            onMouseLeave={() => handleMouseLeave(setOpenEnergy)}
          >
            energy
          </li>
          <li
            className={`${navStyle} ${openCharging ? activeNavStyle : ""}`}
            onMouseEnter={() => handleMouseEnter(setOpenCharging)}
            onMouseLeave={() => handleMouseLeave(setOpenCharging)}
          >
            charging
          </li>
          <li
            className={`${navStyle} ${openDiscover ? activeNavStyle : ""}`}
            onMouseEnter={() => handleMouseEnter(setOpenDiscover)}
            onMouseLeave={() => handleMouseLeave(setOpenDiscover)}
          >
            discover
          </li>
          <li
            className={`${navStyle} ${openShop ? activeNavStyle : ""}`}
            onMouseEnter={() => handleMouseEnter(setOpenShop)}
            onMouseLeave={() => handleMouseLeave(setOpenShop)}
          >
            shop
          </li>
        </div>
        <div className="flex space-x-[5px] z-10">
          {anyDropdownOpen ? (
            <>
              <img
                className="w-[30px] hover:bg-[#d6ddfe] hover:rounded-md cursor-pointer p-1"
                src={blackmark}
                alt="Black Question Mark"
              />
              <img
                className="w-[30px] hover:bg-[#d6ddfe] hover:rounded-md cursor-pointer p-1"
                src={blackworld}
                alt="Black World Wide"
              />
              <img
                className="w-[30px] hover:bg-[#d6ddfe] hover:rounded-md cursor-pointer p-1"
                src={blackuser}
                alt="Black User Icon"
              />
            </>
          ) : (
            <>
              <img
                className="w-[30px] hover:bg-[#d6ddfe] hover:rounded-md cursor-pointer p-1"
                src={questionMark}
                alt="Question Mark"
              />
              <img
                className="w-[30px] hover:bg-[#d6ddfe] hover:rounded-md cursor-pointer p-1"
                src={worldWide}
                alt="World Wide"
              />
              <img
                className="w-[30px] hover:bg-[#d6ddfe] hover:rounded-md cursor-pointer p-1"
                src={userIcon}
                alt="User Icon"
              />
            </>
          )}
        </div>
      </div>
      {openVehicles && (
        <div
          className="absolute w-full animate-slide-from-top mt-[-50px] "
          onMouseEnter={() => handleMouseEnter(setOpenVehicles)}
          onMouseLeave={() => handleMouseLeave(setOpenVehicles)}
        >
          <DropDown />
        </div>
      )}
      {openEnergy && (
        <div
          className="absolute w-full animate-slide-from-top  "
          onMouseEnter={() => handleMouseEnter(setOpenEnergy)}
          onMouseLeave={() => handleMouseLeave(setOpenEnergy)}
        >
          <Energy />
        </div>
      )}
      {openCharging && (
        <div
          className="absolute w-full animate-slide-from-top mt-[-50px] "
          onMouseEnter={() => handleMouseEnter(setOpenCharging)}
          onMouseLeave={() => handleMouseLeave(setOpenCharging)}
        >
          <Charging />
        </div>
      )}
      {openDiscover && (
        <div
          className="absolute w-full animate-slide-from-top  "
          onMouseEnter={() => handleMouseEnter(setOpenDiscover)}
          onMouseLeave={() => handleMouseLeave(setOpenDiscover)}
        >
          <Discover />
        </div>
      )}
      {openShop && (
        <div
          className="absolute w-full animate-slide-from-top  "
          onMouseEnter={() => handleMouseEnter(setOpenShop)}
          onMouseLeave={() => handleMouseLeave(setOpenShop)}
        >
          <Shop />
        </div>
      )}
    </div>
  );
};

export default Nav;
