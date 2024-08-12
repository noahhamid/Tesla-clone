import Modelx_Data from "../cartypeData.jsx/modelx_data";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Nav from "../navbar";
import MobileNav from "../mobileNav";

const Model_X = () => {
  const [viewIndex, setViewIndex] = useState(0);

  const handleVideoIndex = (index) => {
    setViewIndex(index);
  };
  const handleVideoEnd = () => {
    setViewIndex((prevIndex) => (prevIndex + 1) % videoView.length);
  };

  const videoView = Modelx_Data.filter((data) => data.Url);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasBeenInView(true);
    } else {
      setHasBeenInView(false);
    }
  }, [inView]);

  const [index, setIndex] = useState(0);

  const setImageIndex = (index) => {
    setIndex(index);
  };
  const [mapIndex, setMapIndex] = useState(0);

  const HandleMapIndex = (index) => {
    setMapIndex(index);
  };

  // parking video

  const [ParkingIndex, setParkingIndex] = useState(0);

  const handleParkingIndex = (index) => {
    setParkingIndex(index);
  };

  const [spec, setSpec] = useState(1);

  return (
    <section className="max-w-[100%] overflow-hidden">
      {/* hero section */}
      <div className="absolute top-0 left-0 w-full  z-50 lg:hidden">
        <MobileNav />
      </div>
      <div className="absolute top-0 left-0 w-full z-50 hidden lg:block">
        <Nav />
      </div>
      <section>
        <div className=" tracking-[-0.03rem]">
          <img
            src={Modelx_Data[0].img}
            className="h-screen w-full object-cover hidden md:block"
          />
          <img
            src={Modelx_Data[0].mobileImg}
            className="h-screen w-full object-cover md:hidden"
          />

          <div className="absolute top-[75px] left-1/2 transform -translate-x-1/2 text-center font-semibold text-white ">
            <h1 className="md:text-[56px] text-[40px]"> Model X</h1>
            <h2 className=" md:text-[28px] text-[20px] -mt-3">
              {" "}
              From $65,990*
            </h2>
            <h2 className=" text-[17px] thin-underline w-[290px] md:w-[260px]">
              After Federal Tax Credit $7,500 and Est. Gas Savings $6,500
            </h2>
          </div>
          <div className="absolute z-10 flex md:space-x-20 bottom-[110px] text-center text-white left-1/2 transform -translate-x-1/2 font-semibold ">
            <div className="animate-slide-up animate-first w-[100px]">
              <h1 className="md:text-[24px] text-[24px] ">
                359 <span className="md:text-[20px] text-[15px]">mi</span>
              </h1>
              <h1 className="text-[14px]">Range (EPA est.)</h1>
            </div>
            <div className="animate-slide-up animate-first w-[100px]">
              <h1 className="md:text-[24px] text-[24px] ">
                1.99 <span className="md:text-[20px] text-[15px]">s</span>
              </h1>
              <h1 className="text-[14px]">0-60 mph2</h1>
            </div>
            <div className="animate-slide-up animate-first w-[100px]">
              <h1 className="md:text-[24px] text-[24px] ">
                200 <span className="md:text-[20px] text-[15px]">mph</span>
              </h1>
              <h1 className="text-[14px]">Top Speed3</h1>
            </div>
            <div className="animate-slide-up animate-fourth w-[100px] hidden md:block">
              <h1 className="md:text-[24px] text-[24px]">
                1,020 <span className="md:text-[20px] text-[15px]">hp</span>
              </h1>
              <h1 className="text-[14px]">Peak Power</h1>
            </div>
          </div>
          <div className="absolute flex space-x-4 bottom-[50px] text-center tracking-wide text-white z-10 left-1/2 transform -translate-x-1/2 font-semibold ">
            <button className="button-slide-up capitalize md:w-[240px] w-[130px] h-[40px] text-[14px] bg-[#7465ff] rounded-md hover:bg-[#6150ff] duration-500">
              order now
            </button>
            <button className="button-slide-up capitalize md:w-[240px] w-[130px] h-[40px] text-[14px] rounded-md text-black bg-white ">
              demo now
            </button>
          </div>
          <div className=" text-[10px] md:text-[12px] absolute z-10  bottom-[10px] text-center  text-white left-1/2 transform -translate-x-1/2 ">
            <h1 className=" animate-slide-up">
              Specs displayed are Model S Plaid values.
            </h1>
          </div>
          <div className=" color-transparent-top w-full h-[230px] left-1/2 transform -translate-x-1/2 absolute -bottom-10 "></div>
        </div>
      </section>
      {/* second page */}
      <section>
        <div className="bg-black h-[150px]"></div>
        <div className="relative">
          <img
            src={Modelx_Data[1].img}
            className="h-screen w-full object-cover"
          />
          <div className="absolute top-[-90px] color-transparent w-full h-[200px] left-1/2 transform text-white text-[28px] -translate-x-1/2 text-center font-semibold  ">
            <h1
              ref={ref}
              className={`animate-to-up text-[25px] ${inView ? "visible" : ""}`}
            >
              Interior of the Future
            </h1>
          </div>
        </div>
      </section>
      {/* video section */}
      <section>
        <div className="bg-black pt-32 md:px-28 px-1">
          <div className="rounded-lg">
            <video
              src={videoView[viewIndex].Url}
              autoPlay
              muted
              playsInline
              controls={false}
              onEnded={handleVideoEnd}
              className="w-full max-h-[600px]"
            />
          </div>
          <div className="flex space-x-2 lg:ml-[300px] mt-[30px] px-3">
            {videoView.map((data, index) => (
              <div key={index}>
                <button
                  className={`w-3 h-3 rounded-full ${
                    index === viewIndex ? "bg-[#fff]" : "bg-[#464444]"
                  }`}
                  onClick={() => handleVideoIndex(index)}
                ></button>
              </div>
            ))}
          </div>
          <div className="lg:ml-[300px] mt-[10px] px-3">
            {videoView.map((data, index) => (
              <div key={index} className="text-white ">
                <h1 className="text-[20px] font-semibold ">
                  {index === viewIndex ? data.title : ""}
                </h1>
                <p className="text-[13px]">
                  {index === viewIndex ? data.info : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* info section */}
      <section>
        <div className="bg-black text-[14px] lg:px-[210px] md:px-[30px] px-1  pt-[200px] text-white  pb-[90px]">
          <div className=" flex items-center flex-col md:flex-row justify-center">
            <img
              src={Modelx_Data[2].img}
              className="xl:w-[550px] md:w-[350px]"
            />
            <div className="w-[550px] ml-[280px]  md:ml-[70px] space-y-3 my-10 md:my-0">
              <h1 className="font-semibold">Stay Connected</h1>
              <p className="lg:w-[400px] md:w-[250px] w-[300px] text-[13px]  tracking-wide">
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>

          <div className=" flex items-center flex-col md:mr-[200px] md:flex-row-reverse justify-center">
            <img
              src={Modelx_Data[3].img}
              className="xl:w-[550px] md:w-[350px]"
            />
            <div className="w-[550px] ml-[280px]  lg:mr-[120px]  md:mr-[50px] space-y-3 my-10 md:my-0">
              <h1 className="font-semibold">Sublime Sound</h1>
              <p className="lg:w-[400px] md:w-[250px] w-[280px] text-[13px] tracking-wide">
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers the best listening experience wherever you are.
              </p>
            </div>
          </div>
        </div>
        {/* blue car */}
        <div className="realtive">
          <div className="relative w-full overflow-hidden h-[520px]">
            <img
              src={Modelx_Data[4].img}
              className="object-cover w-full h-full hidden md:block"
            />
            <img
              src={Modelx_Data[4].mobileImg}
              className="object-cover w-[100px ]h-[100px] md:hidden"
            />
            <div className="absolute bottom-[220px] md:bottom-[30px] flex left-1/2 transform -translate-x-1/2 text-[#fff] font-semibold lg:space-x-48 md:space-x-20 space-x-2 text-center">
              <div className="w-[100px]">
                <h1 className="lg:text-[24px] text-[20px]">1,020 hp</h1>
                <h2 className="lg:text-[14px] text-[12px]">Peak Power</h2>
              </div>
              <div className="w-[100px]">
                <h1 className="lg:text-[24px] text-[20px]">9.9 s</h1>
                <h2 className="lg:text-[14px] text-[12px]">1/4 Mile</h2>
              </div>
              <div className="w-[100px]">
                <h1 className="lg:text-[24px] text-[20px]">2.5 s</h1>
                <h2 className="lg:text-[14px] text-[12px]">0-60 mph*</h2>
              </div>
            </div>
          </div>
          <div className="xl:px-[190px] px-5 md:flex lg:px-20 xl:space-x-5 md:pt-20 pb-[60px]">
            <div className=" capitalize">
              <h1 className="text-[17px]">Plaid</h1>
              <h1 className="xl:text-[28px] text-[21px] font-[550]">
                Beyond Ludicrous
              </h1>
              <div className="xl:space-x-6 space-y-3 xl:space-y-0 mt-5 flex flex-col xl:flex-row">
                <button className="text-[14px] md:w-[204px] w-full h-[40px] capitalize  rounded-[4px] border-black border-[3px] hover:bg-black hover:text-white duration-500">
                  order now
                </button>
                <button className="text-[14px] md:w-[204px] w-full h-[40px] capitalize  bg-[#efefef] rounded-[4px] hover:bg-[#d0d0d0]  duration-500">
                  compare models
                </button>
              </div>
            </div>
            <div className="xl:w-[60%] w-full text-[14px] md:mt-0 md:ml-12 mt-5  text-customGray tracking-wide">
              <h1>
                With the most power and quickest acceleration of any SUV, Model
                X Plaid is the highest performing SUV ever built. Updated
                battery architecture enables both Long Range and Plaid
                configurations to complete back-to-back track runs without
                performance degradation. Chat with a Tesla Advisor to learn more
                about Model X or schedule a demo drive today.
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className=" bg-[#f7f2f2] overflow-hidden">
          <div className=" md:pt-[130px] pt-20 pb-[70px] xl:px-[190px] md:px-20 px-5 ">
            <h1 className="md:text-[28px] text-[25px] font-semibold mb-5 ">
              Electric Powertrain
            </h1>
            <p className="md:text-[14px] text-[13px] font-semibold md:w-[60%] tracking-wide text-customGray">
              Model S platforms unite powertrain and battery technologies for
              unrivaled performance, range and efficiency. New module and pack
              thermal architecture allows faster charging and gives you more
              power and endurance in all conditions.
            </p>
          </div>
          <div>
            <div className="xl:px-40 lg:px-32">
              <img
                src={index === 0 ? Modelx_Data[5].img : Modelx_Data[6].img}
                className="md:w-[90%] md:scale-[1.3] mt-10 scale-[1.7] mx-auto"
              />
            </div>
            <div className="flex xl:mx-[200px] mx-[50px] lg:mx-[100px] mt-20 space-x-7">
              <div
                onClick={() => setImageIndex(0)}
                className={` mt-10 top-underline cursor-pointer w-[550px]  ${
                  index === 0 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
                }`}
              >
                <h1 className="text-[17px] mb-3 font-semibold"> Model X</h1>
                <p className="text-[14px] mb-5">
                  Dual Motor All-Wheel Drive platform has the longest range, and
                  now delivers insane power and acceleration.
                </p>
                <div className=" space-x-10 mt-10 hidden md:flex">
                  <div>
                    <h1 className="text-[24px] font-semibold">3.8 s </h1>
                    <h1 className="text-[13px] font-semibold">0-60 mph</h1>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold"> 335 mi</h1>
                    <h1 className="text-[13px] font-semibold">
                      Range (EPA est.)
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold"> 670 hp</h1>
                    <h1 className="text-[13px] font-semibold">Peak Power</h1>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setImageIndex(1)}
                className={` mt-10 mb-[120px] top-underline cursor-pointer  duration-500 w-[570px]  ${
                  index === 1 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
                }`}
              >
                <h1 className="text-[17px] mb-3 font-semibold">
                  Model X Plaid
                </h1>
                <p className="text-[14px] mb-5">
                  Tri Motor All-Wheel Drive platform with torque vectoring
                  features three independent motors, each with a carbon-sleeved
                  rotor that maintains 1,000+ horsepower all the way to top
                  speed.
                </p>
                <div className="md:flex hidden space-x-10">
                  <div>
                    <h1 className="text-[22px] font-semibold">2.5* </h1>
                    <h1 className="text-[13px] font-semibold">0-60 mph2</h1>
                  </div>
                  <div>
                    <h1 className="text-[22px] font-semibold"> 326 mi</h1>
                    <h1 className="text-[13px] font-semibold">
                      Range (EPA est.)
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[22px] font-semibold"> 1,020 hp</h1>
                    <h1 className="text-[13px] font-semibold">Peak Power</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="flex flex-col xl:flex-row-reverse">
          <div className="relative">
            <img src={Modelx_Data[7].img} className=" hidden md:block" />
            <img src={Modelx_Data[7].mobileImg} className=" md:hidden" />
            <div className=" absolute bottom-12 flex md:space-x-10 space-x-1 tracking-tighter left-1/2 transform -translate-x-1/2 font-semibold text-white  text-center ">
              <div className="md:w-[250px] w-[100px]">
                <h1 className="md:text-[24px] text-[18px] ">92 ft³</h1>
                <h1 className="md:text-[14px] text-[11px]">
                  Up to 92 ft³ of storage
                </h1>
              </div>
              <div className="md:w-[250px] w-[100px]">
                <h1 className="md:text-[24px] text-[18px] "> 5,000 lbs</h1>
                <h1 className="md:text-[14px] text-[11px]">
                  Tow up to 5,000 lbs
                </h1>
              </div>
              <div className="md:w-[250px] w-[100px]">
                <h1 className="md:text-[24px] text-[18px] ">50,000 +</h1>
                <h1 className="md:text-[14px] text-[11px]">
                  Falcon Wing Doors
                </h1>
              </div>
            </div>
          </div>
          <div className="xl:w-[400px] mt-10 mx-10 flex flex-col justify-between">
            <div>
              <h1 className="text-[17px]">Utility</h1>
              <h1 className="text-[28px] font-semibold">Even More Capable</h1>
              <p className="text-[13px] font-semibold text-customGrayLight mt-5">
                With ample storage and 5,000 lbs of towing capacity, Model X is
                built for maximum utility. Front doors open and close
                automatically, Falcon Wing rear doors allow for easier loading
                and a trailer hitch comes standard, so you can bring your gear
                with you wherever you go.
              </p>
            </div>
            <div className="mb-10 space-y-5 font-semibold md:space-x-4 lg:space-x-5 xl:space-x-0">
              <button className="md:w-[336px] w-full h-[40px] mt-5 md:mt-0 rounded-[5px] text-[14px] border-[3px] border-black hover:bg-black hover:text-white duration-500 ">
                Order Now
              </button>
              <button className="md:w-[336px] w-full h-[40px] rounded-[5px] text-[14px] bg-[#eaeaea] hover:bg-[#d5d5d5] duration-500">
                Compare Models
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="bg-black">
          <div className="relative w-full overflow-hidden h-[600px] py-7">
            <img
              src={Modelx_Data[8].img}
              className="object-cover w-full h-full clip-image hidden md:block"
            />
            <img src={Modelx_Data[8].mobileImg} className=" w-full md:hidden" />
          </div>
          <div className="2xl:px-[190px] mt-[-200px] md:mt-0 xl:px-[100px] md:px-[50px] md:flex space-x-5 px-5 md:pt-20 pb-[60px] text-white bg-black">
            <div className=" capitalize">
              <h1 className="text-[17px]">Exterior</h1>
              <h1 className="md:text-[28px] text-[20px] font-[550]">
                Designed for Efficiency
              </h1>
              <div className="xl:space-x-6 xl:space-y-0 space-y-5 mt-5 flex xl:flex-row flex-col">
                <button className="text-[14px] md:w-[204px] w-full h-[40px] capitalize  rounded-[4px] border-white border-[3px] hover:bg-white hover:text-black duration-500">
                  order now
                </button>
                <button className="text-[14px] md:w-[204px] w-full h-[40px] capitalize  bg-[#202020] rounded-[4px] hover:bg-[#373737]  duration-500">
                  Demo Drive
                </button>
              </div>
            </div>
            <div className="lg:w-[60%] w-full text-[13px] font-semibold tracking-wide mt-5 md:mt-0">
              <h1>
                Model X has a drag coefficient of just .24 Cd, the lowest of any
                production SUV on the planet. Refined aerodynamic elements work
                together with new wheels and tires to help you travel farther,
                with sharper handling and better ride comfort.
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black text-[14px] md:px-[150px] pt-[200px] text-white pb-[90px]">
          <div className=" flex items-center md:mr-32 md:ml-[60px] md:justify-center flex-col md:flex-row-reverse">
            <img src={Modelx_Data[9].img} className="w-[550px] " />
            <div className="w-[550px] mx:px-0 px-32 space-y-3 my-7 md:my-0">
              <h1 className="font-semibold text-[16px]">
                Relentless Performance
              </h1>
              <p className="lg:w-[400px] w-[280px] text-[13px] font-semibold  tracking-wide">
                Performance wheels and tires keep the SUV planted, transferring
                even more power down to the road.
              </p>
            </div>
          </div>
          <div className=" flex items-center md:ml-32  justify-center flex-col md:flex-row ">
            <img src={Modelx_Data[10].img} className="w-[550px]" />
            <div className="w-[550px] md:mr-[120px] mx:px-0 px-32 space-y-3 my-7 md:my-0">
              <h1 className="font-semibold">Optimized Aerodynamics</h1>
              <p className="lg:w-[400px] w-[280px] md:pr-10 text-[13px] font-semibold  tracking-wide">
                Attention to detail on all exterior surfaces makes Model X the
                most aerodynamic production SUV on Earth.
              </p>
            </div>
          </div>
          <div className="  flex items-center md:mr-32 md:ml-[60px] md:justify-center flex-col md:flex-row-reverse">
            <img src={Modelx_Data[11].img} className="w-[550px]" />
            <div className="w-[550px] mx:px-0 px-32 space-y-3 my-7 md:my-0">
              <h1 className="font-semibold text-[16px]">Refined Styling</h1>
              <p className="lg:w-[400px] w-[280px] text-[13px] font-semibold  tracking-wide">
                Exterior design combines an iconic look with elegant details.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section>
        <div className="flex flex-col xl:flex-row">
          <div className="relative">
            <img
              src={Modelx_Data[12].img}
              className="w-full h-full object-cover hidden md:block"
            />
            <div className="  overflow-hidden">
              <img
                src={Modelx_Data[12].mobileImg}
                className="w-full h-full scale-[2] my-32  md:hidden"
              />
            </div>
            <div className=" absolute bottom-12 flex md:space-x-10 space-x-1 left-1/2 transform -translate-x-1/2 font-semibold text-white  text-center">
              <div className="lg:w-[270px] md:w-[200px] w-[100px]">
                <h1 className="text-[22px] ">335 mi</h1>
                <h1 className="text-[13px] hidden md:block">
                  Go anywhere with up to 335 miles of estimated range on a
                  single charge
                </h1>
              </div>
              <div className="lg:w-[270px] md:w-[200px] w-[100px]">
                <h1 className="text-[22px] "> 15 min</h1>
                <h1 className="text-[13px] hidden md:block">
                  Recharge up to 171 miles in 15 minutes with the latest
                  Supercharger technology
                </h1>
              </div>
              <div className="lg:w-[270px] md:w-[200px] w-[100px]">
                <h1 className="text-[22px] ">50,000 +</h1>
                <h1 className="text-[13px] hidden md:block">
                  Superchargers placed along popular routes
                </h1>
              </div>
            </div>
          </div>
          <div className="xl:w-[400px] md:w-full mt-10 mx-10 flex flex-col justify-between">
            <div>
              <h1 className="text-[17px]">Range</h1>
              <h1 className="text-[28px] font-semibold">Go Anywhere</h1>
              <p className="text-[13px] font-semibold text-customGrayLight mt-5">
                With up to 335 miles of estimated range and access to the
                world’s largest and most powerful fast charging network, you’ll
                spend less time plugged in and more time on the road. Chat with
                a Tesla Advisor to learn more about Model X or schedule a demo
                drive today.
              </p>
            </div>
            <div className="mb-10 space-y-3 md:space-x-4 xl:space-x-0 font-semibold">
              <button className="md:w-[336px] w-full h-[40px] rounded-[5px] text-[14px] border-[3px] mt-4 border-black hover:bg-black hover:text-white duration-500 ">
                Order Now
              </button>
              <button className="md:w-[336px] w-full h-[40px] rounded-[5px] text-[14px] bg-[#eaeaea] hover:bg-[#d5d5d5] duration-500">
                Find My Route
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* map section */}
      <section>
        <div className=" ">
          <div className="2xl:ml-[200px] mx-4 md:ml-20 mt-[150px]">
            <h1 className="text-[28px] font-semibold">Freedom to Travel</h1>
            <p className="text-[13px] font-semibold text-customGray mt-4">
              Enter a destination on your touchscreen and Trip Planner will
              automatically calculate your route with Superchargers along the
              way.
            </p>
          </div>
          <div className="lg:mx-20  mt-20">
            <img
              src={
                mapIndex === 0
                  ? Modelx_Data[13].img
                  : mapIndex === 1
                  ? Modelx_Data[14].img
                  : mapIndex === 2
                  ? Modelx_Data[15].img
                  : Modelx_Data[16].img
              }
            />
          </div>
          <div className="gap-10 lg:mx-10 mt-10  font-semibold flex flex-wrap justify-center items-center">
            <div
              onClick={() => HandleMapIndex(0)}
              className={` top-underline cursor-pointer lg:w-[300px] w-[200px] duration-500   ${
                mapIndex === 0 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="lg:text-[17px] text-[14px]">
                San Jose to Los Angeles
              </h1>
              <h1 className="lg:text-[25px] text-[20px]">340 miles</h1>
            </div>
            <div
              onClick={() => HandleMapIndex(1)}
              className={` top-underline cursor-pointer lg:w-[300px] w-[200px] duration-500   ${
                mapIndex === 1 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="lg:text-[17px] text-[14px]">Tucson to El Paso</h1>
              <h1 className="lg:text-[25px] text-[20px]"> 321 miles</h1>
            </div>
            <div
              onClick={() => HandleMapIndex(2)}
              className={` top-underline cursor-pointer lg:w-[300px] w-[200px] duration-500   ${
                mapIndex === 2 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="lg:text-[17px] text-[14px]">
                Manhattan to Boston
              </h1>
              <h1 className="lg:text-[25px] text-[20px]"> 211 miles</h1>
            </div>
            <div
              onClick={() => HandleMapIndex(3)}
              className={` top-underline cursor-pointer lg:w-[300px] w-[200px] duration-500   ${
                mapIndex === 3 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="lg:text-[17px] text-[14px]">
                Fort Lauderdale to Orlando
              </h1>
              <h1 className="lg:text-[25px] text-[20px]"> 195 miles</h1>
            </div>
          </div>
          <div className="text-center mt-[100px] ">
            <button className="w-[250px] h-[40px] rounded-[5px]  text-[14px] border-[3px] border-black hover:bg-black hover:text-white duration-500 ">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* location */}
      <section>
        <div className="mt-[200px] ">
          <div className="flex xl:mx-[100px] mx-8 justify-between  md:flex-row flex-col">
            <div>
              <h1 className="text-[28px] font-semibold">Demo Drive Model X</h1>
              <h1 className="text-[13px] font-semibold  text-customGrayLight mt-2">
                Enter a zip code to find Tesla showrooms near you:
              </h1>
              <h1 className="text-[14px] text-customGrayLight mt-5 font-semibold">
                Zip Code
              </h1>
              <form className="flex flex-col space-y-5">
                <input
                  type="text"
                  className="w-[200px] h-[40px] bg-[#e6e6e6] rounded-[4px] mt-2 text-black pl-2"
                />
                <button className="w-[200px] h-[40px] bg-[#5b4cff] text-white text-[14px] rounded-[4px] tracking-wide">
                  Next
                </button>
              </form>
            </div>
            <div className=" lg:w-[800px] md:ml-10 w-[280px] mt-10 md:mt-0">
              <img src={Modelx_Data[17].img} className="rounded-lg" />
            </div>
          </div>
          <div className="flex lg:ml-[100px] mx-10 lg:mt-[150px] mt-[50px] flex-col lg:flex-row">
            <div className=" lg:w-[340px] flex flex-col justify-between ">
              <div>
                <h1 className="text-[17px] text-customGray">Safety</h1>
                <h1 className="text-[28px] font-semibold">Built for Safety</h1>
                <h1 className="text-[14px] text-customGray w-full  mt-6">
                  Model X is built from the ground up as an electric vehicle,
                  with a high-strength architecture and floor-mounted battery
                  pack that enable exceptional occupant protection and low
                  rollover risk. Every Model X includes Tesla’s latest active
                  safety features, such as Automatic Emergency Braking, at no
                  extra cost.
                </h1>
              </div>
              <div className="mb-10 space-y-5 md:space-x-3 lg:space-x-0 mt-3 lg:flex-row">
                <button className="md:w-[336px] w-full h-[40px] rounded-[5px] text-[14px] border-[3px] border-black hover:bg-black hover:text-white duration-500 ">
                  Order Now
                </button>
                <button className="md:w-[336px] w-full h-[40px] rounded-[5px] text-[14px] bg-[#eaeaea] hover:bg-[#d5d5d5] duration-500">
                  Demo Drive
                </button>
              </div>
            </div>
            <div className=" overflow-hidden mt-10 lg:mt-0">
              <img src={Modelx_Data[18].img} className="w-full scale-[1.4]" />
            </div>
          </div>
        </div>
      </section>
      {/* car Map */}
      <section className="w-screen overflow-x-hidden">
        <div className="mt-[50px]">
          <div className="relative w-full  overflow-hidden h-[450px]">
            <img
              src={Modelx_Data[19].img}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-8 left-20 flex flex-col space-y-12  font-semibold">
              <div className="w-[200px] md:w-[300px]">
                <h1 className="text-[24px]">360°</h1>
                <h1 className="text-[13px] text-customGrayLight">
                  Rear, side and forward-facing cameras provide maximum
                  visibility
                </h1>
              </div>
              <div className="w-[200px] md:w-[300px]">
                <h1 className="text-[24px]">250 m</h1>
                <h1 className="text-[13px] text-customGrayLight">
                  Powerful visual processing at up to 250 meters of range
                </h1>
              </div>
              <div className="w-[200px] md:w-[300px] pt-5">
                <h1 className="text-[24px]">360°</h1>
                <h1 className="text-[13px] text-customGrayLight">
                  Tesla Vision detects nearby cars, helps prevent potential
                  collisions and assists with parking
                </h1>
              </div>
            </div>
          </div>
          <div className="xl:px-[190px] gap-10 lg:px-[100px] px-5 flex space-x-5 pt-20 pb-[60px] flex-col md:flex-row">
            <div className=" capitalize">
              <h1 className="text-[17px]">Autopilot</h1>
              <h1 className="text-[28px] font-[550]">Future of Driving</h1>
              <div className="xl:space-x-6 space-y-5 xl:space-y-0 mt-5 flex xl:flex-row  flex-col">
                <button className="text-[13px] font-semibold md:w-[204px] w-full h-[40px] capitalize  rounded-[4px] border-black border-[3px] hover:bg-black hover:text-white duration-500">
                  order now
                </button>
                <button className="text-[13px] font-semibold md:w-[204px] w-full h-[40px] capitalize  bg-[#efefef] rounded-[4px] hover:bg-[#d0d0d0]  duration-500">
                  Demo Drive
                </button>
              </div>
            </div>
            <div className="xl:w-[60%] w-full text-[13px] font-semibold text-customGray mt-5 lg:mt-0 tracking-wide">
              <h1>
                Autopilot enables your car to steer, accelerate and brake
                automatically within its lane under your active supervision,
                assisting with the most burdensome parts of driving. With
                over-the-air software updates, the latest enhancements are
                available instantly. Chat with a Tesla Advisor to learn more
                about Model X or schedule a demo drive today.
              </h1>
            </div>
          </div>
          <div className="xl:px-[190px] md:px-24 px-10 mt-10 ">
            <h1 className="text-[28px] font-semibold">Features</h1>
            <h1 className="text-[13px] font-semibold md:w-[60%] w-full text-customGrayLight mt-3">
              Full Self-Driving capability introduces additional features and
              improves existing functionality to make your vehicle more capable
              over time, including:
            </h1>
          </div>
        </div>
      </section>
      {/* parking Video */}
      <section>
        <div className="lg:mt-20 relative overflow-hidden w-full h-[500px]">
          <div>
            <video
              src={`${
                ParkingIndex === 0
                  ? Modelx_Data[0].video
                  : ParkingIndex === 1
                  ? Modelx_Data[1].video
                  : ParkingIndex === 2
                  ? Modelx_Data[2].video
                  : Modelx_Data[3].video
              }`}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="absolute left-0 w-full h-[130%] top-[-10%]"
            />
          </div>
        </div>
        <div className="lg:mx-[100px] mt-[50px] gap-10 font-semibold flex justify-center items-center flex-wrap">
          <div
            onClick={() => handleParkingIndex(0)}
            className={` top-underline cursor-pointer  w-[200px] duration-500   ${
              ParkingIndex === 0 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
            }`}
          >
            <h1 className="text-[15px] mb-2">Navigate on Autopilot</h1>
            <h1 className="text-[13px]">
              Active guidance from on-ramp to off-ramp
            </h1>
          </div>

          <div
            onClick={() => handleParkingIndex(1)}
            className={` top-underline cursor-pointer  w-[200px] duration-500   ${
              ParkingIndex === 1 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
            }`}
          >
            <h1 className="text-[15px] mb-2">Auto Lane Change</h1>
            <h1 className="text-[13px]">
              Automatically change lanes while driving on the highway
            </h1>
          </div>

          <div
            onClick={() => handleParkingIndex(2)}
            className={` top-underline cursor-pointer  w-[200px] duration-500   ${
              ParkingIndex === 2 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
            }`}
          >
            <h1 className="text-[15px] mb-2"> Summon</h1>
            <h1 className="text-[13px]">Automatically retrieve your car</h1>
          </div>

          <div
            onClick={() => handleParkingIndex(3)}
            className={` top-underline cursor-pointer  w-[200px] duration-500   ${
              ParkingIndex === 3 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
            }`}
          >
            <h1 className="text-[15px] mb-2"> Autopark</h1>
            <h1 className="text-[13px]">
              Parallel and perpendicular parking with a single touch
            </h1>
          </div>
        </div>
      </section>
      {/* car spec */}
      <section>
        <div className="lg:grid lg:grid-cols-4 mt-20 pb-10 bg-black text-white overflow-hidden">
          <div className="grid col-span-2  py-[100px]">
            <img src={Modelx_Data[20].img} />
          </div>
          <div className="  lg:mx-20 mx-10 flex pt-10 text-[13px] space-x-3">
            <div>
              <button
                onClick={() => setSpec(1)}
                className={`cursor-pointer md:w-[242px] lg:w-[200px] xl:w-[300px]  w-[100px] text-[12px] font-semibold py-1 rounded-md border-[3px] duration-500  h-[32px] ${
                  spec === 1 ? " border-white" : "border-[#3c3c3c] "
                }`}
              >
                Model X Plaid
              </button>

              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Range (EPA est.)</h1>
                <h1> {spec === 1 ? "326 mi" : "335 mi"}</h1>
              </div>
              {spec === 2 ? (
                <div>
                  <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
                  <h1 className=" font-semibold">1/4 Mile</h1>
                  <h1> 9.9 s</h1>
                </div>
              ) : (
                ""
              )}
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Peak Power</h1>
                <h1> {spec === 1 ? "1,020 hp" : "670 hp"}</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Wheels</h1>
                <h1> 20" or 22"</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Towing</h1>
                <h1> 5,000 lbs</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Seating</h1>
                <h1> {spec === 1 ? "Up to 6" : "Up to 7"}</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Weight (Curb Mass)</h1>
                <h1>5,248 lbs</h1>
              </div>
            </div>
            <div className="max-w-[100px]">
              <button
                onClick={() => setSpec(2)}
                className={`cursor-pointer  md:w-[242px] lg:w-[200px] xl:w-[300px] w-[100px] text-[12px] font-semibold py-1 rounded-md duration-500 border-[3px]  text-center h-[32px] ${
                  spec === 2 ? " border-white" : " border-[#3c3c3c]"
                }`}
              >
                Model X
              </button>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">*Acceleration</h1>
                <h1 className="">
                  {spec === 2
                    ? "2.5 s 0-60 mph with rollout subtracted"
                    : "3.8 s 0-60 mph with rollout subtracted"}
                </h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Top Speed</h1>
                <h1>{spec === 2 ? "163 mph" : "155 mph"}</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Drag Coefficient</h1>
                <h1>0.24 Cd</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Powertrain</h1>
                <h1> {spec === 2 ? "Tri Motor" : "Dual Motor"}</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Supercharging Max</h1>
                <h1>250 kW</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Warranty</h1>
                <h1 className="w-[100px] md:w-[300px] lg:w-[150px] xl:w-[300px]">
                  Basic Vehicle - 4 years or 50,000 miles, whichever comes first
                  Battery & Drive Unit - 8 years or 150,000 miles, whichever
                  comes first See Details
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* footer */}
      <section>
        <div className="flex items-center justify-between px-5 text-black my-[150px] flex-col md:flex-row">
          <div className="xl:ml-[200px] md:mx-10">
            <h1 className="text-[28px] font-semibold text-center ">Model X</h1>
            <p className="text-[13px] text-customGrayLight font-semibold mt-3">
              Design yours or get a trade-in estimate for your current vehicle.
            </p>
            <div className="mt-[15px] lg:space-x-5 lg:space-y-0 space-y-3 md:space-y-4 md:space-x-0 lg:flex">
              <button className="md:w-[204px] w-full h-[40px] text-[13px] font-semibold border-black border-[3px] rounded-[4px] duration-500 hover:bg-black hover:text-white">
                Order Now
              </button>
              <button className="md:w-[204px] w-full h-[40px] text-[13px] font-semibold text-gray-700 bg-[#e6e6e6] rounded-[4px] duration-500 hover:bg-[#d7d7d7]">
                Get an Estimate
              </button>
            </div>
          </div>
          <img
            src={Modelx_Data[21].img}
            className="xl:w-[700px] md:w-[500px]"
          />
        </div>
        <p className="text-[11px] text-[#8b8585] font-semibold text-center md:mx-[50px] xl:mx-[450px] mx-[30px]">
          *Price before estimated savings is $81,630, including Destination and
          Order Fees, but excluding taxes and other fees. Subject to change.
          Vehicle shown has upgrades that will increase the price. Estimated
          savings includes $6,500 in gas savings estimated over five years, the
          $7,500 Federal Tax Credit and state incentives, available to eligible
          buyers and subject to MSRP caps. Not all vehicles, customers or
          finance options will be eligible. Terms apply
        </p>
        <p className="text-[11px] text-[#8b8585] font-semibold text-center pb-10 mt-[20px] xl:mx-[500px] mx-[30px] md:mx-[100px]">
          Certain high data usage vehicle features require at least Standard
          Connectivity, including maps, navigation and voice commands. Access to
          features that use cellular data and third-party licenses are subject
          to change. Learn more about Standard Connectivity and any limitations.
        </p>
      </section>
      {/* footer */}
      <div></div>
    </section>
  );
};
export default Model_X;
