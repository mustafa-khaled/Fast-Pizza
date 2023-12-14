import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

import imageBg from "../../assets/heroSectionBg.jpg";
import slideImage1 from "../../assets/slide1Img.png";
import slideImageBg1 from "../../assets/slide1.png";
import slideImage2 from "../../assets/slide2Img.png";
import slideImageBg2 from "../../assets/slide2.png";
import slideImage3 from "../../assets/slide3Img.png";
import slideImageBg3 from "../../assets/slide3.png";

const data = [
  { id: 0, image: slideImage1, bgImage: slideImageBg1 },
  { id: 1, image: slideImage2, bgImage: slideImageBg2 },
  { id: 2, image: slideImage3, bgImage: slideImageBg3 },
];

function Slider() {
  return (
    <Swiper
      className="h-[100vh] bg-cover"
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 4000 }}
      style={{ backgroundImage: `url(${imageBg})` }}
    >
      {data?.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <div>
              <img
                src={item.image}
                alt="slideImage"
                className="absolute left-[50%] top-[50%] z-20 w-[200px] translate-x-[-50%] translate-y-[-50%] 
                sm:w-auto"
              />

              <img
                src={item.bgImage}
                alt="slideImageBg"
                className="absolute left-[50%] top-[50%] w-[250px] translate-x-[-50%] translate-y-[-50%] 
                sm:w-auto"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
