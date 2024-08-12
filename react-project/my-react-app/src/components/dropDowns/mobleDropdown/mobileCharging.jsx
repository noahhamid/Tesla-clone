
import chargingData from "../../data/chargingData";

const MobileCharging = () => {
  return (
    <section className="bg-white">
      <div className="flex flex-wrap center  gap-6 text-center capitalize px-[30px] justify-center pt-[100px]">
        {chargingData.map((data, index) => (
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
        <h1>Help Me Charge</h1>
        <h1>Charging Calculator</h1>
        <h1>Charging With NACS</h1>
        <h1>Supercharger Voting</h1>
        <h1>Host a Supercharger</h1>
        <h1>Commercial Charging</h1>
        <h1>Host Wall Connectors</h1>
      </div>
    </section>
  );
};
export default MobileCharging;
