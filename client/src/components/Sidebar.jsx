import React, { useState, useEffect } from "react";
import HomeIcon from "../pics/home-icon.jpg";
import InfoIcon from "../pics/info-icon.jpg";
import ContactUsIcon from "../pics/contact-us-icon.jpg";
import KitchenIcon from "../pics/kitchen-icon.jpg";
import BedroomIcon from "../pics/bedroom-icon.jpg";
import LivingroomIcon from "../pics/livingroom-icon.jpg";
import ClosetIcon from "../pics/closet-icon.jpg";
import OfficeIcon from "../pics/office-icon.jpg";
import ChildrenIcon from "../pics/childrensroom-icon.jpg";
import menuIcon from "../pics/menu-icon.jpg";
import { Link } from "react-router-dom";
function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebar, isSideBar] = useState(null);
  useEffect(() => {
    const sideBar = document.getElementById("sidebar");
    isSideBar(sideBar);
  }, [isOpen]);
  if (isOpen) {
    return (
      <div
        id="sidebar"
        className="flex flex-col absolute top-0 left-0 shadow-2xl pt-[21px] pl-[26px] pr-[160px] bg-white z-10 h-full sidebar-panel-open"
        onClick={() => {
          sidebar.classList.add("sidebar-panel-close");
          setTimeout(() => {
            setIsOpen(false);
          }, 480);
        }}
      >
        <h2 className=" font-bold mb-[22px]">Меню</h2>
        <div className=" flex flex-col gap-[30px] mb-[35px]">
          <div className=" flex items-center justify-start gap-[20px] hover:underline cursor-pointer ">
            <img src={HomeIcon} alt="Home Icon" className="w-[20px] h-[20px]" />
            <Link to="/" className=" text-base font-semibold">
              Главная
            </Link>
          </div>
          <div className=" flex items-center justify-start gap-[20px] hover:underline cursor-pointer ">
            <img src={InfoIcon} alt="Info Icon" className="w-[20px] h-[20px]" />
            <Link to="/about-us" className="capitalize text-base font-semibold">
              О нас
            </Link>
          </div>
          <div className="flex items-center justify-start gap-[20px] hover:underline cursor-pointer ">
            <img
              src={ContactUsIcon}
              alt="Contact Us Icon"
              className="w-[20px] h-[20px]"
            />
            <Link
              to="/contact-us"
              className=" capitalize text-base font-semibold"
            >
              Контакты
            </Link>
          </div>
        </div>
        <h2 className=" font-bold mb-[22px]">Категории</h2>
        <div className=" flex flex-col gap-[30px]">
          <div className="flex items-center justify-start gap-[20px] hover:underline cursor-pointer">
            <img src={KitchenIcon} alt="" className="w-[20px] h-[20px]" />
            <p className=" text-base font-semibold">Кухни</p>
          </div>
          <div className="flex items-center justify-start gap-[20px] hover:underline cursor-pointer">
            <img src={BedroomIcon} alt="" className="w-[20px] h-[20px]" />
            <p className=" text-base font-semibold">Спальни</p>
          </div>
          <div className="flex items-center justify-start gap-[20px] hover:underline cursor-pointer">
            <img src={LivingroomIcon} alt="" className="w-[20px] h-[20px]" />
            <p className=" text-base font-semibold">Гостинные</p>
          </div>
          <div className="flex items-center justify-start gap-[20px] hover:underline cursor-pointer">
            <img src={ClosetIcon} alt="" className="w-[20px] h-[20px]" />
            <p className=" text-base font-semibold">Прихожие</p>
          </div>
          <div className="flex items-center justify-start gap-[20px] hover:underline cursor-pointer">
            <img src={OfficeIcon} alt="" className="w-[20px] h-[20px]" />
            <p className=" capitalize text-base font-semibold">
              Офисная мебель
            </p>
          </div>
          <div className="flex items-center justify-start gap-[20px] hover:underline cursor-pointer">
            <img src={ChildrenIcon} alt="" className="w-[20px] h-[20px]" />
            <p className=" text-base font-semibold">Детская</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <img
        src={menuIcon}
        alt=""
        onClick={() => {
          setIsOpen(true);
        }}
      />
    );
  }
}

export default Sidebar;
