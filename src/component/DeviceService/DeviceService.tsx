import phone1 from "../../assets/article/mi-ready.png";
const DeviceService = () => {
  return (
    <div className="mt-4">
      <div className="top-title text-center py-4 ">
        <h2 className="text-2xl">Our Services</h2>
        <p className="text-sm">trust secure & smooth</p>
      </div>
      <div className="mt-6 grid lg:grid-cols-2 grid-cols-1 gap-4 container m-auto ">
        <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 lg:p-16 p-4">
          <h2 className="text-2xl font-semibold text-center">
            Mi Screen Protect
          </h2>
          <p className="text-center">
            We are committed to provide the best <br /> quality at an honest
            price.{" "}
          </p>
          {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
          <img className="max-w-[250px] m-auto" src={phone1} alt="" />
        </div>
        <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 lg:p-16 p-4">
          <h2 className="text-2xl font-semibold text-center">
            Mi Complete Protect
          </h2>
          <p className="text-center">
            We are committed to provide the best <br /> quality at an honest
            price.{" "}
          </p>
          {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
          <img className="max-w-[250px] m-auto" src={phone1} alt="" />
        </div>
        <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 lg:p-16 p-4">
          <h2 className="text-2xl font-semibold text-center">
            Smartphone Quality
          </h2>
          <p className="text-center">
            We are committed to provide the best <br /> quality at an honest
            price.{" "}
          </p>
          {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
          <img className="max-w-[250px] m-auto" src={phone1} alt="" />
        </div>
        <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 lg:p-16 p-4">
          <h2 className="text-2xl font-semibold text-center">Mi Exchange</h2>
          <p className="text-center">
            We are committed to provide the best <br /> quality at an honest
            price.{" "}
          </p>
          {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
          <img className="max-w-[250px] m-auto" src={phone1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DeviceService;
