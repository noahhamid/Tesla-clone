  import Nav from "../../navbar";
  import MobileNav from "../../mobileNav";
  import Cyber_Data from "../../cartypeData.jsx/cyber_data";
  import cyberLogo from "../../images/carTypes/cyberTruck/cyberLogo.png";
  import Video_page from "./videoPage";

  const Cyber_truck = () => {
    return (
      <section>
        {/* nav */}
       
        <div className="absolute top-0 left-0 w-full  z-50 lg:hidden">
        <MobileNav />
      </div>
      <div className="absolute top-0 left-0 w-full z-50 hidden lg:block">
        <Nav />
      </div>
        <div>
          <div>
            <img
              src={Cyber_Data[0].img}
              className="h-screen w-full object-cover"
            />
            <img
              src={cyberLogo}
              className="absolute top-[160px] left-1/2 transform -translate-x-1/2 w-[433px]"
            />
            <button className="uppercase absolute bottom-[80px]  left-1/2 transform -translate-x-1/2 tracking-wide text-[13px] font-semibold border-t-[3px] border-[#7f7b7b] text-[#a09a9a] w-[200px] h-[42px] bg-[#0000008b] hover:bg-[#2c2b2b8b] duration-500">
              order now
            </button>
          </div>
        </div>
        <section>
          <div className="relative">
            <img
              src={Cyber_Data[1].img}
              className="h-screen w-full object-cover"
            />
            <div className="absolute z-10 bottom-[70px] uppercase space-x-[50px] flex left-1/2 transform -translate-x-1/2 flex-col lg:flex-row items-center justify-center gap-5">
              <div className="bg-[#242323bc] text-[#a09a9a] tracking-wide font-semibold w-[153px] h-[72px] text-center border-r-[3px] border-t-[3px] border-[#b8b4b4]">
                <h1 className="text-[28px] text-[#b2adad] ">
                  11,000 <span className="font-normal text-[23px]">lbs</span>
                </h1>
                <h1 className="text-[13px]">Towing Capacity</h1>
              </div>
              <div className="bg-[#242323bc] text-[#a09a9a] tracking-wide font-semibold w-[153px] h-[72px] text-center border-t-[3px] border-[#b8b4b4]">
                <h1 className="text-[28px] text-[#b2adad] ">
                  340 <span className="font-normal text-[23px]">miles¹</span>
                </h1>
                <h1 className="text-[13px]">Est. Range</h1>
              </div>
              <div className="bg-[#242323bc] text-[#a09a9a] tracking-wide font-semibold w-[153px] h-[72px] text-center border-l-[3px] border-t-[3px] border-[#b8b4b4]">
                <h1 className="text-[28px] text-[#b2adad] ">
                  2.6 <span className="font-normal text-[23px]">Sec²</span>
                </h1>
                <h1 className="text-[13px]">0-60 mph</h1>
              </div>
            </div>
          </div>
        </section>
        {/* video page */}
        <div>
        <Video_page/>
          
        </div>
      </section>
    );
  };
  export default Cyber_truck;
