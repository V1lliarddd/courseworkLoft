import React, { useState } from "react";
import logo from "../pics/LOGO.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import showPasswordIcon from "../pics/show-password.png";
import notShowPasswordIcon from "../pics/close-eye.png";
import { addNewUser } from "../funcs/addNewUser";
function SignUp() {
  const [showPassword, setShowPassword] = useState(null);
  const [isExist, setIsExist] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (registryData) => {
    const isExist = await fetch(
      `http://localhost:3002/checkUser/${registryData.email}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((a) => a.json())
      .finally((json) => json);
    console.log(isExist);
    if (isExist) {
      setIsExist(true);
      return "exist";
    }
    addNewUser(registryData);
    reset();
  };
  return (
    <div className=" flex items-center justify-center mt-[150px]">
      <div className=" p-3 flex flex-col items-center justify-center w-full h-full">
        {isExist && <p>Exist</p>}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col items-center justify-center gap-4 w-1/4 shadow-2xl p-6 rounded-md"
        >
          <img src={logo} alt="" />
          <h2 className=" uppercase font-semibold text-lg">Регистрация</h2>
          <input
            {...register("name", {
              required: "Это поле обязательно",

              minLength: {
                value: 5,
                message: "Минимум 5 символов",
              },
            })}
            type="text"
            placeholder="Ваше имя"
            className=" p-1 outline-none font-semibold border-b-2 w-3/4"
          />
          {errors?.Name && (
            <p className=" text-red-600">{errors?.Name?.message || "Ошибка"}</p>
          )}
          <input
            {...register("email", {
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
              {...register("password", {
                required: "Это поле обязательно",
                minLength: {
                  value: 7,
                  message: "Минимум 7 символов",
                },
              })}
              type={showPassword ? "text" : "password"}
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
                }}
              />
            ) : (
              <img
                src={notShowPasswordIcon}
                alt=""
                className="w-[25px] h-[25px]"
                onClick={() => {
                  setShowPassword(true);
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
            {...register("phone", {
              required: "Это поле обязательно",
              pattern: {
                value:
                  /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/,
                message: "Неверный номер",
              },
            })}
            type="text"
            placeholder="Номер телефона"
            className=" p-1 outline-none font-semibold border-b-2 w-3/4"
          />
          {errors?.Phone && (
            <p className=" text-red-600 text-center">
              {errors?.Phone?.message || "Ошибка"}
            </p>
          )}
          <input
            type="submit"
            value="Зарегестрироваться"
            className=" cursor-pointer hover:underline"
            disabled={!isValid}
          />
          <Link to="/sign-in" className=" hover:underline">
            Уже есть аккаунт?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
