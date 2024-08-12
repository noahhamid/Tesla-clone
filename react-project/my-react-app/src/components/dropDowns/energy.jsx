import EnergyData from "../data/energyData";

const ButtonGroup = ({ index }) => {
  return (
    <div className="space-x-3 text-customButtonColor font-customUniverse">
      <button className="underline capitalize text-[14px] tracking-[0.020rem]">
        learn
      </button>
      {index !== 3 && (
        <button className="underline capitalize text-[14px] tracking-[0.020rem]">
          order
        </button>
      )}
    </div>
  );
};

const EnergyItem = ({ data, index }) => {
  return (
    <div key={index} className="w-[16%] text-center space-y-1">
      <img src={data.img} alt={data.name} className="px-2" />
      <h1 className="capitalize font-semibold text-[17px]">{data.name}</h1>
      <ButtonGroup index={index} />
    </div>
  );
};

const Energy = () => {
  return (
    <div className="bg-white pt-[155px] pb-[70px] -mt-20 pl-[160px]">
      <div className="flex">
        {EnergyData.map((data, index) => (
          <EnergyItem key={index} data={data} index={index} />
        ))}
        <div className="w-[1px] ml-10 mr-14 bg-customDivider"></div>
        <div className="space-y-3 text-[14px] font-medium tracking-wide font-universal">
          <h1>Schedule a Consultation</h1>
          <h1>Why Solar</h1>
          <h1>Incentives</h1>
          <h1>Support</h1>
          <h1>Partner with Tesla</h1>
          <h1>Commercial</h1>
          <h1>Utilities</h1>
        </div>
      </div>
    </div>
  );
};

export default Energy;
