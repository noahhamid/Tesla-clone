
import shopData from "../../data/shopData";

const MobileShop = () => {
  return (
    <section className="bg-white pb-20">
      <div className="flex flex-wrap center justify-center  gap-6 text-center capitalize px-[30px]  pt-[100px]">
        {shopData.map((data, index) => (
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
    </section>
  );
};
export default MobileShop;
