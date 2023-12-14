import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

import image1 from "../../assets/ins1.jpg";
import image2 from "../../assets/inst2.jpg";
import image3 from "../../assets/inst3.jpg";
import image4 from "../../assets/inst4.jpg";
import image5 from "../../assets/inst5.jpg";
import image6 from "../../assets/inst6.jpg";
import image7 from "../../assets/inst7.jpg";
import image8 from "../../assets/inst8.jpg";
import image9 from "../../assets/inst9.jpg";
import image10 from "../../assets/inst10.jpg";
import image11 from "../../assets/inst11.jpg";

const data = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];

function MenuSwiper() {
  return (
    <Swiper
      // className="w-full"
      className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] 
      sm:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={50}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        400: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },

        900: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
    >
      {data?.map((item) => {
        return (
          <SwiperSlide key={item}>
            <img src={item} alt="instagram images" className="w-full" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MenuSwiper;
