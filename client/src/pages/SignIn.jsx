import React, { useEffect, useState } from "react";
import logo from "../pics/LOGO.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import showPasswordIcon from "../pics/show-password.png";
import notShowPasswordIcon from "../pics/close-eye.png";

function SignIn() {
  const [showPassword, setShowPassword] = useState(true);
  const [input, setInput] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const inputField = document.getElementById("password_field");
    setInput(inputField);
  }, []);
  const setPasswordType = () => {
    if (showPassword === false) {
      input.type = "password";
    } else {
      input.type = "text";
    }
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = (data) => {
    reset();
    navigate("/")
  };
  return (
    <div className=" flex items-center justify-center mt-[150px]">
      <div className=" p-3 flex flex-col items-center justify-center w-full h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col items-center justify-center gap-4 w-1/4 shadow-2xl p-6 rounded-md"
        >
          <img src={logo} alt="" />
          <h2 className=" uppercase font-semibold text-lg">Авторизация</h2>

          <input
            {...register("Email", {
              required: "Это поле обязательно",
              pattern: {
                value:
                  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                message: "Неверная форма e-mail",
              },
            })}
            type="text"
            placeholder="Ваш e-mail"
            className=" p-1 outline-none font-semibold border-b-2 w-3/4"
          />
          {errors?.Email && (
            <p className=" text-red-600">
              {errors?.Email?.message || "Ошибка"}
            </p>
          )}
          <div className=" flex items-center justify-center border-b-2 w-3/4">
            <input
              id="password_field"
              {...register("Password", {
                required: "Это поле обязательно",
                minLength: {
                  value: 7,
                  message: "Минимум 7 символов",
                },
              })}
              type="password"
              placeholder="Пароль"
              className=" p-1 outline-none font-semibold w-full"
            />
            {showPassword ? (
              <img
                src={showPasswordIcon}
                alt=""
                className="w-[30px] h-[30px]"
                onClick={() => {
                  setShowPassword(false);
                  setPasswordType();
                }}
              />
            ) : (
              <img
                src={notShowPasswordIcon}
                alt=""
                className="w-[25px] h-[25px]"
                onClick={() => {
                  setShowPassword(true);
                  setPasswordType();
                }}
              />
            )}
          </div>
          {errors?.Password && (
            <p className=" text-red-600">
              {errors?.Password?.message || "Ошибка"}
            </p>
          )}
          <input
            type="submit"
            value="Войти"
            className=" cursor-pointer hover:underline"
            disabled={!isValid}
          />
          <Link to="/sign-up" className=" hover:underline">
            Нет аккаунта?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
