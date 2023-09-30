import React from "react";
import "../css/loader.css";
function Loader() {
  return (
    <div className=" flex items-center justify-center w-full h-screen">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
