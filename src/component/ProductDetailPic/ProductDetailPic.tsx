import { useState } from "react";

const ProductDetailPic = ({ product }: any) => {
  console.log("product123", product);

  const [images] = useState({
    img1: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641441332.80624656.png",
    img2: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641441341.06699115.png",
    img3: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641485855.26112991.png",
    img4: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1641485803.86155485.png",
  });

  const [images2] = useState({
    img1: `${product.image[0]}`,
    img2: `${product.image[1]}`,
    img3: `${product.image[2]}`,
    img4: `${product.image[3]}`,
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [activeImg2, setActiveImage2] = useState(images2.img1);

  return (
    <div>
      {product.image ? (
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg2}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl max-w-[400px] m-auto"
          />
          <div className="flex flex-row justify-between h-24 max-w-[500px] m-auto w-full">
            <img
              src={images2.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage2(images2.img1)}
            />
            <img
              src={images2.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage2(images2.img2)}
            />
            <img
              src={images2.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage2(images2.img3)}
            />
            <img
              src={images2.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage2(images2.img4)}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="w-full h-full aspect-square object-cover rounded-xl max-w-[400px] m-auto"
          />
          <div className="flex flex-row justify-between h-24 max-w-[500px] m-auto w-full">
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPic;
