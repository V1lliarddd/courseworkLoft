import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className=" flex items-center justify-center w-full h-screen">
      <div className="flex items-center justify-center flex-col gap-3">
        <h1 className=" text-9xl">404</h1>
        <p className=" text-xl">Страница не найдена :(</p>
        <Link to='/' className=" text-lg hover:underline">Вернуться на главную</Link>
      </div>
    </div>
  );
}

export default NotFound;
