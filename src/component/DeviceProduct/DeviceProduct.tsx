import phone1 from "../../assets/mobile/pms_1641485803.86155485!348x348.png";
import phone2 from "../../assets/mobile/pms_1650980933.40744791!348x348.jpg";
import phone3 from "../../assets/mobile/pms_1677241587.64975684!348x348.jpg";
const DeviceProduct = () => {
    return (
        <div className="mt-6">
            <div className="product-cared bg-white shadow-md flex flex-col items-center justify-center gap-2">
                <h2 className="text-4xl">Xiaomi 11i 5G</h2>
                <p>Special Exchange Bonus upto ₹10,000</p>
                <p className="text-lg">Xiaomi 11i 5G <span>₹29,999</span></p>
                <div className="buttons flex items-center justify-center gap-2">
                    <a href="" className="px-4 py-2 bg-black text-white rounded-[10px]">Buy now</a>
                    <a href="" className="px-4 py-2 bg-white text-black border-[1px] border-black rounded-[10px]">Learn More</a>
                </div>
                <img src={phone1} alt="" />
            </div>
        </div>
    );
};

export default DeviceProduct;