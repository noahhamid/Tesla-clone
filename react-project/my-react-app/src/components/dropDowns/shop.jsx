import shopData from '../data/shopData'

const Shop = () => {
    return(
        <div className='flex bg-white -mt-20 pt-[155px] justify-center pb-[60px] space-x-3 text-center text-[17px] font-semibold tracking-wide capitalize'>
            {shopData.map((data,index)=>(
                <div key={index} className='w-[15%]'>
                    <img src={data.img} alt={data.name} />
                    <h1>{data.name}</h1>
                </div>
            ))}
        </div>
    )
};
export default Shop;
