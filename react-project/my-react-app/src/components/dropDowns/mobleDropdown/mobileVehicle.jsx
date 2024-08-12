import VehicleData from "../../data/vehicleData";
import { Link } from "react-router-dom";
import { useState } from "react";

const BodyNav = () => {
  return (
    <section className="bg-white ">
      <div className="flex flex-wrap center justify-center  gap-6 text-center capitalize px-[30px]  pt-[100px]">
        {VehicleData.map((data, index) => (
          <div key={index}>
            <Link to={data.link} className="w-[220px]">
              <img src={data.img} alt={data.name} className="w-full h-auto" />
            </Link>

            <h1 className="font-semibold">{data.name}</h1>
            <div className="space-x-5">
              <button className="underline underline-offset-1 capitalize text-customGrayLight text-[13px] tracking-wider">
                learn
              </button>
              <button className="underline underline-offset-1 capitalize text-customGrayLight text-[13px] tracking-wider">
                order
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="h-[1px] bg-[#a29f9f]  m-[30px]"></div>
      <div className="capitalize font-semibold text-customGray space-y-12 px-[30px] pb-[50px] tracking-wide">
        <h1>inventory</h1>

        <h1>used cars</h1>
        <h1>demo drive</h1>
        <h1>trade-in</h1>
        <h1>compare</h1>
        <h1>help me charge</h1>
        <h1>fleet</h1>
        <h1>semi</h1>
        <h1>roadster</h1>
      </div>
    </section>
  );
};

const MobileVehicle = () => {
  return (
    <div>
      <BodyNav />
    </div>
  );
};

export default MobileVehicle;
