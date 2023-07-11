import { Link } from "react-router-dom";
import phone1 from "../../assets/mobile/pms_1641485803.86155485!348x348.png";

const DeviceProduct = ({ phoneProduct }: any) => {
  console.log("phoneProduct", phoneProduct);

  return (
    <div className="mt-6 grid lg:grid-cols-4 grid-cols-1 gap-4 container m-auto">
      {phoneProduct.map((item: any) => {
        return (
          <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-4 p-4">
            <h2 className="text-2xl text-center"> {item.name}</h2>
            <p className="text-center">{item.short_description}</p>
            <p className="text-base">
              From
              <span> {item.price} Taka</span>
            </p>
            <div className="buttons flex items-center justify-center gap-2">
              <Link to={`/product-details/${item.slug}`}>
                <a className="bg-black py-1 px-5 text-white text-sm w-full border-[1px] border-black rounded-[10px]">
                  Buy Now
                </a>
              </Link>

              <Link to={`/product-details/${item.slug}`}>
                <a className="px-5 py-1 bg-white text-black text-sm border-[1px] border-black rounded-[10px]">
                  Learn More
                </a>
              </Link>
              {/* <a
          href=""
          className="px-4 py-2 bg-white text-black border-[1px] border-black rounded-[10px]"
        >
          Learn More
        </a> */}
            </div>
            <img className="max-w-[250px] m-auto" src={phone1} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DeviceProduct;
