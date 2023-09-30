import { useState } from "react";
import Slide_1 from "../pics/slide-1.jpg";
import Slide_2 from "../pics/slide-2.jpg";
import Slide_3 from "../pics/slide-3.jpg";
import RightArrow from "../svg/Right-arrow.svg";
import LeftArrow from "../svg/Left-arrow.svg";
function Slider() {
  const images = [Slide_1, Slide_2, Slide_3];
  const imagesLength = images.length;
  const [curImage, setCurImage] = useState(0);
  const nextSlide = () => {
    setCurImage(curImage === imagesLength - 1 ? 0 : curImage + 1);
  };
  const previousSlide = () => {
    setCurImage(curImage === 0 ? imagesLength - 1 : curImage - 1);
  };
  return (
    <div className=" flex flex-row">
      {images.map((img, index) => {
        if (index === curImage) {
          return (
            <div className=" relative" key={index}>
              <img
                src={images[index]}
                alt=""
                className="w-[1140px] h-[450px] rounded"
              />
              <img
                src={RightArrow}
                alt=""
                className="w-[40px] h-[40px] absolute top-1/2 left-[95%] bg-white rounded-full"
                onClick={() => {
                  nextSlide();
                }}
              />
              <img
                src={LeftArrow}
                alt=""
                className="w-[40px] h-[40px] absolute top-1/2 bg-white right-[95%] rounded-full"
                onClick={() => {
                  previousSlide();
                }}
              />
            </div>
          );
        } else {
          return (
            <div className=" hidden" key={index}>
              <img
                src={images[index]}
                alt=""
                className="w-[1140px] h-[450px]"
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default Slider;
