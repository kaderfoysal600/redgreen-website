import DeviceBanner from "../component/DeviceBanner/DeviceBanner";
import DeviceProduct from "../component/DeviceProduct/DeviceProduct";
import DeviceService from "../component/DeviceService/DeviceService";
import { products } from "../product.json";

const Laptop = () => {
  console.log("products", products);
  const filteredProducts = products.filter((item: any) => {
    return item.category === "Laptop";
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

export default Laptop;
