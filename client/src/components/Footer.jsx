import React from "react";
import Logo_LM from "../pics/LOGO_LM.jpg";
import phoneIcon from '../pics/phone.jpg'
import instLogo from '../pics/inst.jpg'
import mailLogo from '../pics/mail.jpg'
function Footer() {
  return (
    <div className="shadow-2xl w-full grid grid-cols-2 mt-3 py-14 px-32">
      <div className="flex flex-col">
        <h2 className=" uppercase font-bold mb-3">Навигация</h2>
        <div className="grid grid-cols-3">
          <div className=" flex flex-col">
            <p className=" hover:underline cursor-pointer">Кухни</p>
            <p className=" hover:underline cursor-pointer">Спальни</p>
            <p className=" hover:underline cursor-pointer">Гостинные</p>
          </div>
          <div className=" flex flex-col">
            <p className=" hover:underline cursor-pointer">Прихожие</p>
            <p className=" hover:underline cursor-pointer">Офисная мебель</p>
            <p className=" hover:underline cursor-pointer">Детская</p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-end gap-4">
        <img src={Logo_LM} alt="" className="w-[70px] h-[45px]" />
        <p>г. Москва, улица Волхонка, 6с7</p>
        <div className=" flex items-center justify-around gap-7">
          <div className="flex items-center justify-center gap-[10px]">
            <img src={phoneIcon} alt="" />
            <p>8 (964) 89 99 119</p>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <img src={instLogo} alt="" />
            <p className=" uppercase">instagram</p>
          </div>
          <div className="flex items-center justify-center gap-[10px]">
            <img src={mailLogo} alt="" />
            <p>mebel_loft_anapa@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
