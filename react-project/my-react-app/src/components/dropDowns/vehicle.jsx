import VehicleData from "../data/vehicleData";
import { Link } from "react-router-dom";

const ButtonGroup = ({ index, data }) => {
  return (
    <div className="space-x-5 text-customButtonColor text-[14px] font-customUniverse">
      {index === 5 ? (
        <button className="underline hover:underline-offset-2 capitalize text-center">
          get started
        </button>
      ) : (
        <>
          <Link to={data.link} className="w-full">
            <button className="underline hover:underline-offset-2 capitalize text-center">
              learn
            </button>
          </Link>
          <button className="underline hover:underline-offset-2 capitalize text-center">
            order
          </button>
        </>
      )}
    </div>
  );
};

const VehicleItem = ({ data, index }) => {
  return (
    <div
      key={index}
      className="w-[24%] px-[8px] flex flex-col items-center space-y-2"
    >
      <Link to={data.link} className="w-full">
        <img src={data.img} alt={data.name} className="w-full h-auto" />
      </Link>

      <h1 className="capitalize font-semibold text-[17px]">{data.name}</h1>
      <ButtonGroup index={index} data={data} />
    </div>
  );
};

const DropDown = () => {
  return (
    <div className="bg-white -mt-[47px] flex pt-[200px] pb-10">
      <div className="flex flex-wrap ml-[160px] max-w-4xl">
        {VehicleData.map((data, index) => (
          <VehicleItem key={index} data={data} index={index} />
        ))}
      </div>
      <div className="w-2 bg-customDivider ml-[10px] mr-[60px]"></div>
      <ul className="list-none w-full font-semibold capitalize space-y-3 text-[14px]">
        <li>inventory</li>

        <li>used cars</li>
        <li>demo drive</li>
        <li>trade-in</li>
        <li>compare</li>
        <li>help me charge</li>
        <li>fleet</li>
        <li>semi</li>
        <li>roadster</li>
      </ul>
    </div>
  );
};

export default DropDown;
