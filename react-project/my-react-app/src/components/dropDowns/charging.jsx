import chargingData from "../data/chargingData";

const StyleButton = ({ index }) => {
  if (index === 1) {
    return (
      <>
        <button className="underline capitalize text-[14px] tracking-[0.020rem] font-customUniverse">learn</button>
        <button className="underline capitalize text-[14px] tracking-[0.020rem] font-customUniverse">shop</button>
      </>
    );
  } else if (index === 2) {
    return (
      <>
        <button className="underline capitalize text-[14px] tracking-[0.020rem]">learn</button>
        <button className="underline capitalize text-[14px] tracking-[0.020rem]">find</button>
      </>
    );
  } else {
    return <button className="underline capitalize text-[14px] tracking-[0.020rem]">learn</button>;
  }
};

const Charging = () => {
  return (
    <div className="bg-white flex -mt-12 pt-[150px] pb-[75px] justify-center">
      <div className="flex max-w-[650px] -ml-[100px]">
        {chargingData.map((data, index) => (
          <div
            key={index}
            className="text-center capitalize font-universal tracking-wide space-y-2"
          >
            <img src={data.img} alt={data.name} className="px-5" />
            <h1 className="text-[17px] font-semibold">{data.name}</h1>
            <div className="space-x-3 text-customButtonColor ">
              <StyleButton index={index} />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[2px] bg-customDivider ml-[40px] mr-[60px]"></div>
      <div className="space-y-3 text-[14px] font-semibold">
        <h1>Help Me Charge</h1>
        <h1>Charging Calculator</h1>
        <h1>Charging With NACS</h1>
        <h1>Supercharger Voting</h1>
        <h1>Host a Supercharger</h1>
        <h1>Commercial Charging</h1>
        <h1>Host Wall Connectors</h1>
      </div>
    </div>
  );
};

export default Charging;
