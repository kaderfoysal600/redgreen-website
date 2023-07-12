import ProductDetailPic from "../ProductDetailPic/ProductDetailPic";

const ProductDetails = ({ product }: any) => {
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center mt-4">
      <ProductDetailPic key={product.id} product={product} />
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">
            Special Features
          </span>
          <h1 className="text-3xl font-bold">Xiomi 11i 3</h1>
        </div>
        <p className="text-gray-700">{product?.detailed_information}</p>
        <h6 className="text-2xl font-semibold">$ {product.price}</h6>
        <div className="flex flex-row items-center gap-12">
          {/* <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div> */}
          {/* <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Buy Now</button> */}
          {/* Open the modal using ID.showModal() method */}
          <button
            className="btn bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
            onClick={() => (window as any).my_modal_1.showModal()}
          >
            Buy Now
          </button>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              {/* xs */}

              <p className="p-4"> Name</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />

              <p className="p-2"> Address</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />
              <p className="p-2"> Email</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />
              <p className="p-2">Product Quantity</p>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs "
              />

              {/* md */}
              {/* <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs pt-2" /> */}

              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
