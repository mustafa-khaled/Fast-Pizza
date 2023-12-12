import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import MenuItem from "../../features/menu/MenuItem";
import Container from "../Container";
import SectionHead from "../SectionHead";

function PizzaSwiper() {
  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
  }, [fetcher]);

  if (fetcher.state === "loading")
    return <p className="text-center text-2xl uppercase">Loading...</p>;

  return (
    <Container>
      <SectionHead
        title={"   Choose Your Flavor"}
        description={"The Best Pizza Menu In Town"}
      />
      <div>
        <Swiper
          // className="w-full"
          className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(270px,1fr))]"
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={50}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
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
          {fetcher?.data?.length > 0 &&
            fetcher?.data?.slice(0, 7)?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <MenuItem pizza={item} key={item.id} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </Container>
  );
}

export default PizzaSwiper;
