import "./Hero.css";
import bannerHerro1 from "../../../src/assets/banner-image/hero1.jpg";
import bannerHerro2 from "../../../src/assets/banner-image/hero2.jpg";
import bannerHerro3 from "../../../src/assets/banner-image/hero1.jpg";
const Hero = () => {
  return (
    <div>
      <div>
        <div
          style={{ backgroundImage: `url(${bannerHerro1})` }}
          className="bg-no-repeat bg-cover bg-center h-[500px] w-full relative border-b-4 border-[#222]"
        >
          <div className="pt-8 absolute top-0 text-center px-4 py-3 w-full flex items-center justify-center flex-col gap-2">
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
        </div>
        <div
          style={{ backgroundImage: `url(${bannerHerro2})` }}
          className="bg-no-repeat bg-cover bg-center h-[500px] w-full relative border-b-4 border-[#222]"
        >
          <div className="pt-8 absolute top-0 text-center px-4 py-3 w-full flex items-center justify-center flex-col gap-2">
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
          className="bg-no-repeat bg-cover bg-center h-[500px] w-full relative border-b-4 border-[#222]"
        >
          <div className="pt-8 absolute top-0 text-center px-4 py-3 w-full flex items-center justify-center flex-col gap-2">
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
        </div>
      </div>
      <div className="container m-auto grid grid-cols-2 gap-4 pt-10 px-4 pb-8">
        <div className="section-2-card flex gap-2 bg-[#f8f8f8] p-4 rounded-md">
          <div className="section-2-left flex flex-col justify-between ">
            <div className="section-2-left-top">
              <p>With Free Gift</p>
              <h2 className="text-4xl">
                OnePlus 10T <span>5G</span>
              </h2>
            </div>
            <div className="section-2-right-bottom flex flex-col gap-4">
              <p className="text-sm">
                <span> With GiftSave</span> <span>with RedCoins</span>
              </p>
              <p className="text-base">
                Buy OnePlus 10T 5G and claim a free gift. Limited amount
                available.
              </p>
              <p className="text-xl font-semibold">
                From <span>$649.00</span>
              </p>
              <div className="btn1 flex items-center gap-4">
                <div className="button" id="button-2">
                  <div id="slide"></div>
                  <a href="">Buy now</a>
                </div>
                <a href="" className="underline underline-offset-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="section-2-right">
            <div className="max-w-[350px] m-auto overflow-hidden">
              <img
                className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src="../../../src/assets/mobile/10T-pc.png.thumb.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="section-2-card flex gap-2 bg-[#f8f8f8] p-4 rounded-md">
          <div className="section-2-left flex flex-col justify-between ">
            <div className="section-2-left-top">
              <p>With Free Gift</p>
              <h2 className="text-4xl">
                OnePlus 10T <span>5G</span>
              </h2>
            </div>
            <div className="section-2-right-bottom flex flex-col gap-4">
              <p className="text-sm">
                <span> With GiftSave</span> <span>with RedCoins</span>
              </p>
              <p className="text-base">
                Buy OnePlus 10T 5G and claim a free gift. Limited amount
                available.
              </p>
              <p className="text-xl font-semibold">
                From <span>$649.00</span>
              </p>
              <div className="btn1 flex items-center gap-4">
                <div className="button" id="button-2">
                  <div id="slide"></div>
                  <a href="">Buy now</a>
                </div>
                <a href="" className="underline underline-offset-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="section-2-right">
            <div className="max-w-[350px] m-auto overflow-hidden">
              <img
                className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src="../../../src/assets/mobile/10T-pc.png.thumb.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="section-2-card flex gap-2 bg-[#f8f8f8] p-4 rounded-md">
          <div className="section-2-left flex flex-col justify-between ">
            <div className="section-2-left-top">
              <p>With Free Gift</p>
              <h2 className="text-4xl">
                OnePlus 10T <span>5G</span>
              </h2>
            </div>
            <div className="section-2-right-bottom flex flex-col gap-4">
              <p className="text-sm">
                <span> With GiftSave</span> <span>with RedCoins</span>
              </p>
              <p className="text-base">
                Buy OnePlus 10T 5G and claim a free gift. Limited amount
                available.
              </p>
              <p className="text-xl font-semibold">
                From <span>$649.00</span>
              </p>
              <div className="btn1 flex items-center gap-4">
                <div className="button" id="button-2">
                  <div id="slide"></div>
                  <a href="">Buy now</a>
                </div>
                <a href="" className="underline underline-offset-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="section-2-right">
            <div className="max-w-[350px] m-auto overflow-hidden">
              <img
                className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src="../../../src/assets/mobile/nord-buds-2-pc.png.thumb.webp"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="section-2-card flex gap-2 bg-[#f8f8f8] p-4 rounded-md">
          <div className="section-2-left flex flex-col justify-between ">
            <div className="section-2-left-top">
              <p>With Free Gift</p>
              <h2 className="text-4xl">
                OnePlus 10T <span>5G</span>
              </h2>
            </div>
            <div className="section-2-right-bottom flex flex-col gap-4">
              <p className="text-sm">
                <span> With GiftSave</span> <span>with RedCoins</span>
              </p>
              <p className="text-base">
                Buy OnePlus 10T 5G and claim a free gift. Limited amount
                available.
              </p>
              <p className="text-xl font-semibold">
                From <span>$649.00</span>
              </p>
              <div className="btn1 flex items-center gap-4">
                <div className="button" id="button-2">
                  <div id="slide"></div>
                  <a href="">Buy now</a>
                </div>
                <a href="" className="underline underline-offset-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="section-2-right">
            <div className="max-w-[350px] m-auto overflow-hidden">
              <img
                className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
                src="../../../src/assets/mobile/ej-pc.png.thumb.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
