import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetAllSubCategoriesQuery } from "../store";

function Goods() {
  const { id } = useParams();
  const { data } = useGetAllSubCategoriesQuery(Number(id));
  const [pageName, setPageName] = useState("");
  const [price, setPrice] = useState(0);
  useEffect(() => {
    const page = "Гостинные";
    const goodPrice = 0;
    setPageName(page);
    setPrice(goodPrice);
  }, []);
  return (
    <div className="flex items-center justify-center w-full">
      <div className=" flex items-center justify-center flex-col">
        <form className=" flex flex-col items-center justify-center gap-2 self-start">
          <select name="" id="" className=" self-start w-full">
            {data &&
              data.map((subcategory) => {
                return (
                  <option key={subcategory.id} value={subcategory.title}>
                    {subcategory.title}
                  </option>
                );
              })}
          </select>
          <input
            type="range"
            id="price"
            min={0}
            max={12000}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <label htmlFor="price" className="self-start">
            {price}
          </label>
        </form>
      </div>
    </div>
  );
}

export default Goods;
