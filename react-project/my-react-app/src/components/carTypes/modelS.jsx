import first_img from "../images/carTypes/modelS.jpg";
import mobileFirst from "../images/carTypes/mobileFirst.avif";
import second_img from "../images/carTypes/modelS_interior.jpg";

import firstCar_img from "../images/carTypes/firstCar.avif";
import secondCar_video from "../images/carTypes/secondCar.webm";
import thirdCar_img from "../images/carTypes/thirdCar.avif";
import fourthCar_img from "../images/carTypes/fourthCar.avif";

import firstRed_car from "../images/carTypes/firstRedCar.avif";
import secondRed_car from "../images/carTypes/secondRedCar.avif";
import thirdRed_car from "../images/carTypes/thirdRedCar.avif";

import twinFirst from "../images/carTypes/twinFirstCar.avif";
import twinSecond from "../images/carTypes/twinSecondCar.avif";

import redtesla from "../images/carTypes/redTesla.avif";
import redCar from "../images/carTypes/redCar.avif";

import tesla_video from "../images/carTypes/tesla_video.mp4";
import carBody from "../images/carTypes/carBody.avif";
import carMap from "../images/carTypes/carMap.avif";

import firstMap from "../images/carTypes/firstMap.avif";
import secondMap from "../images/carTypes/secondMap.avif";
import thirdMap from "../images/carTypes/thirdMap.avif";
import fourthMap from "../images/carTypes/fourthMap.avif";

import carSpec from "../images/carTypes/carSpec.avif";
import lastCar from "../images/carTypes/modes_last.jpeg";

import firstPark from "../images/carTypes/firstPark_Video.webm";
import secondPark from "../images/carTypes/secondPark_Video.webm";
import thirdPark from "../images/carTypes/thirdPark_Video.webm";
import fourthPark from "../images/carTypes/fourthPark_Video.webm";

import Nav from "../navbar";
import MobileNav from "../mobileNav";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ModelS_Data from "../cartypeData.jsx/modelS_Data";

const ModelS = () => {
  const [viewIndex, setViewIndex] = useState(0);

  const handleVideoIndex = (index) => {
    setViewIndex(index);
  };
  const handleVideoEnd = () => {
    setViewIndex((prevIndex) => (prevIndex + 1) % videoView.length);
  };

  const videoView = ModelS_Data.filter((data) => data.Url);

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

  return (
    <section className="bg-blue">
      {/* hero section */}
      <div className="absolute top-0 left-0 w-full  z-50 lg:hidden">
        <MobileNav />
      </div>
      <div className="absolute top-0 left-0 w-full z-50 hidden lg:block">
        <Nav />
      </div>
      <section>
        <div className="relative text-white">
          <img
            src={first_img}
            className="h-screen w-full object-cover hidden md:block"
          />
          <img
            src={mobileFirst}
            className="h-screen w-full object-cover md:hidden"
          />
          <div className="absolute top-[80px] left-1/2 transform -translate-x-1/2 text-center font-semibold  ">
            <h1 className="md:text-[56px] text-[40px]"> Model S</h1>
            <h2 className=" md:text-[28px] text-[20px]"> From $68,4901</h2>
            <h2 className=" md:text-[17px] thin-underline ">
              After Est. Gas Savings $6,500
            </h2>
          </div>
          <div className="absolute z-10 flex md:space-x-20 space-x-2 bottom-[120px] text-center md:tracking-wide text-white left-1/2 transform -translate-x-1/2 font-semibold ">
            <div className="animate-slide-up animate-first">
              <h1 className="md:text-[24px] text-[18px]">
                359 <span className="text-[20px]">mi</span>
              </h1>
              <h1 className="md:text-[14px] text-[12px] w-[100px] xl:w-auto">
                Range (EPA est.)
              </h1>
            </div>
            <div className="animate-slide-up animate-second">
              <h1 className="md:text-[24px] text-[18px]">
                1.99 <span className="text-[20px]">s</span>
              </h1>
              <h1 className="md:text-[14px] text-[12px] w-[100px] xl:w-auto">
                0-60 mph2
              </h1>
            </div>
            <div className="animate-slide-up animate-third w-[100px]">
              <h1 className="md:text-[24px] text-[18px]">
                200 <span className="md:text-[14px] text-[12px]">mph</span>
              </h1>
              <h1 className="md:text-[14px] text-[12px]  w-[100px] xl:w-auto">
                Top Speed3
              </h1>
            </div>
            <div className="animate-slide-up animate-fourth hidden md:block">
              <h1 className="md:text-[24px] text-[18px]">
                1,020 <span className="text-[20px]">hp</span>
              </h1>
              <h1 className="text-[14px] w-[100px] xl:w-auto">Peak Power</h1>
            </div>
          </div>
          <div className="absolute flex space-x-5 bottom-[60px] text-center tracking-wide text-white z-10 left-1/2 transform -translate-x-1/2 font-semibold ">
            <button className="button-slide-up capitalize md:w-[260px] w-[130px] h-[40px] text-[14px] bg-[#7465ff] rounded-md hover:bg-[#6150ff] duration-500">
              order now
            </button>
            <button className="button-slide-up capitalize md:w-[260px] w-[130px] h-[40px] text-[14px] border-white border-[3px] rounded-md hover:bg-white hover:text-black duration-500">
              demo now
            </button>
          </div>
          <div className=" text-[12px] absolute z-10 space-x-5 bottom-[10px] text-center  text-white left-1/2 transform -translate-x-1/2 ">
            <h1 className=" animate-slide-up">
              Specs displayed are Model S Plaid values.
            </h1>
          </div>
          <div className=" color-transparent-top w-full h-[220px] left-1/2 transform -translate-x-1/2 absolute -bottom-0"></div>
        </div>
      </section>
      {/* second page */}
      <section>
        <div className="relative">
          <div className="bg-black h-[150px]"></div>
          <img src={second_img} className="h-screen w-full object-cover" />
          <div className="absolute top-[50px] color-transparent w-full h-[200px] left-1/2 transform text-white text-[28px] -translate-x-1/2 text-center font-semibold  ">
            <h1
              ref={ref}
              className={`animate-to-up ${inView ? "visible" : ""}`}
            >
              Interior of the Future
            </h1>
          </div>
        </div>
      </section>
      {/* video section */}
      <section>
        <div className="bg-black pt-32 xl:px-32 lg:px-10 px-5">
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
          <div className="flex space-x-2 lg:ml-[300px] mt-[30px]">
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
          <div className="lg:ml-[300px] mt-[10px] max-w-[620px]">
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
      <section className="bg-black text-white px-40 py-20 overflow-hidden">
        <div className=" flex items-center lg:flex-row-reverse flex-col">
          <img
            src={firstCar_img}
            className="w-[550px] lg:w-[550px] min-w-[450px]"
          />
          <div className="w-[550px] lg:mr-[120px] space-y-3 ml-24 my-5 lg:my-0">
            <h1 className="font-semibold">Relentless Performance</h1>
            <p className="w-[400px] tracking-wide">
              Instantly connect with multi-device Bluetooth, or fast charge
              devices with wireless and 36-watt USB-C charging.
            </p>
          </div>
        </div>
        <div className="flex items-center min-w-[450px] flex-col  lg:flex-row">
          <video
            src={secondCar_video}
            className="w-[550px] mr-[280px] "
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
          <div className="w-[550px]  space-y-3 mr-[180px]  my-5 lg:my-0">
            <h1 className="font-semibold">Immersive Sound</h1>
            <p className="w-[400px] tracking-wide">
              A 22-speaker, 960-watt audio system with Active Road Noise
              Reduction offers immersive listening and studio-grade sound
              quality.
            </p>
          </div>
        </div>
        <div className=" flex items-center lg:flex-row-reverse flex-col">
          <img
            src={thirdCar_img}
            className="w-[550px] lg:w-[550px] min-w-[450px]"
          />
          <div className="w-[550px] lg:mr-[120px] space-y-3 ml-24 my-5 lg:my-0">
            <h1 className="font-semibold">Room for Everything</h1>
            <p className="w-[400px] tracking-wide">
              With front and rear trunks and fold-flat seats you can fit your
              bike without taking the wheel off—and your luggage too. Compare
              Models
            </p>
          </div>
        </div>
        {/* blue car */}
      </section>
      <div className="realtive">
        <div className="relative w-full overflow-hidden h-[520px]">
          <img src={fourthCar_img} className="object-cover w-full h-full " />
          <div className="absolute top-[400px] flex  left-1/2 transform -translate-x-1/2 text-[#fff] font-semibold md:space-x-40 space-x-8  text-center">
            <div className="w-[100px]">
              <h1 className="md:text-[24px] ">1,020 hp</h1>
              <h2 className="md:text-[14px] ">Peak Power</h2>
            </div>
            <div className="w-[100px]">
              <h1 className="md:text-[24px]">9.23 s</h1>
              <h2 className="md:text-[14px] text-[13px]">@155 mph 1/4 mile</h2>
            </div>
            <div className="w-[120px]">
              <h1 className="md:text-[24px]"> 1.99 s</h1>
              <h2 className="md:text-[14px]">hp 0-60 mph2</h2>
            </div>
          </div>
        </div>
        <div className="lg:px-[190px] px-5 flex space-y-4 lg:space-y-0 md:space-x-5 pt-20 pb-[60px] flex-col lg:flex-row">
          <div className=" capitalize">
            <h1 className="text-[17px]">Plaid</h1>
            <h1 className="text-[28px] font-[550]">Beyond Ludicrous</h1>
            <div className="md:space-x-6  mt-5 space-y-4  md:space-y-0 flex flex-col md:flex-row xl:space-x-6 lg:space-y-4 xl:space-y-0 lg:space-x-0 lg:flex-col xl:flex-row">
              <button className="text-[14px] md:w-[204px] w-full h-[40px] capitalize  rounded-[4px] border-black border-[3px] hover:bg-black hover:text-white duration-500">
                order now
              </button>
              <button className="text-[14px] md:w-[204px] w-full h-[40px] capitalize  bg-[#efefef] rounded-[4px] hover:bg-[#d0d0d0]  duration-500">
                compare models
              </button>
            </div>
          </div>
          <div className="lg:w-[60%] lg:ml-10 w-full text-[14px]  text-customGray tracking-wide">
            <h1>
              Model S Plaid has the quickest acceleration of any vehicle in
              production. Updated battery architecture for all Model S trims
              enables back-to-back track runs without performance degradation.
              Chat with a Tesla Advisor to learn more about Model S or schedule
              a demo drive today.
            </h1>
          </div>
        </div>
      </div>
      s{/* other Section 2*/}
      <section>
        <div className=" bg-[#f7f2f2]">
          <div className=" pt-[130px] pb-[70px] xl:px-[190px] px-10 ">
            <h1 className="text-[28px] font-semibold mb-5 ">
              Electric Powertrain
            </h1>
            <p className="text-[14px] xl:w-[60%] tracking-wide text-customGray">
              Model S platforms unite powertrain and battery technologies for
              unrivaled performance, range and efficiency. New module and pack
              thermal architecture allows faster charging and gives you more
              power and endurance in all conditions.
            </p>
          </div>
          <div>
            <img
              src={index === 0 ? twinFirst : twinSecond}
              className="w-[90%] mx-auto "
            />
            <div className="flex xl:mx-[200px] mx-5 space-x-7">
              <div
                onClick={() => setImageIndex(0)}
                className={` mt-10 top-underline cursor-pointer w-[550px]  ${
                  index === 0 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
                }`}
              >
                <h1 className="text-[17px] mb-3 font-semibold">Model S</h1>
                <p className="text-[14px] mb-5">
                  Dual Motor All-Wheel Drive unlocks more range than any other
                  vehicle in our current lineup, with insane power and maximum
                  control.
                </p>
                <div className="md:flex md:space-x-10 hidden">
                  <div>
                    <h1 className="text-[24px] font-semibold">3.1 s </h1>
                    <h1 className="text-[14px]">0-60 mph</h1>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold"> 402 mi</h1>
                    <h1 className="text-[14px]">Range (EPA est.)</h1>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold"> 670 hp</h1>
                    <h1 className="text-[14px]">Peak Power</h1>
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
                  Model S Plaid
                </h1>
                <p className="text-[14px] mb-5">
                  Maintain 1,000+ horsepower all the way to 200 mph with
                  Tri-Motor All-Wheel Drive, featuring torque vectoring and
                  three independent carbon-sleeved rotors.
                </p>
                <div className="md:flex md:space-x-10 hidden">
                  <div>
                    <h1 className="text-[24px] font-semibold">1.99 s </h1>
                    <h1 className="text-[14px]">0-60 mph2</h1>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold"> 359 mi</h1>
                    <h1 className="text-[14px]">Range (EPA est.)</h1>
                  </div>
                  <div>
                    <h1 className="text-[24px] font-semibold"> 1,020 hp</h1>
                    <h1 className="text-[14px]">Peak Power</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* red car */}
      <section>
        <div className="bg-black">
          <div className="relative w-full overflow-hidden h-[550px] py-7">
            <img
              src={redtesla}
              className="object-cover w-full h-full clip-image "
            />
          </div>
          <div className="xl:px-[190px] px-5 md:gap-10 flex md:flex-row flex-col space-x-5 pt-20 pb-[60px] text-white bg-black">
            <div className=" capitalize">
              <h1 className="text-[17px]">Exterior</h1>
              <h1 className="text-[28px] font-[550]">
                Designed for Efficiency
              </h1>
              <div className="lg:space-x-6 md space-y-4 lg:space-y-0 mt-5 flex flex-col lg:flex-row xl:flex-row">
                <button className="text-[14px] md:w-[204px] h-[40px] capitalize  rounded-[4px] border-white border-[3px] hover:bg-white hover:text-black duration-500">
                  order now
                </button>
                <button className="text-[14px] md:w-[204px] h-[40px] capitalize  bg-[#202020] rounded-[4px] hover:bg-[#373737]  duration-500">
                  Demo Drive
                </button>
              </div>
            </div>
            <div className="lg:w-[60%] mt-10 text-[14px]  tracking-wide">
              <h1>
                With a drag coefficient of just .208 Cd, the lowest on the
                planet, Model S is built for speed, endurance and range.
                Improved aerodynamics and a wider chassis offer more responsive
                performance so you can take corners quicker and with more
                confidence.
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black overflow-hidden text-[14px] md:px-[210px] pt-[200px] text-white  pb-[90px]">
          <div className="  flex items-center lg:flex-row-reverse flex-col">
            <img
              src={firstRed_car}
              className="w-[550px] lg:w-[550px] md:min-w-[600px]"
            />
            <div className="w-[550px] lg:mr-[120px] space-y-3 ml-24 my-5 lg:my-0">
              <h1 className="font-semibold">Relentless Performance</h1>
              <p className="w-[400px] tracking-wide">
                Instantly connect with multi-device Bluetooth, or fast charge
                devices with wireless and 36-watt USB-C charging.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-col lg:flex-row">
            <img
              src={secondRed_car}
              className="w-[550px] lg:w-[550px] md:min-w-[600px]"
            />
            <div className="w-[550px] lg:ml-[120px] space-y-3 ml-24  my-5 lg:my-0">
              <h1 className="font-semibold">Immersive Sound</h1>
              <p className="w-[400px] tracking-wide">
                A 22-speaker, 960-watt audio system with Active Road Noise
                Reduction offers immersive listening and studio-grade sound
                quality.
              </p>
            </div>
          </div>
          <div className=" flex items-center lg:flex-row-reverse flex-col">
            <img
              src={thirdRed_car}
              className="w-[550px] lg:w-[550px] md:min-w-[600px]"
            />
            <div className="w-[550px] lg:mr-[120px] space-y-3 ml-24 my-5 lg:my-0">
              <h1 className="font-semibold">Room for Everything</h1>
              <p className="w-[400px] tracking-wide">
                With front and rear trunks and fold-flat seats you can fit your
                bike without taking the wheel off—and your luggage too. Compare
                Models
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* tesla video */}
      <section>
        <div className="flex flex-col xl:flex-row">
          <div className="relative">
            <video
              src={tesla_video}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              onEnded={handleVideoEnd}
              className=" max-h-[700px]"
            />
            <div className=" absolute bottom-5 lg:bottom-12 flex left-1/2 transform -translate-x-1/2 text-white  text-center">
              <div className="md:w-[250px]">
                <h1 className="text-[24px] font-semibold">402 mi</h1>
                <h1 className="text-[14px hidden lg:block">
                  Go anywhere with up to 402 miles of estimated range on a
                  single charge
                </h1>
              </div>
              <div className="md:w-[250px]">
                <h1 className="text-[24px] font-semibold"> 15 min</h1>
                <h1 className="text-[14px] hidden lg:block">
                  Recharge up to 200 miles in 15 minutes at Supercharger
                  locations
                </h1>
              </div>
              <div className="md:w-[250px]">
                <h1 className="text-[24px] font-semibold">50,000 +</h1>
                <h1 className="text-[14px] hidden lg:block">
                  Superchargers placed along popular routes
                </h1>
              </div>
            </div>
          </div>
          <div className="xl:w-[20%] mt-10 ml-10 flex flex-col justify-between">
            <div>
              <h1 className="text-[17px]">Range</h1>
              <h1 className="text-[28px] font-semibold">Go Anywhere</h1>
              <p className="text-[14px] text-customGrayLight mt-5">
                With up to 402 miles of estimated range and access to the
                world’s largest and most powerful fast charging network, you’ll
                spend less time plugged in and more time on the road. Chat with
                a Tesla Advisor to learn more about Model S or schedule a demo
                drive today.
              </p>
            </div>
            <div className="mb-10 space-y-5">
              <button className="md:w-[336px] w-[200px] h-[40px] rounded-[5px] text-[14px] border-[3px] border-black hover:bg-black hover:text-white duration-500 ">
                Order Now
              </button>
              <button className="md:w-[336px] w-[200px] h-[40px] rounded-[5px] text-[14px] bg-[#eaeaea] hover:bg-[#d5d5d5] duration-500">
                Find My Route
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* map section */}
      <section>
        <div className=" ">
          <div className="lg:ml-[200px] px-5 mt-[150px]">
            <h1 className="text-[28px] font-semibold">Freedom to Travel</h1>
            <p className="text-[13px] font-semibold text-customGray mt-4">
              Enter a destination on your touchscreen and Trip Planner will
              automatically calculate your route with Superchargers along the
              way.
            </p>
          </div>
          <div className="xl:mx-20 mt-20">
            <img
              src={
                mapIndex === 0
                  ? firstMap
                  : mapIndex === 1
                  ? secondMap
                  : mapIndex === 2
                  ? thirdMap
                  : fourthMap
              }
            />
          </div>
          <div className="space-x-10 xl:mx-20 mt-10 flex flex-wrap justify-center font-semibold">
            <div
              onClick={() => HandleMapIndex(0)}
              className={` top-underline cursor-pointer w-[250px] md:ml-0 ml-10 md:w-[300px] duration-500   ${
                mapIndex === 0 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="text-[17px]">San Francisco to Los Angeles</h1>
              <h1 className="text-[25px]">383 miles</h1>
            </div>
            <div
              onClick={() => HandleMapIndex(1)}
              className={` top-underline cursor-pointer w-[250px] md:w-[300px]  duration-500   ${
                mapIndex === 1 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="text-[17px]">Berkeley to Lake Tahoe</h1>
              <h1 className="text-[25px]"> 178 miles</h1>
            </div>
            <div
              onClick={() => HandleMapIndex(2)}
              className={` top-underline cursor-pointer w-[250px] md:w-[300px]  duration-500   ${
                mapIndex === 2 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="text-[17px]">Manhattan to Boston</h1>
              <h1 className="text-[25px]"> 211 miles</h1>
            </div>
            <div
              onClick={() => HandleMapIndex(3)}
              className={` top-underline cursor-pointer w-[250px] md:w-[300px]  duration-500   ${
                mapIndex === 3 ? "text-[#171A20] top-under" : "text-[#bbbbbb]"
              }`}
            >
              <h1 className="text-[17px]">Fort Lauderdale to Orlando</h1>
              <h1 className="text-[25px]"> 195 miles</h1>
            </div>
            <div className="text-center mt-[100px]">
              <button className="w-[250px] h-[40px] rounded-[5px]  text-[14px] border-[3px] border-black hover:bg-black hover:text-white duration-500 ">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* location */}
      <section>
        <div className="mt-[200px] ">
          <div className="flex mx-[100px] justify-between">
            <div>
              <h1 className="text-[28px] font-semibold">Demo Drive Model S</h1>
              <h1 className="text-[13px] font-semibold text-customGrayLight mt-2">
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
            <div className="w-[800px] ">
              <img src={redCar} className="rounded-lg" />
            </div>
          </div>
          <div className="flex mx-3 md:ml-[100px] mt-[150px] flex-col">
            <div className=" w-[300px] md:w-[340px] flex flex-col justify-between">
              <div>
                <h1 className="text-[17px] text-customGray">Safety</h1>
                <h1 className="text-[28px] font-semibold">
                  High Impact Protection
                </h1>
                <h1 className="text-[14px] text-customGray  mt-6">
                  Model S is built from the ground up as an electric vehicle,
                  with a high-strength architecture and floor-mounted battery
                  pack for incredible occupant protection and low rollover risk.
                  Every new Model S includes Tesla’s latest active safety
                  features, such as Automatic Emergency Braking, at no extra
                  cost.
                </h1>
              </div>
              <div className="mb-10 space-y-5">
                <button className="md:w-[336px] w-[300px] h-[40px] rounded-[5px] text-[14px] border-[3px] border-black hover:bg-black hover:text-white duration-500 ">
                  Order Now
                </button>
                <button className="md:w-[336px] w-[300px] h-[40px] rounded-[5px] text-[14px] bg-[#eaeaea] hover:bg-[#d5d5d5] duration-500">
                  Demo Drive
                </button>
              </div>
            </div>
            <div>
              <img src={carBody} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* car Map */}
      <section>
        <div className="mt-[50px]">
          <div className="relative w-full overflow-hidden h-[450px]">
            <img src={carMap} className="object-cover w-full h-full" />
            <div className="absolute top-8 left-20 flex flex-col space-y-12  font-semibold">
              <div className="md:w-[300px]">
                <h1 className="text-[24px]">360°</h1>
                <h1 className="text-[13px] text-customGrayLight">
                  Rear, side and forward-facing cameras provide maximum
                  visibility
                </h1>
              </div>
              <div className="md:w-[300px]">
                <h1 className="text-[24px]">250 m</h1>
                <h1 className="text-[13px] text-customGrayLight">
                  Powerful visual processing at up to 250 meters of range
                </h1>
              </div>
              <div className="md:w-[300px] pt-5">
                <h1 className="text-[24px]">360°</h1>
                <h1 className="text-[13px] text-customGrayLight">
                  Tesla Vision detects nearby cars, helps prevent potential
                  collisions and assists with parking
                </h1>
              </div>
            </div>
          </div>
          <div className="lg:px-[190px] px-5 flex flex-col space-x-5 pt-20 pb-[60px]">
            <div className=" capitalize">
              <h1 className="text-[17px]">Autopilot</h1>
              <h1 className="text-[28px] font-[550]">Future of Driving</h1>
              <div className="space-y-6 lg:space-x-5 lg:space-y-0 mt-5">
                <button className="text-[13px] font-semibold w-[204px] h-[40px] capitalize  rounded-[4px] border-black border-[3px] hover:bg-black hover:text-white duration-500">
                  order now
                </button>
                <button className="text-[13px] font-semibold w-[204px] h-[40px] capitalize  bg-[#efefef] rounded-[4px] hover:bg-[#d0d0d0]  duration-500">
                  Demo Drive
                </button>
              </div>
            </div>
            <div className="lg:w-[60%] text-[13px] font-semibold text-customGray tracking-wide">
              <h1>
                Autopilot enables your car to steer, accelerate and brake
                automatically within its lane under your active supervision,
                assisting with the most burdensome parts of driving. With
                over-the-air software updates, the latest enhancements are
                available instantly. Chat with a Tesla Advisor to learn more
                about Model S or schedule a demo drive today.
              </h1>
            </div>
          </div>
          <div className="lg:px-[190px] px-5 mt-10 ">
            <h1 className="text-[28px] font-semibold">Features</h1>
            <h1 className="text-[13px] font-semibold lg:w-[60%] text-customGrayLight mt-3">
              Full Self-Driving capability introduces additional features and
              improves existing functionality to make your vehicle more capable
              over time, including:
            </h1>
          </div>
        </div>
      </section>
      {/* parking Video */}
      <section>
        <div className="mt-20 relative overflow-hidden w-full h-[500px]">
          <div>
            <video
              src={`${
                ParkingIndex === 0
                  ? firstPark
                  : ParkingIndex === 1
                  ? secondPark
                  : ParkingIndex === 2
                  ? thirdPark
                  : fourthPark
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
        <div className="md:mx-[300px] mt-[50px] space-x-7 flex flex-wrap items-center justify-center gap-5 font-semibold">
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
            <img src={carSpec} />
          </div>
          <div className="  lg:mx-20 mx-10 flex pt-10 text-[13px] space-x-3">
            <div>
              <button
                className={`cursor-pointer md:w-[242px] lg:w-[200px] xl:w-[300px]  w-[100px] text-[12px] font-semibold py-1 rounded-md border-[3px] duration-500  h-[32px] border-white`}
              >
                Model X Plaid
              </button>

              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Range (EPA est.)</h1>
                <h1> 355 mi</h1>
              </div>
              <div>
                <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
                <h1 className=" font-semibold">1/4 Mile</h1>
                <h1> 9.9 s</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Peak Power</h1>
                <h1> 597 hp</h1>
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
                <h1> up to 10</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Weight (Curb Mass)</h1>
                <h1>5,248 lbs</h1>
              </div>
            </div>
            <div className="max-w-[100px]">
              <button
                className={`cursor-pointer  md:w-[242px] lg:w-[200px] xl:w-[300px] w-[100px] text-[12px] font-semibold py-1 rounded-md duration-500 border-[3px]  text-center h-[32px] 
                 border-white`}
              >
                Model X
              </button>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">*Acceleration</h1>
                <h1 className="">3.8 s 0-60 mph with rollout subtracted</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Top Speed</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Drag Coefficient</h1>
                <h1>0.24 Cd</h1>
              </div>
              <div className="border-[1px] border-[#646464] w-[30px] my-6 h-[1px]"></div>
              <div>
                <h1 className=" font-semibold">Powertrain</h1>
                <h1> dual monitor</h1>
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
        <div className="relative w-full overflow-hidden h-[800px]">
          <img src={lastCar} className="object-cover w-full h-full" />
          <div className="absolute bottom-[150px] text-white text-center font-semibold left-1/2 transform -translate-x-1/2">
            <h1 className="text-[34px]">Model S</h1>
            <p className="text-[13px]">
              Design yours or get a trade-in estimate for your current vehicle.
            </p>
            <div className="lg:space-x-5 mt-4 space-y-3 lg:space-y-0 space-x-0">
              <button className="w-[204px] h-[40px] capitalize text-[13px] bg-[#4c70ff] duration-500 rounded-[5px] hover:bg-[#5040ff]">
                order now
              </button>
              <button className="w-[204px] h-[40px] capitalize text-[13px] bg-[#232323] duration-500 rounded-[5px] hover:bg-[#525252]">
                get an estimate
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ModelS;
