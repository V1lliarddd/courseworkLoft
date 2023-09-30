import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../pics/LOGO.jpg";
import searchIcon from "../pics/search-icon.jpg";
import phoneIcon from "../pics/phone.jpg";
import deliveryIcon from "../pics/delivery-icon.jpg";
import wishlistIcon from "../pics/wishlist-icon.jpg";
import cartIcon from "../pics/cart.jpg";
import profileIcon from "../pics/profile-icon.jpg";
import kitchenIcon from "../pics/kitchen-icon.jpg";
import bedroomIcon from "../pics/bedroom-icon.jpg";
import livingroomIcon from "../pics/livingroom-icon.jpg";
import closetIcon from "../pics/closet-icon.jpg";
import officeIcon from "../pics/office-icon.jpg";
import childrenroomIcon from "../pics/childrensroom-icon.jpg";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useGetAllCategoriesQuery } from "../store/index";
function Layout(isAuthorized) {
  const { data } = useGetAllCategoriesQuery();
  const iconsArray = [
    kitchenIcon,
    bedroomIcon,
    livingroomIcon,
    closetIcon,
    officeIcon,
    childrenroomIcon,
  ];
  return (
    <>
      <div className={`flex flex-col w-full items-center justify-center`}>
        <div className=" flex flex-row items-center justify-center gap-8 my-12 w-5/6">
          <Sidebar />
          <img src={logo} alt="logo" className=" w-28 h-6" />
          <ul className="flex flex-row gap-8">
            <Link to="/" className=" hover:underline cursor-pointer">
              Главная
            </Link>
            <Link to="/about-us" className=" hover:underline cursor-pointer">
              О нас
            </Link>
            <Link to="/contact-us" className=" hover:underline cursor-pointer">
              Контакты
            </Link>
          </ul>
          <div className=" flex flex-row items-center justify-center bg-[#F9F9F9] p-3 gap-5 w-72 h-10">
            <img src={searchIcon} alt="search-icon" />
            <input
              type="text"
              className=" outline-none bg-inherit"
              placeholder="Поиск"
            />
          </div>
          <div className=" flex flex-row gap-3 items-center justify-center">
            <img src={phoneIcon} alt="phoneIcon" />
            <p>8 (964) 89 99 119</p>
          </div>
          <div className=" flex flex-row gap-3 items-center justify-center">
            <img src={deliveryIcon} alt="deliveryIcon" />
            <p className=" hover:underline cursor-pointer">Доставка</p>
          </div>
          <div className=" flex flex-row items-center justify-center gap-8">
            <img src={wishlistIcon} alt="wishlistIcon" />
            <img src={cartIcon} alt="cartIcon" />
            {isAuthorized ? (
              <Link to="/sign-up">
                <img src={profileIcon} alt="profileIcon" />
              </Link>
            ) : (
              <Link></Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-5/6 my-8">
          <div className="flex flex-row items-center justify-between shadow-lg w-full">
            {data &&
              data.map((category, index) => {
                return (
                  <div
                    key={category.id}
                    className="flex flex-row items-center justify-center gap-3 hover:underline py-6 px-10"
                  >
                    <img src={iconsArray[index]} alt="" />
                    <Link
                      to={"goods/" + category.title + "/" + category.id}
                      className=" cursor-pointer"
                    >
                      {category.title}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
