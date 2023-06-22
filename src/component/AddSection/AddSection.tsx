import addImage from "../../../src/assets/add/Largeproductcard_PC.jpg.thumb.webp";
export default function AddSection() {
  return (
    <div className="bg-black pt-4 px-4 pb-16">
      <div className="container mx-auto text-white">
        <p className="border-b-2 py-4 text-xl border-slate-200">
          OnePlus X Genshin Impact
        </p>
        <div className="add-hero pt-8 grid grid-cols-[28%_72%] justify-between">
          <div className="add-left flex flex-col justify-between">
            <h1 className="text-6xl">Limited Edition Box Coming Soon</h1>
            <div className="text-bottom flex flex-col gap-4">
              <p className="text-xl">
                Discover how OnePlus empowers you with burdenless technology.
              </p>
              <a href="" className="text-base underline underline-offset-4">
                Learn more
              </a>
            </div>
          </div>
          <div className="max-w-[850px] m-auto overflow-hidden">
            <img
              className="hover:scale-110 transition duration-500 cursor-pointer object-cover"
              src={addImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
