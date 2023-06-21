import Slider from "react-slick";
import "./Banner.css";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 2,
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
          <img src="../../../src/assets/banner-image/banner1.jpg" alt="" />
        </div>
        <div>
          <img src="../../../src/assets/banner-image/banner-2.jpg" alt="" />
        </div>
        <div>
          <img src="../../../src/assets/banner-image/banner-3.jpg" alt="" />
        </div>
        <div>
          <img src="../../../src/assets/banner-image/banner4.jpg" alt="" />
        </div>
        <div>
          <img src="../../../src/assets/banner-image/banner-5.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
