import DeviceBanner from "../component/DeviceBanner/DeviceBanner";
import DeviceProduct from "../component/DeviceProduct/DeviceProduct";
import DeviceService from "../component/DeviceService/DeviceService";
import { products } from "../product.json";

const Accessories = () => {
  console.log("products", products);
  const filteredProducts = products.filter((item: any) => {
    return item.category === "Accessories";
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

export default Accessories;
