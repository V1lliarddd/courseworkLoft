import React from "react";
import phoneIcon from "../pics/phone.jpg";
import mailIcon from "../pics/mail.jpg";
import instaIcon from "../pics/inst.jpg";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
function Contacts() {
  const defaultState = {
    center: [55.74822946943655, 37.608255743980415],
    zoom: 12,
  };
  return (
    <div className=" flex items-center justify-center w-3/4 flex-col">
      <h2 className=" self-start text-lg mb-9">Свяжитесь с нами</h2>
      <div className="self-start grid grid-cols-2 w-full gap-28">
        <div className="flex flex-col">
          <form className=" flex flex-col items-center justify-center gap-[10px] w-full">
            <div className=" self-start flex items-center justify-between gap-[10px] w-full">
              <input
                type="text"
                placeholder="Имя"
                className=" p-2 bg-[#FCFCFC] shadow-inner w-full outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className=" p-2 bg-[#FCFCFC] shadow-inner w-full outline-none"
              />
            </div>
            <textarea
              placeholder="Сообщение"
              name=""
              id=""
              cols="30"
              rows="10"
              className="p-2 bg-[#FCFCFC] shadow-inner w-full outline-none"
            ></textarea>
            <input
              type="submit"
              value="Отправить"
              className="self-end px-5 py-3 text-white bg-[#245462]"
            />
          </form>
        </div>
        <div className="flex flex-col w-full items-start gap-[25px]">
          <div className=" flex items-center justify-center gap-9">
            <div className=" flex items-center justify-center gap-[10px]">
              <img src={phoneIcon} alt="" />
              <p>8 (964) 89 99 119</p>
            </div>
            <div className=" flex items-center justify-center gap-[10px]">
              <img src={mailIcon} alt="" />
              <p>mebel_loft_anapa@mail.ru</p>
            </div>
          </div>
          <div className=" flex items-center justify-center gap-[10px]">
            <img src={instaIcon} alt="" />
            <p>INSTAGRAM</p>
          </div>
          <p>Адрес: г. Москва, улица Волхонка, 6с7</p>
        </div>
      </div>
      <h2 className=" self-start text-lg mb-9">Адрес нашей компании</h2>
      <div className="w-full h-[400px] mb-[70px]">
        <YMaps>
          <Map defaultState={defaultState} className="w-full h-full">
            <Placemark geometry={defaultState.center} />
          </Map>
        </YMaps>
      </div>
    </div>
  );
}

export default Contacts;
