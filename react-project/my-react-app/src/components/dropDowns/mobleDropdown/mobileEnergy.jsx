import EnergyData from "../../data/energyData";

const MobileEnergy = () => {
  return (
    <section className="bg-white">
     
      <div className="flex flex-wrap center  gap-6 text-center justify-center capitalize px-[30px]  pt-[100px]">
        {EnergyData.map((data, index) => (
          <div key={index}>
            <img src={data.img} className="w-[220px]" />
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
        <h1>Schedule a Consultation</h1>
        <h1>Why Solar</h1>
        <h1>Incentives</h1>
        <h1>Support</h1>
        <h1>Partner with Tesla</h1>
        <h1>Commercial</h1>
        <h1>Utilities</h1>
      </div>
    </section>
  );
};
export default MobileEnergy;
