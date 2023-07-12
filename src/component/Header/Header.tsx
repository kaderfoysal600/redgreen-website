/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Header.css";
import logo from "/src/assets/brand/REDGREEN2.png";
import demoProduct from "../../../src/assets/product.webp";
import profile from "../../../src/assets/kaderfoysal.jpg";
import { Link } from "react-router-dom";
import { products } from "../../product.json";
import { useEffect, useState } from "react";
const Header = () => {
  const [phone, setPhone] = useState(products);
  const [laptop, setLaptop] = useState(products);
  const [tv, setTv] = useState(products);
  const [accessories, setAccessories] = useState(products);

  useEffect(() => {
    setPhone(products.filter((item) => item.category == "Phone"));
    setLaptop(products.filter((item) => item.category == "Laptop"));
    setTv(products.filter((item) => item.category == "Tv"));
    setAccessories(
      products.filter((item) => item.category == "Accessories").slice(0, 6)
    );
    console.log("phone", phone);
    console.log("laptop", laptop);
    console.log("tv", tv);
  }, []);

  return (
    <div className="navbar bg-base-100 border-b-[1px] border-[#eaeaea]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/laptop">
                <a>Laptop</a>
              </Link>
            </li>
            <li>
              <Link to="/phone">
                <a>Phone</a>
              </Link>
            </li>
            <li>
              <Link to="/tv">
                <a>Tv</a>
              </Link>
            </li>
            <li>
              <Link to="/accessories">
                <a>Accessories</a>
              </Link>
            </li>

            <li>
              <Link to="/offer">
                <a>Offers</a>
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-32 h-auto" alt="" />
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 flex items-center gap-8 ">
          <li className="group/item min-h-[38px] mt-5 hover:border-b-[2px] border-rose-600  cursor-pointer ">
            <Link to="/laptop">
              <a>Laptop</a>
            </Link>
            <div className="group-hover/item:visible group-hover/item:h-60 invisible h-0 w-full min-w-full series-slide absolute z-50 bg-white top-16 left-0  max-w-5xl pt-2 pb-8 border-b border-[#eaeaea] flex items-center justify-center">
              <div className="series-slide-card-container flex align-center justify-center gap-10">
                {laptop.map((item: any) => {
                  return (
                    <Link to={`/product-details/${item.slug}`}>
                      <div className="series-slide-card max-w-[230px] flex items-center flex-col justify-center">
                        {item?.image.length === 0 ? (
                          <img
                            className="max-w-[130px] object-cover"
                            src={demoProduct}
                            alt=""
                          />
                        ) : (
                          <img
                            className="max-w-[130px] object-cover"
                            src={item.image[0]}
                            alt=""
                          />
                        )}
                        <div className="text-center font-medium text-sm">
                          {item?.name}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li className="group/item min-h-[38px] mt-5 hover:border-b-[2px] border-rose-600  cursor-pointer ">
            <Link to="/phone">
              <a>Phone</a>
            </Link>
            <div className="group-hover/item:visible group-hover/item:h-60 invisible h-0 w-full min-w-full series-slide absolute z-50 bg-white top-16 left-0  max-w-5xl pt-2 pb-8 border-b border-[#eaeaea] flex items-center justify-center">
              <div className="series-slide-card-container flex align-center justify-center gap-10">
                {phone.map((item: any) => {
                  return (
                    <Link to={`/product-details/${item.slug}`}>
                      <div className="series-slide-card max-w-[230px] flex items-center flex-col justify-center">
                        {item?.image.length === 0 ? (
                          <img
                            className="max-w-[130px] object-cover"
                            src={demoProduct}
                            alt=""
                          />
                        ) : (
                          <img
                            className="max-w-[130px] object-cover"
                            src={item.image[0]}
                            alt=""
                          />
                        )}
                        <div className="text-center font-medium text-sm">
                          {item?.name}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li className="group/item min-h-[38px] mt-5 hover:border-b-[2px] border-rose-600  cursor-pointer ">
            <Link to="/tv">
              <a>Tv</a>
            </Link>
            <div className="group-hover/item:visible group-hover/item:h-60 invisible h-0 w-full min-w-full series-slide absolute z-50 bg-white top-16 left-0  max-w-5xl pt-2 pb-8 border-b border-[#eaeaea] flex items-center justify-center">
              <div className="series-slide-card-container flex align-center justify-center gap-10">
                {phone.map((item: any) => {
                  return (
                    <Link to={`/product-details/${item.slug}`}>
                      <div className="series-slide-card max-w-[230px] flex items-center flex-col justify-center">
                        {item?.image.length === 0 ? (
                          <img
                            className="max-w-[130px] object-cover"
                            src={demoProduct}
                            alt=""
                          />
                        ) : (
                          <img
                            className="max-w-[130px] object-cover"
                            src={item.image[0]}
                            alt=""
                          />
                        )}
                        <div className="text-center font-medium text-sm">
                          {item?.name}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li className="group/item min-h-[38px] mt-5 hover:border-b-[2px] border-rose-600  cursor-pointer ">
            <Link to="/accessories">
              <a>Accessories</a>
            </Link>
            <div className="group-hover/item:visible group-hover/item:h-60 invisible h-0 w-full min-w-full series-slide absolute z-50 bg-white top-16 left-0  max-w-5xl pt-2 pb-8 border-b border-[#eaeaea] flex items-center justify-center">
              <div className="series-slide-card-container flex align-center justify-center gap-10">
                {accessories.map((item: any) => {
                  return (
                    <Link to={`/product-details/${item.slug}`}>
                      <div className="series-slide-card max-w-[230px] flex items-center flex-col justify-center">
                        {item?.image.length === 0 ? (
                          <img
                            className="max-w-[130px] object-cover"
                            src={demoProduct}
                            alt=""
                          />
                        ) : (
                          <img
                            className="max-w-[130px] object-cover"
                            src={item.image[0]}
                            alt=""
                          />
                        )}
                        <div className="text-center font-medium text-sm">
                          {item?.name}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </li>
          <li className="group/item min-h-[32px] mt-2 cursor-pointer">
            <a>Offers</a>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={profile} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
