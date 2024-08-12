import Cyber_Data from "../../cartypeData.jsx/cyber_data";

const Video_page = () => {
  return (
    <section className=" bg-black relative ">
      <div className="color-transparent-top h-[150px] w-full absolute top-[-100px] text-white left-1/2 transform -translate-x-1/2"></div>
      <div className="h-screen mx-[110px] py-[200px] bg-black">
        <video
          src={Cyber_Data[0].video}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      </div>
      <div className="uppercase font-semibold mx-[150px] space-x-10 mt-[150px] flex items-center">
        <h1 className="text-[#aeaaaa] text-[18px]">Built For</h1>
        <h1 className="text-[#b7b3b3] text-[28px]">Any Planet</h1>
        <h1 className="text-[#858181] w-[850px] tracking-wider text-[13px] ">
          Durable and rugged enough to go anywhere. Tackle anything with
          electronically adaptive air suspension that offers 12” of travel and
          16” of clearance.
        </h1>
      </div>
      <div className="bg-black text-[14px] px-[210px] pt-[200px] text-white  pb-[90px]">
        <div className=" flex">
          <video
            src={Cyber_Data[1].video}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-[600px] h-[600px] object-cover"
          />
          <div className="w-[550px] ml-[120px] space-y-3 uppercase">
            <h1 className=" text-[#b7b3b3] text-[28px]">No Paint, No Chips</h1>
            <p className="w-[400px] text-[13px] font-semibold text-[#858181] tracking-[0.09rem]">
              An ultra-hard stainless-steel exoskeleton helps to reduce dents,
              damage and long-term corrosion. Repairs are simple and quick.
            </p>
          </div>
        </div>

        <div className=" flex flex-row-reverse items-end ">
          <video
            src={Cyber_Data[2].video}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-[600px] h-[600px] object-cover"
          />
          <div className="w-[550px] ml-[120px] space-y-3 text-right uppercase mb-10">
            <h1 className=" text-[#b7b3b3] text-[28px] pr-[70px]">
              Shatter-Resistant
            </h1>
            <p className="w-[400px] text-[13px] font-semibold text-[#858181] tracking-[0.09rem] ">
              Armor Glass can resist the impact of a baseball at 70 mph or class
              4 hail. Acoustic glass helps make the cabin as quiet as outer
              space.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-[110px]">
        <video
          src={Cyber_Data[3].video}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      </div>
      <div className="uppercase font-semibold mx-[150px] space-x-10 mt-[50px] flex items-center">
        <h1 className="text-[#aeaaaa] text-[18px]">Beyond</h1>
        <h1 className="text-[#b7b3b3] text-[28px]">Prepared</h1>
        <h1 className="text-[#858181] w-[850px] tracking-[0.08rem] text-[13px] ">
          Haul everything you need with 2,500 pounds payload and 11,000 pounds
          towing capacity—the equivalent of an average African elephant. The
          super-tough composite bed doesn’t need a liner and is big enough for
          4'x8’ construction materials.
        </h1>
      </div>
    </section>
  );
};
export default Video_page;
