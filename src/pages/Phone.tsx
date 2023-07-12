import DeviceBanner from "../component/DeviceBanner/DeviceBanner";
import DeviceProduct from "../component/DeviceProduct/DeviceProduct";
import DeviceService from "../component/DeviceService/DeviceService";
import { products } from "../product.json";

const Phone = () => {
  console.log("products", products);
  const filteredProducts = products.filter((item: any) => {
    return item.category === "Phone";
  });
  return (
    <div>
      {/* <Banner /> */}
      <DeviceBanner />
      <DeviceProduct phoneProduct={filteredProducts} />
      <DeviceService></DeviceService>
    </div>
  );
};

export default Phone;
