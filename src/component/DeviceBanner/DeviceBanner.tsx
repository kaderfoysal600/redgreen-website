// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../theme/_swipper.scss";
import "./DeviceBanner.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import phoneBanner1 from "../../assets/banner-image/phone_banner1.jpg";
import phoneBanner2 from "../../assets/banner-image/phone_banner_2.jpg";
import phoneBanner3 from "../../assets/banner-image/phone_banner3.jpg";
const DeviceBanner = () => {
  return (
    <div className="swiper-container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="swiper-banner mySwiper"
      >
        <SwiperSlide>
          <div className="slider-elm relative">
            <img src={phoneBanner1} alt="" />
            <div className="banner-text  pt-8 absolute lg:bottom-[20%] bottom-[15%] lg:left-[10%] left-[5%] px-4 py-3 flex  justify-center flex-col gap-2">
              <h6 className="lg:text-2xl text-xl text-slate-200 ">
                Max Performance, Max Storage
              </h6>
              <h2 className="lg:text-5xl text-3xl font-medium text-slate-200">
                Redmi 12C
              </h2>
              <h4 className="text-slate-200 lg:text-2xl text-xl lg:mt-4 mt-2">
                Get Cart Discount of ₹600 <br />
                From ₹7,899*
              </h4>

              <div className="flex items-center gap-2">
                <button className="mt-4 btn text-base px-8 font-medium bg-white">
                  Buy Now
                </button>
                {/* <a
                  href=""
                  className="text-[#2997ff] hover:underline underline-offset-4"
                >
                  {" Learn More >"}
                </a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-elm relative">
            <img src={phoneBanner2} alt="" />
            <div className="banner-text  pt-8 absolute lg:bottom-[20%] bottom-[15%] lg:left-[10%] left-[5%] px-4 py-3 flex  justify-center flex-col gap-2">
              <h6 className="lg:text-2xl text-xl text-slate-200 ">
                Max Performance, Max Storage
              </h6>
              <h2 className="lg:text-5xl text-3xl font-medium text-slate-200">
                Redmi 12C
              </h2>
              <h4 className="text-slate-200 lg:text-2xl text-xl lg:mt-4 mt-2">
                Get Cart Discount of ₹600 <br />
                From ₹7,899*
              </h4>

              <div className="flex items-center gap-2">
                <button className="mt-4 btn text-base px-8 font-medium bg-white">
                  Buy Now
                </button>
                {/* <a
                  href=""
                  className="text-[#2997ff] hover:underline underline-offset-4"
                >
                  {" Learn More >"}
                </a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-elm relative">
            <img src={phoneBanner3} alt="" />
            <div className="banner-text  pt-8 absolute lg:bottom-[20%] bottom-[15%] lg:left-[10%] left-[5%] px-4 py-3 flex  justify-center flex-col gap-2">
              <h6 className="lg:text-2xl text-xl text-slate-200 ">
                Max Performance, Max Storage
              </h6>
              <h2 className="lg:text-5xl text-3xl font-medium text-slate-200">
                Redmi 12C
              </h2>
              <h4 className="text-slate-200 lg:text-2xl text-xl lg:mt-4 mt-2">
                Get Cart Discount of ₹600 <br />
                From ₹7,899*
              </h4>

              <div className="flex items-center gap-2">
                <button className="mt-4 btn text-base px-8 font-medium bg-white">
                  Buy Now
                </button>
                {/* <a
                  href=""
                  className="text-[#2997ff] hover:underline underline-offset-4"
                >
                  {" Learn More >"}
                </a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-elm relative">
            <img src={phoneBanner1} alt="" />
            <div className="banner-text  pt-8 absolute lg:bottom-[20%] bottom-[15%] lg:left-[10%] left-[5%] px-4 py-3 flex  justify-center flex-col gap-2">
              <h6 className="lg:text-2xl text-xl text-slate-200 ">
                Max Performance, Max Storage
              </h6>
              <h2 className="lg:text-5xl text-3xl font-medium text-slate-200">
                Redmi 12C
              </h2>
              <h4 className="text-slate-200 lg:text-2xl text-xl lg:mt-4 mt-2">
                Get Cart Discount of ₹600 <br />
                From ₹7,899*
              </h4>

              <div className="flex items-center gap-2">
                <button className="mt-4 btn text-base px-8 font-medium bg-white">
                  Buy Now
                </button>
                {/* <a
                  href=""
                  className="text-[#2997ff] hover:underline underline-offset-4"
                >
                  {" Learn More >"}
                </a> */}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DeviceBanner;
