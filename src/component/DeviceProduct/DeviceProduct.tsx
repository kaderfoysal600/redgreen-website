import { Link } from "react-router-dom";
import phone1 from "../../assets/mobile/pms_1641485803.86155485!348x348.png";

const DeviceProduct = ({ phoneProduct }: any) => {
  console.log("phoneProduct", phoneProduct);

  return (
    <div className="mt-6 grid lg:grid-cols-4 grid-cols-1 gap-8 container m-auto">
      {phoneProduct.map((item: any) => {
        return (
          <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-4 p-4">
            <h2 className="text-3xl">Xiaomi 11i 5G</h2>
            <p>{item.short_description}</p>
            <p className="text-lg">
              {item.name}
              <span>₹29,999</span>
            </p>
            <div className="buttons flex items-center justify-center gap-2">
              <Link to={`/product-details/${item.slug}`}>
                <button className="btn btn-neutral">Buy Now</button>
              </Link>

              <Link to={`/product-details/${item.slug}`}>
                <button className="btn btn-outline">Learn More</button>
              </Link>
              {/* <a
          href=""
          className="px-4 py-2 bg-white text-black border-[1px] border-black rounded-[10px]"
        >
          Learn More
        </a> */}
            </div>
            <img className="max-w-[300px] m-auto" src={phone1} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default DeviceProduct;
