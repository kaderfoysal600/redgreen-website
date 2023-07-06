import blogImg1 from "../../../src/assets/article/card2pc.jpg.thumb.webp";
import blogImg2 from "../../../src/assets/article/card3pc.jpg.thumb.webp";
import blogImg3 from "../../../src/assets/article/pc.jpg.thumb.webp";
const Blog = () => {
  return (
    <div className="mt-12">
      <div className="container m-auto overflow-hidden px-4 blog-container grid lg:grid-cols-3 grid-cols-1 gap-8">
        <div className="blog-elm flex flex-col gap-2">
          <div className="max-w-[500px] m-auto  overflow-hidden">
            <img
              className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={blogImg1}
              alt=""
            />
          </div>
          <h1 className="text-2xl">OnePlus 11 Ray Tracing Wallpaper</h1>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fug
          </p>
          <a href="" className="text-base underline underline-offset-4">
            Learn more
          </a>
        </div>
        <div className="blog-elm flex flex-col gap-2">
          <div className="max-w-[500px] m-auto  overflow-hidden">
            <img
              className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={blogImg2}
              alt=""
            />
          </div>
          <h1 className="text-2xl">OnePlus 11 Ray Tracing Wallpaper</h1>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fug
          </p>
          <a href="" className="text-base underline underline-offset-4">
            Learn more
          </a>
        </div>
        <div className="blog-elm flex flex-col gap-2">
          <div className="max-w-[500px] m-auto  overflow-hidden">
            <img
              className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={blogImg3}
              alt=""
            />
          </div>
          <h1 className="text-2xl">OnePlus 11 Ray Tracing Wallpaper</h1>
          <p className="line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fug
          </p>
          <a href="" className="text-base underline underline-offset-4">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
