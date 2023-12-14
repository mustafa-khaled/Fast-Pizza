import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

function SwiperComponent({
  data,
  style,
  className,
  children,
  slidesPerView,
  spaceBetween,
  breakpoints,
}) {
  return (
    <Swiper
      className={className}
      modules={[Navigation, Pagination, Scrollbar, Autoplay]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 4000 }}
      style={style}
      breakpoints={breakpoints}
    >
      {data?.map((item) => {
        return <SwiperSlide key={item.id}>{children}</SwiperSlide>;
      })}
    </Swiper>
  );
}

export default SwiperComponent;
