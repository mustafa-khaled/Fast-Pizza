import { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import imageBg from "../../assets/heroSectionBg.jpg";

import slideImage1 from "../../assets/slide1Img.png";
import slideImageBg1 from "../../assets/slide1.png";

import slideImage2 from "../../assets/slide2Img.png";
import slideImageBg2 from "../../assets/slide2.png";

import slideImage3 from "../../assets/slide3Img.png";
import slideImageBg3 from "../../assets/slide3.png";

const sliderImages = [
  { id: 0, image: slideImage1, bgImage: slideImageBg1 },
  { id: 1, image: slideImage2, bgImage: slideImageBg2 },
  { id: 2, image: slideImage3, bgImage: slideImageBg3 },
];

function Slider() {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === sliderImages.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((index) => {
      if (index === 0) return sliderImages.length - 1;
      return index - 1;
    });
  };

  return (
    <div
      className="relative h-[calc(100vh-70px)] w-full bg-cover"
      style={{ backgroundImage: `url(${imageBg})` }}
    >
      <div className="flex h-full w-full overflow-hidden">
        {sliderImages.map((el) => (
          <div
            key={el.id}
            className={`relative block h-full w-full flex-shrink-0 flex-grow-0 `}
            style={{
              translate: `${-100 * imageIndex}%`,
              transition: "translate 400ms ease-in-out",
            }}
          >
            <img
              src={el.image}
              alt="slideImage"
              className="absolute left-[50%] top-[50%] z-20 w-[200px] translate-x-[-50%] translate-y-[-50%] sm:w-auto"
            />

            <img
              src={el.bgImage}
              alt="slideImageBg"
              className="absolute left-[50%] top-[50%] w-[250px] translate-x-[-50%] translate-y-[-50%] sm:w-auto"
            />
          </div>
        ))}
      </div>

      {/* Next and prev buttons */}
      <button
        onClick={showPrevImage}
        style={{ transition: "backgroundColor 100ms ease-in-out" }}
        className="absolute bottom-0 left-0 top-0 block cursor-pointer rounded-xl
        p-[1rem] text-4xl text-gray-400 transition duration-100 ease-in-out hover:text-gray-100"
      >
        <MdKeyboardArrowLeft className="hover:text-white" />
      </button>

      <button
        onClick={showNextImage}
        style={{ transition: "backgroundColor 100ms ease-in-out" }}
        className="absolute bottom-0 right-0 top-0 block cursor-pointer rounded-xl p-[1rem]
      text-4xl text-gray-400 transition duration-100 ease-in-out hover:text-gray-100"
      >
        <MdKeyboardArrowRight className="hover:text-white" />
      </button>
    </div>
  );
}

export default Slider;
