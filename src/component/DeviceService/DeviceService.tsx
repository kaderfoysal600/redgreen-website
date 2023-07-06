import phone1 from "../../assets/article/mi-ready.png";
const DeviceService = () => {
    return (
        <div className="mt-4">
            <div className="top-title text-center py-4 ">
                <h2 className="text-2xl">Our Services</h2>
                <p className="text-sm">trust secure & smooth</p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 container m-auto ">
            <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 p-16">
                <h2 className="text-2xl font-semibold">Mi Screen Protect</h2>
                <p className="text-center">We are committed to provide the best <br /> quality at an honest price. </p>
                {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
                <img className="max-w-[300px] m-auto" src={phone1} alt="" />
            </div>
            <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 p-16">
                <h2 className="text-2xl font-semibold">Mi Complete Protect</h2>
                <p className="text-center">We are committed to provide the best <br /> quality at an honest price. </p>
                {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
                <img className="max-w-[300px] m-auto" src={phone1} alt="" />
            </div>
            <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 p-16">
                <h2 className="text-2xl font-semibold">Smartphone Quality</h2>
                <p className="text-center">We are committed to provide the best <br /> quality at an honest price. </p>
                {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
                <img className="max-w-[300px] m-auto" src={phone1} alt="" />
            </div>   
             <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2 p-16">
                <h2 className="text-2xl font-semibold">Mi Exchange</h2>
                <p className="text-center">We are committed to provide the best <br /> quality at an honest price. </p>
                {/* <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p> */}
                <img className="max-w-[300px] m-auto" src={phone1} alt="" />
            </div>
        </div>
        </div>
    );
};

export default DeviceService;