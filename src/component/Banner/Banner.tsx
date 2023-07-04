import Slider from "react-slick";
import "./Banner.css";
import phoneBanner1 from "../../assets/banner-image/phone_banner1.jpg";
import phoneBanner2 from "../../assets/banner-image/phone_banner_2.jpg";
import phoneBanner3 from "../../assets/banner-image/phone_banner3.jpg";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="wrapper">
      <Slider {...settings}>
        <div>
          <img src={phoneBanner1} alt="" />
        </div>
        <div>
          <img src={phoneBanner2} alt="" />
        </div>
        <div>
          <img src={phoneBanner3} alt="" />
        </div>
        <div>
          <img src={phoneBanner1} alt="" />
        </div>
        <div>
          <img src={phoneBanner1} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
