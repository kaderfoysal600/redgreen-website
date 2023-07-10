import "./Hero.css";

import bannerHerro2 from "../../../src/assets/article/FreeBook-a1_01.jpg";

import product1 from "../../../src/assets/mobile/10T-pc.png.thumb.webp";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = (productData: any) => {
  const [data, setData] = useState([]);
  const fiteredProducts = productData.data.products.filter((item: any) => {
    return item.category == "Phone" || item.category == "Tv";
  });

  useEffect(() => {
    setData(fiteredProducts);
    console.log("fiteredProducts", fiteredProducts);
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
        {data.map((item: any) => {
          return (
            <div className="section-2-card lg:gap-y-4 bg-[#dfd5d5] p-4 rounded-md">
              <div className="section-2-1 flex flex-col justify-between ">
                <div className="section-2-left-top">
                  <p className="text-2xl lg:mb-2">With Free Gift</p>
                  <h2 className="text-4xl truncate max-w-[400px] overflow-hidden">
                    {item.name} <span>5G</span>
                  </h2>
                </div>
              </div>
              <div className="section-2-2 flex flex-col gap-3 justify-end">
                <p className="text-base flex items-center gap-4">
                  <span className="text-red-600">Up to 31% OFF</span>{" "}
                  <span className="text-[rgba(0,0,0,.78)]">with RedCoins</span>
                </p>
                <p className="text-base">{item.short_description}</p>
                <p className="text-xl font-medium">
                  From <span>$649.00</span>
                </p>
                <div className="btn1 flex items-center gap-2">
                  <Link to={`/product-details/${item.slug}`}>
                    <button className="btn btn-neutral">Buy Now</button>
                  </Link>
                  <Link to={`/product-details/${item.slug}`}>
                    <button className="btn btn-outline">Learn More</button>
                  </Link>
                </div>
              </div>
              <div className="section-2-3">
                <div className="max-w-[350px] m-auto overflow-hidden">
                  {item.image ? (
                    <img
                      className="hover:scale-110 w-full min-w-[200px] transition duration-500 cursor-pointer object-cover"
                      src={item.image[0]}
                      alt=""
                    />
                  ) : (
                    <img
                      className="hover:scale-110 w-full min-w-[200px] transition duration-500 cursor-pointer object-cover"
                      src={product1}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
