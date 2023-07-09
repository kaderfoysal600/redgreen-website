import "./Hero.css";

import bannerHerro2 from "../../../src/assets/article/FreeBook-a1_01.jpg";

import product1 from "../../../src/assets/mobile/10T-pc.png.thumb.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = (productData: any) => {
  const [data, setData] = useState([]);
  // console.log(data);
  useEffect(() => {
    productData.data.products.map((item: any) => {
      if (item.category === "Phone") {
        setData(item);
        console.log(data);
      }
      console.log("item.products.phone,", item);
    });
  }, []);

  return (
    <div>
      <div>
        <div
          style={{ backgroundImage: `url(${bannerHerro2})` }}
          className="bg-no-repeat bg-cover bg-center h-[300px] lg:h-[calc(100vh-64px)]  w-full relative border-b-4 border-[#222]"
        >
          <div className="pt-8 absolute top-0 text-center px-4 py-3 w-full flex items-center justify-center flex-col gap-0 lg:gap-2">
            <h1 className="text-white font-semibold text-2xl lg:text-4xl">
              {" "}
              NEW RAZER BLADE 14{" "}
            </h1>
            <p className="text-gray-200">SMALL SIZE. BIG PERFORMANCE.</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href=""
                className="text-[#2997ff] hover:underline underline-offset-4"
              >
                {" Learn More >"}
              </a>
              <a
                href=""
                className="text-[#2997ff]  hover:underline underline-offset-4"
              >
                {" Buy >"}
              </a>
            </div>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: `url(${bannerHerro2})` }}
          className="bg-no-repeat bg-cover bg-center h-[100vh] w-full relative border-b-4 border-[#222]"
        >
          <div className="pt-16 absolute top-0 text-center px-4 py-3 w-full flex items-center justify-center flex-col gap-2">
            <h1 className="text-white font-semibold text-4xl">
              {" "}
              NEW RAZER BLADE 16 & 18 MERCURY{" "}
            </h1>
            <p className="text-gray-200">PERFORMANCE REIMAGINED</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href=""
                className="text-[#2997ff] hover:underline underline-offset-4"
              >
                {" Learn More >"}
              </a>
              <a
                href=""
                className="text-[#2997ff]  hover:underline underline-offset-4"
              >
                {" Buy >"}
              </a>
            </div>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${bannerHerro3})` }}
          className="bg-no-repeat bg-cover bg-center h-[100vh] w-full relative border-b-4 border-[#222]"
        >
          <div className="pt-16 absolute top-0 text-center px-4 py-3 w-full flex items-center justify-center flex-col gap-2">
            <h1 className="text-white font-semibold text-4xl">
              {" "}
              NEW RAZER BLADE 14{" "}
            </h1>
            <p className="text-gray-200">SMALL SIZE. BIG PERFORMANCE.</p>
            <div className="flex items-center justify-center gap-4">
              <a
                href=""
                className="text-[#2997ff] hover:underline underline-offset-4"
              >
                {" Learn More >"}
              </a>
              <a
                href=""
                className="text-[#2997ff]  hover:underline underline-offset-4"
              >
                {" Buy >"}
              </a>
            </div>
          </div>
        </div> */}
      </div>
      <div className="container m-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-10 px-4 pb-8">
        {}
      </div>
    </div>
  );
};

export default Hero;
