import DeviceBanner from "../component/DeviceBanner/DeviceBanner";
import DeviceProduct from "../component/DeviceProduct/DeviceProduct"
import DeviceService from "../component/DeviceService/DeviceService";

const Phone = () => {
  return (
    <div>
      {/* <Banner /> */}
      <DeviceBanner />
      <DeviceProduct/>
      <DeviceService></DeviceService>
    </div>
  );
};

export default Phone;
