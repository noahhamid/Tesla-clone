import MobileCharging from "./dropDowns/mobleDropdown/mobileCharging";
import MobileDiscover from "./dropDowns/mobleDropdown/mobileDiscover";
import MobileShop from "./dropDowns/mobleDropdown/mobileShop";
import MobileVehicle from "./dropDowns/mobleDropdown/mobileVehicle";
import MobileEnergy from "./dropDowns/mobleDropdown/mobileEnergy";
import rightSvg from "./images/carTypes/right.svg";
import leftSvg from "./images/carTypes/left.svg";
import teslaLogo from "./images/carTypes/teslaLogo.svg";
import closeSvg from "./images/carTypes/close.svg";
import { useState } from "react";

const ShowAll = ({ setAll }) => {
  const [visible, setVisible] = useState(0);

  return (
    <section className="relative">
      <section className="pl-[15px] pr-[20px] bg-white h-screen absolute w-full top-0">
        <section className="font-semibold capitalize space-y-[10px] pt-6">
          <div className="flex justify-between items-center mb-10 pr-[5px]">
            <h1></h1>
            <img
              src={closeSvg}
              className="w-[30px] ml-auto cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
              onClick={() => setAll(false)}
            />
          </div>
          <div
            className=" flex justify-between cursor-pointer pl-[15px] h-[60px] items-center rounded-md duration-300 hover:bg-[#e4e4e4]"
            onClick={() => setVisible(1)}
          >
            <h1>Vehicles</h1>
            <img src={rightSvg} className="w-[30px]" />
          </div>
          <div
            className="flex justify-between cursor-pointer pl-[15px] h-[60px] items-center rounded-md duration-300 hover:bg-[#e4e4e4] "
            onClick={() => setVisible(2)}
          >
            <h1>Energy</h1>
            <img src={rightSvg} className="w-[30px]" />
          </div>
          <div
            className="flex justify-between cursor-pointer pl-[15px] h-[60px] items-center rounded-md duration-300 hover:bg-[#e4e4e4]"
            onClick={() => setVisible(3)}
          >
            <h1>Charging</h1>
            <img src={rightSvg} className="w-[30px]" />
          </div>
          <div
            className="flex justify-between cursor-pointer pl-[15px] h-[60px] items-center rounded-md duration-300 hover:bg-[#e4e4e4] "
            onClick={() => setVisible(4)}
          >
            <h1>Discover</h1>
            <img src={rightSvg} className="w-[30px]" />
          </div>
          <div
            className="flex justify-between cursor-pointer pl-[15px] h-[60px] items-center rounded-md duration-300 hover:bg-[#e4e4e4] "
            onClick={() => setVisible(5)}
          >
            <h1>Shop</h1>
            <img src={rightSvg} className="w-[30px]" />
          </div>
        </section>
      </section>
      <div>
        {visible === 1 && (
          <div className="absolute top-0 z-10 w-full">
            <div className="pt-5 flex items-center fixed top-0 bg-white w-full justify-between p-5">
              <img
                src={leftSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setVisible(0)}
              />
              <h1 className="font-semibold text-customGray text-[14px]">
                Vehicles
              </h1>
              <img
                src={closeSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setAll(false)}
              />
            </div>
            <MobileVehicle />
          </div>
        )}
        {visible === 2 && (
          <div className="absolute top-0 z-10 w-full">
            <div className="pt-5 flex items-center fixed top-0 bg-white w-full justify-between p-5">
              <img
                src={leftSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setVisible(0)}
              />
              <h1 className="font-semibold text-customGray text-[14px]">
                Energy
              </h1>
              <img
                src={closeSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setAll(false)}
              />
            </div>
            <MobileEnergy />
          </div>
        )}
        {visible === 3 && (
          <div className="absolute top-0 z-10 w-full">
            <div className="pt-5 flex items-center fixed top-0 bg-white w-full justify-between p-5">
              <img
                src={leftSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setVisible(0)}
              />
              <h1 className="font-semibold text-customGray text-[14px]">
                Charging
              </h1>
              <img
                src={closeSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setAll(false)}
              />
            </div>
            <MobileCharging />
          </div>
        )}
        {visible === 4 && (
          <div className="absolute top-0 z-10 w-full">
            <div className="pt-5 flex items-center fixed top-0 bg-white w-full justify-between p-5">
              <img
                src={leftSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setVisible(0)}
              />
              <h1 className="font-semibold text-customGray text-[14px]">
                Discover
              </h1>
              <img
                src={closeSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setAll(false)}
              />
            </div>
            <MobileDiscover />
          </div>
        )}
        {visible === 5 && (
          <div className="absolute top-0 z-10 w-full">
            <div className="pt-5 flex items-center fixed top-0 bg-white w-full justify-between p-5">
              <img
                src={leftSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setVisible(0)}
              />
              <h1 className="font-semibold text-customGray text-[14px]">
                Shop
              </h1>
              <img
                src={closeSvg}
                className="w-[30px] cursor-pointer rounded-md duration-300 hover:bg-[#e4e4e4] p-[8px]"
                onClick={() => setAll(false)}
              />
            </div>
            <MobileShop />
          </div>
        )}
      </div>
    </section>
  );
};

const MobileNav = () => {
  const [all, setAll] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between mx-6 mt-[-20px]"
        onClick={() => setAll(true)}
      >
        <img src={teslaLogo} className="w-[100px] " />
        <h1 className="font-semibold text-white text-[13px] tracking-wide text-center cursor-pointer rounded-[5px] bg-[#1b1b4317] w-[60px] px-[10px] py-[5px]">
          Menu
        </h1>
      </div>
      <div className="absolute w-full top-0">
        {all && <ShowAll setAll={setAll} />}
      </div>
    </div>
  );
};

export default MobileNav;
