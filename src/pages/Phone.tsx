import DeviceBanner from "../component/DeviceBanner/DeviceBanner";
import DeviceProduct from "../component/DeviceProduct/DeviceProduct";
import DeviceService from "../component/DeviceService/DeviceService";
import { useEffect, useState } from "react";
import { products } from "../product.json";

const Phone = () => {
  console.log("products", products);

  const [data, setData] = useState([]);
  let arr: any = [];
  const filteredProducts = products.filter((item: any) => {
    arr = [item];
    return item.category === "Phone";
  });
  useEffect(() => {
    setData(arr);
    console.log("filteredProducts", data);
  }, []);
  return (
    <div>
      {/* <Banner /> */}
      <DeviceBanner />
      <DeviceProduct />
      <DeviceService></DeviceService>
    </div>
  );
};

export default Phone;
